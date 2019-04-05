var ul = document.querySelector('ul')
var input = document.getElementById('text')

// creating the items array after every entry

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
var data = JSON.parse(localStorage.getItem('items'))

// li maker

var liMaker = text => {
  var li = document.createElement('li')
  li.textContent = text;
  ul.append(li)

}


// Strike through functionality

$(document).ready(function () {

 	$("ul").on("click", "li", function() {
 		$(this).toggleClass("done");


  });


// delete

$("ul").on("click", "span", function(event) {

	$(this).parent().fadeOut(300, function() {
		$(this).remove();
 
 		var element1 = JSON.parse(localStorage.getItem("items"))[0];

 		var arr = JSON.parse(localStorage.getItem("items"));
		arr.splice(0,1);//remove first

		localStorage.setItem("items",JSON.stringify(arr));


	});
	

	event.stopPropagation();

});


// add

$("input").keypress(function(event){

	if(event.which === 13) {
		var task = $("input").val();
		$("ul").append("<li><span class='delete'><i class='fas fa-angry'></i></span>"+ task + "</li>")
		$("input").val("");
		// event.preventDefault()
  		itemsArray.push(task)
  		localStorage.setItem('items', JSON.stringify(itemsArray))
  		// liMaker(task)
  		task = ''
 

}

});

// making things show up

data.forEach(item => {
  var task = $("input").val();
    $("ul").append("<li><span class='delete'><i class='fas fa-angry'></i></span>"+ item + "</li>")	
  // liMaker(item)
})


// Toggling the plus

$("#plus").on("click", function() {
	$("input").fadeToggle();
})


});

