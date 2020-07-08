const View = require("./ttt-view");// require appropriate file
const Game = require("../../solution/game");// require appropriate file

  $(() => {
    // Your code here
    let $el = $('.ttt');
    const game = new Game();
    const view = new View(game, $el);
    
    ///TEST ONLY
    window.Game = game;
    window.View = view;
  });


