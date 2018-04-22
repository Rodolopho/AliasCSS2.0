
// -------------------------------------------printer
//view

 var unValidACSSClassNames=[];
 var classPrinter={
 	//classlist to avoid repetation
 	classListAll:[],
 	tagStyleExists:false,
 	styleTagHolder:null,
 	acssToggle:function(element,propertyNvalue){
 		
			if(element.hasAttribute("acss-toggle")){
				//take propertand value from accs-toogel atribute
				var pNv=element.getAttribute("acss-toggle");
				pNv=pNv.split(":");
				var newPnV=pNv[0]+":"+element.style[pNv[0]];
				element.style[pNv[0]]=pNv[1];
				element.setAttribute('acss-toggle',newPnV);
				//apply to element

			}else{
				propertyNvalue=propertyNvalue.split(':');
				element.setAttribute("acss-toggle",propertyNvalue[0]+":"+element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]);
				element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];
				
			}

			},//end of accssToogle
 	addEventLisener:function(element,eventName,functionName){
 		
			  //if(!isHTMLElement(element)){console.log( typeof element); return false;}
					if(element.addEventListener){
						//hurray your broweser support it
						element.addEventListener(eventName,functionName,false);
						return true;
					}else{
						//older ie broweser
						element.attachEvent("on"+eventName,functionName);
						return true;
					}
 	},
 	//Handle event like click, blur, chang whic are allowed in
 	handleEvent:function(className, element){
	 		if(className.match(eventAlias['match'])){
	 			//console.log(className);
	 			var event=className.match(eventAlias['match'])[0];
	 			var stripedClass=className.replace(event,"");
	 			var propertyNvalue=compiler.getPropertyAndValue(stripedClass);
	 			if(!propertyNvalue) return false;
	 			if(event.replace(/[-|_]/,"")=="toggle"){
	 				
	 				if(compiler.hasElements){
	 				var elements=document.querySelectorAll(compiler.hasElements);
	 				this.addEventLisener(element,"click",function(){
	 				 	    Array.prototype.forEach.call(elements,function(element){
	 				 	    	classPrinter.acssToggle(element,propertyNvalue);
						 		//element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];
						 						
						});
	 				});
	 				//case 1 if it has a elements to effect

	 			}else{
	 				//case 2: it has just itself to effect
	 				this.addEventLisener(element,'click',function(e){
	 					//console.log(propertyNvalue);
	 					classPrinter.acssToggle(element,propertyNvalue);
	 						//element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];

	 				});
	 			}
	 			return stripedClass;

	 			}//end of toggle
	 			propertyNvalue=propertyNvalue.split(':');
	 			
	 			if(compiler.hasElements){
	 				var elements=document.querySelectorAll(compiler.hasElements);
	 				this.addEventLisener(element,event.replace(/[-|_]/,""),function(){
	 				 	    Array.prototype.forEach.call(elements,function(element){
						 		element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];
						 						
						});
	 				});
	 				//case 1 if it has a elements to effect

	 			}else{
	 				//case 2: it has just itself to effect
	 				this.addEventLisener(element,event.replace(/[-|_]/,""),function(e){
	 						element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];

	 				});
	 			}


	 				//Here i am giveing style sheet the class but am not adding the class on event
	 			if(this.classListAll.indexOf(className.replace(event,""))==-1){
	 				return className.replace(event,"");
	 				
	 			}else{
	 				return false;
	 			}
	 		}else{
	 			return className;
	 		}

	 	},
	//create DOM style tag to hold the class printed
	styleTag:function(){
		if(this.tagStyleExists==true){ return this.styleTagHolder;}
			var styleTag=document.createElement("style");
			styleTag.id="styleAlias";
			document.getElementsByTagName("head")[0].appendChild(styleTag);
			this.styleTagHolder=styleTag;
			this.tagStyleExists=true;
			return styleTag;
	},
	//you can always apend a class if you like modify the look here if you want
	appendToStyleTag:function(classStatement){
       var createNewClass=document.createTextNode(classStatement);
      this.styleTag().appendChild(createNewClass);

	},
	
	main:function(element){
		//checking of class existance
		if(element.hasAttribute("class")){
			//get class and trim out whitespaces
			var tmpClassList=element.getAttribute("class").trim();
			//make array of classname out of string
			if(tmpClassList.length){
				tmpClassList=tmpClassList.split(/\s+/);

			//looping class
			tmpClassList.forEach(function(eachClass){
				//handle event function
				eachClass=classPrinter.handleEvent(eachClass,element);
				//console.log(eachClass );

					//escape reppeated classname

					if(classPrinter.classListAll.indexOf(eachClass)==-1){
						//add to classlist for refrerence
						classPrinter.classListAll.push(eachClass);
						
		

						var result=compiler.main(eachClass);

						if(result){
								classPrinter.appendToStyleTag(result);
						}else{
								//not a valid ACSS clasNames
								if(unValidACSSClassNames.indexOf(eachClass)==-1){
									unValidACSSClassNames.push(eachClass);
								}

							}


					}
				});

			}

		 }//if element has class attribute
		 
		 //Pseduo not supported at the time
		 if(element.hasAttribute("mq")){

			 	var getQuery=element.getAttribute("mq").trim();
			 	var queryPattern=/[\w|-]+:.+\[[\w|\s|-]+\]/;
			 	if(getQuery.match(queryPattern)){
			 		var query= new ACSSMediaQuery(getQuery);
			 		var mqstatememt=query.setQuery();
			 		if(mqstatememt){
			 		var mqClassName=query.className;
			 		var mqClassList=query.classList;
			 		var elementify="";

 					//Elementify class name
						if(mqClassName.match(/^_[a-z1-6|-]+_/)){
							elementify=" "+mqClassName.match(/^_[a-z1-6|-]+_/)[0].replace(/_/g,"").replace(/-/g," ")+" ";
					}//eoelementify


			 		var mainStatement="@media " + mqstatememt+"{\r\n" + "." + mqClassName+elementify+ "{\r\n";
			 		    if(mqClassList){
			 		    	var pseduoQ=[];
			 		    	var classArr=mqClassList.replace(/\s+/g," ").split(" ");

			 		    	classArr.forEach(function(e){

			 		    			var result=compiler.main(e);
			 		    			if(result){
			 		    				if(result[0].match(":")){
			 		    					pseduoQ.push(result);
			 		    				}else{
			 		    				mainStatement+=result[1]+";\r\n";
			 		    				}

			 		    			}

			 		    	});
			 		    	mainStatement+="\r\n" + "}\r\n";
			 		    	pseduoQ.forEach(function(e){
			 		    	var pseduo=e[0].split(/\w+:/)[1];
			 		    	mainStatement+="." + mqClassName+":"+pseduo+elementify+"{\r\n";

			 		    			mainStatement+=e[1]+";\r\n";

			 		    		mainStatement+="\r\n" + "}";

			 		    	});

			 		    mainStatement+="\r\n"+"}\r\n";
			 		    }

			 		    classPrinter.appendToStyleTag(mainStatement);
			 		}//if setquert()

			 	}






		}//if it has attribute for media query :mq

		ACSSClone(element);

	},//eomain
	launch:function(){
		Array.prototype.forEach.call(document.getElementsByTagName("*"),function(e){
		classPrinter.main(e);
	});



},
compile:function(){
  var classes=document.getElementById('styleAlias');
  if(classes){
    var preetyPrint=classes.innerHTML.replace(/\}/g,"</br>}</br>").replace(/\{/g,"{</br>&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write(preetyPrint);
  }else{
  	console.warn("There is not ACSS used in this document!!");
  	alert("CoundNot found any ACSS in this Document!");
  }
}
};//eoclassPrinter
classPrinter.launch();
//window.onload=function(){classPrinter.launch();}
//

//-----------------------------end ofPrinter

//user Interface
//allow user to add property alias
//match, callback, addstatic property, 

