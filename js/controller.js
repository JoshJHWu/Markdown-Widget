$(document).ready(function() {

	$('#output').html(transform($('#input').html()))

	$('#input').keyup(function(event){
	 	var $target = $(event.target)
	 	view.drawOutput($target.val())
 	});

  view = new View();
})

