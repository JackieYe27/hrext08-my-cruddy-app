// Strike through functionality
$(document).ready(function () {
 $("ul").on("click", "li", function() {
 	$(this).toggleClass("done");


  });


// delete

$("ul").on("click", "span", function(event) {

	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();

});


// add

$("input").keypress(function(event){
	if(event.which === 13) {
		var task = $("input").val();
		$("ul").append("<li><span class='delete'><i class='fas fa-angry'></i></span>"+ task + "</li>")
		$("input").val("");
	}
});

// Toggling the plus

$("#plus").on("click", function() {
	$("input").fadeToggle();
})


});