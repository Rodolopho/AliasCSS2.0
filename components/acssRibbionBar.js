
function openAcssRibbionBar(){
var	acssDesignBarLocked=false;
var currentElement=document.body;
var acssInputField;
// var infoMsg;
// var infoEle;

function setClassToField(){
	acssInputField.value=currentElement.getAttribute('class');
}
function acssInputHandler(){
	// console.log(acssInputField);
	acssInputField.addEventListener("keydown",function(e){
                if(acssDesignBarLocked){return false;}
                var code = (e.keyCode ? e.keyCode : e.which);
                //if(code==8){getClassList="";}
                if(code==32 ||code==13||code==8){
                    if(acssInputField.value.trim()){
                            currentElement.setAttribute("class",acssInputField.value.trim());
                    		classPrinter.main(currentElement);
                    
                    }
                }
                });
}
function buttonRole(){
		var buttonParent=document.getElementById("buttonParent");
        var buttonPrev=document.getElementById("buttonPrev");
        var buttonNext=document.getElementById("buttonNext");
        var buttonChild=document.getElementById("buttonChild"); 
  
       
        nextElement=function(){
        	
        		if(currentElement.nextElementSibling && currentElement.nextElementSibling.classList.contains("dont-include")){ return false;}
            return currentElement.nextElementSibling;
        };
        prevElement=function(){
            return currentElement.previousElementSibling;
        };
        childElement=function(){
            return currentElement.firstElementChild;
        };
        parent=function(){
            return currentElement.parentElement;
        };
        
        buttonNext.onclick=function(){
            if(nextElement()){
                //currentElement.style.border="";
                currentElement=nextElement();
                infoEle.innerText=currentElement.nodeName.toLowerCase()+"#"+currentElement.id;

		           infoMsg.innerHTML="";
		           setClassToField();
                 //settleOldClass(currentElement);
            }else{
                
                infoMsg.innerHTML="("+"<span style='color:red'>It has no next sibling Element</span>)";
                return false;
            }
        };
        buttonPrev.onclick=function(){
            if(prevElement()){
                //currentElement.style.border="";
                currentElement=prevElement();
                infoEle.innerText=currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no Previous sibling Element</span>)";
                return false;
            }
        };
        buttonParent.onclick=function(){
            if(parent()){
                //currentElement.style.border="";
                currentElement=parent();
                infoEle.innerText=currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no Parent Element</span>)";
                return false;
            }
        };
        buttonChild.onclick=function(){
            if(childElement()){
                //currentElement.style.border="";
                currentElement=childElement();
                infoEle.innerText=currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="("+"<span style='color:red'>It has no child Element</span>)";
                return false;
            }
        };

        // buttonSave.onclick=function(){
        //     //doing nothigs now
        // };
        // buttonCancel.onclick=function(){
        //     classNameInput.value=oldClass;
        // }
};
function quickChangeSelectOnClick(element){

		var elements=element ?element:document.getElementsByTagName('*');
    	Array.prototype.forEach.call(elements,function(el){
        	 //if(!el.classList.contains("dont-include")){
		        el.addEventListener("click",function(e){
		            //console.log(this);
		            if(!el.classList.contains("dont-include")){
		            	
		                //var oldClass=this.getAttribute("class");
		                 //classNameInput.value=oldClass;
		                 //currentElement.style.border="";
		                 currentElement=this;
		                 //this.style.boxShadow="0px 0px 5px #ccc";
		                 //settleOldClass();
		                 infoEle.innerText=this.nodeName.toLowerCase()+"#"+this.id;

		                 infoBarMsg="";
		                 setClassToField();
		            }
		            
		            e.stopPropagation();
		            e.preventDefault();

		        	},false);
	    	//}
		});
    };//end of quickChangeventilizer

    function quickChangeSelectByIdInput(selector){
    	if(selector){
    		selector.onchange=function(){
    			//console.log(this.value);
	            if(document.getElementById(this.value)){
	            	
	                currentElement=document.getElementById(this.value);
	                infoMsg='';
	                infoEle.innerText=currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
	                setClassToField();
	                //currentElement.element.style.boxShadow="0px 0px 5px #ccc";
	                //settleOldClass(currentElement);
	            }else{
	                infoMsg="("+"<span style='color:red'>There is no element with id:"+this.value+"</span>)";
	            }
	            
	        };
    	}

    };//End of Selector

 

 

function init(click){
	launchQuickChange();
	
 acssInputField=document.getElementById('quickChangeAcssInput')||"hello";
 var infoMsg=document.getElementById('infoMsg');
 var infoEle=document.getElementById('infoEle');
// action="";
//var acssInputField=document.getElementById('quickChangeAcssInput');
var oldElement="";
      quickChangeSelectOnClick();
      quickChangeSelectByIdInput(document.getElementById("quickChangeIdInput"));
      
      buttonRole();
      acssInputHandler();
      
    document.getElementById("quickChangeMin").onclick=function(){
	if(this.innerHTML=='Hide'){
		document.getElementById("quickChangeDisplay").style.display="none";
		this.innerHTML="Show";
		 document.getElementById("quickChangeBox").style.width="75px";
		 //document.getElementById("quickChangeBox").style.height="10px";
		
	}else{
		document.getElementById("quickChangeDisplay").style.display="block";
		this.innerHTML="Hide";
		 document.getElementById("quickChangeBox").style.width="600px";
		 //document.getElementById("quickChangeBox").style.height="300px";
	}
};
document.getElementById("quickChangeClose").onclick=function(){
	if (confirm('Are you sure you want to close?')) {
    // Save it!
    var ele=document.getElementById("quickChangeBox");
    ele.parentNode.removeChild(ele);
    

		} else {
		    // Do nothing!
		}
		
	
};


	}//end of init
	
//--------------ScriptManager-------------


// --------------------------------HTML Display-----------------------------
function launchQuickChange(){
	var innerHTML='<div id="quickChangeBox" style="margin:20px;width:600px; text-align:center;position:fixed;bottom:0;right:0;box-shadow:0 0 5px grey;background-color:#eee;padding:10px;font-family:monospace" class="dont-include">\
  <div class="dont-include" style="display:inline-block;position:absolute;top:4px;right:4px;">\
    <button class="dont-include" id="quickChangeMin">Hide</button>\
    <button class="dont-include" id="quickChangeClose">X</button>\
  </div>\
  <div id="quickChangeDisplay" class="dont-include">\
    <header style="font-size:11px;border:1px solid #eee" class="dont-include"> Working Element:<span style="color:orange" class="dont-include" id="infoEle">ul#</span><span class="dont-include" id="infoMsg"></span>\
      <small class="dont-include">Click element on this page to select</small></header>\
    <div style="" class="dont-include">\
      <div class="dont-include" style="">\
        <label class="dont-include">Select by id </label>\
        <input type="text" style="" id="quickChangeIdInput" class="dont-include" placeholder="type id without #">\
        <div id="selectOption" class="dont-include" style="display:inline-block;font-size:11px">\
          <button type="" class="dont-include" id="buttonPrev">Prev</button>\
          <button type="" class="dont-include" id="buttonNext">Next</button>\
          <button type="" class="dont-include" id="buttonParent">Parent</button>\
          <button type="" class="dont-include" id="buttonChild">Child</button>\
        </div>\
      </div>\
    </div>\
    <div class="dont-include" style="margin:5px 0">\
      <input type="" id="quickChangeAcssInput" class="dont-include" style="height:20px;\width:100%;margin:0 -10px;border:1px solid #ccc;outline:none" placeholder="Input ACSS class names">\
    </div>\
    \
</div>';
	
var box=document.createElement("div");
box.innerHTML=innerHTML;
document.body.append(box);
};

init();
};