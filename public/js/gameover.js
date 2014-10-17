
function gameOver(){
  var color = "yellow";
  var counter = 0;
  for(var i=0; i <= $('tr').length; i++)
  {
    $tr = $("tr:nth-child("+i+ ") td");
    for(var j=0;  j < $tr.length; j++)
    {
      $td = $($tr[j]);
      $td.hasClass("yellow");
    }

  }
}

