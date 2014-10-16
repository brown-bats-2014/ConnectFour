$(document).ready(function() {
  //EventListener
  for (var i = 0; i < 42; i++)
  $("tr").on( "click", function (e) {
    e.preventDefault();
    // //counter for altenating players
    var counter = 1
    var notDone = true
    var column = this
    var columnId = this.id
    // // Alternating Player
    // while (notDone) {
    //   // Player1
    //   if (counter % 2 == 0) {
    //     User2.dropPiece();
    //     counter++;
    //   };
    //   // Player2
    //   else {
    //     User1.dropPiece();
    //     counter++;
    //   };
    debugger;
    // };
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
