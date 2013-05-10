
document.write("<script type='text/javascript' src='stackedcombinationchart_json.js'></script>");



function drawStackedCombinationChart(ComponentID)
{

SCC_XaxisValues = [],SCC_YaxisSeries = new Array();
SCC_SeriesType = [];
SCC_PointShape = [];
SCC_SeriesNames = [];
SCC_TotalHeightOfColumn = [],SCC_MaxNumberOfValues = 0;
SCC_SeriesFillColor = [],SCC_LineColor = [];
SCC_TextWidth = 5,SCC_TextHeight = 5;
SCC_X1_MouseOver = [],SCC_Y1_MouseOver = [],SCC_X2_MouseOver = [],SCC_Y2_MouseOver = [],SCC_SeriesFinder = [],SCC_ValueFinder = [],SCC_temp = 0;
SCC_ShowSeriesArray = [];


	SCC_Root = document.getElementById(ComponentID);
	SCC_Width = document.getElementById(ComponentID).style.width;
	SCC_Height = document.getElementById(ComponentID).style.height;
	
	for(var i=0;i<stackedcombinationchart.data.series.length;i++)
	{
		SCC_YaxisSeries[i] = new Array();
		SCC_ShowSeriesArray[i] = 0;
		SCC_YaxisSeries[i] = stackedcombinationchart.data.series[i].values.split(',');
		SCC_SeriesType[i] = stackedcombinationchart.properties.appearance.series.datapoints[i].type;
		SCC_PointShape[i] = stackedcombinationchart.properties.appearance.series.datapoints[i].shape;
		SCC_SeriesFillColor[i] = stackedcombinationchart.properties.appearance.series.datapoints[i].fill;
		SCC_LineColor[i] = stackedcombinationchart.properties.appearance.series.datapoints[i].line;
	}
	SCC_Margin = parseInt(stackedcombinationchart.properties.appearance.layout.chartarea.margin);
	SCC_showTitle = stackedcombinationchart.properties.appearance.text.charttitle.show;
	SCC_showSubTitle = stackedcombinationchart.properties.appearance.text.subtitle.show;
	SCC_legendEnable = stackedcombinationchart.properties.appearance.layout.legend.enable;
	SCC_legendPosition = stackedcombinationchart.properties.appearance.layout.legend.legendposition;
	SCC_EnableAlert = stackedcombinationchart.properties.alerts.enable;
	
	if(stackedcombinationchart.properties.behavior.scale.manualaxis.enable == 'true')
	{
		SCC_Y_StartLimit = Number(stackedcombinationchart.properties.behavior.scale.manualaxis.minimumlimit);
		SCC_Y_EndLimit = Number(stackedcombinationchart.properties.behavior.scale.manualaxis.maximumlimit);
	}
	if(stackedcombinationchart.properties.behavior.scale.autoaxis.enable == 'true')
	{
		var SCC_MaximumColumnValue = 0;
		for(var i=0;i<SCC_YaxisSeries.length;i++)
			SCC_MaxNumberOfValues = Math.max(SCC_MaxNumberOfValues,SCC_YaxisSeries[i].length);
		for(var i=0;i<SCC_MaxNumberOfValues;i++)
		{
			var SCC_HeightOfColumn = 0;
			for(var j=0;j<SCC_YaxisSeries.length;j++)
				if(SCC_SeriesType[j] == 'Column')
					SCC_HeightOfColumn += Number(SCC_YaxisSeries[j][i]);
			SCC_MaximumColumnValue = Math.max(SCC_MaximumColumnValue,SCC_HeightOfColumn);
		}
		SCC_Y_StartLimit = 0;
		SCC_Y_EndLimit = (parseInt(SCC_MaximumColumnValue / 10) * 10) + 20;
	}
	
	for(var i=0;i<stackedcombinationchart.data.categorylabel.length;i++)
		SCC_XaxisValues[i] = stackedcombinationchart.data.categorylabel[i];
	if(SCC_Width.search('%') >= 0)
		SCC_Width = document.documentElement.clientWidth*(SCC_Width.replace("%","")/100);
	else
		SCC_Width = SCC_Width.replace("px","");
	if(SCC_Height.search('%') >= 0)
		SCC_Height = document.documentElement.clientHeight*(SCC_Height.replace("%","")/100);
	else
		SCC_Height = SCC_Height.replace("px","");
	
	SCC_ComponentHeight = SCC_Height;
	SCC_ComponentWidth = SCC_Width;
	
	SCC_Div = document.createElement('div');
	
	SCC_Div.style.width = SCC_Width + 'px';
	SCC_Div.style.height = SCC_Height + 'px';
	SCC_Div.id = 'mySCC_Div';
	if(stackedcombinationchart.properties.appearance.layout.chartarea.showchartbackground == 'true')
		SCC_Div.style.backgroundColor = stackedcombinationchart.properties.appearance.color.fill;
	SCC_Root.appendChild(SCC_Div);
	
	SCC_Height = SCC_Height - (2 * SCC_Margin);
	SCC_Width = SCC_Width - (2 * SCC_Margin);
	if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
		createChartTitle_SCC();
		
	if(SCC_legendEnable == 'true')
		createLegend_SCC();
	createStackedCombinationChart_SCC();
	
}//End of Main

function createChartTitle_SCC()
{
	SCC_titleFill = stackedcombinationchart.properties.appearance.layout.titlearea.titlefill.show;
	SCC_titleFillColor = stackedcombinationchart.properties.appearance.layout.titlearea.titlefill.color;
	SCC_titleBorder = stackedcombinationchart.properties.appearance.layout.titlearea.titleborder.show;
	SCC_titleBorderColor = stackedcombinationchart.properties.appearance.layout.titlearea.titleborder.color;
	SCC_titleBorderThickness = stackedcombinationchart.properties.appearance.layout.titlearea.titleborderthickness+'px solid';
	SCC_titleTable = document.createElement('table');
	SCC_titleTable.align = 'center';
	SCC_titleTable.id = 'SCC_title';
	SCC_titleTable.style.position = 'relative';
	SCC_titleTable.style.top = SCC_Margin + 'px';
	SCC_titleTable.style.width = SCC_Width + 'px';
	if(SCC_titleBorder == 'true')
	{
		SCC_titleTable.style.border = SCC_titleBorderThickness;;
		SCC_titleTable.style.borderColor = SCC_titleBorderColor;
	}
	if(SCC_titleFill == 'true')
		SCC_titleTable.style.backgroundColor = SCC_titleFillColor;
	
	if(SCC_showTitle == 'true')
	{
		SCC_fontFace = stackedcombinationchart.properties.appearance.text.charttitle.fontface;
		SCC_fontSize = stackedcombinationchart.properties.appearance.text.charttitle.fontsize;
		SCC_bold = stackedcombinationchart.properties.appearance.text.charttitle.style.bold;
		SCC_italic = stackedcombinationchart.properties.appearance.text.charttitle.style.italic;
		SCC_underline = stackedcombinationchart.properties.appearance.text.charttitle.style.underline;
		SCC_textColor = stackedcombinationchart.properties.appearance.text.charttitle.style.color;
		SCC_textAlignment = stackedcombinationchart.properties.appearance.text.charttitle.style.align;
		
		SCC_titleRow = document.createElement('tr');
		SCC_titleCell = document.createElement('td');
		SCC_titleCell.appendChild(document.createTextNode(stackedcombinationchart.properties.general.title));
		
		SCC_titleCell.style.fontFamily = SCC_fontFace;
		SCC_titleCell.style.fontSize = SCC_fontSize + 'px';
		if(SCC_bold == "true")
			SCC_titleCell.style.fontWeight = "bold";
		if(SCC_italic == "true")
			SCC_titleCell.style.fontStyle = "italic";
		if(SCC_underline == "true")
			SCC_titleCell.style.textDecoration = "underline";
		SCC_titleCell.style.color = SCC_textColor;
		SCC_titleCell.style.textAlign = SCC_textAlignment;
		
		SCC_titleRow.appendChild(SCC_titleCell);
		SCC_titleTable.appendChild(SCC_titleRow);
		
	}
	if(SCC_showSubTitle == 'true')
	{
		SCC_fontFace = stackedcombinationchart.properties.appearance.text.subtitle.fontface;
		SCC_fontSize = stackedcombinationchart.properties.appearance.text.subtitle.fontsize;
		SCC_bold = stackedcombinationchart.properties.appearance.text.subtitle.style.bold;
		SCC_italic = stackedcombinationchart.properties.appearance.text.subtitle.style.italic;
		SCC_underline = stackedcombinationchart.properties.appearance.text.subtitle.style.underline;
		SCC_textColor = stackedcombinationchart.properties.appearance.text.subtitle.style.color;
		SCC_textAlignment = stackedcombinationchart.properties.appearance.text.subtitle.style.align;
		
		SCC_titleRow = document.createElement('tr');
		SCC_titleCell = document.createElement('td');
		SCC_titleCell.appendChild(document.createTextNode(stackedcombinationchart.properties.general.subtitle));
		
		SCC_titleCell.style.fontFamily = SCC_fontFace;
		SCC_titleCell.style.fontSize = SCC_fontSize + 'px';
		if(SCC_bold == "true")
			SCC_titleCell.style.fontWeight = "bold";
		if(SCC_italic == "true")
			SCC_titleCell.style.fontStyle = "italic";
		if(SCC_underline == "true")
			SCC_titleCell.style.textDecoration = "underline";
		SCC_titleCell.style.color = SCC_textColor;
		SCC_titleCell.style.textAlign = SCC_textAlignment;
		
		SCC_titleRow.appendChild(SCC_titleCell);
		SCC_titleTable.appendChild(SCC_titleRow);
	}
	
	SCC_Div.appendChild(SCC_titleTable);
	SCC_Height = SCC_Height - document.getElementById('SCC_title').offsetHeight - 10;
}//End of Title Function

function createLegend_SCC()
{
	SCC_legendFill = stackedcombinationchart.properties.appearance.layout.legend.legendfill.show;
	SCC_legendFillColor = stackedcombinationchart.properties.appearance.layout.legend.legendfill.color;
	SCC_legendBorder = stackedcombinationchart.properties.appearance.layout.legend.legendborder.show;
	SCC_legendBorderColor = stackedcombinationchart.properties.appearance.layout.legend.legendborder.color;
	SCC_legendBorderThickness = stackedcombinationchart.properties.appearance.layout.legend.legendborderthickness + 'px solid';
	SCC_enableChartSeries = stackedcombinationchart.properties.appearance.layout.legend.chartseries.enable;
	SCC_chartSeriesValue = stackedcombinationchart.properties.appearance.layout.legend.chartseries.value;
	
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.legend.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.legend.fontsize;
	SCC_bold = stackedcombinationchart.properties.appearance.text.legend.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.legend.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.legend.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.legend.style.color;
	SCC_textAlignment = stackedcombinationchart.properties.appearance.text.legend.style.align;
	
	for(var i=0;i<SCC_YaxisSeries.length;i++)
		SCC_SeriesNames[i] = stackedcombinationchart.data.series[i].name
		
	if(SCC_legendPosition == 'Right' || SCC_legendPosition == 'Left')
	{
		SCC_legendDiv1 = document.createElement('div');
		SCC_legendDiv1.style.height = SCC_Height + 'px';
		SCC_legendDiv1.style.position = 'relative';
		SCC_Div.appendChild(SCC_legendDiv1);
		
		SCC_legendDiv2 = document.createElement('div');
		SCC_legendDiv2.style.height = SCC_Height + 'px';
		SCC_legendDiv2.style.position = 'relative';
		SCC_legendDiv2.style.display = 'table-cell';
		SCC_legendDiv2.style.verticalAlign = 'middle';
		SCC_legendDiv1.appendChild(SCC_legendDiv2);
		
			
		SCC_legendTable = document.createElement('table');
		SCC_legendTable.id = 'SCC_legendTable';
		SCC_legendDiv2.appendChild(SCC_legendTable);
		
		SCC_legendTable.style.fontFamily = SCC_fontFace;
		SCC_legendTable.style.fontSize = SCC_fontSize + 'px';
		if(SCC_bold == "true")
			SCC_legendTable.style.fontWeight = "bold";
		if(SCC_italic == "true")
			SCC_legendTable.style.fontStyle = "italic";
		if(SCC_underline == "true")
			SCC_legendTable.style.textDecoration = "underline";
		SCC_legendTable.style.color = SCC_textColor;
		SCC_legendTable.style.textAlign = SCC_textAlignment;
		
						
		if(SCC_legendBorder == 'true')
		{
			SCC_legendTable.style.border = SCC_legendBorderThickness;;
			SCC_legendTable.style.borderColor = SCC_legendBorderColor;
		}
		if(SCC_legendFill == 'true')
			SCC_legendTable.style.backgroundColor = SCC_legendFillColor;
		for(var i=0;i<SCC_YaxisSeries.length;i++)
		{
			SCC_legendTableRow = document.createElement('tr');
			SCC_legendTableCell = document.createElement('td');
			if(SCC_SeriesType[i] == 'Column')
			{
				SCC_boxDiv = document.createElement('div');
				SCC_boxDiv.style.height = SCC_fontSize + 'px';
				SCC_boxDiv.style.width = SCC_fontSize + 'px';
				SCC_boxDiv.style.cssFloat = 'left';
				SCC_boxDiv.style.backgroundColor = SCC_SeriesFillColor[i];
				SCC_legendTableCell.appendChild(SCC_boxDiv);
			}
			else if(SCC_SeriesType[i] == 'Line')
			{
				SCC_boxDiv = document.createElement('canvas');
				SCC_boxDiv.style.height = SCC_fontSize + 'px';
				SCC_boxDiv.style.width = SCC_fontSize + 'px';
				SCC_boxDiv.height = SCC_fontSize;
				SCC_boxDiv.width = SCC_fontSize;
				SCC_boxDiv.style.cssFloat = 'left';
				SCC_LegendCanvas = SCC_boxDiv.getContext('2d');
				SCC_LegendCanvas.strokeStyle = SCC_SeriesFillColor[i];
				SCC_LegendCanvas.fillStyle = SCC_SeriesFillColor[i];
				drawLinePointShape_SCC(SCC_LegendCanvas,(SCC_fontSize/4) * 3,SCC_PointShape[i],SCC_boxDiv.width/2,SCC_boxDiv.height/2);
				SCC_legendTableCell.appendChild(SCC_boxDiv);
			}
			if(SCC_enableChartSeries == 'true')
			{
				if(SCC_chartSeriesValue == 'CheckBox')
				{
					SCC_input = document.createElement('input');
					SCC_input.type = 'checkbox';
					SCC_input.style.cssFloat = 'left';
					SCC_input.style.height = SCC_fontSize + 'px';
					SCC_input.style.width = SCC_fontSize + 'px';
					SCC_input.style.margin = '0px';
					SCC_input.style.marginRight = '1px';
					SCC_input.id = 'SCC'+SCC_SeriesNames[i];
					SCC_input.checked = 'true';
					SCC_legendTableCell.appendChild(SCC_input);
				}
				else
				{
					SCC_legendTableCell.style.opacity = 1;
					SCC_legendTableCell.style.cursor = 'pointer';
					SCC_legendTableCell.id = 'SCC'+SCC_SeriesNames[i];
				}
			}
			
			SCC_legendTableCell.appendChild(document.createTextNode('\u00a0'));
			SCC_legendTableCell.appendChild(document.createTextNode(SCC_SeriesNames[i]));
			SCC_legendTableRow.appendChild(SCC_legendTableCell);
			SCC_legendTable.appendChild(SCC_legendTableRow);
		}
		
		if(SCC_enableChartSeries == 'true')
		{
			if(SCC_chartSeriesValue == 'CheckBox')
				for(i=0;i<stackedcombinationchart.data.series.length;i++)
					document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).onchange = function(){Change_SCC();};
			else
				for(i=0;i<stackedcombinationchart.data.series.length;i++)
					document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).onclick = function(){onClick_SCC(this.id);};
		}
		
		if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
			SCC_legendDiv1.style.top = SCC_Margin + 10 + 'px';
		else
			SCC_legendDiv1.style.top = SCC_Margin + 'px';
			
		if(SCC_legendPosition == 'Right')
		{
			SCC_legendDiv1.style.cssFloat = 'right';
			SCC_legendDiv1.style.right = SCC_Margin + 'px';
		}
		else
		{
			SCC_legendDiv1.style.cssFloat = 'left';
			SCC_legendDiv1.style.left = SCC_Margin + 'px';
		}
		SCC_Width = SCC_Width - document.getElementById('SCC_legendTable').offsetWidth - 10 ;
	}
	if(SCC_legendPosition == 'Top' || SCC_legendPosition == 'Bottom')
	{
		SCC_legendTable = document.createElement('table');
		SCC_legendTable.id = 'SCC_legendTable';
		SCC_legendTable.align = 'center';
		SCC_legendTable.style.position = 'relative';
		SCC_Div.appendChild(SCC_legendTable);
		SCC_legendTable.style.fontFamily = SCC_fontFace;
		SCC_legendTable.style.fontSize = SCC_fontSize + 'px';
		if(SCC_bold == "true")
			SCC_legendTable.style.fontWeight = "bold";
		if(SCC_italic == "true")
			SCC_legendTable.style.fontStyle = "italic";
		if(SCC_underline == "true")
			SCC_legendTable.style.textDecoration = "underline";
		SCC_legendTable.style.color = SCC_textColor;
		SCC_legendTable.style.textAlign = SCC_textAlignment;
		
						
		if(SCC_legendBorder == 'true')
		{
			SCC_legendTable.style.border = SCC_legendBorderThickness;;
			SCC_legendTable.style.borderColor = SCC_legendBorderColor;
		}
		if(SCC_legendFill == 'true')
			SCC_legendTable.style.backgroundColor = SCC_legendFillColor;
			SCC_legendTableRow = document.createElement('tr');
		for(var i=0;i<SCC_YaxisSeries.length;i++)
		{
			SCC_legendTableCell = document.createElement('td');
			if(SCC_SeriesType[i] == 'Column')
			{
				SCC_boxDiv = document.createElement('div');
				SCC_boxDiv.style.height = SCC_fontSize + 'px';
				SCC_boxDiv.style.width = SCC_fontSize + 'px';
				SCC_boxDiv.style.cssFloat = 'left';
				SCC_boxDiv.style.backgroundColor = SCC_SeriesFillColor[i];
				SCC_legendTableCell.appendChild(SCC_boxDiv);
			}
			else if(SCC_SeriesType[i] == 'Line')
			{
				SCC_boxDiv = document.createElement('canvas');
				SCC_boxDiv.style.height = SCC_fontSize + 'px';
				SCC_boxDiv.style.width = SCC_fontSize + 'px';
				SCC_boxDiv.height = SCC_fontSize;
				SCC_boxDiv.width = SCC_fontSize;
				SCC_boxDiv.style.cssFloat = 'left';
				SCC_LegendCanvas = SCC_boxDiv.getContext('2d');
				SCC_LegendCanvas.strokeStyle = SCC_SeriesFillColor[i];
				SCC_LegendCanvas.fillStyle = SCC_SeriesFillColor[i];
				drawLinePointShape_SCC(SCC_LegendCanvas,SCC_fontSize,SCC_PointShape[i],SCC_boxDiv.width/2,SCC_boxDiv.height/2);
				SCC_legendTableCell.appendChild(SCC_boxDiv);
			}
			if(SCC_enableChartSeries == 'true')
			{
				if(SCC_chartSeriesValue == 'CheckBox')
				{
					SCC_input = document.createElement('input');
					SCC_input.type = 'checkbox';
					SCC_input.style.cssFloat = 'left';
					SCC_input.style.height = SCC_fontSize + 'px';
					SCC_input.style.width = SCC_fontSize + 'px';
					SCC_input.style.margin = '0px';
					SCC_input.style.marginRight = '1px';
					SCC_input.id = 'SCC'+SCC_SeriesNames[i];
					SCC_input.checked = 'true';
					SCC_legendTableCell.appendChild(SCC_input);
				}
				else
				{
					SCC_legendTableCell.style.opacity = 1;
					SCC_legendTableCell.style.cursor = 'pointer';
					SCC_legendTableCell.id = 'SCC'+SCC_SeriesNames[i];
				}
			}
			SCC_legendTableCell.appendChild(document.createTextNode('\u00a0'));
			SCC_legendTableCell.appendChild(document.createTextNode(SCC_SeriesNames[i]));
			SCC_legendTableRow.appendChild(SCC_legendTableCell);
			SCC_legendTable.appendChild(SCC_legendTableRow);
		}
		if(SCC_enableChartSeries == 'true')
		{
			if(SCC_chartSeriesValue == 'CheckBox')
				for(i=0;i<stackedcombinationchart.data.series.length;i++)
					document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).onchange = function(){Change_SCC();};
			else
				for(i=0;i<stackedcombinationchart.data.series.length;i++)
					document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).onclick = function(){onClick_SCC(this.id);};
		}
		if(SCC_legendPosition == 'Top')
		{
			if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
				SCC_legendTable.style.top = SCC_Margin + 10 + 'px';
			else
				SCC_legendTable.style.top = SCC_Margin + 'px';
		}
		if(SCC_legendPosition == 'Bottom')
		{
			if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
				SCC_legendTable.style.top = SCC_Height + SCC_Margin + 10 - document.getElementById('SCC_legendTable').offsetHeight + 'px';
			else
				SCC_legendTable.style.top = SCC_Height + SCC_Margin - document.getElementById('SCC_legendTable').offsetHeight + 'px';
		}
		SCC_Height = SCC_Height - document.getElementById('SCC_legendTable').offsetHeight - 10;
	}
	
}

function createStackedCombinationChart_SCC()
{
	SCC_plotareaFill = stackedcombinationchart.properties.appearance.layout.plotarea.plotareafill.show;
	SCC_plotareaFillColor = stackedcombinationchart.properties.appearance.layout.plotarea.plotareafill.color;
	SCC_plotareaBorder = stackedcombinationchart.properties.appearance.layout.plotarea.plotareaborder.show;
	SCC_plotareaBorderColor = stackedcombinationchart.properties.appearance.layout.plotarea.plotareaborder.color;
	SCC_plotareaBorderThickness = stackedcombinationchart.properties.appearance.layout.plotarea.plotareaborderthickness;
	
	SCC_PlotArea = document.createElement('canvas');
	SCC_PlotArea.id = 'SCC_PlotArea';
	SCC_PlotArea.style.position = 'relative';
	SCC_PlotArea.style.left = SCC_Margin + 'px';
	
	if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
		SCC_PlotArea.style.top = SCC_Margin + 10 + 'px';
	else
		SCC_PlotArea.style.top = SCC_Margin + 'px';
	
	if(SCC_legendEnable == 'true')
	{
		if(SCC_legendPosition == 'Left')
			SCC_PlotArea.style.left = SCC_Margin + 10 + 'px';
		else if(SCC_legendPosition == 'Top')
			SCC_PlotArea.style.top = parseInt(SCC_PlotArea.style.top) + 10 + 'px';
		else if(SCC_legendPosition == 'Bottom')
		{
			if(SCC_showTitle == 'true' || SCC_showSubTitle == 'true')
				SCC_PlotArea.style.top = (document.getElementById('SCC_title').offsetHeight + SCC_Margin) - (document.getElementById('SCC_title').offsetHeight + document.getElementById('SCC_legendTable').offsetHeight) + 10 + 'px';
			else
				SCC_PlotArea.style.top = -document.getElementById('SCC_legendTable').offsetHeight + SCC_Margin + 'px';
		}
	}	
	SCC_PlotArea.height = SCC_Height;
	SCC_PlotArea.style.height = SCC_Height + 'px';
	SCC_PlotArea.width = SCC_Width;
	SCC_PlotArea.style.width = SCC_Width + 'px';
	//SCC_PlotArea.style.border = '1px solid';
		
	SCC_PlotArea.style.boxSizing = 'border-box';
	SCC_PlotArea.style.MozBoxSizing = 'border-box';
	SCC_PlotArea.style.OBoxSizing = 'border-box';
	SCC_PlotArea.style.WebkitBoxSizing = 'border-box';
	
	SCC_Context = SCC_PlotArea.getContext('2d');
	SCC_Div.appendChild(SCC_PlotArea);
	
	SCC_VerticalAxisLabelHeight = stackedcombinationchart.properties.appearance.text.verticalaxislabel.fontsize;
	if(stackedcombinationchart.properties.appearance.text.horizontalaxislabel.show == 'true')
		SCC_HorizontalAxisLabelHeight = parseInt(stackedcombinationchart.properties.appearance.text.horizontalaxislabel.fontsize) + 5;
	else
		SCC_HorizontalAxisLabelHeight = 0;
	
	if(stackedcombinationchart.properties.behavior.common.sorting.enable == 'true')
		doSorting_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxistitle.show == 'true')
		createHorizontalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxistitle.show == 'true')
		createVerticalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxislabel.show == 'true')
		createVerticalAxisLabel_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxislabel.show == 'true')
		createHorizontalAxisLabel_SCC();
	if(SCC_plotareaFill == 'true' || SCC_plotareaBorder == 'true')
		plotAreaFiller_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.enable == 'true')
		drawVerticalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalaxis.enable == 'true')
		drawHorizontalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalgridlines.majorgridlines.show == 'true')
		drawHorizontalMajorGridLines_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.showmajorticks == 'true')
		drawMajorTicks_SCC();
	drawSeries_SCC();
	if(stackedcombinationchart.properties.appearance.text.datalabels.show == 'true')
		showDataLabels_SCC();
	if(stackedcombinationchart.properties.appearance.text.mouseovervalues.show == 'true')
		onMouseOverValues_SCC();
}


function createHorizontalAxisTitle_SCC()
{
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.fontsize + 'px ';
	SCC_bold = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.horizontalaxistitle.style.color;
	var SCC_fontType = "";
	
	if(SCC_bold == 'true')
		SCC_fontType += "bold ";
	if(SCC_italic == 'true')
		SCC_fontType += "italic ";
	
	SCC_Context.font = SCC_fontType + SCC_fontSize + SCC_fontFace;
	SCC_Context.fillStyle = SCC_textColor;
	SCC_Context.textAlign = 'start';
	
	SCC_Context.fillText(stackedcombinationchart.properties.general.categoryaxis,SCC_PlotArea.width/2,SCC_PlotArea.height - SCC_TextHeight);
	SCC_TextHeight += parseInt(SCC_fontSize) + 5;
}

function createVerticalAxisTitle_SCC()
{
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.verticalaxistitle.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.verticalaxistitle.fontsize + 'px ';
	SCC_bold = stackedcombinationchart.properties.appearance.text.verticalaxistitle.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.verticalaxistitle.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.verticalaxistitle.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.verticalaxistitle.style.color;
	var SCC_fontType = "";
	
	if(SCC_bold == 'true')
		SCC_fontType += "bold ";
	if(SCC_italic == 'true')
		SCC_fontType += "italic ";
	
	SCC_Context.font = SCC_fontType + SCC_fontSize + SCC_fontFace;
	SCC_Context.fillStyle = SCC_textColor;
	SCC_Context.save();
	SCC_Context.translate(0,SCC_PlotArea.height);
	SCC_Context.rotate(270 * Math.PI/180);
	
	SCC_Context.fillText(stackedcombinationchart.properties.general.valueaxis,(SCC_PlotArea.height + SCC_TextHeight)/2,parseInt(SCC_fontSize));
	SCC_Context.restore();
	SCC_TextWidth += parseInt(SCC_fontSize) + 5;
}

function createHorizontalAxisLabel_SCC()
{
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.fontsize + 'px ';
	SCC_bold = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.horizontalaxislabel.style.color;
	var SCC_fontType = "";
	
	if(SCC_bold == 'true')
		SCC_fontType += "bold ";
	if(SCC_italic == 'true')
		SCC_fontType += "italic ";
	
	SCC_Context.font = SCC_fontType + SCC_fontSize + SCC_fontFace;
	SCC_Context.fillStyle = SCC_textColor;
	SCC_Context.textAlign = 'center';
	
	for(var i=0;i<SCC_YaxisSeries.length;i++)
		SCC_MaxNumberOfValues = Math.max(SCC_MaxNumberOfValues,SCC_YaxisSeries[i].length);
		
	for(var i=0;i<SCC_MaxNumberOfValues;i++)
		SCC_TotalHeightOfColumn[i] = 0;
	
	SCC_ColumnWidth = (SCC_PlotArea.width - SCC_TextWidth)/(SCC_MaxNumberOfValues + 2);
	SCC_TotalMarkerGapWidth = (SCC_MaxNumberOfValues * SCC_ColumnWidth) - (SCC_MaxNumberOfValues * 5);
	SCC_MarkerGap = ((stackedcombinationchart.properties.appearance.series.markergap * SCC_TotalMarkerGapWidth)/100)/SCC_MaxNumberOfValues;
	SCC_ColumnWidth = SCC_ColumnWidth - SCC_MarkerGap;
	
	SCC_StartX = SCC_TextWidth + SCC_ColumnWidth + SCC_MarkerGap + (SCC_ColumnWidth + SCC_MarkerGap)/2;
	SCC_StartY = SCC_PlotArea.height - SCC_TextHeight;
	for(var i=0;i<SCC_XaxisValues.length;i++)
	{
		SCC_Context.fillText(SCC_XaxisValues[i],SCC_StartX,SCC_StartY);
		SCC_StartX += SCC_ColumnWidth + SCC_MarkerGap;
	}
	SCC_TextHeight += parseInt(SCC_fontSize) + 5;
}

function createVerticalAxisLabel_SCC()
{
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.verticalaxislabel.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.verticalaxislabel.fontsize + 'px ';
	SCC_bold = stackedcombinationchart.properties.appearance.text.verticalaxislabel.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.verticalaxislabel.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.verticalaxislabel.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.verticalaxislabel.style.color;
	var SCC_fontType = "";
	
	if(SCC_bold == 'true')
		SCC_fontType += "bold ";
	if(SCC_italic == 'true')
		SCC_fontType += "italic ";
	
	SCC_Context.font = SCC_fontType + SCC_fontSize + SCC_fontFace;
	SCC_Context.fillStyle = SCC_textColor;
	SCC_Context.textAlign = 'end';
	SCC_Multiplier = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight - SCC_HorizontalAxisLabelHeight - 5) / (SCC_Y_EndLimit - SCC_Y_StartLimit);
	if(stackedcombinationchart.properties.behavior.scale.manualaxis.enable == 'true')
	{
		if(stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.enable == 'true')
			SCC_SizeOfMajorDivision = (SCC_Y_EndLimit - SCC_Y_StartLimit)/stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.value;
		if(stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.enable == 'true')
			SCC_SizeOfMajorDivision = stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.value;
		
		SCC_NumberOfVerticalAxisLabels = (SCC_Y_EndLimit - SCC_Y_StartLimit)/SCC_SizeOfMajorDivision;
		SCC_SizeOfMajorDivision = SCC_SizeOfMajorDivision * SCC_Multiplier;
	}
	if(stackedcombinationchart.properties.behavior.scale.autoaxis.enable == 'true')
	{
		SCC_SizeOfMajorDivision = 50;
		SCC_NumberOfVerticalAxisLabels = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight)/SCC_SizeOfMajorDivision;
	}
		
	var SCC_StartX_VerticalAxisLabel = SCC_TextWidth;
	var SCC_StartY_VerticalAxisLabel = SCC_PlotArea.height - SCC_TextHeight - SCC_HorizontalAxisLabelHeight - 5;
	var SCC_VerticalAxisText = SCC_Y_StartLimit;
	var SCC_VerticalAxisTextWidth = 0;
	for(var i=0;i<=SCC_NumberOfVerticalAxisLabels;i++)
	{
		SCC_VerticalAxisTextWidth = Math.max(SCC_VerticalAxisTextWidth,SCC_Context.measureText(SCC_VerticalAxisText).width);
		SCC_VerticalAxisText = Number(SCC_VerticalAxisText) + Number(SCC_SizeOfMajorDivision / SCC_Multiplier);
		SCC_VerticalAxisText = (Math.round(SCC_VerticalAxisText * 10))/10;
	}
	var SCC_VerticalAxisText = SCC_Y_StartLimit;
	for(var i=0;i<SCC_NumberOfVerticalAxisLabels;i++)
	{
		SCC_Context.fillText(SCC_VerticalAxisText,SCC_StartX_VerticalAxisLabel + SCC_VerticalAxisTextWidth,SCC_StartY_VerticalAxisLabel + (parseInt(SCC_fontSize)/4));
		SCC_StartY_VerticalAxisLabel = (SCC_StartY_VerticalAxisLabel - SCC_SizeOfMajorDivision);
		SCC_VerticalAxisText = Number(SCC_VerticalAxisText) + Number(SCC_SizeOfMajorDivision / SCC_Multiplier);
		SCC_VerticalAxisText = (Math.round(SCC_VerticalAxisText * 10))/10;
	}
	SCC_Context.fillText(SCC_Y_EndLimit,SCC_StartX_VerticalAxisLabel + SCC_VerticalAxisTextWidth,parseInt(SCC_VerticalAxisLabelHeight) + (parseInt(SCC_fontSize)/4));
	SCC_TextWidth += SCC_VerticalAxisTextWidth + 5;
}

function plotAreaFiller_SCC()
{
	if(SCC_plotareaFill == 'true')
	{
		SCC_Context.fillStyle = SCC_plotareaFillColor;
		SCC_Context.fillRect(SCC_TextWidth,SCC_VerticalAxisLabelHeight,SCC_PlotArea.width - SCC_TextWidth,SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight);
	}
	if(SCC_plotareaBorder == 'true')
	{
		SCC_Context.strokeStyle = SCC_plotareaBorderColor;
		SCC_Context.lineWidth = SCC_plotareaBorderThickness;
		SCC_Context.rect(SCC_TextWidth,SCC_VerticalAxisLabelHeight,SCC_PlotArea.width - SCC_TextWidth - (SCC_plotareaBorderThickness/2),SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight);
		SCC_Context.stroke();
	}
}
function drawVerticalAxis_SCC()
{
	SCC_Context.beginPath();
	SCC_Context.strokeStyle = stackedcombinationchart.properties.appearance.axes.verticalaxis.linecolor;
	SCC_Context.lineWidth = stackedcombinationchart.properties.appearance.axes.verticalaxis.thickness;
	if(SCC_Context.lineWidth%2 == 0)
	{
		SCC_Context.moveTo(0 + SCC_TextWidth,0 + SCC_VerticalAxisLabelHeight);
		SCC_Context.lineTo(0 + SCC_TextWidth,SCC_PlotArea.height - SCC_TextHeight);
	}
	else
	{
		SCC_Context.moveTo(0 + SCC_TextWidth + 0.5,0 + SCC_VerticalAxisLabelHeight);
		SCC_Context.lineTo(0 + SCC_TextWidth + 0.5,SCC_PlotArea.height - SCC_TextHeight);
	}
	SCC_Context.stroke();
	SCC_Context.closePath();
}

function drawHorizontalAxis_SCC()
{
	SCC_Context.beginPath();
	SCC_Context.strokeStyle = stackedcombinationchart.properties.appearance.axes.horizontalaxis.linecolor;
	SCC_Context.lineWidth = stackedcombinationchart.properties.appearance.axes.horizontalaxis.thickness;
	if(SCC_Context.lineWidth%2 == 0)
	{
		SCC_Context.moveTo(0 + SCC_TextWidth,SCC_PlotArea.height - SCC_TextHeight);
		SCC_Context.lineTo(SCC_PlotArea.width,SCC_PlotArea.height - SCC_TextHeight);
	}
	else
	{
		SCC_Context.moveTo(0 + SCC_TextWidth,SCC_PlotArea.height - SCC_TextHeight + 0.5);
		SCC_Context.lineTo(SCC_PlotArea.width,SCC_PlotArea.height - SCC_TextHeight + 0.5);
	}
	SCC_Context.stroke();
	SCC_Context.closePath();
}

function drawHorizontalMajorGridLines_SCC()
{
	if(stackedcombinationchart.properties.behavior.scale.manualaxis.enable == 'true')
	{
		if(stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.enable == 'true')
			SCC_SizeOfMajorDivision = (SCC_Y_EndLimit - SCC_Y_StartLimit)/stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.value;
		if(stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.enable == 'true')
			SCC_SizeOfMajorDivision = stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.value;
		SCC_Multiplier = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight) / (SCC_Y_EndLimit - SCC_Y_StartLimit);
		SCC_NumberOfMajorDivision = (SCC_Y_EndLimit - SCC_Y_StartLimit)/SCC_SizeOfMajorDivision;
		SCC_SizeOfMajorDivision = SCC_SizeOfMajorDivision * SCC_Multiplier;
	}
	if(stackedcombinationchart.properties.behavior.scale.autoaxis.enable == 'true')
	{
		SCC_SizeOfMajorDivision = 50;
		SCC_NumberOfMajorDivision = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight)/SCC_SizeOfMajorDivision;
	}
	
	var SCC_StartX_HorizontalMajorGrid = SCC_TextWidth;
	var SCC_StartY_HorizontalMajorGrid = SCC_PlotArea.height - SCC_TextHeight;
	for(var i=0;i<SCC_NumberOfMajorDivision - 1;i++)
	{
		SCC_StartY_HorizontalMajorGrid = SCC_StartY_HorizontalMajorGrid - SCC_SizeOfMajorDivision;
		SCC_Context.beginPath();
		SCC_Context.lineWidth = stackedcombinationchart.properties.appearance.axes.horizontalgridlines.majorgridlines.thickness;
		SCC_Context.strokeStyle = '#000000';
		if(SCC_Context.lineWidth%2 == 0)
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid,SCC_StartY_HorizontalMajorGrid);
			SCC_Context.lineTo(SCC_PlotArea.width,SCC_StartY_HorizontalMajorGrid);
		}
		else
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid,parseInt(SCC_StartY_HorizontalMajorGrid) - 0.5);
			SCC_Context.lineTo(SCC_PlotArea.width,parseInt(SCC_StartY_HorizontalMajorGrid) - 0.5);
		}
		SCC_Context.stroke();
		SCC_Context.closePath();
	}
	//if(stackedcombinationchart.properties.behavior.scale.manualaxis.enable == 'true')
	//{
		//if(stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.enable == 'true')
		//{
			if(parseInt(SCC_StartY_HorizontalMajorGrid) != parseInt(SCC_VerticalAxisLabelHeight))
			{
				if(SCC_Context.lineWidth%2 == 0)
				{
					SCC_Context.moveTo(0 + SCC_TextWidth,parseInt(SCC_VerticalAxisLabelHeight));
					SCC_Context.lineTo(SCC_PlotArea.width,parseInt(SCC_VerticalAxisLabelHeight));
				}
				else
				{
					SCC_Context.moveTo(0 + SCC_TextWidth,parseInt(SCC_VerticalAxisLabelHeight) + 0.5);
					SCC_Context.lineTo(SCC_PlotArea.width,parseInt(SCC_VerticalAxisLabelHeight) + 0.5);
				}
			}
		//}
	//}
	SCC_Context.stroke();
}

function drawMajorTicks_SCC()
{
	if(stackedcombinationchart.properties.behavior.scale.manualaxis.enable == 'true')
	{
		if(stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.enable == 'true')
			SCC_SizeOfMajorDivision = (SCC_Y_EndLimit - SCC_Y_StartLimit)/stackedcombinationchart.properties.behavior.scale.divisions.noofdivisions.value;
		if(stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.enable == 'true')
			SCC_SizeOfMajorDivision = stackedcombinationchart.properties.behavior.scale.divisions.sizeofdivision.value;
		SCC_Multiplier = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight) / (SCC_Y_EndLimit - SCC_Y_StartLimit);
		SCC_NumberOfMajorDivision = (SCC_Y_EndLimit - SCC_Y_StartLimit)/SCC_SizeOfMajorDivision;
		SCC_SizeOfMajorDivision = SCC_SizeOfMajorDivision * SCC_Multiplier;
	}
	if(stackedcombinationchart.properties.behavior.scale.autoaxis.enable == 'true')
	{
		SCC_SizeOfMajorDivision = 50;
		SCC_NumberOfMajorDivision = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight)/SCC_SizeOfMajorDivision;
	}
	var SCC_LengthOfMajorTick = 1 + 8;
	var SCC_StartX_HorizontalMajorGrid = SCC_TextWidth;
	var SCC_StartY_HorizontalMajorGrid = SCC_PlotArea.height - SCC_TextHeight;
	for(var i=0;i<SCC_NumberOfMajorDivision - 1;i++)
	{
		SCC_StartY_HorizontalMajorGrid = SCC_StartY_HorizontalMajorGrid - SCC_SizeOfMajorDivision;
		SCC_Context.beginPath();
		SCC_Context.strokeStyle = stackedcombinationchart.properties.appearance.axes.verticalaxis.linecolor;
		SCC_Context.lineWidth = stackedcombinationchart.properties.appearance.axes.verticalaxis.thickness;
		if(SCC_Context.lineWidth%2 == 0)
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid - (SCC_LengthOfMajorTick/2),parseInt(SCC_StartY_HorizontalMajorGrid));
			SCC_Context.lineTo(SCC_StartX_HorizontalMajorGrid + (SCC_LengthOfMajorTick/2),parseInt(SCC_StartY_HorizontalMajorGrid));
		}
		else
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid - (SCC_LengthOfMajorTick/2),parseInt(SCC_StartY_HorizontalMajorGrid) - 0.5);
			SCC_Context.lineTo(SCC_StartX_HorizontalMajorGrid + (SCC_LengthOfMajorTick/2),parseInt(SCC_StartY_HorizontalMajorGrid) - 0.5);
		}
		SCC_Context.stroke();
		SCC_Context.closePath();
		
	}
	if(parseInt(SCC_StartY_HorizontalMajorGrid) != parseInt(SCC_VerticalAxisLabelHeight))
	{
		if(SCC_Context.lineWidth%2 == 0)
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid - (SCC_LengthOfMajorTick/2),parseInt(SCC_VerticalAxisLabelHeight));
			SCC_Context.lineTo(SCC_StartX_HorizontalMajorGrid + (SCC_LengthOfMajorTick/2),parseInt(SCC_VerticalAxisLabelHeight));
		}
		else
		{
			SCC_Context.moveTo(SCC_StartX_HorizontalMajorGrid - (SCC_LengthOfMajorTick/2),parseInt(SCC_VerticalAxisLabelHeight) + 0.5);
			SCC_Context.lineTo(SCC_StartX_HorizontalMajorGrid + (SCC_LengthOfMajorTick/2),parseInt(SCC_VerticalAxisLabelHeight) + 0.5);
		}
	}
	SCC_Context.stroke();
}

function drawHorizontalMinorGridLines_SCC()
{
	var SCC_StartX_HorizontalMinorGrid = SCC_TextWidth;
	var SCC_StartY_HorizontalMinorGrid;
	var SCC_NumberOfMinorDivisions = (Number(stackedcombinationchart.properties.behavior.scale.divisions.minordivisions));
	SCC_SizeOfMinorDivision = parseInt(SCC_SizeOfMajorDivision/(SCC_NumberOfMinorDivisions + 1));
	var SCC_ExtraSpace = (SCC_SizeOfMajorDivision -(SCC_SizeOfMinorDivision * (SCC_NumberOfMinorDivisions + 1)))/(SCC_NumberOfMinorDivisions + 1);
	for(var i=0;i<SCC_NumberOfMajorDivision;i++)
	{
		SCC_StartY_HorizontalMinorGrid = SCC_PlotArea.height - SCC_TextHeight + 1 - (i * SCC_SizeOfMajorDivision);
		SCC_StartY_HorizontalMinorGrid = SCC_StartY_HorizontalMinorGrid - SCC_SizeOfMinorDivision - SCC_ExtraSpace;
		for(var j=0;j<SCC_NumberOfMinorDivisions;j++)
		{ 
			SCC_Context.beginPath();
			SCC_Context.lineWidth = 1;
			SCC_Context.strokeStyle = '#888888';
			if(SCC_Context.lineWidth%2 == 0)
			{
				SCC_Context.moveTo(SCC_StartX_HorizontalMinorGrid,parseInt(SCC_StartY_HorizontalMinorGrid));
				SCC_Context.lineTo(SCC_PlotArea.width,parseInt(SCC_StartY_HorizontalMinorGrid));
			}
			else
			{
				SCC_Context.moveTo(SCC_StartX_HorizontalMinorGrid,parseInt(SCC_StartY_HorizontalMinorGrid) - 0.5);
				SCC_Context.lineTo(SCC_PlotArea.width,parseInt(SCC_StartY_HorizontalMinorGrid) - 0.5);
			}
			SCC_Context.stroke();
			SCC_Context.closePath();
			SCC_StartY_HorizontalMinorGrid = SCC_StartY_HorizontalMinorGrid - SCC_SizeOfMinorDivision - SCC_ExtraSpace;
		}
	}
}

function drawMinorTicks_SCC()
{
	var SCC_StartX_HorizontalMinorGrid = SCC_TextWidth;
	var SCC_StartY_HorizontalMinorGrid;
	var SCC_NumberOfMinorDivisions = (Number(stackedcombinationchart.properties.behavior.scale.divisions.minordivisions));
	SCC_SizeOfMinorDivision = parseInt(SCC_SizeOfMajorDivision/(SCC_NumberOfMinorDivisions + 1));
	var SCC_ExtraSpace = (SCC_SizeOfMajorDivision -(SCC_SizeOfMinorDivision * (SCC_NumberOfMinorDivisions + 1)))/(SCC_NumberOfMinorDivisions + 1);
	var SCC_LengthOfMinorTick = 1 + 6;
	for(var i=0;i<SCC_NumberOfMajorDivision;i++)
	{
		SCC_StartY_HorizontalMinorGrid = SCC_PlotArea.height - SCC_TextHeight + 1 - (i * SCC_SizeOfMajorDivision);
		SCC_StartY_HorizontalMinorGrid = SCC_StartY_HorizontalMinorGrid - SCC_SizeOfMinorDivision - SCC_ExtraSpace;
		for(var j=0;j<SCC_NumberOfMinorDivisions;j++)
		{ 
			SCC_Context.beginPath();
			SCC_Context.lineWidth = 1;
			SCC_Context.strokeStyle = '#000000';
			if(SCC_Context.lineWidth%2 == 0)
			{
				SCC_Context.moveTo(SCC_StartX_HorizontalMinorGrid - (SCC_LengthOfMinorTick/2),parseInt(SCC_StartY_HorizontalMinorGrid));
				SCC_Context.lineTo(SCC_StartX_HorizontalMinorGrid + (SCC_LengthOfMinorTick/2),parseInt(SCC_StartY_HorizontalMinorGrid));
			}
			else
			{
				SCC_Context.moveTo(SCC_StartX_HorizontalMinorGrid - (SCC_LengthOfMinorTick/2),parseInt(SCC_StartY_HorizontalMinorGrid) - 0.5);
				SCC_Context.lineTo(SCC_StartX_HorizontalMinorGrid + (SCC_LengthOfMinorTick/2),parseInt(SCC_StartY_HorizontalMinorGrid) - 0.5);
			}
			SCC_Context.stroke();
			SCC_Context.closePath();
			SCC_StartY_HorizontalMinorGrid = SCC_StartY_HorizontalMinorGrid - SCC_SizeOfMinorDivision - SCC_ExtraSpace;
		}
	}
}

function drawSeries_SCC()
{
	SCC_X1_MouseOver = [],SCC_Y1_MouseOver = [],SCC_X2_MouseOver = [],SCC_Y2_MouseOver = [],SCC_SeriesFinder = [],SCC_ValueFinder = [],SCC_temp = 0;
	SCC_MarkerSeriesFinder = [],SCC_MarkerValueFinder = [];
	SCC_ShapeSize = Number(stackedcombinationchart.properties.appearance.series.linesettings.markers.size);
	SCC_MarkerCenterX = [],SCC_MarkerCenterY = [];
	SCC_Multiplier = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight) / (SCC_Y_EndLimit - SCC_Y_StartLimit);
	for(var i=0;i<SCC_YaxisSeries.length;i++)
		SCC_MaxNumberOfValues = Math.max(SCC_MaxNumberOfValues,SCC_YaxisSeries[i].length);
		
	for(var i=0;i<SCC_MaxNumberOfValues;i++)
		SCC_TotalHeightOfColumn[i] = 0;
	
	SCC_ColumnWidth = (SCC_PlotArea.width - SCC_TextWidth)/(SCC_MaxNumberOfValues + 2);
	SCC_TotalMarkerGapWidth = (SCC_MaxNumberOfValues * SCC_ColumnWidth) - (SCC_MaxNumberOfValues * 5);
	SCC_MarkerGap = ((stackedcombinationchart.properties.appearance.series.markergap * SCC_TotalMarkerGapWidth)/100)/SCC_MaxNumberOfValues;
	SCC_ColumnWidth = SCC_ColumnWidth - SCC_MarkerGap;
	
	//SCC_OverlapColumnWidth = SCC_ColumnWidth/SCC_YaxisSeries.length;alert(SCC_OverlapColumnWidth);
	//SCC_MarkerOverlap = (SCC_ColumnWidth - ( 80 * SCC_ColumnWidth)/100)/SCC_YaxisSeries.length;alert(SCC_MarkerOverlap);
	//SCC_OverlapColumnWidth =( SCC_OverlapColumnWidth +(SCC_YaxisSeries.length - 1) * (SCC_OverlapColumnWidth - SCC_MarkerOverlap));alert(SCC_OverlapColumnWidth);
	//SCC_OverlapColumnWidth = SCC_ColumnWidth - (SCC_YaxisSeries.length - 1) * SCC_MarkerOverlap ;
	//SCC_MarkerOverlap(SCC_OverlapColumnWidth - SCC_MarkerOverlap ) * 20/100;alert(SCC_MarkerOverlap);
	//SCC_OverlapColumnWidth = SCC_MarkerOverlap * 100/80;alert(SCC_OverlapColumnWidth);
	
	
	for(var i=0;i<SCC_YaxisSeries.length;i++)
	{
		if(SCC_ShowSeriesArray[i] == 0)
		{
		if(SCC_SeriesType[i] == 'Column')
		{
			SCC_StartX = SCC_TextWidth + SCC_ColumnWidth + SCC_MarkerGap + (SCC_ColumnWidth + SCC_MarkerGap)/2 - SCC_ColumnWidth/2;
			SCC_StartY = SCC_PlotArea.height - SCC_TextHeight;
			SCC_Context.fillStyle = ColumnTransparency_SCC(SCC_SeriesFillColor[i]);
			for(var j=0;j<SCC_YaxisSeries[i].length;j++)
			{ 
				if(SCC_EnableAlert == 'true')
					SCC_Context.fillStyle = enableAlert_SCC(parseInt(SCC_YaxisSeries[i][j]),j);
				SCC_TotalHeightOfColumn[j] += parseInt(SCC_YaxisSeries[i][j]);
				if(SCC_TotalHeightOfColumn[j] >= SCC_Y_StartLimit)
				{
				SCC_ColumnSeriesHeight = SCC_TotalHeightOfColumn[j] - SCC_Y_StartLimit;
				SCC_Context.beginPath();
				if(SCC_TotalHeightOfColumn[j] >= SCC_Y_StartLimit && (SCC_TotalHeightOfColumn[j] - parseInt(SCC_YaxisSeries[i][j])) <= SCC_Y_StartLimit)
				{
					SCC_Context.fillRect(parseInt(SCC_StartX),SCC_StartY - (SCC_ColumnSeriesHeight * SCC_Multiplier),parseInt(SCC_ColumnWidth) + 1,SCC_ColumnSeriesHeight * SCC_Multiplier);
					SCC_X1_MouseOver[SCC_temp] = parseInt(SCC_StartX);
					SCC_X2_MouseOver[SCC_temp] = SCC_X1_MouseOver[SCC_temp] + parseInt(SCC_ColumnWidth) + 1;
					SCC_Y1_MouseOver[SCC_temp] = SCC_StartY - (SCC_ColumnSeriesHeight * SCC_Multiplier);
					SCC_Y2_MouseOver[SCC_temp] = SCC_Y1_MouseOver[SCC_temp] + SCC_ColumnSeriesHeight * SCC_Multiplier;
					SCC_SeriesFinder[SCC_temp] = i;
					SCC_ValueFinder[SCC_temp] = j;
				}
				else
				{
					SCC_Context.fillRect(parseInt(SCC_StartX),SCC_StartY - (SCC_ColumnSeriesHeight * SCC_Multiplier),parseInt(SCC_ColumnWidth) + 1,SCC_YaxisSeries[i][j] * SCC_Multiplier);
					SCC_X1_MouseOver[SCC_temp] = parseInt(SCC_StartX);
					SCC_X2_MouseOver[SCC_temp] = SCC_X1_MouseOver[SCC_temp] + parseInt(SCC_ColumnWidth) + 1;
					SCC_Y1_MouseOver[SCC_temp] = SCC_StartY - (SCC_ColumnSeriesHeight * SCC_Multiplier);
					SCC_Y2_MouseOver[SCC_temp] = SCC_Y1_MouseOver[SCC_temp] + SCC_YaxisSeries[i][j] * SCC_Multiplier;
					SCC_SeriesFinder[SCC_temp] = i;
					SCC_ValueFinder[SCC_temp] = j;
				}
				SCC_Context.closePath();
				SCC_temp++;
				}
				SCC_StartX += SCC_ColumnWidth + SCC_MarkerGap;
			}
		}
		}
	}
	SCC_temp = 0;
	for(var i=0;i<SCC_YaxisSeries.length;i++)
	{
		if(SCC_ShowSeriesArray[i] == 0)
		{
		if(SCC_SeriesType[i] == 'Line')
		{
			SCC_PointX = SCC_TextWidth + SCC_ColumnWidth + SCC_MarkerGap + (SCC_ColumnWidth + SCC_MarkerGap)/2;
			SCC_PointY = (SCC_PlotArea.height - SCC_TextHeight);
			SCC_Context.beginPath();
			if(SCC_YaxisSeries[i][0] >= SCC_Y_StartLimit)
			{
				if(SCC_YaxisSeries[i][0] > SCC_Y_EndLimit)
					SCC_Context.moveTo(SCC_PointX,SCC_PointY - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier));
				else
					SCC_Context.moveTo(SCC_PointX,SCC_PointY - ((SCC_YaxisSeries[i][0] - SCC_Y_StartLimit) * SCC_Multiplier));
			}
			else
				SCC_Context.moveTo(SCC_PointX,SCC_PointY);
			SCC_Context.strokeStyle = SCC_LineColor[i];
			SCC_Context.lineWidth = stackedcombinationchart.properties.appearance.series.linesettings.linethickness;
			for(var j=1;j<SCC_YaxisSeries[i].length;j++)
			{
				
				SCC_PointX = SCC_PointX + SCC_ColumnWidth + SCC_MarkerGap;
				if(SCC_YaxisSeries[i][j] >= SCC_Y_StartLimit)
				{
					if(SCC_YaxisSeries[i][j] > SCC_Y_EndLimit)
						SCC_Context.lineTo(SCC_PointX,SCC_PointY - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier));
					else
						SCC_Context.lineTo(SCC_PointX,SCC_PointY - ((SCC_YaxisSeries[i][j] - SCC_Y_StartLimit) * SCC_Multiplier));
				}
				else
					SCC_Context.lineTo(SCC_PointX,SCC_PointY);
				SCC_Context.stroke();
				
			}
			SCC_Context.closePath();
		}
		}
	}
	if(stackedcombinationchart.properties.appearance.series.linesettings.markers.enable == 'true')
	{
	for(var i=0;i<SCC_YaxisSeries.length;i++)
	{
		if(SCC_ShowSeriesArray[i] == 0)
		{
		if(SCC_SeriesType[i] == 'Line')
		{
			SCC_PointX = SCC_TextWidth + SCC_ColumnWidth + SCC_MarkerGap + (SCC_ColumnWidth + SCC_MarkerGap)/2;
			SCC_PointY = (SCC_PlotArea.height - SCC_TextHeight);
			SCC_Context.strokeStyle = LineTransparency_SCC(SCC_SeriesFillColor[i]);
			SCC_Context.fillStyle = LineTransparency_SCC(SCC_SeriesFillColor[i]);
			if(SCC_EnableAlert == 'true')
			{
				SCC_Context.fillStyle = enableAlert_SCC(parseInt(SCC_YaxisSeries[i][0]),0);
				SCC_Context.strokeStyle = enableAlert_SCC(parseInt(SCC_YaxisSeries[i][0]),0);
			}
			if(SCC_YaxisSeries[i][0] >= SCC_Y_StartLimit)
			{
				if(SCC_YaxisSeries[i][0] > SCC_Y_EndLimit)
				{
					drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier));
					SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
					SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY) - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier);
					SCC_MarkerSeriesFinder[SCC_temp] = i;
					SCC_MarkerValueFinder[SCC_temp] = 0;
				}
				else
				{
					drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY - ((SCC_YaxisSeries[i][0] - SCC_Y_StartLimit) * SCC_Multiplier));
					SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
					SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY) - ((SCC_YaxisSeries[i][0] - SCC_Y_StartLimit) * SCC_Multiplier);
					SCC_MarkerSeriesFinder[SCC_temp] = i;
					SCC_MarkerValueFinder[SCC_temp] = 0;
				}
			}
			else
			{
				drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY);
				SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
				SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY);
				SCC_MarkerSeriesFinder[SCC_temp] = i;
				SCC_MarkerValueFinder[SCC_temp] = 0;
			}
			SCC_temp++;
			for(var j=1;j<SCC_YaxisSeries[i].length;j++)
			{
				if(SCC_EnableAlert == 'true')
				{
					SCC_Context.fillStyle = enableAlert_SCC(parseInt(SCC_YaxisSeries[i][j]),j);
					SCC_Context.strokeStyle = enableAlert_SCC(parseInt(SCC_YaxisSeries[i][j]),j);
				}
				SCC_PointX = SCC_PointX + SCC_ColumnWidth + SCC_MarkerGap;
				if(SCC_YaxisSeries[i][j] >= SCC_Y_StartLimit)
				{
					if(SCC_YaxisSeries[i][j] > SCC_Y_EndLimit)
					{
						drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier));
						SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
						SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY) - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier);
						SCC_MarkerSeriesFinder[SCC_temp] = i;
						SCC_MarkerValueFinder[SCC_temp] = 0;
					}
					else
					{
						drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY - ((SCC_YaxisSeries[i][j] - SCC_Y_StartLimit) * SCC_Multiplier));
						SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
						SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY) - ((SCC_YaxisSeries[i][j] - SCC_Y_StartLimit) * SCC_Multiplier);
						SCC_MarkerSeriesFinder[SCC_temp] = i;
						SCC_MarkerValueFinder[SCC_temp] = j;
					}
				}
				else
				{
					drawLinePointShape_SCC(SCC_Context,SCC_ShapeSize,SCC_PointShape[i],SCC_PointX,SCC_PointY);
					SCC_MarkerCenterX[SCC_temp] = Math.round(SCC_PointX);
					SCC_MarkerCenterY[SCC_temp] = Math.round(SCC_PointY);
					SCC_MarkerSeriesFinder[SCC_temp] = i;
					SCC_MarkerValueFinder[SCC_temp] = j;
				}
				SCC_temp++;
			}
		}
	}
	}
	}
}

function drawLinePointShape_SCC(ShapeContext,ShapeSize,PointShape,CenterX,CenterY)
{
	CenterX = Math.round(CenterX);
	CenterY = Math.round(CenterY);
	if(PointShape == 'Circle')
	{
		ShapeSize = Math.round(ShapeSize/2);
		ShapeContext.beginPath();
		ShapeContext.lineWidth = 1;
		ShapeContext.arc(parseInt(CenterX),parseInt(CenterY),ShapeSize,0,2*Math.PI,false);
		ShapeContext.fill();
		ShapeContext.stroke();
		ShapeContext.closePath();
	}
	else if(PointShape == 'X')
	{
		ShapeSize = Math.round(ShapeSize/2);
		ShapeContext.beginPath();
		ShapeContext.lineWidth = 1;
		ShapeContext.moveTo(CenterX - ShapeSize,CenterY - ShapeSize);
		ShapeContext.lineTo(CenterX + ShapeSize,CenterY + ShapeSize);
		ShapeContext.moveTo(CenterX + ShapeSize,CenterY - ShapeSize);
		ShapeContext.lineTo(CenterX - ShapeSize,CenterY + ShapeSize);
		ShapeContext.fill();
		ShapeContext.stroke();
		ShapeContext.closePath();
	}
	else if(PointShape == 'Triangle')
	{
		var SCC_StartYforTriangle = Math.round(Math.sqrt(Math.pow(ShapeSize,2) - Math.pow((ShapeSize/2),2))/2);
		ShapeSize = Math.round(ShapeSize/2);
		ShapeContext.beginPath();
		ShapeContext.lineWidth = 1;
		ShapeContext.lineCap = 'round';
		ShapeContext.moveTo(CenterX,CenterY - SCC_StartYforTriangle);
		ShapeContext.lineTo(CenterX + ShapeSize,CenterY + ShapeSize);
		ShapeContext.lineTo(CenterX - ShapeSize,CenterY + ShapeSize);
		ShapeContext.lineTo(CenterX,CenterY - SCC_StartYforTriangle);
		ShapeContext.fill();
		ShapeContext.stroke();
		ShapeContext.closePath();
	}
	else if(PointShape == 'Square')
	{
		ShapeSize = Math.round(ShapeSize/2);
		ShapeContext.beginPath();
		ShapeContext.lineWidth = 1;
		ShapeContext.lineCap = 'round';
		ShapeContext.moveTo(CenterX - ShapeSize,CenterY);
		ShapeContext.lineTo(CenterX,CenterY - ShapeSize);
		ShapeContext.lineTo(CenterX + ShapeSize,CenterY);
		ShapeContext.lineTo(CenterX,CenterY + ShapeSize);
		ShapeContext.lineTo(CenterX - ShapeSize,CenterY);
		ShapeContext.fill();
		ShapeContext.stroke();
		ShapeContext.closePath();
	}
	else if(PointShape == 'Star')
	{
		ShapeSize = Math.round(ShapeSize/2);
		var SCC_StarX = [],SCC_StarY = [];
		var SCC_StarAngle = 0;
		for(var i=0;i<7;i++)
		{
			SCC_StarX[i] = (CenterX + (ShapeSize * Math.cos(SCC_StarAngle * Math.PI/180)));
			SCC_StarY[i] = (CenterY + (ShapeSize * Math.sin(SCC_StarAngle * Math.PI/180)));
			SCC_StarAngle += 51.428;
		}
		ShapeContext.beginPath();
		ShapeContext.lineWidth = 1;
		ShapeContext.lineCap = 'round';
		ShapeContext.lineJoin = 'miter';
		ShapeContext.moveTo(SCC_StarX[0],SCC_StarY[0]);
		ShapeContext.lineTo(SCC_StarX[2],SCC_StarY[2]);
		ShapeContext.lineTo(SCC_StarX[4],SCC_StarY[4]);
		ShapeContext.lineTo(SCC_StarX[6],SCC_StarY[6]);
		ShapeContext.lineTo(SCC_StarX[1],SCC_StarY[1]);
		ShapeContext.lineTo(SCC_StarX[3],SCC_StarY[3]);
		ShapeContext.lineTo(SCC_StarX[5],SCC_StarY[5]);
		ShapeContext.lineTo(SCC_StarX[0],SCC_StarY[0]);
		ShapeContext.fill();
		ShapeContext.stroke();
		ShapeContext.closePath();
	
	}
}

function Change_SCC()
{
	
	SCC_Context.clearRect(0,0,SCC_PlotArea.width,SCC_PlotArea.height);
	SCC_TextWidth = 5,SCC_TextHeight = 5;
	for(var i=0;i<stackedcombinationchart.data.series.length;i++)
	{
		if(document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).checked == true)
			SCC_ShowSeriesArray[i] = 0;
		else
			SCC_ShowSeriesArray[i] = 1;
	}
	if(stackedcombinationchart.properties.behavior.common.sorting.enable == 'true')
		doSorting_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxistitle.show == 'true')
		createHorizontalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxistitle.show == 'true')
		createVerticalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxislabel.show == 'true')
		createVerticalAxisLabel_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxislabel.show == 'true')
		createHorizontalAxisLabel_SCC();
	if(SCC_plotareaFill == 'true' || SCC_plotareaBorder == 'true')
		plotAreaFiller_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.enable == 'true')
		drawVerticalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalaxis.enable == 'true')
		drawHorizontalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalgridlines.majorgridlines.show == 'true')
		drawHorizontalMajorGridLines_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.showmajorticks == 'true')
		drawMajorTicks_SCC();
	drawSeries_SCC();
	if(stackedcombinationchart.properties.appearance.text.datalabels.show == 'true')
		showDataLabels_SCC();
	if(stackedcombinationchart.properties.appearance.text.mouseovervalues.show == 'true')
		onMouseOverValues_SCC();
}

function onClick_SCC(ClickedSeries_SCC)
{
	if(document.getElementById(ClickedSeries_SCC).style.opacity == 0.25)
		document.getElementById(ClickedSeries_SCC).style.opacity = 1;
	else
		document.getElementById(ClickedSeries_SCC).style.opacity = 0.25;
	SCC_Context.clearRect(0,0,SCC_PlotArea.width,SCC_PlotArea.height);
	SCC_TextWidth = 5,SCC_TextHeight = 5;
	for(var i=0;i<stackedcombinationchart.data.series.length;i++)
	{
		if(document.getElementById('SCC'+stackedcombinationchart.data.series[i].name).style.opacity == 1)
			SCC_ShowSeriesArray[i] = 0;
		else
			SCC_ShowSeriesArray[i] = 1;
	}
	if(stackedcombinationchart.properties.behavior.common.sorting.enable == 'true')
		doSorting_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxistitle.show == 'true')
		createHorizontalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxistitle.show == 'true')
		createVerticalAxisTitle_SCC();
	if(stackedcombinationchart.properties.appearance.text.verticalaxislabel.show == 'true')
		createVerticalAxisLabel_SCC();
	if(stackedcombinationchart.properties.appearance.text.horizontalaxislabel.show == 'true')
		createHorizontalAxisLabel_SCC();
	if(SCC_plotareaFill == 'true' || SCC_plotareaBorder == 'true')
		plotAreaFiller_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.enable == 'true')
		drawVerticalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalaxis.enable == 'true')
		drawHorizontalAxis_SCC();
	if(stackedcombinationchart.properties.appearance.axes.horizontalgridlines.majorgridlines.show == 'true')
		drawHorizontalMajorGridLines_SCC();
	if(stackedcombinationchart.properties.appearance.axes.verticalaxis.showmajorticks == 'true')
		drawMajorTicks_SCC();
	drawSeries_SCC();
	if(stackedcombinationchart.properties.appearance.text.datalabels.show == 'true')
		showDataLabels_SCC();
	if(stackedcombinationchart.properties.appearance.text.mouseovervalues.show == 'true')
		onMouseOverValues_SCC();
}

function onMouseOverValues_SCC()
{
	SCC_fontFace = stackedcombinationchart.properties.appearance.text.mouseovervalues.fontface;
	SCC_fontSize = stackedcombinationchart.properties.appearance.text.mouseovervalues.fontsize;
	SCC_bold = stackedcombinationchart.properties.appearance.text.mouseovervalues.style.bold;
	SCC_italic = stackedcombinationchart.properties.appearance.text.mouseovervalues.style.italic;
	SCC_underline = stackedcombinationchart.properties.appearance.text.mouseovervalues.style.underline;
	SCC_textColor = stackedcombinationchart.properties.appearance.text.mouseovervalues.style.color;
	SCC_textAlignment = stackedcombinationchart.properties.appearance.text.mouseovervalues.style.align;
	
	SCC_MouseOverDiv = document.createElement('div');
	
	SCC_MouseOverDiv.style.display = 'none';
	SCC_MouseOverDiv.id = 'SCC_MouseOver';
	SCC_MouseOverDiv.style.backgroundColor = '#FFFFFF';
	SCC_MouseOverDiv.style.opacity = 0.75;
	SCC_MouseOverDiv.style.border = '2px solid #003D00';
		
	SCC_MouseOverDiv.style.fontFamily = SCC_fontFace;
	SCC_MouseOverDiv.style.fontSize = SCC_fontSize + 'px';
	if(SCC_bold == "true")
		SCC_MouseOverDiv.style.fontWeight = "bold";
	if(SCC_italic == "true")
		SCC_MouseOverDiv.style.fontStyle = "italic";
	if(SCC_underline == "true")
		SCC_MouseOverDiv.style.textDecoration = "underline";
	SCC_MouseOverDiv.style.color = SCC_textColor;
	SCC_MouseOverDiv.style.textAlign = SCC_textAlignment;
	
	SCC_Div.appendChild(SCC_MouseOverDiv);
	
	SCC_PlotArea.addEventListener('mousemove',function(evt){
	
	var SCC_X = evt.clientX - document.getElementById('SCC_PlotArea').offsetLeft;
	var SCC_Y = evt.clientY - document.getElementById('SCC_PlotArea').offsetTop;
	var br = document.createElement('br');
	var SCC_ColumnNumber,SCC_OnColumn = 0,SCC_OnMarker = 0,SCC_MarkerNumber;
	for(var i=0;i<SCC_X1_MouseOver.length;i++)
	{
		if(((SCC_X >= SCC_X1_MouseOver[i]) && (SCC_X <= SCC_X2_MouseOver[i])) && ((SCC_Y >= SCC_Y1_MouseOver[i]) && (SCC_Y <= SCC_Y2_MouseOver[i])))
		{
			SCC_OnColumn = 1;
			SCC_ColumnNumber = i;
		}
		else
		{
			SCC_MouseOverDiv.style.display = 'none';
		}
	}
	for(var i=0;i<SCC_MarkerCenterX.length;i++)
	{
		if(((Math.pow((SCC_X - SCC_MarkerCenterX[i]),2)) + (Math.pow((SCC_Y - SCC_MarkerCenterY[i]),2)) - (Math.pow(Math.round(SCC_ShapeSize/2),2))) < 0)
		{
			SCC_OnMarker = 1;
			SCC_MarkerNumber = i;
		}
		else
			SCC_MouseOverDiv.style.display = 'none';
	}
	if(SCC_OnMarker == 1)
	{
		SCC_MouseOverDiv.style.position = 'absolute';
		SCC_MouseOverDiv.style.left = evt.clientX + 10 + 'px';
		SCC_MouseOverDiv.style.top = evt.clientY + 10 + 'px';
		SCC_MouseOverDiv.style.display = 'block';
		SCC_MouseOverDiv.innerHTML = SCC_SeriesNames[SCC_MarkerSeriesFinder[SCC_MarkerNumber]];
		SCC_MouseOverDiv.appendChild(br);
		SCC_MouseOverDiv.innerHTML += SCC_XaxisValues[SCC_MarkerValueFinder[SCC_MarkerNumber]];
		SCC_MouseOverDiv.appendChild(br);
		SCC_MouseOverDiv.innerHTML += SCC_YaxisSeries[SCC_MarkerSeriesFinder[SCC_MarkerNumber]][SCC_MarkerValueFinder[SCC_MarkerNumber]];
		SCC_OnColumn = 0;
	}
	if(SCC_OnColumn == 1)
	{
		SCC_MouseOverDiv.style.position = 'absolute';
		SCC_MouseOverDiv.style.left = evt.clientX + 10 + 'px';
		SCC_MouseOverDiv.style.top = evt.clientY + 10 + 'px';
		SCC_MouseOverDiv.style.display = 'block';
		SCC_MouseOverDiv.innerHTML = SCC_SeriesNames[SCC_SeriesFinder[SCC_ColumnNumber]];
		SCC_MouseOverDiv.appendChild(br);
		SCC_MouseOverDiv.innerHTML += SCC_XaxisValues[SCC_ValueFinder[SCC_ColumnNumber]];
		SCC_MouseOverDiv.appendChild(br);
		SCC_MouseOverDiv.innerHTML += SCC_YaxisSeries[SCC_SeriesFinder[SCC_ColumnNumber]][SCC_ValueFinder[SCC_ColumnNumber]];
	}
	},false);
	
	SCC_PlotArea.addEventListener('mouseout',function(evt){
	SCC_MouseOverDiv.style.display = 'none';
	},false);
}

function showDataLabels_SCC()
{ 
	SCC_Multiplier = (SCC_PlotArea.height - SCC_TextHeight - SCC_VerticalAxisLabelHeight) / (SCC_Y_EndLimit - SCC_Y_StartLimit);
	for(var i=0;i<SCC_YaxisSeries.length;i++)
		SCC_MaxNumberOfValues = Math.max(SCC_MaxNumberOfValues,SCC_YaxisSeries[i].length);
		
	for(var i=0;i<SCC_MaxNumberOfValues;i++)
		SCC_TotalHeightOfColumn[i] = -SCC_Y_StartLimit;
	
	SCC_ColumnWidth = (SCC_PlotArea.width - SCC_TextWidth)/(SCC_MaxNumberOfValues + 2);
	SCC_TotalMarkerGapWidth = (SCC_MaxNumberOfValues * SCC_ColumnWidth) - (SCC_MaxNumberOfValues * 5);
	SCC_MarkerGap = ((stackedcombinationchart.properties.appearance.series.markergap * SCC_TotalMarkerGapWidth)/100)/SCC_MaxNumberOfValues;
	SCC_ColumnWidth = SCC_ColumnWidth - SCC_MarkerGap;
	
	SCC_OneSeriesColumnWidth = Math.round(SCC_ColumnWidth/SCC_YaxisSeries.length);
	
	
	for(var i=0;i<SCC_YaxisSeries.length;i++)
	{
		if(SCC_ShowSeriesArray[i] == 0)
		{
		SCC_ShowSeries = stackedcombinationchart.properties.appearance.text.datalabels.series[i].show;
		SCC_ShowSeriesName = stackedcombinationchart.properties.appearance.text.datalabels.series[i].labelcontains.seriesname;
		SCC_ShowLabel = stackedcombinationchart.properties.appearance.text.datalabels.series[i].labelcontains.categorylabel;
		SCC_ShowValue = stackedcombinationchart.properties.appearance.text.datalabels.series[i].labelcontains.value;
		SCC_LabelSeparator = stackedcombinationchart.properties.appearance.text.datalabels.series[i].labelseparator;
		SCC_Position = stackedcombinationchart.properties.appearance.text.datalabels.series[i].position;
		var SCC_Offsetx = Number(stackedcombinationchart.properties.appearance.text.datalabels.series[i].offset.x);
		var SCC_Offsety = Number(stackedcombinationchart.properties.appearance.text.datalabels.series[i].offset.y);
		
		SCC_DataFontFace = stackedcombinationchart.properties.appearance.text.datalabels.series[i].fontface;
		SCC_DataFontSize = stackedcombinationchart.properties.appearance.text.datalabels.series[i].fontsize + 'px ';
		SCC_DataBold = stackedcombinationchart.properties.appearance.text.datalabels.series[i].style.bold;
		SCC_DataItalic = stackedcombinationchart.properties.appearance.text.datalabels.series[i].style.italic;
		SCC_DataUnderline = stackedcombinationchart.properties.appearance.text.datalabels.series[i].style.underline;
		SCC_DataTextColor = stackedcombinationchart.properties.appearance.text.datalabels.series[i].style.color;
		
		
		var SCC_StartX = SCC_TextWidth + SCC_ColumnWidth + SCC_MarkerGap + (SCC_ColumnWidth + SCC_MarkerGap)/2 + SCC_Offsetx;
		SCC_Context.beginPath();
				
		var SCC_FontType = "";
		if(SCC_DataBold == 'true')
			SCC_FontType += "bold ";
		if(SCC_DataItalic == 'true')
			SCC_FontType += "italic ";
		
		SCC_Context.font = SCC_FontType + SCC_DataFontSize + SCC_DataFontFace;
		SCC_Context.fillStyle = SCC_DataTextColor;
		SCC_Context.textAlign = 'center';
		for(var j=0;j<SCC_YaxisSeries[i].length;j++)
		{
			if(SCC_SeriesType[i] == 'Column')
			{
				var SCC_StartY = SCC_PlotArea.height - SCC_TextHeight - (SCC_TotalHeightOfColumn[j] * SCC_Multiplier) + SCC_Offsety;
				if(SCC_Position == 'Inside End')
					SCC_StartY -= (SCC_YaxisSeries[i][j] * SCC_Multiplier) - parseInt(SCC_DataFontSize);
				else if(SCC_Position == 'Center')
					SCC_StartY -= ((SCC_YaxisSeries[i][j]/2) * SCC_Multiplier);
				else if(SCC_Position == 'Outside End')
					SCC_StartY -= (SCC_YaxisSeries[i][j] * SCC_Multiplier);
				else if(SCC_Position == 'Inside Base')
					SCC_StartY = SCC_StartY;
				if(SCC_StartY >= SCC_PlotArea.height - SCC_TextHeight)
					SCC_StartY = Number(SCC_PlotArea.height - (3* parseInt(SCC_DataFontSize)));
				SCC_TotalHeightOfColumn[j] += parseInt(SCC_YaxisSeries[i][j]);
			}
			if(SCC_SeriesType[i] == 'Line')
			{
				if(SCC_YaxisSeries[i][j] >= SCC_Y_StartLimit)
				{
					if(SCC_YaxisSeries[i][j] >= SCC_Y_EndLimit)
						var SCC_StartY = SCC_PlotArea.height - SCC_TextHeight - ((SCC_Y_EndLimit - SCC_Y_StartLimit) * SCC_Multiplier) + SCC_Offsety;
					else
						var SCC_StartY = SCC_PlotArea.height - SCC_TextHeight - ((SCC_YaxisSeries[i][j] - SCC_Y_StartLimit) * SCC_Multiplier) + SCC_Offsety;
				}
				else
					var SCC_StartY = SCC_PlotArea.height - SCC_TextHeight + SCC_Offsety;
				if(SCC_LabelSeparator == '(New Line)')
				{
					var LengthOfLongerText = 0;
					var SCC_MeasureText = SCC_Context.measureText(SCC_SeriesNames[i]).width;
					LengthOfLongerText = Math.max(LengthOfLongerText,SCC_MeasureText);
					var SCC_MeasureText = SCC_Context.measureText(SCC_XaxisValues[j]).width;
					LengthOfLongerText = Math.max(LengthOfLongerText,SCC_MeasureText);
					var SCC_MeasureText = SCC_Context.measureText(SCC_YaxisSeries[i][j]).width;
					LengthOfLongerText = Math.max(LengthOfLongerText,SCC_MeasureText);
				if(SCC_Position == 'Below')
					SCC_StartY += SCC_ShapeSize/2 + parseInt(SCC_DataFontSize);
				else if(SCC_Position == 'Above')
					SCC_StartY -= SCC_ShapeSize/2 + 2;
				else if(SCC_Position == 'Right')
					SCC_StartX += SCC_ShapeSize/2 + LengthOfLongerText/2;
				else if(SCC_Position == 'Left')
					SCC_StartX -= SCC_ShapeSize/2 + LengthOfLongerText/2;
				}
				else
				{
					var LengthOfLongerText = 0;
					if(SCC_Position == 'Below')
						SCC_StartY += SCC_ShapeSize/2 + parseInt(SCC_DataFontSize);
					else if(SCC_Position == 'Above')
						SCC_StartY -= SCC_ShapeSize/2 + 2;
					else if(SCC_Position == 'Right')
					{
						SCC_StartX += SCC_ShapeSize/2;
						SCC_Context.textAlign = 'start';
					}
					else if(SCC_Position == 'Left')
					{
						SCC_StartX -= SCC_ShapeSize/2;
						SCC_Context.textAlign = 'end';
					}
				}
			}
			if(SCC_ShowSeries == 'true')
			{
				if(SCC_LabelSeparator == '(New Line)')
					{
						var SCC_TextY = 0;
						if(SCC_ShowSeriesName == "true" && SCC_ShowLabel == "true" && SCC_ShowValue == 'true')
						{
							if(SCC_Position == 'Outside End' || SCC_Position == 'Inside Base' || SCC_Position == 'Above')
								SCC_StartY -= (2 * parseInt(SCC_DataFontSize));
							if(SCC_Position == 'Right' || SCC_Position == 'Left' || SCC_Position == 'Center')
								SCC_StartY -= parseInt(SCC_DataFontSize)/2;
							if(SCC_ShowSeriesName == "true")
							{
								SCC_Context.fillText(SCC_SeriesNames[i],SCC_StartX,SCC_StartY + SCC_TextY);
								SCC_TextY += parseInt(SCC_DataFontSize);
							}
							if(SCC_ShowLabel == "true")
							{
								SCC_Context.fillText(SCC_XaxisValues[j],SCC_StartX,SCC_StartY + SCC_TextY);
								SCC_TextY += parseInt(SCC_DataFontSize);
							}
							if(SCC_ShowValue == 'true')
								SCC_Context.fillText(SCC_YaxisSeries[i][j],SCC_StartX,SCC_StartY + SCC_TextY);
						}
						else if((SCC_ShowSeriesName == "true" && SCC_ShowLabel == "true") || (SCC_ShowLabel == "true" && SCC_ShowValue == 'true') || (SCC_ShowSeriesName == "true" && SCC_ShowValue == 'true'))
						{
							if(SCC_Position == 'Outside End' || SCC_Position == 'Inside Base' || SCC_Position == 'Above')
								SCC_StartY -= (1 * parseInt(SCC_DataFontSize));
							if(SCC_ShowSeriesName == "true")
							{
								SCC_Context.fillText(SCC_SeriesNames[i],SCC_StartX,SCC_StartY + SCC_TextY);
								SCC_TextY += parseInt(SCC_DataFontSize);
							}
							if(SCC_ShowLabel == "true")
							{
								SCC_Context.fillText(SCC_XaxisValues[j],SCC_StartX,SCC_StartY + SCC_TextY);
								SCC_TextY += parseInt(SCC_DataFontSize);
							}
							if(SCC_ShowValue == 'true')
								SCC_Context.fillText(SCC_YaxisSeries[i][j],SCC_StartX,SCC_StartY + SCC_TextY);
						}
						else
						{
							if(SCC_Position == 'Right' || SCC_Position == 'Left' || SCC_Position == 'Center')
								SCC_StartY += parseInt(SCC_DataFontSize)/2;
							if(SCC_ShowSeriesName == "true")
								SCC_Context.fillText(SCC_SeriesNames[i],SCC_StartX,SCC_StartY);
							if(SCC_ShowLabel == "true")
								SCC_Context.fillText(SCC_XaxisValues[j],SCC_StartX,SCC_StartY);
							if(SCC_ShowValue == 'true')
								SCC_Context.fillText(SCC_YaxisSeries[i][j],SCC_StartX,SCC_StartY);
						}
					}
					else
					{
						if(SCC_Position == 'Right' || SCC_Position == 'Left' || SCC_Position == 'Center')
								SCC_StartY += parseInt(SCC_DataFontSize)/2;
						if(SCC_LabelSeparator == '(Underline)')
							var separator = '_';
						if(SCC_LabelSeparator == '(Comma)')
							var separator = ',';
						if(SCC_LabelSeparator == '(Space)')
							var separator = ' ';
						if(SCC_LabelSeparator == '(Period)')
							var separator = '.';
						if(SCC_LabelSeparator == '(Semi Colon)')
							var separator = ';';
						if(SCC_LabelSeparator == '(Custom)')
							var separator = stackedcombinationchart.properties.appearance.text.datalabels.series[i].custom;
							
						var SCC_Text = "";
						if(SCC_ShowSeriesName == "true")
							SCC_Text += SCC_SeriesNames[i] + separator;
						if(SCC_ShowLabel == "true")
							SCC_Text += SCC_XaxisValues[j] + separator;
						if(SCC_ShowValue == 'true')
							SCC_Text += SCC_YaxisSeries[i][j];
						if(SCC_Text.charAt(SCC_Text.length - 1) == separator)
							SCC_Text = SCC_Text.substr(0,SCC_Text.length-1);
						SCC_Context.fillText(SCC_Text,SCC_StartX,SCC_StartY);
					}
					SCC_Context.closePath();
				
				SCC_StartX += SCC_ColumnWidth + SCC_MarkerGap;
					if(SCC_Position == 'Right')
						SCC_StartX -= SCC_ShapeSize/2 + LengthOfLongerText/2;
					else if(SCC_Position == 'Left')
						SCC_StartX += SCC_ShapeSize/2 + LengthOfLongerText/2;
			}
		}
	}
	}
}

function doSorting_SCC()
{
	if(stackedcombinationchart.properties.behavior.common.sorting.bydata.enable == 'true')
	{
		var SCC_YaxisSeriesTemp = [];
		var SelectedSeries = stackedcombinationchart.properties.behavior.common.sorting.bydata.series;
		var SortingOrder = stackedcombinationchart.properties.behavior.common.sorting.bydata.order;
		for(var i=0;i<stackedcombinationchart.data.series.length;i++)
			if(stackedcombinationchart.data.series[i].name == SelectedSeries)
				var SeriesNumber = i;
		SCC_YaxisSeriesTemp = 	stackedcombinationchart.data.series[SeriesNumber].values.split(',');
		for(var i=0;i<stackedcombinationchart.data.categorylabel.length;i++)
			SCC_XaxisValues[i] = stackedcombinationchart.data.categorylabel[i];
		var swapped;
		do
		{
			swapped = false;
			for(var i=0;i<SCC_YaxisSeriesTemp.length - 1;i++)
			{
				if(SortingOrder == 'Ascending')
				{
					if(SCC_YaxisSeriesTemp[i]>SCC_YaxisSeriesTemp[i+1])
					{
						var temp4 = SCC_YaxisSeriesTemp[i];
						SCC_YaxisSeriesTemp[i] = SCC_YaxisSeriesTemp[i+1];
						SCC_YaxisSeriesTemp[i+1] = temp4;
						if(SCC_YaxisSeries[SeriesNumber])
						{
							var temp = SCC_YaxisSeries[SeriesNumber][i];
							SCC_YaxisSeries[SeriesNumber][i] = SCC_YaxisSeries[SeriesNumber][i+1];
							SCC_YaxisSeries[SeriesNumber][i+1] = temp;
						}
						swapped = true;
						for(j=0;j<SCC_YaxisSeries.length;j++)
						{
							if(j != SeriesNumber)
							{
								var temp1 = SCC_YaxisSeries[j][i];
								SCC_YaxisSeries[j][i] = SCC_YaxisSeries[j][i+1];
								SCC_YaxisSeries[j][i+1] = temp1;
							}
						}
						var temp2 = SCC_XaxisValues[i];
						SCC_XaxisValues[i] = SCC_XaxisValues[i + 1];
						SCC_XaxisValues[i+1] = temp2;
					}
				}
				if(SortingOrder == 'Descending')
				{
					if(SCC_YaxisSeriesTemp[i]<SCC_YaxisSeriesTemp[i+1])
					{
						var temp4 = SCC_YaxisSeriesTemp[i];
						SCC_YaxisSeriesTemp[i] = SCC_YaxisSeriesTemp[i+1];
						SCC_YaxisSeriesTemp[i+1] = temp4;
						if(SCC_YaxisSeries[SeriesNumber])
						{
							var temp = SCC_YaxisSeries[SeriesNumber][i];
							SCC_YaxisSeries[SeriesNumber][i] = SCC_YaxisSeries[SeriesNumber][i+1];
							SCC_YaxisSeries[SeriesNumber][i+1] = temp;
						}
						swapped = true;
						for(j=0;j<SCC_YaxisSeries.length;j++)
						{
							if(j != SeriesNumber)
							{
								var temp1 = SCC_YaxisSeries[j][i];
								SCC_YaxisSeries[j][i] = SCC_YaxisSeries[j][i+1];
								SCC_YaxisSeries[j][i+1] = temp1;
							}
						}
						var temp2 = SCC_XaxisValues[i];
						SCC_XaxisValues[i] = SCC_XaxisValues[i + 1];
						SCC_XaxisValues[i+1] = temp2;
					}
				}
			}
		}while(swapped);
	}
	if(stackedcombinationchart.properties.behavior.common.sorting.bycategorylabel.enable == 'true')
	{
		var swapped;
		do
		{
			swapped = false;
			for(var i=0;i<SCC_XaxisValues.length - 1;i++)
			{
				if(stackedcombinationchart.properties.behavior.common.sorting.bycategorylabel.isreverseorder == 'false')
				{
					if(SCC_XaxisValues[i]>SCC_XaxisValues[i+1])
					{
						var temp = SCC_XaxisValues[i];
						SCC_XaxisValues[i] = SCC_XaxisValues[i + 1];
						SCC_XaxisValues[i+1] = temp;
						swapped = true;
						for(j=0;j<SCC_YaxisSeries.length;j++)
						{
							var temp1 = SCC_YaxisSeries[j][i];
							SCC_YaxisSeries[j][i] = SCC_YaxisSeries[j][i+1];
							SCC_YaxisSeries[j][i+1] = temp1;
						}
					}
				}
				if(stackedcombinationchart.properties.behavior.common.sorting.bycategorylabel.isreverseorder == 'true')
				{
					if(SCC_XaxisValues[i]<SCC_XaxisValues[i+1])
					{
						var temp = SCC_XaxisValues[i];
						SCC_XaxisValues[i] = SCC_XaxisValues[i + 1];
						SCC_XaxisValues[i+1] = temp;
						swapped = true;
						for(j=0;j<SCC_YaxisSeries.length;j++)
						{
							var temp1 = SCC_YaxisSeries[j][i];
							SCC_YaxisSeries[j][i] = SCC_YaxisSeries[j][i+1];
							SCC_YaxisSeries[j][i+1] = temp1;
						}
					}
				}
			}
		}while(swapped);
	}
}

function enableAlert_SCC(Value,Position)
{
	var from = [];
	var to = [];
	var color = [];
	for(var i=0;i<stackedcombinationchart.properties.alerts.alertthresholds.length;i++)
	{
		from[i] = stackedcombinationchart.properties.alerts.alertthresholds[i].from;
		to[i] = stackedcombinationchart.properties.alerts.alertthresholds[i].to;
		color[i] = stackedcombinationchart.properties.alerts.alertthresholds[i].color;
	}
	if(stackedcombinationchart.properties.alerts.byvalue == 'true')
	{
		for(var i=0;i<stackedcombinationchart.properties.alerts.alertthresholds.length;i++)
		{
			if(Value >= from[i] && Value < to[i])
				var FillColor = color[i];
		}
	}
	if(stackedcombinationchart.properties.alerts.aspercentoftarget == 'true')
	{
		var TargetValues = [];
		for(var i=0;i<stackedcombinationchart.properties.alerts.aspercentoftargetvalues.length;i++)
			TargetValues[i] = stackedcombinationchart.properties.alerts.aspercentoftargetvalues[i];
		var Percentage = Value * 100 / TargetValues[Position];
		for(var i=0;i<stackedcombinationchart.properties.alerts.alertthresholds.length;i++)
		{
			if(Percentage >= from[i] && Percentage < to[i])
				var FillColor = color[i];
		}
	}
	return FillColor;
}

function ColumnTransparency_SCC(FillColor)
{
	var SCC_bigint = parseInt(FillColor.replace("#",""), 16);
	var r = Number((SCC_bigint >> 16) & 255);
	var g = Number((SCC_bigint >> 8) & 255);
	var b = Number(SCC_bigint & 255);
	var SCC_transparency = Number(1 - ((stackedcombinationchart.properties.appearance.series.transparency).slice(0,((stackedcombinationchart.properties.appearance.series.transparency).length)-1)/100));
	return "rgba("+r+","+g+","+b+","+SCC_transparency+")";
}

function LineTransparency_SCC(FillColor)
{
	var SCC_bigint = parseInt(FillColor.replace("#",""), 16);
	var r = Number((SCC_bigint >> 16) & 255);
	var g = Number((SCC_bigint >> 8) & 255);
	var b = Number(SCC_bigint & 255);
	var SCC_transparency = Number(1 - ((stackedcombinationchart.properties.appearance.series.linesettings.markers.transparency).slice(0,((stackedcombinationchart.properties.appearance.series.linesettings.markers.transparency).length)-1)/100));
	return "rgba("+r+","+g+","+b+","+SCC_transparency+")";
}