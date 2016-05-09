$(document).ready(function() {

  $('#input').keyup(function(event){
    var $target = $(event.target)
    console.log($target.val())
    view.drawOutput($target.val())
  });

  function View(){

  }

  View.prototype.drawOutput = function(arg){
    var $target = $('#output');
    var html = arg;
    $target.html(transform(html));
  }

  view = new View();
  view.drawOutput();

})
