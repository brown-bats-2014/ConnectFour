var Game = function(){
  this.board = (function(){
    var nested_board = [];
    for(var i = 0; i < 7; i++)
    {
      var column = [];
      for(var j = 0; j < 6; j++)
      {
        column.push(0);
      }
      nested_board.push(column);
    }
    return nested_board;
  })();
}

Game.prototype.gameOver = function(){
  var col_results = evaluateLinear(this.board)
  if(col_results === false)
  {
    var row_results = evaluateLinear(transpose(this.board))
    if(row_results === false)
    {
      var diagonal = evaluateDiag(this.board)
      if(diagonal === false)
      {
        nested = this.board.slice(0);
        nested.reverse();
        return evaluateDiag(nested);
      }
      else
        return diagonal
    }
    else
     return row_results
  }
  else
    return col_results
}
Game.prototype.addPiece = function(data){
  var column = data.columnId
  var player = data.player
  var changed = false;
  for(i=0; i<this.board[column].length; i++ )
  {
    if(this.board[column][i] !== 0)
      {
        changed = true;
        this.board[column][i-1] = player;
      }
  }

}
function evaluateDiag(nested_array)
{
  var nested_diags = [];
  for (var k =3; k <9; k++ )
  {
    var diagonal = [];
    for(var i = 0; i < nested_array.length; i++)
    {
      for(var j = 0; j < nested_array[i].length; j++)
      {
        if((i + j) === k)
        {
          diagonal.push(nested_array[i][j])
        }
      }
    }
    nested_diags.push(diagonal);
  }
  return evaluateLinear(nested_diags);
}

function evaluateLinear(nested_array)
{
   for(var i=0; i<nested_array.length; i++)
   {
    var counter = 0;
    var value;
    for(var j=0; j<nested_array[i].length; j++)
    {
      if (nested_array[i][j] === 0) {
        counter = 0;
      }
      else if (value === nested_array[i][j])
      {
        counter += 1
      }
      else
      {
        value = nested_array[i][j]
        counter = 1;
      }
      if(counter === 4)
        return value;
    }
   }
   return false;
}
function transpose(a)
{
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}
