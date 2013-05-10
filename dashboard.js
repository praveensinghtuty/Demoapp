var count_top=0;
function doclosetop()
{ 
count_top++;
var m=count_top%2;
 if(m==1)
 {
 document.getElementById("center").style.fontSize="0px";
 document.getElementById("closetop").src="images/down.png";
 document.getElementById("header").style.height="0%";
 document.getElementById("left").style.height="0%";
 document.getElementById("right").style.height="0%";
 document.getElementById("center").style.height="0%"
 document.getElementById("bottom").style.height="100%";

 }
 else
 {
 document.getElementById("center").style.fontSize="85px";
 document.getElementById("closetop").src="images/close1.png";
 document.getElementById("header").style.height="100px";
 document.getElementById("left").style.height="100px";
 document.getElementById("right").style.height="100px";
 document.getElementById("center").style.height="100px";
 }
}
city_data=[];city_name=[],scc_db_data=[],db_new_result=[],db_new_resultyr=[],db_new_result1=[];
for(var i=0;i<=8;i++)
{
city_data[i]=0;
city_name[i]="";
}

function pass_data(comp_id,comp_id2)
{
for(var i=0;i<12;i++)
{
db_new_result1[i]=0;
scc_db_data[i]=[];
}
db_new_resultyr=resultyr_yqmm.split(";");
db_new_result=result_yqmm.split(";");
var db_new_resultbw=resultbw_yqmm.split(";");
db_new_resultbw.pop();
db_new_result.pop();
db_new_resultyr.pop();
for(var j=0;j<db_new_result.length;j++)
{
db_new_result1[j]=db_new_result[j];
if(db_new_result[j].length==1)
{
db_new_result[j]="0"+db_new_result[j];
}
}

for(var j=0;j<db_new_result.length;j++)
{
for(var i=0;i<db_new_resultyr.length;i++)
{
scc_db_data[j][0]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][0]+","+scc_db_data[j][0];
scc_db_data[j][1]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][1]+","+scc_db_data[j][1];
scc_db_data[j][2]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][2]+","+scc_db_data[j][2];
scc_db_data[j][3]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][4]+","+scc_db_data[j][3];
scc_db_data[j][4]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][5]+","+scc_db_data[j][4];
scc_db_data[j][5]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][6]+","+scc_db_data[j][5];
scc_db_data[j][6]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][8]+","+scc_db_data[j][6];
scc_db_data[j][7]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][9]+","+scc_db_data[j][7];
scc_db_data[j][8]=db1_data[db_new_resultyr[i]+""+db_new_result[j]][10]+","+scc_db_data[j][8];
}
scc_db_data[j][0]=scc_db_data[j][0].substring(0,scc_db_data[j][0].indexOf(",undefined"));
scc_db_data[j][1]=scc_db_data[j][1].substring(0,scc_db_data[j][1].indexOf(",undefined"));
scc_db_data[j][2]=scc_db_data[j][2].substring(0,scc_db_data[j][2].indexOf(",undefined"));
scc_db_data[j][3]=scc_db_data[j][3].substring(0,scc_db_data[j][3].indexOf(",undefined"));
scc_db_data[j][4]=scc_db_data[j][4].substring(0,scc_db_data[j][4].indexOf(",undefined"));
scc_db_data[j][5]=scc_db_data[j][5].substring(0,scc_db_data[j][5].indexOf(",undefined"));
scc_db_data[j][6]=scc_db_data[j][6].substring(0,scc_db_data[j][6].indexOf(",undefined"));
scc_db_data[j][7]=scc_db_data[j][7].substring(0,scc_db_data[j][7].indexOf(",undefined"));
scc_db_data[j][8]=scc_db_data[j][8].substring(0,scc_db_data[j][8].indexOf(",undefined"));
}

for(var i=0;i<db_new_resultbw.length;i++)
{
if(db_new_resultbw[i].length==5)
{
db_new_resultbw[i]="0"+db_new_resultbw[i];
}

db_new_resultbw[i]=db_new_resultbw[i].substring(2)+""+db_new_resultbw[i].substring(0,2);
city_data[0]=db1_data[db_new_resultbw[i]][0]+city_data[0];
city_data[1]=db1_data[db_new_resultbw[i]][1]+city_data[1];
city_data[2]=db1_data[db_new_resultbw[i]][2]+city_data[2];
city_data[3]=db1_data[db_new_resultbw[i]][4]+city_data[3];
city_data[4]=db1_data[db_new_resultbw[i]][5]+city_data[4];
city_data[5]=db1_data[db_new_resultbw[i]][6]+city_data[5];
city_data[6]=db1_data[db_new_resultbw[i]][8]+city_data[6];
city_data[7]=db1_data[db_new_resultbw[i]][9]+city_data[7];
city_data[8]=db1_data[db_new_resultbw[i]][10]+city_data[8];
}
city_name[0]=db1_data["City"][0];
city_name[1]=db1_data["City"][1];
city_name[2]=db1_data["City"][2];
city_name[3]=db1_data["City"][4];
city_name[4]=db1_data["City"][5];
city_name[5]=db1_data["City"][6];
city_name[6]=db1_data["City"][8];
city_name[7]=db1_data["City"][9];
city_name[8]=db1_data["City"][10];
donutchart.data=[];
for(var i=0;i<=8;i++)
{
donutchart.data.push({});
donutchart.data[i].name=city_name[i];
donutchart.data[i].value=city_data[i];
}
var myNode = document.getElementById(comp_id);
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
drawDonutChart(comp_id);
passdonut_data(comp_id2);
}

function passdonut_data(comp_id2)
{
stackedcombinationchart.data.series=[];
for(var i=0;i<db_new_result.length;i++)
{
stackedcombinationchart.data.series.push({});
stackedcombinationchart.data.series[i].name=monthcollection_yqmm[db_new_result1[i]-1];
stackedcombinationchart.data.series[i].values=scc_db_data[i][DC_OutputForDrilldown-1];
stackedcombinationchart.properties.general.categoryaxis
}
stackedcombinationchart.properties.general.categoryaxis="";
stackedcombinationchart.properties.general.categoryaxis=city_name[DC_OutputForDrilldown-1]
stackedcombinationchart.data.categorylabel=[];
for(var i=0;i<db_new_resultyr.length;i++)
{
stackedcombinationchart.data.categorylabel.push(db_new_resultyr[i]);
}
var myNode1 = document.getElementById(comp_id2);
while (myNode1.firstChild) {
    myNode1.removeChild(myNode1.firstChild);
}
drawStackedCombinationChart(comp_id2);
}