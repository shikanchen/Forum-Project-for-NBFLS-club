$(function () {
	$("#inputFile").fileinput();

	//x-editable

	//toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'popup';     
    
    //make username editable
    $('.editable').editable();

    
});