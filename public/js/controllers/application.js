  //EventListener
  for (var i = 0; i < 42; i++)
  $("tr").on( "click", function (e) {
    e.preventDefault();
    //counter for altenating players
    var counter = 1
    var notDone = true
    var column = this
    var columnId = this.id


    // User1
    var User1 = function () {
      this.dropPiece = function () {
        debugger;
      };
    };
    //

    // User2
    var User2 = function () {
      this.dropPiece = function () {
        debugger;
      };
    };
    //
    // Alternating Player
      // while (notDone) {
      //Player1
      if (counter % 2 == 0) {
        var user2 = new User2();
        user2.dropPiece();
        counter++;
      }
      // Player2
      else {
        var user1 = new User1();
        user1.dropPiece();
        counter++;
      }
    // };
  });


  // Board
  var Board = function () {

  };
  //



