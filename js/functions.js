
function io_class_toggle(cls,tgl) {
    jQuery(cls).toggleClass(tgl);
}

if(lowerie){
	document.documentElement.innerHTML = 'Update your browser please!<br><a href="http://outdatedbrowser.com" target="_blank">Check available browsers</a>';
}


;(function($) {
	
	$(window).resize(function(){
		io_resize();
	});

	$(window).load(function(){
		io_which_way();
	});

	$(document).ready(function() {
		

	});

})(jQuery);
	