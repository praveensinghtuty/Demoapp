document.write('<scr'+'ipt type="text/javascript" src="period_selector_multiple_yqm.js" ></scr'+'ipt>');
var count_yqmm=[],countyr_yqmm=[],countq_yqmm=[],output_yqmm=[],outputyr_yqmm=[],outputq_yqmm=[];
var result_yqmm,resultq_yqmm,resultyr_yqmm,ms_yqmm,yrcount_yqmm=0,csyr_yqmm=0,year,mq_yqmm,my_yqmm,intq_yqmm,inty_yqmm,resultbw_yqmm,intm_yqmm;
var multiple_ps_title,multiple_ps_current_status,multiple_ps_custom_status,multiple_ps_month_status,multiple_ps_month_text,multiple_ps_quarter_status,multiple_ps_quarter_text,multiple_ps_calendar_limit_status,multiple_ps_start_year,multiple_ps_end_year,multiple_ps_title_show,multiple_ps_title_font_face,multiple_ps_title_bold,multiple_ps_title_italic,multiple_ps_title_underline,multiple_ps_title_color,multiple_ps_title_align,multiple_ps_title_size;
create_period_selector_yqmm= function(psyqmm_id)
	{
	periodselector_yqmm_width=document.getElementById(psyqmm_id).style.width;
	
	periodselector_yqmm_height=document.getElementById(psyqmm_id).style.height;
	
	var multiple_style2 = document.createElement('style');
multiple_style2.type = 'text/css';
multiple_style2.innerHTML = ' .unselect { cursor:pointer; -moz-user-select: -moz-none;-khtml-user-select: none; -webkit-user-select: none;-ms_yqmm-user-select: none;user-select: none; }';
document.getElementsByTagName('head')[0].appendChild(multiple_style2);

	
	multiple_ps_title=multiple_ps.properties.general.title;
	multiple_ps_current_status=multiple_ps.properties.behavior.current.status;
	multiple_ps_custom_status=multiple_ps.properties.behavior.custom.status;
	multiple_ps_month_status=multiple_ps.properties.behavior.custom.month.status;
	multiple_ps_month_text=multiple_ps.properties.behavior.custom.month.text;
	multiple_ps_year_status=multiple_ps.properties.behavior.custom.year.status;
	multiple_ps_year_text=multiple_ps.properties.behavior.custom.year.text;
	multiple_ps_calendar_limit_status=multiple_ps.properties.behavior.calendar_limit.status;
	multiple_ps_start_year=multiple_ps.properties.behavior.calendar_limit.startyear;
	multiple_ps_end_year=multiple_ps.properties.behavior.calendar_limit.endyear;
	
	// text attributes
	//title attributes
	multiple_ps_title_show=multiple_ps.properties.appearance.text.title.show;
	multiple_ps_title_font_face=multiple_ps.properties.appearance.text.title.fontface;
	multiple_ps_title_size=multiple_ps.properties.appearance.text.title.size;
	multiple_ps_title_bold=multiple_ps.properties.appearance.text.title.style.bold;
	multiple_ps_title_italic=multiple_ps.properties.appearance.text.title.style.italic;
	multiple_ps_title_underline=multiple_ps.properties.appearance.text.title.style.underline;
	multiple_ps_title_color=multiple_ps.properties.appearance.text.title.style.color;
	multiple_ps_title_align=multiple_ps.properties.appearance.text.title.style.align;
	
	//year attributes
	multiple_ps_year_show=multiple_ps.properties.appearance.text.year.show;
	multiple_ps_year_font_face=multiple_ps.properties.appearance.text.year.fontface;
	multiple_ps_year_size=multiple_ps.properties.appearance.text.year.size;
	multiple_ps_year_bold=multiple_ps.properties.appearance.text.year.style.bold;
	multiple_ps_year_italic=multiple_ps.properties.appearance.text.year.style.italic;
	multiple_ps_year_underline=multiple_ps.properties.appearance.text.year.style.underline;
	multiple_ps_year_color=multiple_ps.properties.appearance.text.year.style.color;
	multiple_ps_year_align=multiple_ps.properties.appearance.text.year.style.align;
	
	
	//month attributes
	multiple_ps_month_show=multiple_ps.properties.appearance.text.month.show;
	multiple_ps_month_font_face=multiple_ps.properties.appearance.text.month.fontface;
	multiple_ps_month_size=multiple_ps.properties.appearance.text.month.size;
	multiple_ps_month_bold=multiple_ps.properties.appearance.text.month.style.bold;
	multiple_ps_month_italic=multiple_ps.properties.appearance.text.month.style.italic;
	multiple_ps_month_underline=multiple_ps.properties.appearance.text.month.style.underline;
	multiple_ps_month_color=multiple_ps.properties.appearance.text.month.style.color;
	multiple_ps_month_align=multiple_ps.properties.appearance.text.month.style.align;
	
	//qurater attributes
	multiple_ps_quarter_show=multiple_ps.properties.appearance.text.quarter.show;
	multiple_ps_quarter_font_face=multiple_ps.properties.appearance.text.quarter.fontface;
	multiple_ps_quarter_size=multiple_ps.properties.appearance.text.quarter.size;
	multiple_ps_quarter_bold=multiple_ps.properties.appearance.text.quarter.style.bold;
	multiple_ps_quarter_italic=multiple_ps.properties.appearance.text.quarter.style.italic;
	multiple_ps_quarter_underline=multiple_ps.properties.appearance.text.quarter.style.underline;
	multiple_ps_quarter_color=multiple_ps.properties.appearance.text.quarter.style.color;
	multiple_ps_quarter_align=multiple_ps.properties.appearance.text.quarter.style.align;
	
	
	//selector color values
	yqmm_borderlinecolor= multiple_ps.properties.appearance.color.borderlinecolor;
	yqmm_backgroundcolor= multiple_ps.properties.appearance.color.backgroundcolor;
	
	//text color
	yqmm_quartertext_default=multiple_ps.properties.appearance.color.quartertext.defaultcolor;
	yqmm_quartertext_over=multiple_ps.properties.appearance.color.quartertext.overcolor;
	yqmm_quartertext_selected=multiple_ps.properties.appearance.color.quartertext.selectedcolor;
	
	yqmm_yeartext_default=multiple_ps.properties.appearance.color.yeartext.defaultcolor;
	yqmm_yeartext_over=multiple_ps.properties.appearance.color.yeartext.overcolor;
	yqmm_yeartext_selected=multiple_ps.properties.appearance.color.yeartext.selectedcolor;
	
	yqmm_monthtext_default=multiple_ps.properties.appearance.color.monthtext.defaultcolor;
	yqmm_monthtext_over=multiple_ps.properties.appearance.color.monthtext.overcolor;
	yqmm_monthtext_selected=multiple_ps.properties.appearance.color.monthtext.selectedcolor;
	
	//background color
	yqmm_quarterbackground_default=multiple_ps.properties.appearance.color.quarterbackground.defaultcolor;
	yqmm_quarterbackground_over=multiple_ps.properties.appearance.color.quarterbackground.overcolor;
	yqmm_quarterbackground_selected=multiple_ps.properties.appearance.color.quarterbackground.selectedcolor;
	
	yqmm_yearbackground_default=multiple_ps.properties.appearance.color.yearbackground.defaultcolor;
	yqmm_yearbackground_over=multiple_ps.properties.appearance.color.yearbackground.overcolor;
	yqmm_yearbackground_selected=multiple_ps.properties.appearance.color.yearbackground.selectedcolor;
	
	yqmm_monthbackground_default=multiple_ps.properties.appearance.color.monthbackground.defaultcolor;
	yqmm_monthbackground_over=multiple_ps.properties.appearance.color.monthbackground.overcolor;
	yqmm_monthbackground_selected=multiple_ps.properties.appearance.color.monthbackground.selectedcolor;
	
	
	
	
	
	
	monthcollection_yqmm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 var c_yqmm, r_yqmm, t_yqmm,count_inc=1,row_yqmm=1;
 var root_yqmm = document.getElementById(psyqmm_id);
    t_yqmm = document.createElement('table');
	t_yqmm.id="period_multiple";
	t_yqmm.setAttribute("border","1")
	for(i=0;i<6;i++)
	{
	
   r_yqmm = t_yqmm.insertRow(i); 
   r_yqmm.id="yqmm_row"+i;
   
   if(i==0)
   {
   if(multiple_ps.properties.appearance.text.title.show=="true")
   {
   c_yqmm = r_yqmm.insertCell(0);
   c_yqmm.innerHTML = multiple_ps_title;
   c_yqmm.id="multiple_ps_title"
   c_yqmm.setAttribute("colspan","7");
   }
   }
   else if(i==1)
   {
   for(k=0;k<4;k++)
	{
    c_yqmm = r_yqmm.insertCell(k);
    c_yqmm.innerHTML ="Y"+(k+1);
	c_yqmm.id="mps_y"+(k+1);
	
   }
   }
   else if(i==2)
   {
   for(l=0;l<4;l++)
	{
    c_yqmm = r_yqmm.insertCell(l);
    c_yqmm.innerHTML ="Q"+(l+1);
	c_yqmm.id="mps_q"+(l+1);
	
   }
   }
   else
   {
   count_inc=row_yqmm;
	for(j=0;j<4;j++)
	{
    c_yqmm = r_yqmm.insertCell(j);
    c_yqmm.innerHTML = monthcollection_yqmm[count_inc-1];
	c_yqmm.id="mps_m"+count_inc;
	
	count_inc=count_inc+3;
	
	}
	row_yqmm++;
	}
    }
	root_yqmm.appendChild(t_yqmm);

		document.getElementById("period_multiple").style.borderCollapse="collapse";
		document.getElementById('period_multiple').className = 'unselect';
		document.getElementById("period_multiple").style.height=periodselector_yqmm_height;
	document.getElementById("period_multiple").style.width=periodselector_yqmm_width;
		document.getElementById('period_multiple').style.borderColor=yqmm_borderlinecolor;
		document.getElementById("period_multiple").border=1;
		if(multiple_ps.properties.appearance.text.title.show=="true")
   {
		document.getElementById("multiple_ps_title").style.fontFamily=multiple_ps_title_font_face;
		if(multiple_ps_title_bold=="true")
		{
		document.getElementById("multiple_ps_title").style.fontWeight="bold";
		}
		if(multiple_ps_title_italic=="true")
		{
		document.getElementById("multiple_ps_title").style.fontStyle="italic";
		}
		if(multiple_ps_title_underline=="true")
		{
		document.getElementById("multiple_ps_title").style.textDecoration="underline";
		}
		document.getElementById("multiple_ps_title").style.border=0;
		document.getElementById("multiple_ps_title").style.color=multiple_ps_title_color;
		document.getElementById("multiple_ps_title").style.fontSize=multiple_ps_title_size;
		document.getElementById("multiple_ps_title").style.textAlign=multiple_ps_title_align;
		document.getElementById("multiple_ps_title").colSpan="7";
		document.getElementById("multiple_ps_title").innerHTML=multiple_ps_title;
	
	}
	
	
		document.getElementById("yqmm_row0").style.borderTop="0px";
		document.getElementById("yqmm_row0").style.borderLeft="0px";
		document.getElementById("yqmm_row0").style.borderRight="0px";
		
		if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById("yqmm_row0").style.borderTopColor="#fff";
	document.getElementById("yqmm_row0").style.borderLeftColor="#fff";
	document.getElementById("yqmm_row0").style.borderRightColor="#fff";
	document.getElementById("yqmm_row0").style.borderTopStyle="solid";
	document.getElementById("yqmm_row0").style.borderLeftStyle="solid";
	document.getElementById("yqmm_row0").style.borderRightStyle="solid";
	}
	else
	{
	document.getElementById("yqmm_row0").style.borderTop="solid #fff 1px";
	document.getElementById("yqmm_row0").style.borderLeft="solid #fff 1px";
	document.getElementById("yqmm_row0").style.borderRight="solid #fff 1px";
	}
		
		
		
		
		
		
		for(i=1;i<=4;i++)
	{
	
	if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById("mps_y"+i).borderColor=yqmm_borderlinecolor;
	
	}
	else
	{
	document.getElementById("mps_y"+i).style.borderColor=yqmm_borderlinecolor;
	}
	document.getElementById("mps_y"+i).onmouseover=function(){dochange_yqmm(this.id);};
	document.getElementById("mps_y"+i).onmouseout=function(){dorechange_yqmm(this.id);};
	document.getElementById("mps_y"+i).onclick=function(){recordvalue_yqmm(this.id);outputdeliver_yqmm();};
	document.getElementById("mps_y"+i).style.backgroundColor= yqmm_yearbackground_default;
	document.getElementById("mps_y"+i).style.color= yqmm_yeartext_default;
	document.getElementById("mps_y"+i).style.fontFamily=multiple_ps_year_font_face;
		if(multiple_ps.properties.appearance.text.year.style.bold=="true")
		{
		document.getElementById("mps_y"+i).style.fontWeight="bold";
		}
		if(multiple_ps.properties.appearance.text.year.style.italic=="true")
		{
		document.getElementById("mps_y"+i).style.fontStyle="italic";
		}
		if(multiple_ps.properties.appearance.text.year.style.underline=="true")
		{
		document.getElementById("mps_y"+i).style.textDecoration="underline";
		}
		document.getElementById("mps_y"+i).style.backgroundColorcolor=yqmm_yearbackground_default;
		//document.getElementById("mps_y"+i).style.color= multiple_ps_year_color;
		document.getElementById("mps_y"+i).style.fontSize=multiple_ps_year_size;
		document.getElementById("mps_y"+i).style.textAlign=multiple_ps_year_align;
	
	
	}
	
	for(i=1;i<=4;i++)
	{
	
	if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById("mps_q"+i).borderColor=yqmm_borderlinecolor;
	
	}
	else
	{
	document.getElementById("mps_q"+i).style.borderColor=yqmm_borderlinecolor;
	}
	document.getElementById("mps_q"+i).onmouseover=function(){dochange_yqmm(this.id);};
	document.getElementById("mps_q"+i).onmouseout=function(){dorechange_yqmm(this.id);};
	document.getElementById("mps_q"+i).onclick=function(){recordvalue_yqmm(this.id);outputdeliver_yqmm();};
	document.getElementById("mps_q"+i).style.backgroundColor= yqmm_quarterbackground_default;
	document.getElementById("mps_q"+i).style.color= yqmm_quartertext_default;
	document.getElementById("mps_q"+i).style.fontFamily=multiple_ps_quarter_font_face;
		if(multiple_ps.properties.appearance.text.quarter.style.bold=="true")
		{
		document.getElementById("mps_q"+i).style.fontWeight="bold";
		}
		if(multiple_ps.properties.appearance.text.quarter.style.italic=="true")
		{
		document.getElementById("mps_q"+i).style.fontStyle="italic";
		}
		if(multiple_ps.properties.appearance.text.quarter.style.underline=="true")
		{
		document.getElementById("mps_q"+i).style.textDecoration="underline";
		}
		document.getElementById("mps_q"+i).style.backgroundColorcolor=yqmm_quarterbackground_default;
		//document.getElementById("mps_q"+i).style.color=date_font_color;
		document.getElementById("mps_q"+i).style.fontSize=multiple_ps_quarter_size;
		document.getElementById("mps_q"+i).style.textAlign=multiple_ps_quarter_align;
	
	
	}
	
	for(i=1;i<=12;i++)
	{
	
	if(navigator.appName == 'Microsoft Internet Explorer')
	{
	document.getElementById("mps_m"+i).borderColor=yqmm_borderlinecolor;
	
	}
	else
	{
	document.getElementById("mps_m"+i).style.borderColor=yqmm_borderlinecolor;
	}
	document.getElementById("mps_m"+i).onmouseover=function(){dochange_yqmm(this.id);};
	document.getElementById("mps_m"+i).onmouseout=function(){dorechange_yqmm(this.id);};
	document.getElementById("mps_m"+i).onclick=function(){recordvalue_yqmm(this.id);outputdeliver_yqmm();};
	document.getElementById("mps_m"+i).style.backgroundColor= yqmm_monthbackground_default;
	document.getElementById("mps_m"+i).style.color= yqmm_monthtext_default;
	document.getElementById("mps_m"+i).style.fontFamily=multiple_ps_month_font_face;
		if(multiple_ps.properties.appearance.text.month.style.bold=="true")
		{
		document.getElementById("mps_m"+i).style.fontWeight="bold";
		}
		if(multiple_ps.properties.appearance.text.month.style.italic=="true")
		{
		document.getElementById("mps_m"+i).style.fontStyle="italic";
		}
		if(multiple_ps.properties.appearance.text.month.style.underline=="true")
		{
		document.getElementById("mps_m"+i).style.textDecoration="underline";
		}
		document.getElementById("mps_m"+i).style.backgroundColorcolor=yqmm_monthbackground_default;
		//document.getElementById("mps_m"+i).style.color=date_font_color;
		document.getElementById("mps_m"+i).style.fontSize=multiple_ps_month_size;
		document.getElementById("mps_m"+i).style.textAlign=multiple_ps_month_align;
	
	
	}
		
			
		
		
		
		
		
		
		
		
	var today = new Date();
				var month= today.getMonth()+1;
			var calendarstatus=multiple_ps_calendar_limit_status;	
			if(calendarstatus=="true")
			{
				year=multiple_ps_end_year;
			}
			else
			{
				year= today.getFullYear();
			}
		for(var e=4;e>=1;e--)
		{
		
		document.getElementById("mps_y"+e).innerHTML=year-yrcount_yqmm;
		yrcount_yqmm++;
		document.getElementById("mps_y"+e).style.backgroundColor= yqmm_yearbackground_default;
		document.getElementById("mps_y"+e).style.color= yqmm_yeartext_default;
		document.getElementById("mps_q"+e).style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q"+e).style.color= yqmm_quartertext_default;		
		}		
	
		for(var i=0;i<=4;i++)
			{
				countyr_yqmm[i]=0;
				outputyr_yqmm[i]=0;
				countq_yqmm[i]=0;
				outputq_yqmm[i]=0;
			}
		for(var i=0;i<=12;i++)
			{
				count_yqmm[i]=0;
				output_yqmm[i]=0;
			}
		
		
		var customStatus=multiple_ps.properties.behavior.custom.status;
		if(multiple_ps.properties.appearance.text.title.show=="true")
   {
		document.getElementById("multiple_ps_title").innerHTML=multiple_ps_title;
		}
		if(customStatus=="true")
			{	
				var CustomYear=multiple_ps.properties.behavior.custom.year.text;
				for(var e=4;e>=1;e--)
				{
					csyr_yqmm=document.getElementById("mps_y"+e).innerHTML;
					if(CustomYear==csyr_yqmm)
					{
					document.getElementById("mps_y"+e).style.backgroundColor= yqmm_yearbackground_selected;
					document.getElementById("mps_y"+e).style.color=  yqmm_yeartext_selected;
					outputyr_yqmm[e]=CustomYear;
					countyr_yqmm[e]=1;
					}
				}
				//edit
				var CustomMonth=multiple_ps.properties.behavior.custom.month.text;			
				document.getElementById("mps_m"+CustomMonth).style.backgroundColor= yqmm_monthbackground_selected;
				document.getElementById("mps_m"+CustomMonth).style.color= yqmm_monthtext_selected;
				output_yqmm[CustomMonth]=CustomMonth;
				count_yqmm[CustomMonth]=1;
			}
		else
			{	
				for(var e=4;e>=1;e--)
				{
					csyr_yqmm=document.getElementById("mps_y"+e).innerHTML;
					
					if(year==csyr_yqmm)
					{
					
					document.getElementById("mps_y"+e).style.backgroundColor= yqmm_yearbackground_selected;
					
					document.getElementById("mps_y"+e).style.color=  yqmm_yeartext_selected;
					outputyr_yqmm[e]=year;
					countyr_yqmm[e]=1;
					}
				}
				document.getElementById("mps_m"+month).style.backgroundColor= yqmm_monthbackground_selected;
				document.getElementById("mps_m"+month).style.color= yqmm_monthtext_selected;
				output_yqmm[month]=month;
				count_yqmm[month]=1;
				outputyr_yqmm[year]=year;
					countyr_yqmm[year]=1;
			}

	}


function recordvalue_yqmm(a)
{	
	if(a=="mps_y1"||a=="mps_y2"||a=="mps_y3"||a=="mps_y4")
		{
		inty_yqmm = a.substring(5);
		
		inty_yqmm = Number(inty_yqmm);
		countyr_yqmm[inty_yqmm]++;
		my_yqmm=countyr_yqmm[inty_yqmm]%2;
		var yrreuse=document.getElementById(a).innerHTML;
		if(my_yqmm==1)
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_selected;
		document.getElementById(a).style.color= yqmm_yeartext_selected;
		outputyr_yqmm[inty_yqmm]=yrreuse;
		
		}
		else
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_default;
		document.getElementById(a).style.color= yqmm_yeartext_default;
		outputyr_yqmm[inty_yqmm]=0;
		
		}
		}
		
		
		
	else if(a=="mps_q1"||a=="mps_q2"||a=="mps_q3"||a=="mps_q4")
		{
		
		intq_yqmm = a.substring(5);
		intq_yqmm = Number(intq_yqmm);		
		countq_yqmm[intq_yqmm]++;		
		mq_yqmm=countq_yqmm[intq_yqmm]%2;
		
		if(mq_yqmm==1)
		{
		document.getElementById(a).style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById(a).style.color= yqmm_quartertext_selected;
		outputq_yqmm[intq_yqmm]=intq_yqmm;
		if(a=="mps_q1")
		{
		for(i=1;i<=3;i++)
		{
		document.getElementById("mps_m"+i).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+i).style.color=yqmm_monthtext_selected;
		if(output_yqmm[i]!=i)
		{
		output_yqmm[i]=i;
		count_yqmm[i]++;
		}
		}
		}
		else if(a=="mps_q2")
		{
		for(m=4;m<=6;m++)
		{
		document.getElementById("mps_m"+m).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+m).style.color= yqmm_monthtext_selected;
		if(output_yqmm[m]!=m)
		{
		output_yqmm[m]=m;
		count_yqmm[m]++;
		}
		}
		}
		else if(a=="mps_q3")
		{
		for(n=7;n<=9;n++)
		{
		document.getElementById("mps_m"+n).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+n).style.color= yqmm_monthtext_selected;
		if(output_yqmm[n]!=n)
		{
		output_yqmm[n]=n;
		count_yqmm[n]++;
		}
		}
		}
		else if(a=="mps_q4")
		{
		for(b=10;b<=12;b++)
		{
		document.getElementById("mps_m"+b).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+b).style.color= yqmm_monthtext_selected;
		if(output_yqmm[b]!=b)
		{
		output_yqmm[b]=b;
		count_yqmm[b]++;
		}
		}
		}
		}		
		else
		{
		intq_yqmm = a.substring(5);
		intq_yqmm = Number(intq_yqmm);
		document.getElementById("mps_q"+intq_yqmm).style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q"+intq_yqmm).style.color= yqmm_quartertext_default;
		outputq_yqmm[intq_yqmm]=0;
		if(a=="mps_q1")
		{
		for(i=1;i<=3;i++)
		{
		document.getElementById("mps_m"+i).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+i).style.color= yqmm_monthtext_default;
		if(output_yqmm[i]!=0)
		{
		output_yqmm[i]=0;
		count_yqmm[i]++;
		}
		}
		}
		else if(a=="mps_q2")
		{
		for(m=4;m<=6;m++)
		{
		document.getElementById("mps_m"+m).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+m).style.color= yqmm_monthtext_default;
		if(output_yqmm[m]!=0)
		{
		output_yqmm[m]=0;
		count_yqmm[m]++;
		}
		}
		}
		else if(a=="mps_q3")
		{
		for(n=7;n<=9;n++)
		{
		document.getElementById("mps_m"+n).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+n).style.color= yqmm_monthtext_default;
		if(output_yqmm[n]!=0)
		{
		output_yqmm[n]=0;
		count_yqmm[n]++;
		}
		}
		}
		else if(a=="mps_q4")
		{
		for(b=10;b<=12;b++)
		{
		document.getElementById("mps_m"+b).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+b).style.color= yqmm_monthtext_default;
		if(output_yqmm[b]!=0)
		{
		output_yqmm[b]=0;
		count_yqmm[b]++;
		}
		}
		}
		}
		}			
		
	else
{	intm_yqmm = a.substring(5);
		intm_yqmm = Number(intm_yqmm);
	count_yqmm[intm_yqmm]++;
	var mo=count_yqmm[intm_yqmm]%2;
	ms_yqmm=mo;
	if(mo==1)
		{

		document.getElementById("mps_m"+intm_yqmm).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+intm_yqmm).style.color= yqmm_monthtext_selected;
		
		output_yqmm[intm_yqmm]=intm_yqmm;
		}
	else
	{
		document.getElementById("mps_m"+intm_yqmm).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+intm_yqmm).style.color= yqmm_monthtext_default;
		
		output_yqmm[intm_yqmm]=0;
	
	}


if(output_yqmm[1]=="1"&&output_yqmm[2]=="2"&&output_yqmm[3]=="3")
{
document.getElementById("mps_q1").style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById("mps_q1").style.color= yqmm_quartertext_selected;
		if(outputq_yqmm[1]!=1)
		{
		outputq_yqmm[1]=1;
		countq_yqmm[1]++;
		}		
}
else
{
document.getElementById("mps_q1").style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q1").style.color= yqmm_quartertext_default;
		outputq_yqmm[1]=0;
		countq_yqmm[1]++;		
}
if(output_yqmm[4]=="4"&&output_yqmm[5]=="5"&&output_yqmm[6]=="6")
{
document.getElementById("mps_q2").style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById("mps_q2").style.color= yqmm_quartertext_selected;
		if(outputq_yqmm[2]!=2)
		{
		outputq_yqmm[2]=2;
		countq_yqmm[2]++;
		}
}
else
{
document.getElementById("mps_q2").style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q2").style.color= yqmm_quartertext_default;
		outputq_yqmm[2]=0;
		countq_yqmm[2]++;		
}
if(output_yqmm[7]=="7"&&output_yqmm[8]=="8"&&output_yqmm[9]=="9")
{
document.getElementById("mps_q3").style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById("mps_q3").style.color= yqmm_quartertext_selected;
		if(outputq_yqmm[3]!=3)
		{
		outputq_yqmm[3]=3;
		countq_yqmm[3]++;
		}		
}
else
{
document.getElementById("mps_q3").style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q3").style.color= yqmm_quartertext_default;
		outputq_yqmm[3]=0;
		countq_yqmm[3]++;		
}	
if(output_yqmm[10]=="10"&&output_yqmm[11]=="11"&&output_yqmm[12]=="12")
{
document.getElementById("mps_q4").style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById("mps_q4").style.color= yqmm_quartertext_selected;
		if(outputq_yqmm[4]!=4)
		{
		outputq_yqmm[4]=4;
		countq_yqmm[4]++;
		}		
}
else
{
document.getElementById("mps_q4").style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById("mps_q4").style.color= yqmm_quartertext_default;
		outputq_yqmm[4]=0;
		countq_yqmm[4]++;		
}	
}
}


function outputdeliver_yqmm()
{
		result_yqmm="",resultq_yqmm="",resultyr_yqmm="",resultbw_yqmm="";
		for(var j=12;j>=0;j--)
		{
			if(output_yqmm[j]!=0)
		{
			result_yqmm=output_yqmm[j]+";"+result_yqmm;
		}
		}
		for(var b=4;b>=0;b--)
		{
			if(outputyr_yqmm[b]!=0)
			{
			for(var j=12;j>=0;j--)
		{
			if(output_yqmm[j]!=0)
		{
			resultbw_yqmm=output_yqmm[j]+""+outputyr_yqmm[b]+";"+resultbw_yqmm;
			}
		}
		
		}
		}
		
		for(var x=4;x>=0;x--)
		{
			if(outputyr_yqmm[x]!=0)
			{
			resultyr_yqmm=outputyr_yqmm[x]+";"+resultyr_yqmm;
			}
			if(outputq_yqmm[x]!=0)
			{
			resultq_yqmm=outputq_yqmm[x]+";"+resultq_yqmm;
			}
			
		}
		
	//alert(resultyr_yqmm);
	//alert(resultq_yqmm);	
	//alert(result_yqmm);
	//alert(resultbw_yqmm);
}
function dochange_yqmm(a)
{	if(a=="mps_y1"||a=="mps_y2"||a=="mps_y3"||a=="mps_y4")
		{
		inty_yqmm = a.substring(5);
		inty_yqmm = Number(inty_yqmm);
		var yrreus=document.getElementById(a).innerHTML;
		if(outputyr_yqmm[inty_yqmm]==yrreus)
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_selected;
		document.getElementById(a).style.color= yqmm_yeartext_selected;
		}
		else
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_over;
		document.getElementById(a).style.color= yqmm_yeartext_over;
		}
		}
	else if(a=="mps_q1"||a=="mps_q2"||a=="mps_q3"||a=="mps_q4")
		{
		intq_yqmm = a.substring(5);
		intq_yqmm = Number(intq_yqmm);
		if(outputq_yqmm[intq_yqmm]==intq_yqmm)
		{
		document.getElementById(a).style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById(a).style.color= yqmm_quartertext_selected;
		}
		else
		{
		document.getElementById(a).style.backgroundColor= yqmm_quarterbackground_over;
		document.getElementById(a).style.color= yqmm_quartertext_over;
		}
		}
		else
		{
		a=a.substring(5);
		a=Number(a);
		if(output_yqmm[a]==a)
		{
		document.getElementById("mps_m"+a).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+a).style.color= yqmm_monthtext_selected;
		}
		else
		{
		document.getElementById("mps_m"+a).style.backgroundColor= yqmm_monthbackground_over;
		document.getElementById("mps_m"+a).style.color= yqmm_monthtext_over;
		}
		}

}

function dorechange_yqmm(a)
{
	if(a=="mps_y1"||a=="mps_y2"||a=="mps_y3"||a=="mps_y4")
		{
		inty_yqmm = a.substring(5);
		inty_yqmm = Number(inty_yqmm);
		var yrreus=document.getElementById(a).innerHTML;
		if(outputyr_yqmm[inty_yqmm]==yrreus)
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_selected;
		document.getElementById(a).style.color= yqmm_yeartext_selected;
		}
		else
		{
		document.getElementById(a).style.backgroundColor= yqmm_yearbackground_default;
		document.getElementById(a).style.color= yqmm_yeartext_default;
		}
		}
	else if(a=="mps_q1"||a=="mps_q2"||a=="mps_q3"||a=="mps_q4")
		{
		intq_yqmm = a.substring(5);
		intq_yqmm = Number(intq_yqmm);
		if(outputq_yqmm[intq_yqmm]==intq_yqmm)
		{
		document.getElementById(a).style.backgroundColor= yqmm_quarterbackground_selected;
		document.getElementById(a).style.color= yqmm_quartertext_selected;
		}
		else
		{
		document.getElementById(a).style.backgroundColor= yqmm_quarterbackground_default;
		document.getElementById(a).style.color= yqmm_quartertext_default;
		}
		
		}	
	
	else{
	a=a.substring(5);
	a=Number(a);
		if(output_yqmm[a]==a)
		{
		document.getElementById("mps_m"+a).style.backgroundColor= yqmm_monthbackground_selected;
		document.getElementById("mps_m"+a).style.color= yqmm_monthtext_selected;
		}
		else
		{
		document.getElementById("mps_m"+a).style.backgroundColor= yqmm_monthbackground_default;
		document.getElementById("mps_m"+a).style.color= yqmm_monthtext_default;
		}
		}
}
