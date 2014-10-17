var View = function(options) {
  this.$container = $(options.container);
};

View.prototype.dropPiece = function(playerColumn) {
  var toFill = playerColumn.location;
  if (playerColumn.player === 1) {
    toFill.html('<div class="circle red animated bounceInRight"></div>');
  }
  else {
    toFill.html('<div class="circle yellow animated bounceInRight"></div>');
  }
};

View.prototype.render = function() {
};

