class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}

View.prototype.setupBoard = function() {
   const $ul = $("<ul>");
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        let pos = [row, col];
        const $li = $("<li>");
        $li.attr("val", "")
        $li.data("pos", pos)
        $ul.append($li);
        // $li = ...;
        // $li.data("id", pos)
      }
    }
    this.$el.append($ul);
  // debugger;
};

View.prototype.bindEvents = function() {
  this.$el.on("click", "li", event => {
    let $square = $(event.currentTarget);
    this.makeMove($square);
    // this.game.playMove($(event.currentTarget).data("pos"));
    // $(event.currentTarget).addClass('clicked');
    // $(this.game.currentPlayer)
    }
  )};


View.prototype.makeMove = function($square) {
  let pos = $square.data("pos");

  let curPlayer = this.game.currentPlayer;

    this.game.playMove(pos);
    $($square).addClass('clicked');
    $($square).addClass(curPlayer);
  
};


module.exports = View;
