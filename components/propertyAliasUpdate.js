//Modal property alias and stattic classnames
//Notes _li-a_=>li a, _li--a_ =>li + a, _li---a_=> li > a
var AliasProperty={

	//Property Alias Object

		"an":"animation",
		"adl":"animation-delay",
		"adu":"animation-duration",
		"aic":"animation-iteration-count",
		//"an":"animation-name",
		"atf":"animation-timimg-function",//atfcb0d1-0d7-1-0d1=animation-timimg-function:cubic-bezeir(0.1,0.7,1,0.1) for negative value use -- or _-1d5//
		"b"  :"border",
		"bb"  :"border-bottom",
		"bbc"  :"border-bottom-color",
		"bblr":"border-bottom-left-radius",
		"bbrr": "border-bottom-right-radius",
		"bbw"  :"border-bottom-width",
		"bc" :"border-color",
		"bg"  :"background",
		"bgc"  :"background-color",
		"bgi"  :"background-image",
		"bgp"  :"background-position",
		"bgs":"background-size",
		"bl"  :"border-left",
		"blc"  :"border-left-color",
		"brt"  :"border-right",
		"brc"  :"border-right-color",
		"br"  :"border-radius",
		"brw"  :"border-right-width",
		"bs"  :"border-spacing",
		"bt"  :"border-top",
		"btc"  :"border-top-color",
		"btlr":"border-top-left-radius",
		"btm"  :"bottom",
		"btrr": "border-top-right-radius",
		"btw"  :"border-top-width",
		"bw"  :"border-width",
		"bxs":"box-shadow",
		"c"  :"color",
		"cc":"column-count",
		"cg":"column-gap",
		"ci"  :"counter-increment",
		"cols":"columns",
		"con"  :"content",//string
		"cp"  :"clip",
		"cr"   :"counter-reset",
		"cr":"column-rule",
		"crc":"column-rule-color",
		"crw":"column-rule-width",
		//"c"  :"cursor",
		"cw":"column-width",
		"f_"    :"font",
		"f":"flex",
		"fb":"flex-basis",
		"ff"  :"font-family",
		"fg":"flex-grow",
		"fl":"filter",
		"fs"  :"font-size",
		"fsk":"flex-shrink",
		"fsa":"font-size-adjust",
		"h":"height",
		"i":"icon",
		"io":"image-orientation",
		"ir":"image-resolution",
		"key":"@keyframes",
		"l"  :"left",
		"les"  :"letter-spacing",
		"lh"  :"line-height",
		"ls"  :"list-style",
		"lsi"  :"list-style-image",
		"m"  :"margin",
		"ma" :"margin",
		"mb"  :"margin-bottom",
		"mh"  :"min-height",
		"ml"  :"margin-left",
		"mo"  :"marker-offset",
		"mr"  :"margin-right",
		"mt"  :"margin-top",
		"mw"  :"min-width",
		"ord":"order",
		"ol"  :"outline",
		"olc"  :"outline-color",
		"olo":"outline-offset",
		"olw"  :"outline-width",
		"op":"object-position",
		"o":"opacity",
		"orp":"orphans",
		"p"  :"padding",
		"pb"  :"padding-bottom",
		"pers":"perspective",
		"perso":"perspective-origin",
		"pl"  :"padding-left",
		"pr"  :"padding-right",
		"pt"  :"padding-top",
		"q"    :"quotes",//string
		"r"  :"right",
		"t"  :"top",
		"t_": "transition",
		"tdl":"transition-delay",
		"tdu":"transition-duration",
		"tf":"transform",
		"tfo":"transform-origin",
		"ts":"tab-size",
		"ttf":"transition-timing-function",
		"ta":"text-align",//string
		"tdc":"text-decoration-color",
		"te":"text-emphasis",
		"tec":"text-emphasis-color",
		"ti" : "text-indent",
		"to":"text-overflow",//string
		"txs" :"text-shadow",
		"va":"vertical-align"	,
		"w" :"width",
		"ws":"word-spacing",
		"xh"  :"max-height",
		"xw"  :"max-width",
		"zi":"z-index",
		


};//endof Property Alias

//Add your devies on match and define the query as folows
var deviceAlias={
	match:/^mob[-|_]|tab[-|_]|print[-|_]/,
	//Device 
	//screens
	// "mob":"@media screen and (min-device-width : 320px) and (max-device-width : 768px) {",
	// "tab":"@media screen and (min-device-width : 768px) and (max-device-width : 1024px) {",
	// "lap":"@media screen  and (min-width : 1224px) {",
	// "print":"@media print{",
	"mob":"@media (max-width : 768px) {",
	"tab":"@media  (min-width : 768px) and (max-width : 992px) {",
	"lap":"@media  (min-width : 1200px) {",
	"print":"@media print{",
	"xs":"@media (max-width : 768px) {",
	"sm":"@media  (min-width : 768px) and (max-width : 992px) {",
	"md":"@media  (min-width : 1200px) {",
	"lg":"@media print{",

};
//Events to llok afterk
var eventAlias={
		match:/^(toggle|click|blur|change|dblclick|drag|keypress|scroll)[-|_]/,
		allowedEvents:['toggle','click','blur','change','dblclick','drag','keypress'],
};
//Pseduo Alias like :hover, :targetd, :after, :before etc
var pseudoAlias={
	 		matchit:/^(ck|en|dis|h|a|fo|ln|af|bf|haf|hbf|afh|bfh|tg|htg|flt|fln|sel|lc|fc|nc[0-9][0-9]?[0-9]?[n]?|nlc[0-9][0-9]?[0-9]?[n]?)[-_]/,
	 		alias:{afh:":after:hover",bfh:":before:hover",tg:"target",ck:"checked",dis:"disabled",
			en:"enabled",htg:"hover:target",lc:"last-child",fc:"first-child",nc:"nth-child",
			nlc:"nth-last-child",sel:":selection",flt:":first-letter",fln:":first-line",h:"hover",
			af:":after",bf:":before",haf:"hover::after",hbf:"hover::before",fo:"focus",ln:"link",a:"active",v:"visited"}
	 };

//browser Prefix	 

var browserPrefix=["-moz-","-webkit-","-ms-"];

//Each time compiler check and match the following pattern. if pattern matches then 
//Compiler will compile otherwise it wont leaves it untouched.
//dont forget to take out pseduo , elements, device prefix before passing to main compiler onlt compiles 
//Raw and Pure classnames i.e which has just property and value
var allowedPropertyAlias=/(aic|adu|tdu|bgp|bgs|bw|blw|brw|btw|btw|bbw|br|bblrs|btrrs|bblrs|btlrs|btm|bs|cw|cg|crw|fb|fs|fl[bcgis]|flse|h|l|lh|les|m|ma|mt|mr|mb|ml|xw|xh|mw|mh|mo|op|olw|olo|p|pa|pt|pr|pb|pl|pers|perso|r|t|tfo|ts|ti|va|w|ws|cc|fg|fs|o|ord|lh|orp|op|zib|brt|bl|bt|bb|ol|cr)[-]?[0-9]|c_|url[-_]|ff_|f_|(h|a|l|fo|af|bf)[-_]|bg[i]?(lg|rg)|tf|t_|an_/;
