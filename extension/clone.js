
// -------------------------------------------clone
//Clone classname of any element to this element
	var ACSSClone=function(element){

		//checking if it has cloneElement attrinute
	if(element.getAttribute("cloneElement")){
		var id=element.getAttribute("cloneElement").replace("#","");
		getClassElement=document.getElementById(id);
		element.className=getClassElement.className+" "+element.className;

	}
	if(element.getAttribute("cloneChild") ||element.getAttribute("cloneChildOdd")||element.getAttribute("cloneChildEven")){
		var odd="",even="", all="";
		function getClassName(attri){
			var  getClassElement=document.getElementById(attri.replace("#",""));
			if(getClassElement){
			 return getClassElement.className;
			}else{
				return "";
			}
		}
		if(element.getAttribute("cloneChild")){
			all=getClassName(element.getAttribute("cloneChild"));
		}
		if(element.getAttribute("cloneChildOdd")){
			odd=getClassName(element.getAttribute("cloneChildOdd"));
		}
		if(element.getAttribute("cloneChildEven")){
			even=getClassName(element.getAttribute("cloneChildEven"));
		}

		Array.prototype.forEach.call(element.children,function(each,i){
			//if(each.className.match(getClassElement.className)){return true;}
			if((i+1)%2){

				oddeven=odd.replace(each.className,"");
			}else{
				oddeven=even.replace(each.className,"");
			}
			escape_all=all.replace(each.className,"");
			each.className=oddeven+" "+escape_all+" "+each.className;
			});
		}
};
//module.exports=ACSSClone;

//-----------------------------end of clone