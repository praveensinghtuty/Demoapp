
document.write("<script type='text/javascript' src='donutchart_json.js'></script>");

function drawDonutChart(ComponentID)
{	
DC_Temp = 1;
DC_MouseOverDoughnutValues = [],DC_MouseOverDoughnutLabels = [],DC_MouseOverDoughnutSlicesColor = [],DC_MouseOverTemp = 0;
DC_Labels = [],DC_TempLabels = [],DC_TempSlicesColor = [],DC_Temp1SlicesColor = [],DC_Temp1Values = [],DC_Temp1Labels = [];
DC_Values = [],DC_TempValues = [],DC_MouseOverTempDoughnutValues = [],DC_MouseOverTempDoughnutLabels = [];
DC_Percentage = [],DC_MouseOverPercentage = [];
DC_SlicesColor = [],DC_ArcStartX = [],DC_ArcStartY = [],DC_ArcEndX = [],DC_ArcEndY = [],DC_MidpointAngle = [];
DC_TotalValue = 0,DC_toRadian = Math.PI/180,DC_MouseOverTotalValue = 0,DC_MouseOverTotalValue = 0;
DC_ArcMidpointY = [],DC_ArcMidpointX = [];
DC_MouseOverArcMidpointY = [],DC_MouseOverArcMidpointX = [];
DC_MouseOverArcStartX = [],DC_MouseOverArcStartY = [],DC_MouseOverArcEndX = [],DC_MouseOverArcEndY = [],DC_MouseOverMidpointAngle = [];
DC_StartAngle = 0,DC_EndAngle = 0,DC_MouseOverStartAngle = 0,DC_MouseOverEndAngle = 0;
DC_OthersClicked = 0;


	DC_ShowTitle = donutchart.properties.appearance.text.charttitle.show;
	DC_ShowSubTitle = donutchart.properties.appearance.text.subtitle.show;
	DC_LegendShow = donutchart.properties.appearance.layout.legend.enable;
	DC_LegendPosition = donutchart.properties.appearance.layout.legend.legendposition;
	DC_Explode = donutchart.properties.appearance.layout.explode.enable;
	
	DC_Root = document.getElementById(ComponentID);
	DC_Width = document.getElementById(ComponentID).style.width;
	DC_Height = document.getElementById(ComponentID).style.height;
	
	if(DC_Width.search('%') >= 0)
		DC_Width = document.documentElement.clientWidth*(DC_Width.replace("%","")/100);
	else
		DC_Width = DC_Width.replace("px","");
	if(DC_Height.search('%') >= 0)
		DC_Height = document.documentElement.clientHeight*(DC_Height.replace("%","")/100);
	else
		DC_Height = DC_Height.replace("px","");
		
	DC_Div = document.createElement('div');
	
	DC_Div.style.width = DC_Width + 'px';
	DC_Div.style.height = DC_Height + 'px';
	DC_Div.id = 'myDC_Div';
	if(donutchart.properties.appearance.layout.chartarea.showchartbackground == 'true')
		DC_Div.style.backgroundColor = donutchart.properties.appearance.color.backgroundcolor;
	DC_Root.appendChild(DC_Div);
	
	
	if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
	{
		DC_Margin = donutchart.properties.appearance.layout.chartarea.margin.top;
		DC_Width = DC_Width - (2 * DC_Margin);
		DC_Height =  DC_Height - (2 * DC_Margin);
	}
	else
	{
		DC_MarginTop = donutchart.properties.appearance.layout.chartarea.margin.top;
		DC_MarginLeft = donutchart.properties.appearance.layout.chartarea.margin.left;
		DC_MarginRight = donutchart.properties.appearance.layout.chartarea.margin.right;
		DC_MarginBottom = donutchart.properties.appearance.layout.chartarea.margin.bottom;
		DC_Width = DC_Width - DC_MarginLeft - DC_MarginRight;
		DC_Height =  DC_Height - DC_MarginTop - DC_MarginBottom;
	}
	
	for(var i=0;i<donutchart.data.length;i++)
		DC_TotalValue += parseInt(donutchart.data[i].value);
	
	DC_Multiplier = 360/DC_TotalValue;
	DC_Values[0] = 0;
	for(var i=0;i<donutchart.data.length;i++)
	{
		DC_Percentage[i] =  parseInt((((DC_Multiplier * donutchart.data[i].value)/360)*100)*100)/100;
		DC_Values[i] = donutchart.data[i].value;
		DC_Labels[i] = donutchart.data[i].name;
		DC_SlicesColor[i] = donutchart.properties.appearance.series.datapoints[i];
	}
	
	
			
	
	
	
	if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
		createDC_TitleArea();
	if(DC_LegendShow == 'true')
		createDC_LegendTable();
	
	createDC_PlotArea();
}

function createDC_TitleArea()
{
	DC_TitleFill = donutchart.properties.appearance.layout.titlearea.titlefill.show;
	DC_TitleFillColor = donutchart.properties.appearance.layout.titlearea.titlefill.color;
	DC_TitleBorder = donutchart.properties.appearance.layout.titlearea.titleborder.show;
	DC_TitleBorderColor = donutchart.properties.appearance.layout.titlearea.titleborder.color;
	DC_TitleBorderThickness = donutchart.properties.appearance.layout.titlearea.titleborderthickness+'px solid';
	DC_TitleTable = document.createElement('table');
	
	DC_TitleTable.id = 'myDC_Title';
	DC_TitleTable.style.position = 'relative';
	if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
	{
		DC_TitleTable.style.left = DC_Margin + 'px';
		DC_TitleTable.style.top = DC_Margin + 'px';
	}
	else
	{
		DC_TitleTable.style.left = DC_MarginLeft + 'px';
		DC_TitleTable.style.top = DC_MarginTop + 'px';
	}
	DC_TitleTable.style.width = DC_Width + 'px';
	if(DC_TitleBorder == 'true')
	{
		DC_TitleTable.style.border = DC_TitleBorderThickness;;
		DC_TitleTable.style.borderColor = DC_TitleBorderColor;
	}
	if(DC_TitleFill == 'true')
		DC_TitleTable.style.backgroundColor = DC_TitleFillColor;
	
	if(DC_ShowTitle == 'true')
	{
		DC_FontFace = donutchart.properties.appearance.text.charttitle.fontface;
		DC_FontSize = donutchart.properties.appearance.text.charttitle.fontsize;
		DC_Bold = donutchart.properties.appearance.text.charttitle.style.bold;
		DC_Italic = donutchart.properties.appearance.text.charttitle.style.italic;
		DC_Underline = donutchart.properties.appearance.text.charttitle.style.underline;
		DC_TextColor = donutchart.properties.appearance.text.charttitle.style.color;
		DC_TextAlignment = donutchart.properties.appearance.text.charttitle.style.align;
		
		DC_TitleRow = document.createElement('tr');
		DC_TitleCell = document.createElement('td');
		DC_TitleCell.appendChild(document.createTextNode(donutchart.properties.general.title));
		
		DC_TitleCell.style.fontFamily = DC_FontFace;
		DC_TitleCell.style.fontSize = DC_FontSize + 'px';
		if(DC_Bold == "true")
			DC_TitleCell.style.fontWeight = "bold";
		if(DC_Italic == "true")
			DC_TitleCell.style.fontStyle = "italic";
		if(DC_Underline == "true")
			DC_TitleCell.style.textDecoration = "underline";
		DC_TitleCell.style.color = DC_TextColor;
		DC_TitleCell.style.textAlign = DC_TextAlignment;
		
		DC_TitleRow.appendChild(DC_TitleCell);
		DC_TitleTable.appendChild(DC_TitleRow);
		
	}
	if(DC_ShowSubTitle == 'true')
	{
		DC_FontFace = donutchart.properties.appearance.text.subtitle.fontface;
		DC_FontSize = donutchart.properties.appearance.text.subtitle.fontsize;
		DC_Bold = donutchart.properties.appearance.text.subtitle.style.bold;
		DC_Italic = donutchart.properties.appearance.text.subtitle.style.italic;
		DC_Underline = donutchart.properties.appearance.text.subtitle.style.underline;
		DC_TextColor = donutchart.properties.appearance.text.subtitle.style.color;
		DC_TextAlignment = donutchart.properties.appearance.text.subtitle.style.align;
		
		DC_TitleRow = document.createElement('tr');
		DC_TitleCell = document.createElement('td');
		DC_TitleCell.appendChild(document.createTextNode(donutchart.properties.general.subtitle));
		
		DC_TitleCell.style.fontFamily = DC_FontFace;
		DC_TitleCell.style.fontSize = DC_FontSize + 'px';
		if(DC_Bold == "true")
			DC_TitleCell.style.fontWeight = "bold";
		if(DC_Italic == "true")
			DC_TitleCell.style.fontStyle = "italic";
		if(DC_Underline == "true")
			DC_TitleCell.style.textDecoration = "underline";
		DC_TitleCell.style.color = DC_TextColor;
		DC_TitleCell.style.textAlign = DC_TextAlignment;
		
		DC_TitleRow.appendChild(DC_TitleCell);
		DC_TitleTable.appendChild(DC_TitleRow);
	}
	
	DC_Div.appendChild(DC_TitleTable);
	DC_Root.appendChild(DC_Div);
	DC_Height = DC_Height - document.getElementById('myDC_Title').offsetHeight - 10;
}

function createDC_LegendTable()
{
	DC_LegendFill = donutchart.properties.appearance.layout.legend.legendfill.show;
	DC_LegendFillColor = donutchart.properties.appearance.layout.legend.legendfill.color;
	DC_LegendBorder = donutchart.properties.appearance.layout.legend.legendborder.show;
	DC_LegendBorderColor = donutchart.properties.appearance.layout.legend.legendborder.color;
	DC_LegendBorderThickness = donutchart.properties.appearance.layout.legend.legendborderthickness + 'px solid';
	
	
	DC_FontFace = donutchart.properties.appearance.text.legend.fontface;
	DC_FontSize = donutchart.properties.appearance.text.legend.fontsize;
	DC_Bold = donutchart.properties.appearance.text.legend.style.bold;
	DC_Italic = donutchart.properties.appearance.text.legend.style.italic;
	DC_Underline = donutchart.properties.appearance.text.legend.style.underline;
	DC_TextColor = donutchart.properties.appearance.text.legend.style.color;
	DC_TextAlignment = donutchart.properties.appearance.text.legend.style.align;
	
	if(DC_LegendPosition == 'Right' || DC_LegendPosition == 'Left')
	{
		DC_LegendDiv1 = document.createElement('div');
		DC_LegendDiv1.style.position = 'relative';
		DC_LegendDiv1.style.height = DC_Height + 'px';
		if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
		{
			if(DC_ShowTitle == 'false' && DC_ShowSubTitle == 'false')
				DC_LegendDiv1.style.top = parseInt(DC_Margin) + 'px';
			else
				DC_LegendDiv1.style.top = parseInt(DC_Margin) + 10 + 'px';
		}
		else
		{
			if(DC_ShowTitle == 'false' && DC_ShowSubTitle == 'false')
				DC_LegendDiv1.style.top = parseInt(DC_MarginTop) + 'px';
			else
				DC_LegendDiv1.style.top = parseInt(DC_MarginTop) + 10 + 'px';
		}
		DC_LegendDiv1.id = 'DC_LegendDiv1';
		DC_LegendDiv1.style.overflowX = 'hidden';
		
		DC_Div.appendChild(DC_LegendDiv1);
		DC_Root.appendChild(DC_Div);
		
		DC_LegendDiv2 = document.createElement('div');
		DC_LegendDiv2.style.height = DC_Height + 'px';
		
		DC_LegendDiv2.id = 'DC_LegendDiv2';
		DC_LegendDiv2.style.overflowY = 'auto';
		DC_LegendDiv1.appendChild(DC_LegendDiv2);
		
		DC_LegendTable = document.createElement('table');
		DC_LegendTable.style.height = DC_Height + 'px';
		DC_LegendTable.id = 'DC_LegendTable';
		
		
		DC_LegendTable.style.fontFamily = DC_FontFace;
		DC_LegendTable.style.fontSize = DC_FontSize + 'px';
		if(DC_Bold == "true")
			DC_LegendTable.style.fontWeight = "bold";
		if(DC_Italic == "true")
			DC_LegendTable.style.fontStyle = "italic";
		if(DC_Underline == "true")
			DC_LegendTable.style.textDecoration = "underline";
		DC_LegendTable.style.color = DC_TextColor;
		DC_LegendTable.style.textAlign = DC_TextAlignment;
		
						
		if(DC_LegendBorder == 'true')
		{
			DC_LegendTable.style.border = DC_LegendBorderThickness;;
			DC_LegendTable.style.borderColor = DC_LegendBorderColor;
		}
		if(DC_LegendFill == 'true')
			DC_LegendTable.style.backgroundColor = DC_LegendFillColor;
			
		for(i=0;i<DC_Values.length;i++)
		{
			DC_BoxDiv = document.createElement('div');
			DC_BoxDiv.style.height = DC_FontSize + 'px';
			DC_BoxDiv.style.width = DC_FontSize + 'px';
			DC_BoxDiv.style.cssFloat = 'left';
			DC_BoxDiv.style.backgroundColor = DC_SlicesColor[i];
			DC_LegendTableRow = document.createElement('tr');
			DC_LegendTableCell = document.createElement('td');
			
			DC_LegendTableCell.appendChild(DC_BoxDiv);
			DC_LegendTableCell.appendChild(document.createTextNode('\u00a0'));
			DC_LegendTableCell.appendChild(document.createTextNode(DC_Labels[i]));
			DC_LegendTableRow.appendChild(DC_LegendTableCell);
			DC_LegendTable.appendChild(DC_LegendTableRow);
		}
		DC_LegendDiv2.appendChild(DC_LegendTable);
		document.getElementById('DC_LegendTable').style.cursor = 'pointer';
		
		if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
		{		
			if(DC_LegendPosition == 'Right')
			{
				document.getElementById('DC_LegendDiv1').style.right = DC_Margin + 'px';
				document.getElementById('DC_LegendDiv1').style.cssFloat = 'right';
			}
			if(DC_LegendPosition == 'Left')
			{
				document.getElementById('DC_LegendDiv1').style.left = DC_Margin + 'px';
				document.getElementById('DC_LegendDiv1').style.cssFloat = 'left';
			}
		}
		else
		{
			if(DC_LegendPosition == 'Right')
			{
				document.getElementById('DC_LegendDiv1').style.right = DC_MarginRight + 'px';
				document.getElementById('DC_LegendDiv1').style.cssFloat = 'right';
			}
			if(DC_LegendPosition == 'Left')
			{
				document.getElementById('DC_LegendDiv1').style.left = DC_MarginLeft + 'px';
				document.getElementById('DC_LegendDiv1').style.cssFloat = 'left';
			}
		}
		document.getElementById('DC_LegendDiv1').style.width = document.getElementById('DC_LegendTable').offsetWidth + 'px';
		document.getElementById('DC_LegendDiv2').style.width = document.getElementById('DC_LegendTable').offsetWidth + 20 + 'px';
		
		DC_Width = DC_Width - document.getElementById('DC_LegendDiv1').offsetWidth - 10 + 'px';	
		
	}
	if(DC_LegendPosition == 'Top' || DC_LegendPosition == 'Bottom')
	{
		DC_LegendDiv1 = document.createElement('div');
		DC_LegendDiv1.id = 'DC_LegendDiv1';
		DC_LegendDiv1.style.width = DC_Width + 'px';
		DC_LegendDiv1.style.position = 'relative';
		if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
			DC_LegendDiv1.style.left = DC_Margin + 'px';
		else
			DC_LegendDiv1.style.left = DC_MarginLeft + 'px';
		DC_LegendDiv1.style.overflowY = 'hidden';
		
		DC_Div.appendChild(DC_LegendDiv1);
		DC_Root.appendChild(DC_Div);
		
		DC_LegendDiv2 = document.createElement('div');
		DC_LegendDiv2.id = 'DC_LegendDiv2';
		DC_LegendDiv2.style.overflowX = 'auto';
		DC_LegendDiv1.appendChild(DC_LegendDiv2);
		
		
		DC_LegendTable = document.createElement('table');
		DC_LegendTable.id = 'DC_LegendTable';
		DC_LegendTable.style.width = DC_Width + 'px';
						
		DC_LegendTable.style.fontFamily = DC_FontFace;
		DC_LegendTable.style.fontSize = DC_FontSize + 'px';
		if(DC_Bold == "true")
			DC_LegendTable.style.fontWeight = "bold";
		if(DC_Italic == "true")
			DC_LegendTable.style.fontStyle = "italic";
		if(DC_Underline == "true")
			DC_LegendTable.style.textDecoration = "underline";
		DC_LegendTable.style.color = DC_TextColor;
		DC_LegendTable.style.textAlign = DC_TextAlignment;
		
		if(DC_LegendBorder == 'true')
		{
			DC_LegendTable.style.border = DC_LegendBorderThickness;;
			DC_LegendTable.style.borderColor = DC_LegendBorderColor;
		}
		if(DC_LegendFill == 'true')
			DC_LegendTable.style.backgroundColor = DC_LegendFillColor;
		
		DC_LegendTableRow = document.createElement('tr');
		for(var i=0;i<DC_Values.length;i++)
		{
			DC_BoxDiv = document.createElement('div');
			DC_BoxDiv.style.height = DC_FontSize + 'px';
			DC_BoxDiv.style.width = DC_FontSize + 'px';
			DC_BoxDiv.style.cssFloat = 'left';
			DC_BoxDiv.style.backgroundColor = DC_SlicesColor[i];;
			DC_LegendTableCell = document.createElement('td');
			
			DC_LegendTableCell.appendChild(DC_BoxDiv);
			DC_LegendTableCell.appendChild(document.createTextNode('\u00a0'));
			DC_LegendTableCell.appendChild(document.createTextNode(DC_Labels[i]));
			DC_LegendTableRow.appendChild(DC_LegendTableCell);
			DC_LegendTable.appendChild(DC_LegendTableRow);
		}
		
		DC_LegendDiv2.appendChild(DC_LegendTable);
		document.getElementById('DC_LegendTable').style.cursor = 'pointer';
		DC_Root.appendChild(DC_Div);
		document.getElementById('DC_LegendDiv1').style.height = document.getElementById('DC_LegendTable').offsetHeight + 'px';
		document.getElementById('DC_LegendDiv2').style.height = document.getElementById('DC_LegendTable').offsetHeight + 20 + 'px';
		
		if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
		{
			if(DC_LegendPosition == 'Top')
			{
				if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
					document.getElementById('DC_LegendDiv1').style.top = parseInt(DC_Margin) + 10 + 'px';
				else
					document.getElementById('DC_LegendDiv1').style.top = DC_Margin + 'px';
			}
			if(DC_LegendPosition == 'Bottom')
			{
				if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
					document.getElementById('DC_LegendDiv1').style.top = DC_Height - document.getElementById('DC_LegendTable').offsetHeight - document.getElementById('myDC_Title').offsetHeight - DC_Margin + 'px';
				else
					document.getElementById('DC_LegendDiv1').style.top = DC_Height - document.getElementById('DC_LegendTable').offsetHeight - DC_Margin + 'px';
			}
		}
		else
		{
			if(DC_LegendPosition == 'Top')
			{
				if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
					document.getElementById('DC_LegendDiv1').style.top = parseInt(DC_MarginTop) + 10 + 'px';
				else
					document.getElementById('DC_LegendDiv1').style.top = DC_MarginTop + 'px';
			}
			if(DC_LegendPosition == 'Bottom')
			{
				if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
					document.getElementById('DC_LegendDiv1').style.top = DC_Height - document.getElementById('DC_LegendTable').offsetHeight - document.getElementById('myDC_Title').offsetHeight - DC_MarginBottom + 'px';
				else
					document.getElementById('DC_LegendDiv1').style.top = DC_Height - document.getElementById('DC_LegendTable').offsetHeight - DC_MarginBottom + 'px';
			}
		}
		
		DC_Height = DC_Height - document.getElementById('DC_LegendTable').offsetHeight - 10;
	}
}

function createDC_PlotArea()
{
	DC_PlotFill = donutchart.properties.appearance.layout.plotarea.plotareafill.show;
	DC_PlotFillColor = donutchart.properties.appearance.layout.plotarea.plotareafill.color;
	DC_PlotBorder = donutchart.properties.appearance.layout.plotarea.plotareaborder.show;
	DC_PlotBorderColor = donutchart.properties.appearance.layout.plotarea.plotareaborder.color;
	DC_PlotBorderThickness = donutchart.properties.appearance.layout.plotarea.plotareaborderthickness+'px solid';
	DC_Transparency = donutchart.properties.appearance.series.transparency;
	
	DC_PlotArea = document.createElement('canvas');
	
	DC_PlotArea.style.width = parseInt(DC_Width) + 'px';
	DC_PlotArea.width = parseInt(DC_Width);
	DC_PlotArea.height = DC_Height;
	DC_PlotArea.style.height = DC_Height + 'px';
	DC_PlotArea.style.position = 'relative';

	DC_PlotArea.style.boxSizing = 'border-box';
	DC_PlotArea.style.MozBoxSizing = 'border-box';
	DC_PlotArea.style.OBoxSizing = 'border-box';
	DC_PlotArea.style.WebkitBoxSizing = 'border-box';
	DC_PlotArea.id = 'DC_PlotArea';
	DC_PlotArea.style.opacity = 1 - (DC_Transparency.slice(0,(DC_Transparency.length)-1)/100);
	
	if(DC_PlotBorder == 'true')
	{
		DC_PlotArea.style.border = DC_PlotBorderThickness;;
		DC_PlotArea.style.borderColor = DC_PlotBorderColor;
	}
	if(DC_PlotFill == 'true')
		DC_PlotArea.style.backgroundColor = DC_PlotFillColor;
	
	if(donutchart.properties.appearance.layout.chartarea.margin.allside == 'true')
	{
		if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
		{
			DC_PlotArea.style.top = 10 + parseInt(DC_Margin) + 'px';
			DC_PlotArea.style.left = DC_Margin + 'px';
		}
		else
		{
			DC_PlotArea.style.top = parseInt(DC_Margin) + 'px';
			DC_PlotArea.style.left = DC_Margin + 'px';
		}
		
		if(DC_LegendShow == 'true')
		{
			if(DC_LegendPosition == 'Left')
				DC_PlotArea.style.left = parseInt(DC_Margin) + 10 + 'px';
			if(DC_LegendPosition == 'Top')
				DC_PlotArea.style.top = parseInt(DC_PlotArea.style.top) + 10 + 'px';
			if(DC_LegendPosition == 'Bottom')
				DC_PlotArea.style.top = parseInt(document.getElementById('DC_LegendDiv1').style.top) - parseInt(DC_PlotArea.style.height) - parseInt(document.getElementById('DC_LegendTable').offsetHeight) - 10 + 'px';
		}
	}
	else
	{
		if(DC_ShowTitle == 'true' || DC_ShowSubTitle == 'true')
		{
			DC_PlotArea.style.top = 10 + parseInt(DC_MarginTop) + 'px';
			DC_PlotArea.style.left = DC_MarginLeft + 'px';
		}
		else
		{
			DC_PlotArea.style.top = parseInt(DC_MarginTop) + 'px';
			DC_PlotArea.style.left = DC_MarginLeft + 'px';
		}
		
		if(DC_LegendShow == 'true')
		{
			if(DC_LegendPosition == 'Left')
				DC_PlotArea.style.left = parseInt(DC_MarginLeft) + 10 + 'px';
			if(DC_LegendPosition == 'Top')
				DC_PlotArea.style.top = parseInt(DC_PlotArea.style.top) + 10 + 'px';
			if(DC_LegendPosition == 'Bottom')
				DC_PlotArea.style.top = parseInt(document.getElementById('DC_LegendDiv1').style.top) - parseInt(DC_PlotArea.style.height) - parseInt(document.getElementById('DC_LegendTable').offsetHeight) - 10 + 'px';
		}
	}
	
	DC_Div.appendChild(DC_PlotArea);
	
	if( parseInt(DC_PlotArea.style.width) < parseInt(DC_PlotArea.style.height))
		DC_Radius = (parseInt(DC_PlotArea.style.width) - 20 )/2;
	else
		DC_Radius = (parseInt(DC_PlotArea.style.height) - 20 )/2;
		
	DC_Context = DC_PlotArea.getContext('2d');
	
	if(donutchart.properties.behavior.sorting.enable == 'true')
		sorting_DC();
	
	createPieChart_DC();
	
	
	createDoughNut_DC();
	if(donutchart.properties.appearance.text.datalabels.show == 'true')
		showDataLabels_DC();
	if(donutchart.properties.appearance.text.mouseovervalues.show == 'true' || DC_Explode == 'true')
		onMouseOver_DC();
	if(donutchart.properties.insertion.enable == 'true')
	{
		DC_SelectedItemForDataInsertion = donutchart.properties.insertion.defaultitem - 1;
		DataInsertionOptions_DC();
		if(donutchart.properties.insertion.interactionoptions == 'MouseClick')
			DC_PlotArea.addEventListener('click',enableDataInsertion_DC,false);
		else
			DC_PlotArea.addEventListener('mousemove',enableDataInsertion_DC,false);
	}
	
	DC_PlotArea.addEventListener('mouseout',function(evt){
	DC_MouseOverDiv.style.display = 'none';
	DC_Context.clearRect(0,0,DC_PlotArea.width,DC_PlotArea.height);
	
	createPieChart_DC();
	
	
		createDoughNut_DC();
	if(donutchart.properties.appearance.text.datalabels.show == 'true')
		showDataLabels_DC();
	},false);
} // End of Doughnut Chart function

function onMouseOver_DC()
{
	// Mouse Over
	DC_fontFace = donutchart.properties.appearance.text.mouseovervalues.fontface;
	DC_fontSize = donutchart.properties.appearance.text.mouseovervalues.fontsize;
	DC_bold = donutchart.properties.appearance.text.mouseovervalues.style.bold;
	DC_italic = donutchart.properties.appearance.text.mouseovervalues.style.italic;
	DC_underline = donutchart.properties.appearance.text.mouseovervalues.style.underline;
	DC_textColor = donutchart.properties.appearance.text.mouseovervalues.style.color;
	DC_textAlignment = donutchart.properties.appearance.text.mouseovervalues.style.align;
	
	DC_MouseOverDiv = document.createElement('div');
	
	DC_MouseOverDiv.style.display = 'none';
	DC_MouseOverDiv.id = 'DC_MouseOver'; 
		
	DC_MouseOverDiv.style.fontFamily = DC_fontFace;
	DC_MouseOverDiv.style.fontSize = DC_fontSize + 'px';
	if(DC_bold == "true")
		DC_MouseOverDiv.style.fontWeight = "bold";
	if(DC_italic == "true")
		DC_MouseOverDiv.style.fontStyle = "italic";
	if(DC_underline == "true")
		DC_MouseOverDiv.style.textDecoration = "underline";
	DC_MouseOverDiv.style.color = DC_textColor;
	DC_MouseOverDiv.style.textAlign = DC_textAlignment;
	
	DC_Div.appendChild(DC_MouseOverDiv);
	
	DC_PlotArea.addEventListener('mousemove',function(evt){
	
	
	DC_ExplodeRadius = donutchart.properties.appearance.layout.explode.radius;
	var canvasX = evt.clientX - document.getElementById('DC_PlotArea').offsetLeft;
	var canvasY = evt.clientY - document.getElementById('DC_PlotArea').offsetTop;
	var centerX = parseInt(DC_PlotArea.style.width)/2;
	var centerY = parseInt(DC_PlotArea.style.height)/2;
	var br = document.createElement('br');
				
	if(((Math.pow((canvasX - centerX),2)) + (Math.pow((canvasY - centerY),2)) - (Math.pow((DC_Radius),2))) < 0)
	{
		DC_StartAngle = 0,DC_EndAngle = 0;
		this.style.cursor = 'pointer';
		
		
						
		var AngleOfParticularPoint;
		
		AngleOfParticularPoint = Math.acos((canvasX - centerX)/Math.sqrt((Math.pow((canvasX - centerX),2)) + (Math.pow((canvasY - centerY),2))))/DC_toRadian;
		
		if(canvasY < centerY)
			AngleOfParticularPoint = 360 - AngleOfParticularPoint;
		
		DC_StartAngle = 0,DC_EndAngle = 0;
		for(var i=0;i<DC_Values.length;i++)		
		{
			DC_EndAngle += DC_Multiplier * DC_Values[i];
			if( AngleOfParticularPoint > DC_StartAngle && AngleOfParticularPoint < DC_EndAngle)
				var DC_ItemNumber = i;
			DC_StartAngle = DC_EndAngle;
		}
		
		
		if(donutchart.properties.appearance.text.mouseovervalues.show == 'true')
		{
				DC_MouseOverDiv.style.position = 'absolute';
				DC_MouseOverDiv.style.left = evt.clientX + 10 + 'px';
				DC_MouseOverDiv.style.top = evt.clientY + 10 + 'px';
				DC_MouseOverDiv.style.width = '50px';
				DC_MouseOverDiv.style.display = 'block';
				DC_MouseOverDiv.style.opacity = 0.5;
				DC_MouseOverDiv.style.backgroundColor = '#FFFFFF';
				DC_MouseOverDiv.innerHTML = DC_Labels[DC_ItemNumber];
				DC_MouseOverDiv.appendChild(br);
				DC_MouseOverDiv.innerHTML += DC_Values[DC_ItemNumber];
				DC_MouseOverDiv.appendChild(br);
				DC_MouseOverDiv.innerHTML += DC_Percentage[DC_ItemNumber];
			
		}
		
		if(DC_Explode == 'true')
		{
			DC_Context.clearRect(0,0,DC_PlotArea.width,DC_PlotArea.height);
			DC_StartAngle = 0,DC_EndAngle = 0;
			
			for(var i=0;i<DC_Values.length;i++)
			{
				DC_ExplodeCenterX = (DC_PlotArea.width/2) + (DC_ExplodeRadius * Math.cos(DC_MidpointAngle[i] * DC_toRadian));
				DC_ExplodeCenterY = (DC_PlotArea.height/2) + (DC_ExplodeRadius * Math.sin(DC_MidpointAngle[i] * DC_toRadian));
				DC_EndAngle += DC_Multiplier * DC_Values[i];
				DC_Context.beginPath();
				if(	DC_ItemNumber != i )
				{
					DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
					DC_Context.fillStyle = '#B2B2B2';
					DC_Context.lineWidth = 2;
					DC_Context.strokeStyle = '#B2B2B2';
					DC_Context.arc(parseInt(DC_PlotArea.style.width)/2 + 5,parseInt(DC_PlotArea.style.height)/2,DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
					DC_StartAngle = DC_EndAngle;
					DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
				}
				else
				{
					DC_Context.lineTo(DC_ExplodeCenterX,DC_ExplodeCenterY);
					DC_Context.fillStyle = '#B2B2B2';
					DC_Context.lineWidth = 2;
					DC_Context.strokeStyle = '#B2B2B2';
					DC_Context.arc(DC_ExplodeCenterX + 5,DC_ExplodeCenterY,DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
					DC_StartAngle = DC_EndAngle
					DC_Context.lineTo(DC_ExplodeCenterX,DC_ExplodeCenterY);
				}
				DC_Context.fill();
				DC_Context.stroke();
				DC_Context.closePath();
			}
			DC_StartAngle = 0,DC_EndAngle = 0;
			for(var i=0;i<DC_Values.length;i++)
			{
				DC_ExplodeCenterX = (DC_PlotArea.width/2) + (DC_ExplodeRadius * Math.cos(DC_MidpointAngle[i] * DC_toRadian));
				DC_ExplodeCenterY = (DC_PlotArea.height/2) + (DC_ExplodeRadius * Math.sin(DC_MidpointAngle[i] * DC_toRadian));
				DC_EndAngle += DC_Multiplier * DC_Values[i];
				DC_Context.beginPath();
				if(	DC_ItemNumber != i )
				{ 
					DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
					DC_Context.fillStyle = DC_SlicesColor[i];
					DC_Context.arc(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2,DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
					DC_ArcStartX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + (DC_Radius * Math.cos(DC_StartAngle * DC_toRadian)));
					DC_ArcStartY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + (DC_Radius * Math.sin(DC_StartAngle * DC_toRadian)));
					DC_ArcEndX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + (DC_Radius * Math.cos(DC_EndAngle * DC_toRadian)));
					DC_ArcEndY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + (DC_Radius * Math.sin(DC_EndAngle * DC_toRadian)));
					DC_ArcMidpointX[i] = (DC_PlotArea.width/2) + (DC_Radius * Math.cos(DC_MidpointAngle[i] * DC_toRadian));
					DC_ArcMidpointY[i] = (DC_PlotArea.height/2) + (DC_Radius * Math.sin(DC_MidpointAngle[i] * DC_toRadian));
					DC_StartAngle = DC_EndAngle;
					DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
					
				}
				else
				{
					DC_Context.lineTo(DC_ExplodeCenterX,DC_ExplodeCenterY);
					DC_Context.fillStyle = DC_SlicesColor[i];
					DC_Context.arc(DC_ExplodeCenterX,DC_ExplodeCenterY,DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
					DC_ArcStartX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.cos(DC_StartAngle * DC_toRadian)));
					DC_ArcStartY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.sin(DC_StartAngle * DC_toRadian)));
					DC_ArcEndX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.cos(DC_EndAngle * DC_toRadian)));
					DC_ArcEndY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.sin(DC_EndAngle * DC_toRadian)));
					DC_ArcMidpointX[i] = (DC_PlotArea.width/2) + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.cos(DC_MidpointAngle[i] * DC_toRadian));
					DC_ArcMidpointY[i] = (DC_PlotArea.height/2) + ((DC_Radius + parseInt(DC_ExplodeRadius)) * Math.sin(DC_MidpointAngle[i] * DC_toRadian));
					DC_StartAngle = DC_EndAngle;
					DC_Context.lineTo(DC_ExplodeCenterX,DC_ExplodeCenterY);
					
				}
				DC_Context.fill();
				if(donutchart.properties.appearance.series.showlines.status == 'true')
				{
					DC_Context.lineWidth = donutchart.properties.appearance.series.showlines.thickness;
					DC_Context.strokeStyle = donutchart.properties.appearance.series.showlines.color;
					DC_Context.stroke();
				}
				DC_Context.closePath();
			}
			
			{
				createDoughNut_DC();
				DC_StartAngle = 0,DC_EndAngle = 0;
				
				for(var i=0;i<DC_Values.length;i++)
				{
					DC_EndAngle += DC_Multiplier * DC_Values[i];
					if(	DC_ItemNumber == i )
					{
						DC_Context.beginPath();
						DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
						DC_Context.fillStyle = donutchart.properties.appearance.layout.plotarea.plotareafill.color;
						DC_Context.strokeStyle = donutchart.properties.appearance.layout.plotarea.plotareafill.color;
						DC_Context.arc((parseInt(DC_PlotArea.style.width)/2),(parseInt(DC_PlotArea.style.height)/2),DC_DoughNutRadius + parseInt(DC_ExplodeRadius),DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
						DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
						DC_Context.fill();
						DC_Context.stroke();
						DC_Context.closePath();
					}
					DC_StartAngle = DC_EndAngle;
				}
			}
			if(donutchart.properties.appearance.text.datalabels.show == 'true')
				showDataLabels_DC();
			}
		}
		
		else
		{
			this.style.cursor = 'default';
			
			DC_MouseOverDiv.style.display = 'none';
			DC_Context.clearRect(0,0,DC_PlotArea.width,DC_PlotArea.height);
			
			createPieChart_DC();
			
			
				createDoughNut_DC();
			if(donutchart.properties.appearance.text.datalabels.show == 'true')
				showDataLabels_DC();
		}
		
		{
			if(((Math.pow((canvasX - centerX),2)) + (Math.pow((canvasY - centerY),2)) - (Math.pow((DC_DoughNutRadius),2))) < 0)
			{
				this.style.cursor = 'default';
				
				DC_MouseOverDiv.style.display = 'none';
				DC_Context.clearRect(0,0,DC_PlotArea.width,DC_PlotArea.height);
				
				createPieChart_DC();
				
				
					createDoughNut_DC();
				if(donutchart.properties.appearance.text.datalabels.show == 'true')
					showDataLabels_DC();
			}
		}
	
	},false);
	
}

function createPieChart_DC()
{ 
	DC_StartAngle = 0,DC_EndAngle = 0;
	for(var i=0;i<DC_Values.length;i++)
	{
		DC_EndAngle += DC_Multiplier * DC_Values[i];
		DC_Context.beginPath();
		DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
		DC_Context.fillStyle = '#B2B2B2';
		DC_Context.lineWidth = 2;
		DC_Context.strokeStyle = '#B2B2B2';
		DC_Context.arc((parseInt(DC_PlotArea.style.width)/2) + 5,(parseInt(DC_PlotArea.style.height)/2),DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
		DC_StartAngle = DC_EndAngle;
		DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
		DC_Context.fill();
		DC_Context.stroke();
		DC_Context.closePath();
	}
	DC_StartAngle = 0,DC_EndAngle = 0;
	for(var i=0;i<DC_Values.length;i++)
	{
		DC_EndAngle += DC_Multiplier * DC_Values[i];
		DC_Percentage[i] =  parseInt((((DC_Multiplier * DC_Values[i])/360)*100)*100)/100 + '%';
		DC_Context.beginPath();
		DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
		DC_Context.fillStyle = DC_SlicesColor[i];
		DC_Context.lineWidth = 2;
		DC_Context.strokeStyle = '#472400';
		DC_Context.arc(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2,DC_Radius,DC_StartAngle * DC_toRadian,DC_EndAngle * DC_toRadian,false);
		DC_Context.lineTo(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2);
		DC_Context.fill();
		if(donutchart.properties.appearance.series.showlines.status == 'true')
		{
			DC_Context.lineWidth = donutchart.properties.appearance.series.showlines.thickness;
			DC_Context.strokeStyle = donutchart.properties.appearance.series.showlines.color;
			DC_Context.stroke();
		}
		DC_Context.closePath();
		DC_ArcStartX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + (DC_Radius * Math.cos(DC_StartAngle * DC_toRadian)));
		DC_ArcStartY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + (DC_Radius * Math.sin(DC_StartAngle * DC_toRadian)));
		DC_ArcEndX[i] = parseInt(parseInt(DC_PlotArea.width)/2 + (DC_Radius * Math.cos(DC_EndAngle * DC_toRadian)));
		DC_ArcEndY[i] = parseInt(parseInt(DC_PlotArea.height)/2 + (DC_Radius * Math.sin(DC_EndAngle * DC_toRadian)));
		DC_MidpointAngle[i] = (DC_StartAngle + DC_EndAngle)/2;
		DC_ArcMidpointX[i] = (DC_PlotArea.width/2) + (DC_Radius * Math.cos(DC_MidpointAngle[i] * DC_toRadian));
		DC_ArcMidpointY[i] = (DC_PlotArea.height/2) + (DC_Radius * Math.sin(DC_MidpointAngle[i] * DC_toRadian));
		DC_StartAngle = DC_EndAngle;
		DC_Context.closePath();
	}
	
}

function createDoughNut_DC()
{
	DC_DoughNutRadius = (donutchart.properties.general.radius) * DC_Radius / 100;
	DC_Context.beginPath();
	DC_Context.fillStyle = donutchart.properties.appearance.layout.plotarea.plotareafill.color;
	DC_Context.arc(parseInt(DC_PlotArea.style.width)/2,parseInt(DC_PlotArea.style.height)/2,DC_DoughNutRadius,0,2*Math.PI,false);
	DC_Context.fill();
	if(donutchart.properties.appearance.series.showlines.status == 'true')
	{
		DC_Context.lineWidth = donutchart.properties.appearance.series.showlines.thickness;
		DC_Context.strokeStyle = donutchart.properties.appearance.series.showlines.color;
		DC_Context.stroke();
	}
	DC_Context.closePath();
}

function showDataLabels_DC()
{ 
	for(var i=0;i<DC_Values.length;i++)
	{	
		DC_Context.beginPath();
		
		DC_MidpointX = (DC_ArcStartX[i] + DC_ArcEndX[i])/2;
		DC_MidpointY = (DC_ArcStartY[i] + DC_ArcEndY[i])/2;
		DC_SectorMidpointX = ((DC_PlotArea.width/2) + DC_ArcMidpointX[i])/2;
		DC_SectorMidpointY = ((DC_PlotArea.height/2) + DC_ArcMidpointY[i])/2;
	
		DC_ShowLabel = donutchart.properties.appearance.text.datalabels.labelcontains.categorylabel;
		DC_ShowValue = donutchart.properties.appearance.text.datalabels.labelcontains.value;
		DC_ShowPercentage = donutchart.properties.appearance.text.datalabels.labelcontains.percentage;
		DC_LabelSeparator = donutchart.properties.appearance.text.datalabels.labelseparator;
		
		DC_DataFontFace = donutchart.properties.appearance.text.datalabels.fontface;
		DC_DataFontSize = donutchart.properties.appearance.text.datalabels.fontsize + 'px ';
		DC_DataBold = donutchart.properties.appearance.text.datalabels.style.bold;
		DC_DataItalic = donutchart.properties.appearance.text.datalabels.style.italic;
		DC_DataUnderline = donutchart.properties.appearance.text.datalabels.style.underline;
		DC_DataTextColor = donutchart.properties.appearance.text.datalabels.style.color;
		var DC_FontType = "";
		if(DC_DataBold == 'true')
			DC_FontType += "bold ";
		if(DC_DataItalic == 'true')
			DC_FontType += "italic ";
		
		DC_Context.font = DC_FontType + DC_DataFontSize + DC_DataFontFace;
		DC_Context.fillStyle = DC_DataTextColor;
		DC_Context.textAlign = 'center';
		
		if(DC_LabelSeparator == '(New Line)')
		{
			var DC_TextY = 0;
			if(DC_ShowLabel == "true" && DC_ShowValue == "true" && DC_ShowPercentage == 'true')
			{
				if(DC_ShowLabel == "true")
				{
					DC_Context.fillText(DC_Labels[i],DC_SectorMidpointX,DC_SectorMidpointY - (parseInt(DC_FontSize)/2));
					DC_TextY += parseInt(DC_FontSize);
				}
				if(DC_ShowValue == "true")
				{
					DC_Context.fillText(DC_Values[i],DC_SectorMidpointX,(DC_SectorMidpointY)-(parseInt(DC_FontSize)/2) + DC_TextY);
					DC_TextY += parseInt(DC_FontSize);
				}
				if(DC_ShowPercentage == 'true')
					DC_Context.fillText(DC_Percentage[i],DC_SectorMidpointX,(DC_SectorMidpointY)-(parseInt(DC_FontSize)/2) + DC_TextY);
			}
			else if((DC_ShowLabel == "true" && DC_ShowValue == "true") || (DC_ShowValue == "true" && DC_ShowPercentage == 'true') || (DC_ShowLabel == "true" && DC_ShowPercentage == 'true'))
			{
				if(DC_ShowLabel == "true")
				{
					DC_Context.fillText(DC_Labels[i],DC_SectorMidpointX,DC_SectorMidpointY - (parseInt(DC_FontSize)/2));
					DC_TextY += parseInt(DC_FontSize);
				}
				if(DC_ShowValue == "true")
				{
					DC_Context.fillText(DC_Values[i],DC_SectorMidpointX,(DC_SectorMidpointY)-(parseInt(DC_FontSize)/2) + DC_TextY);
					DC_TextY += parseInt(DC_FontSize);
				}
				if(DC_ShowPercentage == 'true')
					DC_Context.fillText(DC_Percentage[i],DC_SectorMidpointX,(DC_SectorMidpointY)-(parseInt(DC_FontSize)/2) + DC_TextY);
			}
			else
			{
				if(DC_ShowLabel == "true")
					DC_Context.fillText(DC_Labels[i],DC_SectorMidpointX,DC_SectorMidpointY);
				if(DC_ShowValue == "true")
					DC_Context.fillText(DC_Values[i],DC_SectorMidpointX,DC_SectorMidpointY);
				if(DC_ShowPercentage == 'true')
					DC_Context.fillText(DC_Percentage[i],DC_SectorMidpointX,DC_SectorMidpointY);
			}
		}
		else
		{
			if(DC_LabelSeparator == '(Underline)')
				var separator = '_';
			if(DC_LabelSeparator == '(Comma)')
				var separator = ',';
			if(DC_LabelSeparator == '(Space)')
				var separator = ' ';
			if(DC_LabelSeparator == '(Period)')
				var separator = '.';
			if(DC_LabelSeparator == '(Semi Colon)')
				var separator = ';';
			if(DC_LabelSeparator == '(Custom)')
				var separator = donutchart.properties.appearance.text.datalabels.custom;
				
			var DC_Text = "";
			if(DC_ShowLabel == "true")
				DC_Text += DC_Labels[i] + separator;
			if(DC_ShowValue == "true")
				DC_Text += DC_Values[i] + separator;
			if(DC_ShowPercentage == 'true')
				DC_Text += DC_Percentage[i];
			if(DC_Text.charAt(DC_Text.length - 1) == separator)
				DC_Text = DC_Text.substr(0,DC_Text.length-1);
			DC_Context.fillText(DC_Text,DC_SectorMidpointX,DC_SectorMidpointY);
		}
		DC_Context.closePath();
	}
}


function sorting_DC()
{
	for(var i=0;i<DC_Values.length;i++)
	{
		DC_TempValues[i] = DC_Values[i];
		DC_TempLabels[i] = DC_Labels[i];
		DC_TempSlicesColor[i] = DC_SlicesColor[i];
	}
	
	if(donutchart.properties.behavior.sorting.by == 'Data')
	{
		DC_Values.sort();
		if(donutchart.properties.behavior.sorting.order == 'Descending')
			DC_Values.reverse();
		for(var i=0;i<DC_Values.length;i++)
		{
			for(var j=0;j<DC_Values.length;j++)
			{
				if(DC_Values[i] == DC_TempValues[j])
				{
					DC_Labels[i] = DC_TempLabels[j];
					DC_SlicesColor[i] = DC_TempSlicesColor[j];
				}
			}
		}
	}
	if(donutchart.properties.behavior.sorting.by == 'Category Labels')
	{
		DC_Labels.sort();
		if(donutchart.properties.behavior.sorting.order == 'Descending')
			DC_Labels.reverse();
		for(var i=0;i<DC_Labels.length;i++)
		{
			for(var j=0;j<DC_Labels.length;j++)
			{
				if(DC_Labels[i] == DC_TempLabels[j])
				{
					DC_Values[i] = DC_TempValues[j];
					DC_SlicesColor[i] = DC_TempSlicesColor[j];
				}
			}
		}
	}
	
	
}

function enableDataInsertion_DC(evt)
{ 
	var mouseX = evt.clientX - document.getElementById('DC_PlotArea').offsetLeft;
	var mouseY = evt.clientY - document.getElementById('DC_PlotArea').offsetTop;
	
	var centerX = parseInt(DC_PlotArea.style.width)/2;
	var centerY = parseInt(DC_PlotArea.style.height)/2;
	
	if(((Math.pow((mouseX - centerX),2)) + (Math.pow((mouseY - centerY),2)) - (Math.pow((DC_Radius),2))) < 0)
	{
		var AngleOfParticularPoint;
		
		AngleOfParticularPoint = Math.acos((mouseX - centerX)/Math.sqrt((Math.pow((mouseX - centerX),2)) + (Math.pow((mouseY - centerY),2))))/DC_toRadian;
		
		if(mouseY < centerY)
			AngleOfParticularPoint = 360 - AngleOfParticularPoint;
		
		DC_StartAngle = 0,DC_EndAngle = 0;
		for(var i=0;i<DC_Values.length;i++)		
		{
			DC_EndAngle += DC_Multiplier * DC_Values[i];
			if( AngleOfParticularPoint > DC_StartAngle && AngleOfParticularPoint < DC_EndAngle)
				var DC_ItemNumber = i;
			DC_StartAngle = DC_EndAngle;
		}
		
		for(var i=0;i<donutchart.data.length;i++)
		{
			if(DC_Labels[DC_ItemNumber] == donutchart.data[i].name)
				DC_SelectedItemForDataInsertion = i;
		}
		
		DataInsertionOptions_DC();
	}
}

function DataInsertionOptions_DC()
{
	if(donutchart.properties.insertion.insertiontype == 'Position')
		DC_OutputForDrilldown = DC_SelectedItemForDataInsertion + 1;
	else if(donutchart.properties.insertion.insertiontype == 'Value')
		DC_OutputForDrilldown = donutchart.data[DC_SelectedItemForDataInsertion].value;
	else if(donutchart.properties.insertion.insertiontype == 'Row')
		DC_OutputForDrilldown = donutchart.properties.insertion.sourcedata[DC_SelectedItemForDataInsertion];
	else if(donutchart.properties.insertion.insertiontype == 'Column')
	{
		var DC_SourceData = [];
		var ColumnNumber = 0;
		var ColumnData = [];
		for(var j=0;j<donutchart.properties.insertion.sourcedata.length;j++)
			DC_SourceData[j] = donutchart.properties.insertion.sourcedata[j];
									
		while(DC_SourceData[0].length > 0)
		{
			ColumnData[ColumnNumber] = "";
			for(var j=0;j<donutchart.properties.insertion.sourcedata.length;j++)
			{
				if(DC_SourceData[j].search(',')!=(-1))
				{
					Data = DC_SourceData[j].substring(0,DC_SourceData[j].indexOf(','));
					DC_SourceData[j] = DC_SourceData[j].slice(DC_SourceData[j].indexOf(',')+1);
					ColumnData[ColumnNumber] += Data.toString() + ',';
				}
				else
				{
					ColumnData[ColumnNumber] += DC_SourceData[j].toString() + ',';
					DC_SourceData[j] = "";
				}
			}
			ColumnData[ColumnNumber] = ColumnData[ColumnNumber].slice(0,ColumnData[ColumnNumber].length - 1);
			ColumnNumber++;
		}
		if(DC_SelectedItemForDataInsertion < ColumnNumber)
			DC_OutputForDrilldown = ColumnData[DC_SelectedItemForDataInsertion];
		else
			DC_OutputForDrilldown = "";
	}
	else if(donutchart.properties.insertion.insertiontype == 'Status List')
	{
		var StatusListData = "";
		for(var j=0;j<donutchart.data.length;j++)
			if(DC_SelectedItemForDataInsertion == j)
				StatusListData += 1 + ',';
			else
				StatusListData += 0 + ',';
		DC_OutputForDrilldown = StatusListData.slice(0,StatusListData.length - 1);
	}
	//alert(DC_OutputForDrilldown);
}