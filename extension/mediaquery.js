// -------------------------------------------query

//limitation of mw extension , not able to use pseduo effect like hover , seduo
var ACSSMediaQuery=function(query){
	//this.element=element;
	this.className=query.split(":")[0];
	this.classList=query.match(/\[(.+)\]/)[1].trim();
	this.query=query.split(":")[1].replace(/\[(.+)\]/,"").replace(/\s/g,"");
	this.feature={
			w:"width ",
			mw:"min-width ",
			xw:"max-width",
			h:"height",
			mh:"min-height",
			xh:"max-height",
			dw:"device-width ",
			mdw:"min-device-width ",
			xdw:"max-device-width",
			dh:"device-height",
			mdh:"min-device-height",
			xdh:"max-device-height",
			ar:"aspect-ratio",
			mar:"min-aspect-ratio",
			xar:"max-aspect-ratio",
			dar:"device-aspect-ratio",
			mdar:"min-device-aspect-ratio",
			xdar:"max-device-aspect-ratio",
			c:"color",
			mc:"min-color",
			xc:"max-color",
			ci:"color-index",
			mci:"min-color-index",
			xci:"max-color-index",
			m:"monochrome",
			mm:"min-monochrome",
			xm:"max-monochrome",
			r:"resolution",
			mr:"min-resolution",
			xr:"max-resolution",
			//sp:"scan:progressive",
			//si:"scan:interace",
			g:"grid",
			//op:"orientation:portrait",
			//ol:"orientation:landscape"
  		};

  		  //mq="classname:all and (color-index)[br5px w100px]"
  		  //xmq="className:*&(ci)[br5px h100p]"

	this.type={
		a:"all",au:"aural",b:"braille",h:"handheld",p:"print",
		pj:"projection",s:"screen",tty:"tty",tv:"tv",e:"embossed"
	}
};
ACSSMediaQuery.prototype.setQuery=function(){

		var that=this;
	   var  symbolfilter=this.query.replace(/\|/g,", ")
	           	.replace("?", " only ")
	           	.replace("*"," all ")
	           	.replace("!", " not ");
	           	//for type alias
	     if(symbolfilter.match(/(au|b|h|p|pj|s|tty|tv|e)[-|&]/)){
	     		var typealias=symbolfilter.match(/(au|b|h|p|pj|s|tty|tv|e)[-|&]/)[1];
				var type=this.type[typealias];
				symbolfilter=symbolfilter.replace(typealias," "+type+" ").replace("-","");
	     }
	     // for every '&'
	     symbolfilter=symbolfilter.replace(/&/g," and ");
	     //feature handler
	     if(symbolfilter.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/)){
	     	var featurreList=symbolfilter.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/g);
	     	featurreList.forEach(function(each){
	     		var featurealias=each.match(/\((w|mw|xw|h|mh|xh|dw|mdw|xdw|dh|mdh|xdh|ar|mar|xar|dar|mdar|xdar|g|c|mc|xc|ci|mci|xci|m|mm|xm|r|mr|xr)[0-9]*[\.|\\]?[0-9]*[a-z]*\)/)[1];
	     			var feature=that.feature[featurealias];
	     			if(each.match(/[0-9]/)){
	     				symbolfilter=symbolfilter.replace("("+featurealias,"("+feature+": ");
	     			}else{
	     				symbolfilter=symbolfilter.replace(each,"("+feature+")");
	     			}
	     	});
	     }
	     //static feature
	     symbolfilter=symbolfilter.replace("(si)"," (scan: interace) ")
	     					.replace("(sp)","(scan: progressive) ")
	     					.replace("(op)"," (orientation: portrait) ")
	     					.replace("(ol)"," (orientation: landscape) ");

	     return symbolfilter;



};
//module.exports=ACSSMediaQuery;
//-----------------------------end of query