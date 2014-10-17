var Controller = function(options) {
  // this.model = new options.game();
  this.view = new options.view({
    container: '.connect_four_board'
  })
  this.game = new Game();
  this.counter = 1;
  this.initialize();

};

Controller.prototype.initialize = function(){
  this.view.render(this.model);
  this.attachEvents();
};

//EventsListener

Controller.prototype.attachEvents = function(){
  //hover animation for column
  $("tr").mouseover(function () {
    $( this ).removeClass("block");
    $( this ).addClass("long-arrow");
  });
  $("tr").mouseleave(function () {
    $( this ).removeClass("long-arrow");
    $( this ).addClass("block");
  });





  $("tr").on( "click", function (e) {
    e.preventDefault();

    //counter for altenating players
    var column = this;
    var columnId = this.id;

    // Alternating Player
      //Player2
      if (controller.counter % 2 == 0) {
        var column1 = column.children;
        var filled = $("td").has("div");
        var available = $(column1).not(filled);
        var $lastSpace = $(available).first();
        controller.view.dropPiece({player: 2, location: $lastSpace});
        var ajaxResponse = $.ajax({
          url: '/ajax',
          type: 'post',
          data: {columnId: columnId}
        });
        ajaxResponse.done(renderBoard);
        function renderBoard (resp) {
          console.log(resp)
          debugger;
        };
        // ajaxResponse.done(alert('hi'));
        controller.game.addPiece({player: 2, columnId: columnId});
        console.log(controller.game.gameOver());
        controller.counter += 1;

      }
      // Player1
      else {
        var column2 = column.children;
        var filled = $("td").has("div");
        var available = $(column2).not(filled);
        var $lastSpace = $(available).first();
        controller.view.dropPiece({player: 1, location: $lastSpace});
        var ajaxResponse =
          $.ajax({
            url: '/ajax',
            type: 'post',
            data: {columnId: columnId}
          });
        ajaxResponse.done(renderBoard);
        function renderBoard (resp) {
          console.log(resp)
          debugger;
        };
        controller.game.addPiece({player: 1, columnId: columnId});
        console.log(controller.game.gameOver());
        controller.counter += 1;

      } // while loop when game done
    if(controller.game.gameOver() !== false)
      $("tr").off("click");

  });
};

// if win

var moveP1 = function () {

};

var moveP2 = function () {

}




