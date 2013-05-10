var DC_OutputForDrilldown;

var donutchart = {
						"data":	[
								{
								"name": "John",
								"value": "60"
								},
								{
								"name": "Henry",
								"value": "30"
								},
								{
								"name": "Leo",
								"value": "45"
								},
								{
								"name": "David",
								"value": "20"
								},
								{
								"name": "Messi",
								"value": "75"
								},
								{
								"name": "Duke",
								"value": "15"
								}
								],
						"properties":	{
										"general":	{
													"title": "Donut Chart Title",
													"subtitle": "Donut Chart SubTitle",
													"inrows": "true",
													"incolumns": "false",
													"radius": "50"
													},
										"insertion":{
													"enable": "true",
													"insertiontype": "Position",
													"sourcedata":	[	
																		'1,A,100',
																		'2,B,200',
																		'3,C,300',
																		'4,D,400',
																		'2,E,500',
																		'2,F,600',
																		'3,G,700',
																		'1,A,10',
																		'2,B,20',
																		'3,C,30',
																		'1,D,40',
																		'2,E,50',
																		'3,F,60',
																		'4,G,70'
																	],
													"interactionoptions": "MouseClick",
													"defaultitem": "2"
													},
										"behavior":	{
													"ignoreblankcells": "true",
													"sorting": 	{
																"enable": "true",
																"by": "Category Labels",
																"order": "Ascending"
																},
													"dynamicvisibility": "true"
													},

										"appearance":	{
														"layout": 	{
																	"explode":	{
																				"enable": "true",
																				"radius": "10"
																				},
																	"chartarea":{
																				"showchartbackground": "true",
																				"margin":	{
																							"left": "10",
																							"top": "10",
																							"right": "10",
																							"bottom": "10",
																							"allside": "true"
																							}
																				},
																	"titlearea":{
																				"titlefill":{
																							"show": "true",
																							"color": "#FFFFFF"
																							},
																				"titleborder":	{
																								"show": "true",
																								"color": "#000000"
																								},
																				"titleborderthickness": "2"
																				},
																	"plotarea": {
																				"plotareafill":	{
																								"show": "true",
																								"color": "#FFFFFF"
																								},
																				"plotareaborder":	{
																									"show": "true",
																									"color": "#000000"
																									},
																				"plotareaborderthickness": "2"
																				},
																	"legend":	{
																				"enable": "true",
																				"legendposition": "Right",
																				"legendfill":	{
																								"show": "true",
																								"color": "#FFFFFF"
																								},
																				"legendborder": {
																								"show": "true",
																								"color": "#000000"
																								},
																				"legendborderthickness": "2"
																				}
																	},
														"series": 	{
																	"datapoints":	[
																					'#EC0033','#A0D300','#FFCD00','#00B869','#999999','#FF7300','#123456','#789101','#246895'																				
																					],
																	"transparency": "1%",
																	"showlines":{
																				"status": "true",
																				"color": "#000000",
																				"thickness": "2"
																				}
																	},
														"text":	{
																"charttitle":	{
																				"show": "false",
																				"fontface": "verdana",
																				"fontsize": "10",
																				"style":{
																						"bold": "true",
																						"italic": "true",
																						"underline": "false",
																						"color": "#FF00FF",
																						"align": "left"
																						}
																				},
																"subtitle": {
																			"show": "false",
																			"fontface": "verdana",
																			"fontsize": "10",
																			"style":{
																					"bold": "true",
																					"italic": "true",
																					"underline": "false",
																					"color": "#FF00FF",
																					"align": "left"
																					}
																			},
																"legend": 	{
																			"show": "true",
																			"fontface": "arial",
																			"fontsize": "10",
																			"style":{
																					"bold": "true",
																					"italic": "true",
																					"underline": "false",
																					"color": "#FF00FF",
																					"align": "left"
																					}
																			},
																"mouseovervalues": 	{
																					"show": "true",
																					"fontface": "verdana",
																					"fontsize": "10",
																					"style":{
																							"bold": "true",
																							"italic": "true",
																							"underline": "false",
																							"color": "#FF0000",
																							"align": "left"
																							}
																					},
																"datalabels": 	{
																				"show": "true",
																				"fontface": "times new roman",
																				"fontsize": "10",
																				"style":{
																						"bold": "true",
																						"italic": "true",
																						"underline": "false",
																						"color": "#3D0014"
																						},
																				"labelcontains":{
																								"categorylabel":"true",
																								"value":"false",
																								"percentage":"false"
																								},
																				"labelseparator":"(Comma)",
																				"custom":">"
																				}
																},
														"color":{
																"backgroundcolor": "#80B2B2",
																"slices": 	[
																			"#F0F0F0",
																			"#FFF0F0",
																			"#FF0000"
																			],
																"linecolor": "#FF3399",
																"titlearea":{
																			"fill": "#FF00FF",
																			"border": "#FFFFFF"
																			},
																"plotarea": {
																			"fill": "#FF00FF",
																			"border": "#FFFFFF"
																			},
																"legendarea":	{
																				"fill": "#FF00FF",
																				"border": "#FFFFFF"
																				}
																}
														}
										}
						}