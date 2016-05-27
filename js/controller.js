$(document).ready(function() {
  $('#input').keyup(function(event){
  var $target = $(event.target)
  console.log($target.val())
  view.drawOutput($target.val())
});

  view = new View();
})

