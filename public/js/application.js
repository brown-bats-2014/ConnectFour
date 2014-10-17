$(document).ready(function() {
  //EventListener

  $("#columns").on( "click", function (e) {
    e.preventDefault();
    //counter for altenating players
    var counter = 1
    var notDone = true
    // Alternating Player
    while (notDone) {
      // Player1
      if (counter % 2 == 0) {
        User1.dropPiece();
        counter++;
      }
      // Player2
      else {
        User2.dropPiece();
        counter++;
      };

    };
  });


  // Board
  var Board = function () {

  };
  //

  // User1
  var User1 = function () {
    this.dropPiece = function () {

    };
  };
  //

  // User2
  var User2 = function () {
    this.dropPiece = function () {

    };
  };
  //

});
