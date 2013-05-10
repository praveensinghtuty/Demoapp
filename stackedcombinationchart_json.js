var stackedcombinationchart = 	{
								"data": {
										"series": 	[
													{
													"name": "Series1",
													"values": "28,42,31,28,50"
													},
													{
													"name": "Series2",
													"values": "58,42,36,87,53"
													},
													{
													"name": "Series3",
													"values": "21,18,42,27,32"
													},
													{
													"name": "Series4",
													"values": "22,18,32,47,15"
													},
													{
													"name": "Series5",
													"values": "46,72,21,62,18"
													}
													],
										"categorylabel": ["Jan","Feb","Mar","Apr","May"]
										},
								"properties":	{
												"general":	{
															"title": "Stacked Combination Chart Title",
															"subtitle": "Stacked Combination Chart SubTitle",
															"categoryaxis": "Month",
															"valueaxis": "Profit",
															"secondaryvalueaxis": "",
															"plotserieson": "primary"
															},
												"drilldown":{
															"enable": "true",
															"interactiontype": "Position",
															"series": 	[
																		{
																		"name": "Series1",
																		"sourcedata": "10,56,74"
																		}
																		],
															"interactionoptions": 	{
																					"insert": "MouseClick"
																					},
															"defaultselection": {
																				"series": "Series1",
																				"item": "1"
																				}
															},
												"behavior": {
															"common":	{
																		"ignoreblankcells": {
																							"inseries": "true",
																							"invalues": "true"
																							},
																		"enableruntimetools": 	{
																								"showfocusbutton": "true",
																								"showresetscalebutton": "true",
																								"showscalebehavioraction": "true"
																								},
																		"enablerangeslider":{
																							"beginningrangevalue": 	{
																													"type": "Position",
																													"value": "-1"
																													},
																							"endrangevalue":{
																											"type": "Position",
																											"value": "-1"
																											},
																							"rangelabels": []
																							},
																		"sorting": 	{
																					"enable": "true",
																					"bydata": 	{
																								"enable": "false",
																								"series": "Series2",
																								"order": "Descending"
																								},
																					"bycategorylabel": 	{
																									"enable": "true",
																									"isreverseorder": "true"
																									}
																					},
																		"dynamicvisibility": "true"
																		},
															"scale":{
																	"manualaxis": 	{
																					"enable": "false",
																					"minimumlimit": "0",
																					"maximumlimit": "150"
																					},
																	"autoaxis":	{
																				"enable": "true",
																				"allowzoomout": {
																								"enable": "true",
																								"value": "80"
																								}
																				},
																	"axisscale":{
																				"isfixedlablesize": "true",
																				"labelabbreviations": "thousands,K|millions,m"
																				},
																	"divisions":{
																				"noofdivisions":{
																								"enable": "true",
																								"value": "4"
																								},
																				"sizeofdivision": 	{
																									"enable": "false",
																									"value": "20"
																									},
																				"minordivisions": "2"
																				}
																	},
															"animations": 	{
																			"dataanimations": 	{
																								"enable": "true"
																								},
																			"entryeffect": 	{
																							"type": "Fade-in",
																							"durations": "0.2"
																							}
																			}
															},
												"appearance": 	{
																"layout":	{
																			"chartarea":{
																						"showchartbackground": "true",
																						"margin": "20"
																						},
																			"titlearea":{
																						"titlefill":{
																									"show": "false",
																									"color": "#FFFFFF"
																									},
																						"titleborder":	{
																										"show": "false",
																										"color": "#000000"
																										},
																						"titleborderthickness": "2"
																						},
																			"plotarea": {
																						"plotareafill": {
																										"show": "false",
																										"color": "#FFFFFF"
																										},
																						"plotareaborder": 	{
																											"show": "false",
																											"color": "#000000"
																											},
																						"plotareaborderthickness": "10"
																						},
																			"legend": 	{
																						"enable": "true",
																						"legendposition": "Right",
																						"verticaloffset": [],
																						"horizontaloffset": [],
																						"legendfill": 	{
																										"show": "false",
																										"color": "#FFFFFF"
																										},
																						"legendborder": {
																										"show": "false",
																										"color": "#000000"
																										},
																						"legendborderthickness": "2",
																						"chartseries": 	{
																										"enable": "true",
																										"value": "MouseClick"
																										}
																						}
																			},
																"series": 	{
																			"datapoints": 	[
																							{
																							"type": "Column",
																							"shape": "Triangle",
																							"line": '#EC0033',
																							"fill": '#EC0033'
																							},
																							{
																							"type": "Column",
																							"shape": "Circle",
																							"line": "#A0D300",
																							"fill": "#A0D300"
																							},
																							{
																							"type": "Column",
																							"shape": "X",
																							"line": "#FFCD00",
																							"fill": "#FFCD00"
																							},
																							{
																							"type": "Column",
																							"shape": "Square",
																							"line": "#00B869",
																							"fill": "#00B869"
																							},
																							{
																							"type": "Column",
																							"shape": "Star",
																							"line": "#FF7300",
																							"fill": "#FF7300"
																							},
																							{
																							"type": "Column",
																							"shape": "Triangle",
																							"line": '#EC0033',
																							"fill": '#EC0033'
																							},
																							{
																							"type": "Column",
																							"shape": "Circle",
																							"line": "#A0D300",
																							"fill": "#A0D300"
																							},
																							{
																							"type": "Column",
																							"shape": "X",
																							"line": "#FFCD00",
																							"fill": "#FFCD00"
																							},
																							{
																							"type": "Column",
																							"shape": "Square",
																							"line": "#00B869",
																							"fill": "#00B869"
																							},
																							{
																							"type": "Column",
																							"shape": "Star",
																							"line": "#FF7300",
																							"fill": "#FF7300"
																							},
																							{
																							"type": "Column",
																							"shape": "Square",
																							"line": "#00B869",
																							"fill": "#00B869"
																							},
																							{
																							"type": "Column",
																							"shape": "Star",
																							"line": "#FF7300",
																							"fill": "#FF7300"
																							}
																							],
																			"markergap": "50",
																			"markeroverlap": "100",
																			"transparency": "20%",
																			"linesettings":	{
																							"linethickness":"1",
																							"markers":	{
																										 "enable":"true",
																										 "size":"15",
																										 "transparency": "1%"
																										}
																							}
																			},
																"axes": {
																		"verticalaxis": {
																						"enable": "true",
																						"linecolor": "#000000",
																						"thickness": "1",
																						"showmajorticks": "true",
																						"showminorticks": "true"
																						},
																		"horizontalaxis": 	{
																							"enable": "true",
																							"linecolor": "#000000",
																							"thickness": "1"
																							},
																		"horizontalgridlines": {
																								"majorgridlines": 	{
																													"show": "true",
																													"thickness": "1"
																													},
																								"minorgridlines": 	{
																													"show": "true",
																													"thickness": "1"
																													}
																								}
																		},
																"text": {
																		"charttitle": 	{
																						"show": "false",
																						"fontface": "arial black",
																						"fontsize": "14",
																						"style":{
																								"bold": "true",
																								"italic": "true",
																								"underline": "false",
																								"color": "#003D00",
																								"align": "center"
																								},
																						"numberformat": {
																										"general": 	{
																													"enable": "false"
																													},
																										"numeric": 	{
																													"enable": "true",
																													"negativevalues": "-123421",
																													"decimalplaces": "2",
																													"usethousandseperator": "true"
																													},
																										"currency": {
																													"enable": "false",
																													"negativevalues": "-123421",
																													"decimalplaces": "2",
																													"prefix": 	{
																																"enable": "true",
																																"text": "$"
																																},
																													"sufix":{
																															"enable": "true"
																															},
																													"usethousandseperator": "true"
																													},
																										"percentage": 	{
																														"enable": "false",
																														"decimalplaces": "2"
																														},
																										"date": {
																												"enable": "false",
																												"type": "3/17"
																												},
																										"time": {
																												"enable": "false",
																												"type": "13:30"
																												},
																										"text": {
																												"enable": "false"
																												}
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
																							"color": "#003D00",
																							"align": "center"
																							},
																					"numberformat": {
																									"general": 	{
																												"enable": "false"
																												},
																									"numeric": 	{
																												"enable": "true",
																												"negativevalues": "-123421",
																												"decimalplaces": "2",
																												"usethousandseperator": "true"
																												},
																									"currency": {
																												"enable": "false",
																												"negativevalues": "-123421",
																												"decimalplaces": "2",
																												"prefix": 	{
																															"enable": "true",
																															"text": "$"
																															},
																												"sufix":{
																														"enable": "true"
																														},
																												"usethousandseperator": "true"
																												},
																									"percentage": 	{
																													"enable": "false",
																													"decimalplaces": "2"
																													},
																									"date": {
																											"enable": "false",
																											"type": "3/17"
																											},
																									"time": {
																											"enable": "false",
																											"type": "13:30"
																											},
																									"text": {
																											"enable": "false"
																											}
																									}
																					},
																		"horizontalaxistitle": {
																								"show": "true",
																								"fontface": "verdana",
																								"fontsize": "12",
																								"style":{
																										"bold": "true",
																										"italic": "true",
																										"underline": "false",
																										"color": "#003D00",
																										"align": "left"
																										},
																								"numberformat": {
																												"general": 	{
																															"enable": "false"
																															},
																												"numeric":	{
																															"enable": "true",
																															"negativevalues": "-123421",
																															"decimalplaces": "2",
																															"usethousandseperator": "true"
																															},
																												"currency": {
																															"enable": "false",
																															"negativevalues": "-123421",
																															"decimalplaces": "2",
																															"prefix": 	{
																																		"enable": "true",
																																		"text": "$"
																																		},
																															"sufix":{
																																	"enable": "true"
																																	},
																															"usethousandseperator": "true"
																															},
																												"percentage": 	{
																																"enable": "false",
																																"decimalplaces": "2"
																																},
																												"date": {
																														"enable": "false",
																														"type": "3/17"
																														},
																												"time": {
																														"enable": "false",
																														"type": "13:30"
																														},
																												"text": {
																														"enable": "false"
																														}
																												}
																								},
																		"horizontalaxislabel": 	{
																								"show": "true",
																								"fontface": "verdana",
																								"fontsize": "10",
																								"style":{
																										"bold": "true",
																										"italic": "true",
																										"underline": "false",
																										"color": "#003D00",
																										"align": "left"
																										},
																								"numberformat": {
																												"general": 	{
																															"enable": "false"
																															},
																												"numeric": 	{
																															"enable": "true",
																															"negativevalues": "-123421",
																															"decimalplaces": "2",
																															"usethousandseperator": "true"
																															},
																												"currency": {
																															"enable": "false",
																															"negativevalues": "-123421",
																															"decimalplaces": "2",
																															"prefix": 	{
																																		"enable": "true",
																																		"text": "$"
																																		},
																															"sufix":{
																																	"enable": "true"
																																	},
																															"usethousandseperator": "true"
																															},
																												"percentage": 	{
																																"enable": "false",
																																"decimalplaces": "2"
																																},
																												"date": {
																														"enable": "false",
																														"type": "3/17"
																														},
																												"time": {
																														"enable": "false",
																														"type": "13:30"
																														},
																												"text": {
																														"enable": "false"
																														}
																												}
																								},
																		"verticalaxistitle":{
																							"show": "true",
																							"fontface": "verdana",
																							"fontsize": "12",
																							"style":{
																									"bold": "true",
																									"italic": "true",
																									"underline": "false",
																									"color": "#003D00",
																									"align": "center"
																									},
																							"numberformat": {
																											"general": 	{
																														"enable": "false"
																														},
																											"numeric":	{
																														"enable": "true",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"usethousandseperator": "true"
																														},
																											"currency": {
																														"enable": "false",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"prefix": 	{
																																	"enable": "true",
																																	"text": "$"
																																	},
																														"sufix":{
																																"enable": "true"
																																},
																														"usethousandseperator": "true"
																														},
																											"percentage": 	{
																															"enable": "false",
																															"decimalplaces": "2"
																															},
																											"date": {
																													"enable": "false",
																													"type": "3/17"
																													},
																											"time": {
																													"enable": "false",
																													"type": "13:30"
																													},
																											"text": {
																													"enable": "false"
																													}
																											}
																							},
																		"verticalaxislabel": {
																							"show": "true",
																							"fontface": "verdana",
																							"fontsize": "10",
																							"style":{
																									"bold": "true",
																									"italic": "true",
																									"underline": "false",
																									"color": "#003D00",
																									"align": "left"
																									},
																							"numberformat": {
																											"general": 	{
																														"enable": "false"
																														},
																											"numeric": 	{
																														"enable": "true",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"usethousandseperator": "true"
																														},
																											"currency": {
																														"enable": "false",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"prefix": 	{
																																	"enable": "true",
																																	"text": "$"
																																	},
																														"sufix":{
																																"enable": "true"
																																},
																														"usethousandseperator": "true"
																														},
																											"percentage": 	{
																															"enable": "false",
																															"decimalplaces": "2"
																															},
																											"date": {
																													"enable": "false",
																													"type": "3/17"
																													},
																											"time": {
																													"enable": "false",
																													"type": "13:30"
																													},
																											"text": {
																													"enable": "false"
																													}
																											}
																							},
																		"legend": 	{
																					"show": "true",
																					"fontface": "verdana",
																					"fontsize": "12",
																					"style":{
																							"bold": "true",
																							"italic": "true",
																							"underline": "false",
																							"color": "#003D00",
																							"align": "left"
																							},
																					"position": {
																								"place": "left",
																								"offset": 	{
																											"x": "24",
																											"y": "-1"
																											}
																								},
																					"numberformat": {
																									"general": 	{
																												"enable": "false"
																												},
																									"numeric": 	{
																												"enable": "true",
																												"negativevalues": "-123421",
																												"decimalplaces": "2",
																												"usethousandseperator": "true"
																												},
																									"currency": {
																												"enable": "false",
																												"negativevalues": "-123421",
																												"decimalplaces": "2",
																												"prefix": 	{
																															"enable": "true",
																															"text": "$"
																															},
																												"sufix":{
																														"enable": "true"
																														},
																												"usethousandseperator": "true"
																												},
																									"percentage": 	{
																													"enable": "false",
																													"decimalplaces": "2"
																													},
																									"date": {
																											"enable": "false",
																											"type": "3/17"
																											},
																									"time": {
																											"enable": "false",
																											"type": "13:30"
																											},
																									"text": {
																											"enable": "false"
																											}
																									}
																					},
																		"rangelabels": 	{
																						"show": "false",
																						"fontface": "verdana",
																						"fontsize": "10",
																						"style":{
																								"bold": "true",
																								"italic": "true",
																								"underline": "false",
																								"color": "#FF00FF",
																								"align": "left"
																								},
																						"numberformat": {
																										"general": 	{
																													"enable": "false"
																													},
																										"numeric": 	{
																													"enable": "true",
																													"negativevalues": "-123421",
																													"decimalplaces": "2",
																													"usethousandseperator": "true"
																													},
																										"currency": {
																													"enable": "false",
																													"negativevalues": "-123421",
																													"decimalplaces": "2",
																													"prefix": 	{
																																"enable": "true",
																																"text": "$"
																																},
																													"sufix":{
																															"enable": "true"
																															},
																													"usethousandseperator": "true"
																													},
																										"percentage": 	{
																														"enable": "false",
																														"decimalplaces": "2"
																														},
																										"date": {
																												"enable": "false",
																												"type": "3/17"
																												},
																										"time": {
																												"enable": "false",
																												"type": "13:30"
																												},
																										"text": {
																												"enable": "false"
																												}
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
																									"color": "#003D00",
																									"align": "left"
																									},
																							"numberformat": {
																											"general": 	{
																														"enable": "false"
																														},
																											"numeric": 	{
																														"enable": "true",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"usethousandseperator": "true"
																														},
																											"currency": {
																														"enable": "false",
																														"negativevalues": "-123421",
																														"decimalplaces": "2",
																														"prefix": 	{
																																	"enable": "true",
																																	"text": "$"
																																	},
																														"sufix":{
																																"enable": "true"
																																},
																														"usethousandseperator": "true"
																														},
																											"percentage": 	{
																															"enable": "false",
																															"decimalplaces": "2"
																															},
																											"date": {
																													"enable": "false",
																													"type": "3/17"
																													},
																											"time": {
																													"enable": "false",
																													"type": "13:30"
																													},
																											"text": {
																													"enable": "false"
																													}
																											}
																							},
																		"datalabels": 	{
																						"show":"true",
																						"series":	[
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Center",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Center",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Center",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(Comma)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									},
																									{
																									"show": "true",
																									"fontface": "times new roman",
																									"fontsize": "10",
																									"style":{
																											"bold": "true",
																											"italic": "true",
																											"underline": "false",
																											"color": "#003D00"
																											},
																									"position":"Inside End",
																									"offset":	{
																												"x":"0",
																												"y":"0"
																												},
																									"labelcontains":{
																													"seriesname":"true",
																													"categorylabel":"true",
																													"value":"true"
																													},
																									"labelseparator":"(New Line)",
																									"custom":">",
																									}
																									]
																									
																						}
																		},
																"color":{
																		"fill": "#B2D1B2",
																		"titlearea":{
																					"fill": "#FF00FF",
																					"border": "#FFFFFF"
																					},
																		"plotarea": {
																					"fill": "#FF00FF",
																					"border": "#FFFFFF"
																					},
																		"legendarea": 	{
																						"fill": "#FF00FF",
																						"border": "#FFFFFF"
																						},
																		"axis": {
																				"verticalaxis": "#FF00FF",
																				"horizontalaxis": "#FF00FF",
																				"majorgridlines": "#FF00FF",
																				"minorgridlines": "#FF00FF"
																				}
																		}
																},
												"alerts": 	{
															"enable": "false",
															"aspercentoftarget":"true",
															"aspercentoftargetvalues":["100","100","100","100","100"],
															"byvalue":"false",
															"alertthresholds": 	[
																				{
																				"from": "0",
																				"to": "30",
																				"color": "#FF0000"
																				},
																				{
																				"from": "30",
																				"to": "60",
																				"color": "#FFFF00"
																				},
																				{
																				"from": "60",
																				"to": "100",
																				"color": "00FF00"
																				}
																				],
															"colororder": "low"
															}
												}
								}