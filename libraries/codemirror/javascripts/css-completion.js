(function(){var e,t;e="active after before first-child first-letter focus lang last-child link hover visited".split(" ");t={appearance:[],"backface-visibility":[],background:[],"background-color":[{label:"AliceBlue ",value:"#F0F8FF"},{label:"AntiqueWhite ",value:"#FAEBD7"},{label:"Aqua ",value:"#00FFFF"},{label:"Aquamarine ",value:"#7FFFD4"},{label:"Azure ",value:"#F0FFFF"},{label:"Beige ",value:"#F5F5DC"},{label:"Bisque ",value:"#FFE4C4"},{label:"Black ",value:"#000000"},{label:"BlanchedAlmond ",value:"#FFEBCD"},{label:"Blue ",value:"#0000FF"},{label:"BlueViolet ",value:"#8A2BE2"},{label:"Brown ",value:"#A52A2A"},{label:"BurlyWood ",value:"#DEB887"},{label:"CadetBlue ",value:"#5F9EA0"},{label:"Chartreuse ",value:"#7FFF00"},{label:"Chocolate ",value:"#D2691E"},{label:"Coral ",value:"#FF7F50"},{label:"CornflowerBlue ",value:"#6495ED"},{label:"Cornsilk ",value:"#FFF8DC"},{label:"Crimson ",value:"#DC143C"},{label:"Cyan ",value:"#00FFFF"},{label:"DarkBlue ",value:"#00008B"},{label:"DarkCyan ",value:"#008B8B"},{label:"DarkGoldenRod ",value:"#B8860B"},{label:"DarkGray ",value:"#A9A9A9"},{label:"DarkGrey ",value:"#A9A9A9"},{label:"DarkGreen ",value:"#006400"},{label:"DarkKhaki ",value:"#BDB76B"},{label:"DarkMagenta ",value:"#8B008B"},{label:"DarkOliveGreen ",value:"#556B2F"},{label:"Darkorange ",value:"#FF8C00"},{label:"DarkOrchid ",value:"#9932CC"},{label:"DarkRed ",value:"#8B0000"},{label:"DarkSalmon ",value:"#E9967A"},{label:"DarkSeaGreen ",value:"#8FBC8F"},{label:"DarkSlateBlue ",value:"#483D8B"},{label:"DarkSlateGray ",value:"#2F4F4F"},{label:"DarkSlateGrey ",value:"#2F4F4F"},{label:"DarkTurquoise ",value:"#00CED1"},{label:"DarkViolet ",value:"#9400D3"},{label:"DeepPink ",value:"#FF1493"},{label:"DeepSkyBlue ",value:"#00BFFF"},{label:"DimGray ",value:"#696969"},{label:"DimGrey ",value:"#696969"},{label:"DodgerBlue ",value:"#1E90FF"},{label:"FireBrick ",value:"#B22222"},{label:"FloralWhite ",value:"#FFFAF0"},{label:"ForestGreen ",value:"#228B22"},{label:"Fuchsia ",value:"#FF00FF"},{label:"Gainsboro ",value:"#DCDCDC"},{label:"GhostWhite ",value:"#F8F8FF"},{label:"Gold ",value:"#FFD700"},{label:"GoldenRod ",value:"#DAA520"},{label:"Gray ",value:"#808080"},{label:"Grey ",value:"#808080"},{label:"Green ",value:"#008000"},{label:"GreenYellow ",value:"#ADFF2F"},{label:"HoneyDew ",value:"#F0FFF0"},{label:"HotPink ",value:"#FF69B4"},{label:"IndianRed ",value:"#CD5C5C"},{label:"Indigo ",value:"#4B0082"},{label:"Ivory ",value:"#FFFFF0"},{label:"Khaki ",value:"#F0E68C"},{label:"Lavender ",value:"#E6E6FA"},{label:"LavenderBlush ",value:"#FFF0F5"},{label:"LawnGreen ",value:"#7CFC00"},{label:"LemonChiffon ",value:"#FFFACD"},{label:"LightBlue ",value:"#ADD8E6"},{label:"LightCoral ",value:"#F08080"},{label:"LightCyan ",value:"#E0FFFF"},{label:"LightGoldenRodYellow ",value:"#FAFAD2"},{label:"LightGray ",value:"#D3D3D3"},{label:"LightGrey ",value:"#D3D3D3"},{label:"LightGreen ",value:"#90EE90"},{label:"LightPink ",value:"#FFB6C1"},{label:"LightSalmon ",value:"#FFA07A"},{label:"LightSeaGreen ",value:"#20B2AA"},{label:"LightSkyBlue ",value:"#87CEFA"},{label:"LightSlateGray ",value:"#778899"},{label:"LightSlateGrey ",value:"#778899"},{label:"LightSteelBlue ",value:"#B0C4DE"},{label:"LightYellow ",value:"#FFFFE0"},{label:"Lime ",value:"#00FF00"},{label:"LimeGreen ",value:"#32CD32"},{label:"Linen ",value:"#FAF0E6"},{label:"Magenta ",value:"#FF00FF"},{label:"Maroon ",value:"#800000"},{label:"MediumAquaMarine ",value:"#66CDAA"},{label:"MediumBlue ",value:"#0000CD"},{label:"MediumOrchid ",value:"#BA55D3"},{label:"MediumPurple ",value:"#9370DB"},{label:"MediumSeaGreen ",value:"#3CB371"},{label:"MediumSlateBlue ",value:"#7B68EE"},{label:"MediumSpringGreen ",value:"#00FA9A"},{label:"MediumTurquoise ",value:"#48D1CC"},{label:"MediumVioletRed ",value:"#C71585"},{label:"MidnightBlue ",value:"#191970"},{label:"MintCream ",value:"#F5FFFA"},{label:"MistyRose ",value:"#FFE4E1"},{label:"Moccasin ",value:"#FFE4B5"},{label:"NavajoWhite ",value:"#FFDEAD"},{label:"Navy ",value:"#000080"},{label:"OldLace ",value:"#FDF5E6"},{label:"Olive ",value:"#808000"},{label:"OliveDrab ",value:"#6B8E23"},{label:"Orange ",value:"#FFA500"},{label:"OrangeRed ",value:"#FF4500"},{label:"Orchid ",value:"#DA70D6"},{label:"PaleGoldenRod ",value:"#EEE8AA"},{label:"PaleGreen ",value:"#98FB98"},{label:"PaleTurquoise ",value:"#AFEEEE"},{label:"PaleVioletRed ",value:"#DB7093"},{label:"PapayaWhip ",value:"#FFEFD5"},{label:"PeachPuff ",value:"#FFDAB9"},{label:"Peru ",value:"#CD853F"},{label:"Pink ",value:"#FFC0CB"},{label:"Plum ",value:"#DDA0DD"},{label:"PowderBlue ",value:"#B0E0E6"},{label:"Purple ",value:"#800080"},{label:"Red ",value:"#FF0000"},{label:"RosyBrown ",value:"#BC8F8F"},{label:"RoyalBlue ",value:"#4169E1"},{label:"SaddleBrown ",value:"#8B4513"},{label:"Salmon ",value:"#FA8072"},{label:"SandyBrown ",value:"#F4A460"},{label:"SeaGreen ",value:"#2E8B57"},{label:"SeaShell ",value:"#FFF5EE"},{label:"Sienna ",value:"#A0522D"},{label:"Silver ",value:"#C0C0C0"},{label:"SkyBlue ",value:"#87CEEB"},{label:"SlateBlue ",value:"#6A5ACD"},{label:"SlateGray ",value:"#708090"},{label:"SlateGrey ",value:"#708090"},{label:"Snow ",value:"#FFFAFA"},{label:"SpringGreen ",value:"#00FF7F"},{label:"SteelBlue ",value:"#4682B4"},{label:"Tan ",value:"#D2B48C"},{label:"Teal ",value:"#008080"},{label:"Thistle ",value:"#D8BFD8"},{label:"Tomato ",value:"#FF6347"},{label:"Turquoise ",value:"#40E0D0"},{label:"Violet ",value:"#EE82EE"},{label:"Wheat ",value:"#F5DEB3"},{label:"White ",value:"#FFFFFF"},{label:"WhiteSmoke ",value:"#F5F5F5"},{label:"Yellow ",value:"#FFFF00"},{label:"YellowGreen ",value:"#9ACD32"}],"background-position":[],"background-repeat":["no-repeat","repeat-x","repeat-y"],"background-image":[],border:["1px solid "],"border-style":["dashed","dotted","double","solid"],"border-top":["1px solid "],"border-right":["1px solid "],"border-left":["1px solid "],"border-bottom":["1px solid "],"border-top-color":[],"border-right-color":[],"border-left-color":[],"border-bottom-color":[],"border-top-style":["dashed","dotted","double","solid"],"border-right-style":["dashed","dotted","double","solid"],"border-left-style":["dashed","dotted","double","solid"],"border-bottom-style":[],"border-top-width":[],"border-right-width":[],"border-left-width":[],"border-bottom-width":[],"border-radius":[],"border-top-left-radius":[],"border-top-right-radius":[],"border-bottom-left-radius":[],"border-border-right-radius":[],"border-collapse":["collapse","separate"],"border-image":[],bottom:[],"box-shadow":["1px 1px 5px #000"],"box-sizing":["border-box","content-box"],clear:["left","right","both"],content:[],color:[{label:"AliceBlue ",value:"#F0F8FF"},{label:"AntiqueWhite ",value:"#FAEBD7"},{label:"Aqua ",value:"#00FFFF"},{label:"Aquamarine ",value:"#7FFFD4"},{label:"Azure ",value:"#F0FFFF"},{label:"Beige ",value:"#F5F5DC"},{label:"Bisque ",value:"#FFE4C4"},{label:"Black ",value:"#000000"},{label:"BlanchedAlmond ",value:"#FFEBCD"},{label:"Blue ",value:"#0000FF"},{label:"BlueViolet ",value:"#8A2BE2"},{label:"Brown ",value:"#A52A2A"},{label:"BurlyWood ",value:"#DEB887"},{label:"CadetBlue ",value:"#5F9EA0"},{label:"Chartreuse ",value:"#7FFF00"},{label:"Chocolate ",value:"#D2691E"},{label:"Coral ",value:"#FF7F50"},{label:"CornflowerBlue ",value:"#6495ED"},{label:"Cornsilk ",value:"#FFF8DC"},{label:"Crimson ",value:"#DC143C"},{label:"Cyan ",value:"#00FFFF"},{label:"DarkBlue ",value:"#00008B"},{label:"DarkCyan ",value:"#008B8B"},{label:"DarkGoldenRod ",value:"#B8860B"},{label:"DarkGray ",value:"#A9A9A9"},{label:"DarkGrey ",value:"#A9A9A9"},{label:"DarkGreen ",value:"#006400"},{label:"DarkKhaki ",value:"#BDB76B"},{label:"DarkMagenta ",value:"#8B008B"},{label:"DarkOliveGreen ",value:"#556B2F"},{label:"Darkorange ",value:"#FF8C00"},{label:"DarkOrchid ",value:"#9932CC"},{label:"DarkRed ",value:"#8B0000"},{label:"DarkSalmon ",value:"#E9967A"},{label:"DarkSeaGreen ",value:"#8FBC8F"},{label:"DarkSlateBlue ",value:"#483D8B"},{label:"DarkSlateGray ",value:"#2F4F4F"},{label:"DarkSlateGrey ",value:"#2F4F4F"},{label:"DarkTurquoise ",value:"#00CED1"},{label:"DarkViolet ",value:"#9400D3"},{label:"DeepPink ",value:"#FF1493"},{label:"DeepSkyBlue ",value:"#00BFFF"},{label:"DimGray ",value:"#696969"},{label:"DimGrey ",value:"#696969"},{label:"DodgerBlue ",value:"#1E90FF"},{label:"FireBrick ",value:"#B22222"},{label:"FloralWhite ",value:"#FFFAF0"},{label:"ForestGreen ",value:"#228B22"},{label:"Fuchsia ",value:"#FF00FF"},{label:"Gainsboro ",value:"#DCDCDC"},{label:"GhostWhite ",value:"#F8F8FF"},{label:"Gold ",value:"#FFD700"},{label:"GoldenRod ",value:"#DAA520"},{label:"Gray ",value:"#808080"},{label:"Grey ",value:"#808080"},{label:"Green ",value:"#008000"},{label:"GreenYellow ",value:"#ADFF2F"},{label:"HoneyDew ",value:"#F0FFF0"},{label:"HotPink ",value:"#FF69B4"},{label:"IndianRed ",value:"#CD5C5C"},{label:"Indigo ",value:"#4B0082"},{label:"Ivory ",value:"#FFFFF0"},{label:"Khaki ",value:"#F0E68C"},{label:"Lavender ",value:"#E6E6FA"},{label:"LavenderBlush ",value:"#FFF0F5"},{label:"LawnGreen ",value:"#7CFC00"},{label:"LemonChiffon ",value:"#FFFACD"},{label:"LightBlue ",value:"#ADD8E6"},{label:"LightCoral ",value:"#F08080"},{label:"LightCyan ",value:"#E0FFFF"},{label:"LightGoldenRodYellow ",value:"#FAFAD2"},{label:"LightGray ",value:"#D3D3D3"},{label:"LightGrey ",value:"#D3D3D3"},{label:"LightGreen ",value:"#90EE90"},{label:"LightPink ",value:"#FFB6C1"},{label:"LightSalmon ",value:"#FFA07A"},{label:"LightSeaGreen ",value:"#20B2AA"},{label:"LightSkyBlue ",value:"#87CEFA"},{label:"LightSlateGray ",value:"#778899"},{label:"LightSlateGrey ",value:"#778899"},{label:"LightSteelBlue ",value:"#B0C4DE"},{label:"LightYellow ",value:"#FFFFE0"},{label:"Lime ",value:"#00FF00"},{label:"LimeGreen ",value:"#32CD32"},{label:"Linen ",value:"#FAF0E6"},{label:"Magenta ",value:"#FF00FF"},{label:"Maroon ",value:"#800000"},{label:"MediumAquaMarine ",value:"#66CDAA"},{label:"MediumBlue ",value:"#0000CD"},{label:"MediumOrchid ",value:"#BA55D3"},{label:"MediumPurple ",value:"#9370DB"},{label:"MediumSeaGreen ",value:"#3CB371"},{label:"MediumSlateBlue ",value:"#7B68EE"},{label:"MediumSpringGreen ",value:"#00FA9A"},{label:"MediumTurquoise ",value:"#48D1CC"},{label:"MediumVioletRed ",value:"#C71585"},{label:"MidnightBlue ",value:"#191970"},{label:"MintCream ",value:"#F5FFFA"},{label:"MistyRose ",value:"#FFE4E1"},{label:"Moccasin ",value:"#FFE4B5"},{label:"NavajoWhite ",value:"#FFDEAD"},{label:"Navy ",value:"#000080"},{label:"OldLace ",value:"#FDF5E6"},{label:"Olive ",value:"#808000"},{label:"OliveDrab ",value:"#6B8E23"},{label:"Orange ",value:"#FFA500"},{label:"OrangeRed ",value:"#FF4500"},{label:"Orchid ",value:"#DA70D6"},{label:"PaleGoldenRod ",value:"#EEE8AA"},{label:"PaleGreen ",value:"#98FB98"},{label:"PaleTurquoise ",value:"#AFEEEE"},{label:"PaleVioletRed ",value:"#DB7093"},{label:"PapayaWhip ",value:"#FFEFD5"},{label:"PeachPuff ",value:"#FFDAB9"},{label:"Peru ",value:"#CD853F"},{label:"Pink ",value:"#FFC0CB"},{label:"Plum ",value:"#DDA0DD"},{label:"PowderBlue ",value:"#B0E0E6"},{label:"Purple ",value:"#800080"},{label:"Red ",value:"#FF0000"},{label:"RosyBrown ",value:"#BC8F8F"},{label:"RoyalBlue ",value:"#4169E1"},{label:"SaddleBrown ",value:"#8B4513"},{label:"Salmon ",value:"#FA8072"},{label:"SandyBrown ",value:"#F4A460"},{label:"SeaGreen ",value:"#2E8B57"},{label:"SeaShell ",value:"#FFF5EE"},{label:"Sienna ",value:"#A0522D"},{label:"Silver ",value:"#C0C0C0"},{label:"SkyBlue ",value:"#87CEEB"},{label:"SlateBlue ",value:"#6A5ACD"},{label:"SlateGray ",value:"#708090"},{label:"SlateGrey ",value:"#708090"},{label:"Snow ",value:"#FFFAFA"},{label:"SpringGreen ",value:"#00FF7F"},{label:"SteelBlue ",value:"#4682B4"},{label:"Tan ",value:"#D2B48C"},{label:"Teal ",value:"#008080"},{label:"Thistle ",value:"#D8BFD8"},{label:"Tomato ",value:"#FF6347"},{label:"Turquoise ",value:"#40E0D0"},{label:"Violet ",value:"#EE82EE"},{label:"Wheat ",value:"#F5DEB3"},{label:"White ",value:"#FFFFFF"},{label:"WhiteSmoke ",value:"#F5F5F5"},{label:"Yellow ",value:"#FFFF00"},{label:"YellowGreen ",value:"#9ACD32"}],"column-count":[],"column-fill":[],"column-gap":[],"column-span":[],"column-rule":["3px outset #ff00ff"],"column-rule-color":[],"column-rule-style":[],"column-rule-width":[],"column-width":[],columns:[],cursor:["auto","crosshair","default","help","no-drop","not-allowed","pointer","move","progress","wait"],display:["block","inline","inline-block","none","table","table-cell","table-row"],direction:["ltr","rtl"],"float":["left","none","right"],font:[],"font-family":[{label:"Andale Mono",value:'"Andale Mono", AndaleMono, monospace'},{label:"Arial",value:'Arial, "Helvetica Neue", Helvetica, sans-serif'},{label:"Arial Black",value:'"Arial Black", "Arial Bold", Gadget, sans-serif'},{label:"Arial Narrow",value:'"Arial Narrow", Arial, sans-serif'},{label:"Arial Rounded MT Bold",value:'"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif'},{label:"Avant Garde",value:'"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif'},{label:"Baskerville",value:'Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif'},{label:"Big Caslon",value:'"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif'},{label:"Bodoni MT",value:'"Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif'},{label:"Book Antigua",value:'"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif'},{label:"Brush Script MT",value:'"Brush Script MT", cursive'},{label:"Calibri",value:'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif'},{label:"Calisto MT",value:'"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif'},{label:"Cambria",value:"Cambria, Georgia, serif"},{label:"Candara",value:'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif'},{label:"Century Gothic",value:'"Century Gothic", CenturyGothic, "AppleGothic", sans-serif'},{label:"Consolas",value:"Consolas, monaco, monospace"},{label:"Copperplate",value:'Copperplate, "Copperplate Gothic Light", fantasy'},{label:"Courier New",value:'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'},{label:"Didot",value:'Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif'},{label:"Franklin Gothic Museum",value:'"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif'},{label:"Futura",value:'Futura, "Trebuchet MS", Arial, sans-serif'},{label:"Garamond",value:'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif'},{label:"Geneva",value:"Geneva, Tahoma, Verdana, sans-serif"},{label:"Georgia",value:'Georgia, Times, "Times New Roman", serif'},{label:"Gill Sans",value:'"Gill Sans", "Gill Sans MT", Calibri, sans-serif'},{label:"Goudy Old Style",value:'"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif'},{label:"Helvetica",value:'"Helvetica Neue", Helvetica, Arial, sans-serif'},{label:"Hoefler Text",value:'"Hoefler Text", "Baskerville old face", Garamond, "Times New Roman", serif'},{label:"Impact",value:'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans serif'},{label:"Lucida Grande",value:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif'},{label:"Lucida Bright",value:'"Lucida Bright", Georgia, serif'},{label:"Lucida Console",value:'"Lucida Console", "Lucida Sans Typewriter", Monaco, "Bitstream Vera Sans Mono", monospace'},{label:"Monaco",value:'Monaco, Consolas, "Lucida Console", monospace'},{label:"Optima",value:'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif'},{label:"Palatino",value:'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif'},{label:"Papyrus",value:"Papyrus, fantasy"},{label:"Perpetua",value:'Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif'},{label:"Rockwell",value:'Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif'},{label:"Rockwell Extra Bold",value:'"Rockwell Extra Bold", "Rockwell Bold", monospace'},{label:"Segoe UI",value:'"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif'},{label:"Tahoma",value:"Tahoma, Verdana, Segoe, sans-serif"},{label:"Times New Roman",value:'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif'},{label:"Trebuchet MS",value:'"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif'},{label:"Verdana",value:"Verdana, Geneva, sans-serif"}],"font-size":[],"font-style":["italic","oblique","normal"],"font-variant":["small-caps","normal"],"font-weight":["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"],height:[],icon:[],left:[],"letter-spacing":[],"line-height":[],"list-style":["none"],"list-style-image":[],"list-style-position":["inside","outside"],"list-style-type":["circle","decimal","disc","lower-alpha","lower-roman","none","square","upper-alpha","upper-roman"],margin:[],"margin-top":[],"margin-right":[],"margin-left":[],"margin-bottom":[],"max-height":[],"max-width":[],"min-height":[],"min-width":[],"nav-down":[],"nav-index":[],"nav-left":[],"nav-right":[],"nav-up":[],opacity:[],outline:[],"outline-offset":[],overflow:["auto","hidden","no-content","no-display","scroll","visible"],"overflow-x":["auto","hidden","no-content","no-display","scroll","visible"],"overflow-y":["auto","hidden","no-content","no-display","scroll","visible"],padding:[],"padding-top":[],"padding-right":[],"padding-left":[],"padding-bottom":[],perspective:[],position:["absolute","fixed","relative","static"],resize:[],right:[],rotation:["45deg","90deg","180deg"],"table-layout":["auto","fixed"],"text-align":["center","left","justify","right"],"text-decoration":["line-through","overline","underline"],"text-index":[],"text-overflow":["clip","ellipsis"],"text-shadow":["2px 2px #ff0"],"text-transform":["capitalize","lowercase","uppercase"],top:[],transform:["matrix(0,0,0,0,0,0)","matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)","none","perspective(500)","rotate(45deg)","rotate3d(0,1,1,45deg)","rotateX(45deg)","rotateY(45deg)","rotateZ(45deg)","scale(1.5,2.0)","scale3d(0.5,1,1.5)","scaleX(1)","scaleY(1)","scaleZ(1)","skew(45deg,45deg)","skewX(45deg)","skewY(45deg)","translate(10px,10px)","translate3d(10px,10px,10px)","translateX(10px)","translateY(10px)","translateZ(10px)"],"transform-origin":["50% 50% 0"],"transform-style":[],transition:["all 0.2s ease"],"transition-delay":[],"transition-duration":[],"transition-property":[],"transition-timing-function":[],"vertical-align":["baseline","bottom","middle","top"],visibility:["hidden","visible"],"white-space":["normal","nowrap","pre","pre-line","pre-wrap"],width:[],"word-spacing":[],"z-index":[]};window.CssCompletion=function(){function n(e){this.isLocal=e&&e.local}n.prototype.hasHints=function(e){return true};n.prototype.insertRule=function(e,t){var n,r,i,s;n=e.getCursor();s=e.getTokenAt(n);if(/^\s+$/.test(s.string)){s=$.extend({},s,{start:n.ch,end:n.ch,string:""})}r={line:n.line,ch:s.start};i={line:n.line,ch:s.end};e.replaceRange(""+t+": ;",r,i);n=e.getCursor();return e.setCursor(n.line,n.ch-1)};n.prototype.getPseudoSelectorCompletions=function(t,n,r){var i,s,o,u;s=n.getTokenAt({line:r.line,ch:t.start});i=t.string===":";if(i||s.string===":"){o=i?"":t.string;return this.state.suggestions=function(){var t,n,r;r=[];for(t=0,n=e.length;t<n;t++){u=e[t];if(u.indexOf(o)===0){r.push({value:i?":"+u:u,label:u})}}return r}()}};n.prototype.getRuleCompletions=function(e,n,r){var i,s;s=e.string;return this.state.suggestions=function(){var e;e=[];for(i in t){if(i.indexOf(s)===0){e.push({value:i,action:"insertRule"})}}return e}()};n.prototype.getUrlCompletions=function(e,t,n){var r,i;this.state.getString=function(e){return e.string.replace(/^url?\(?"?'?/,"")};i=this.state.getString(e);return this.state.suggestions=function(){var e,t,n,s;n=design.bundles["public"].files_as_array;s=[];for(e=0,t=n.length;e<t;e++){r=n[e];if(r.isImage()&&(i===""||r.path.indexOf(i))){s.push({value:'url("'+r.path+'")',label:r.path})}}return s}()};n.prototype.getValueCompletions=function(e,n,r){var i,s,o;s=n.getTokenAt({line:r.line,ch:e.start-2});if(i=s&&t[s.string]){return this.state.suggestions=function(){var t,n,r;r=[];for(t=0,n=i.length;t<n;t++){o=i[t];if((o.label||o).toLowerCase().indexOf(e.string.toLowerCase())===0){r.push(o)}}return r}()}};n.prototype.getCompletions=function(e,t,n){var r;r=this.isLocal?e.state.localState.stack:e.state.stack;if(r.length===0&&e.string===":"||e.className==="tag"){return this.getPseudoSelectorCompletions(e,t,n)}else if(e.className==="variable"){return this.getRuleCompletions(e,t,n)}else if(e.className==="number"&&e.string.indexOf("ur")===0){return this.getUrlCompletions(e,t,n)}else if(r.length===2&&r[1]==="rule"){return this.getValueCompletions(e,t,n)}};n.prototype.getHints=function(e){var t,n,r,i;t=e.getCursor();i=e.getTokenAt(t);if(/^\s+$/.test(i.string)){i=$.extend({},i,{start:t.ch,end:t.ch,string:""})}if(!(this.state&&this.state.line===t.line&&this.state.start===i.start&&this.state.end===i.end-1)){this.state={line:t.line,start:i.start}}this.state.end=i.end;if(this.state.suggestions&&this.state.suggestions.length){n=this.state.getString?this.state.getString(i):i.string;this.state.suggestions=function(){var e,t,i,s;i=this.state.suggestions;s=[];for(e=0,t=i.length;e<t;e++){r=i[e];if((r.value||"").toLowerCase().indexOf((n||"").toLowerCase())===0){s.push(r)}}return s}.call(this)}else{this.state.suggestions=this.getCompletions(i,e,t)}if(this.state.suggestions&&this.state.suggestions.length===1&&this.state.suggestions[0].value===i.string){return null}return{list:this.state.suggestions,from:{line:t.line,ch:i.start},to:{line:t.line,ch:i.end}}};n.prototype.autoSemicolon=function(e,t){var n,r,i;n=e.getCursor();i=e.getTokenAt(n);r=e.getLine(n.line);if(i.state.stack.length===2&&r.substr(n.ch,r.length).indexOf(";")===-1){t.stop();e.replaceRange(": ;",n);return e.setCursor(n.line,n.ch+2)}};n.prototype.semiColon=function(e,t){var n,r;n=e.getCursor();r=e.getRange(n,{line:n.line,ch:n.ch+1});if(r===";"){t.stop();return e.setCursor(n.line,n.ch+1)}};n.prototype.autoInsertions=function(e,t){switch(t.charCode){case 58:return this.autoSemicolon(e,t);case 59:return this.semiColon(e,t)}};return n}()}).call(this)