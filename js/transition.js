$(function() {
	/** Performs transition to different div to simulate different page. */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var li = $(this).parent();
			li.addClass('activemenubutton');
			li.siblings().removeClass('activemenubutton');
			var target = $(this.hash);
			var title = target.selector.slice(1,target.selector.length);
			var html = '<h1>'+title.charAt(0).toUpperCase()+title.slice(1)+'</h1>';
			$('#title').html(html);
			$(target.selector).siblings().fadeOut(300);
			$(target.selector).delay(400).fadeIn(300);
			return false;
		}
	});
});