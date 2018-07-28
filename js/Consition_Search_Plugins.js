$.fn.UiSearch=function(focusElement,searchList,searchItem){
	var ui=$(this);
	$(focusElement,ui).on('click',function(){
		$(searchList).show();
		return false;
	})
	$('html').on('click',function(){
		$(searchList).hide();
	})
	$(searchItem,ui).on('click',function(){
		$(focusElement,ui).get([0]).innerHTML=this.text;
	})
}