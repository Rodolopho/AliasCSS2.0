
function acssToggle(element,propertyNvalue){
	if(element.hasAttribute("acss-toggle")){
		//take propertand value from accs-toogel atribute
		var pNv=element.getAttribute("acss-toggle");
		pNv=pNv.split(":");
		console.log();
		var newPnV=pNv[0]+":"+element.style[pNv[0]];
		element.style[pNv[0]]=pNv[1];
		element.setAttribute('acss-toggle',newPnV);
		//apply to element

	}else{
		propertyNvalue=propertyNvalue.split(':');
		element.setAttribute("acss-toggle",propertyNvalue[0]+":"+element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]);
		element.style[propertyNvalue[0].replace(/-([a-z])/g,function(m){return m[1].toUpperCase();})]=propertyNvalue[1];
		console.log();
	}

}

