$(document).ready(function(){

  var toggle = 0;

$('#toggle').on('click', function (){
  // console.log(toggle); // debug comment
  if (toggle==0) {
    $('#css').prop('href','assets/css/style-unique.css');
    toggle=1;
  }
  else {
    $('#css').prop('href','assets/css/style.css');
    toggle=0;
  }    


});
});