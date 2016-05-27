function View(){

}

View.prototype.drawOutput = function(arg){
  var $target = $('#output');
  var html = arg;
  $target.html(transform(html));
}



