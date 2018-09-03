$(document).ready(function() { 

	var collapseHeight 	= 112;
	var expandHeight   	= 360;
	var speedy					= 200;
	var workLinkBase		= 12;
	var workLinkLimit		= 122;
	var letsTalkBase		= 28;
	var letsTalkLimit		= 232;
	var linkedInBase		= 28;
	var linkedInLimit		= 100;

	$("article div.container").height(collapseHeight);
	$("article section p:nth-of-type(n+2), dl").hide();

	/* BUTTONS */
	// TODO: simplify.

	$("#workLink a").hover(
		function() {
			$(this).animate({width: workLinkLimit}, speedy);
			$(".left").animate({width: workLinkLimit}, speedy);
		},
		function() {
			$(".left").animate({width: workLinkBase}, speedy);
			$(this).animate({width: letsTalkBase}, speedy);
	});
	$("#letsTalk").hover(
		function() {
			$(this).animate({width: letsTalkLimit}, speedy);
		},
		function() {
			$(this).animate({width: letsTalkBase}, speedy);
	});
	$("#linkedIn a").hover(
		function() {
			$(this).animate({width: linkedInLimit}, speedy);
		},
		function() {
			$(this).animate({width: linkedInBase}, speedy);
	});

	/* ACCORDION */

	$("article div.container").click(function() {         					// when article is clicked
		$(this).data("status", "clicked");														// target for expansion
		$("article div.container").each(function() {
					if ($(this).data("status") === "clicked" &&
						$(this).height() === collapseHeight) {
						$(this).animate({height: expandHeight}, speedy); 			// increase height
						$("article section p:nth-of-type(n+2), dl").fadeIn(speedy, "linear");
					}
					else if ($(this).data("status") === "clicked" &&
						$(this).height() === expandHeight) {
						$(this).animate({height: collapseHeight}, speedy); 		// decrease height
						$("article section p:nth-of-type(n+2), dl").fadeOut(speedy, "linear");
					}
					$(this).removeData("status");
		}); // end each
	}); // end click


	/* EMAIL ADDRESS MUNGING */

	var foo			= "&#109;&#97;&#105;&#108;&#116;&#111;&#58;";
	var bar 		= "&#114;&#101;&#105;&#100;&#97;&#108;&#111;&#117;&#100;";
	var baz 		= "%2B";
	var qux 		= "&#112;&#111;&#114;&#116;&#102;&#111;&#108;&#105;&#111;"
	var quux 		= "%40";
	var corge		= "&#103;&#109;&#97;&#105;&#108;";
	var grault	= "%2E";
	var garply	= "&#99;&#111;&#109;";
	var waldo		= bar + baz + qux + quux + corge + grault + garply;

	$('#letsTalk').html("<a href='" + foo + waldo + "'>" + waldo + "</a>");


}); // end ready