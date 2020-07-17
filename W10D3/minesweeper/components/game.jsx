import React from 'react'
import * as Minesweeper from '../minesweeper'
import Board from './board'
import Tile from './tile'


export default class Game extends React.Component {
    constructor() {
        super()
        const board = new Minesweeper.Board(9, 15);
        this.state = {board};
        this.updateGame = this.updateGame.bind(this);
        this.restart = this.restart.bind(this);
    }

    restart() {
        const board = new Minesweeper.Board(9, 15);
        this.setState({board: board})
    }

    updateGame(tile, isFlagged) {
        if (isFlagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board})
    }

    render() {
        let window;
        if (this.state.board.lost()) {
            window = (
                <div className="game-over">
                    <div className="lost-text">
                        <p>Вы проиграли!</p>
                        <button onClick={this.restart}>Играть ещё!</button>
                </div>
                </div>
            )
        } else if (this.state.board.won()) {
            window = (
                <div className="game-over">
                    <div className="won-text">
                        <p>Вы победили!</p>
                        <button onClick={this.restart}>Играть ещё!</button>
                    </div>
                </div>
        )}

        return (
            <div className='game-board'>
                {window}
                <Board board={this.state.board} update={this.updateGame} />
                {/* <Tile /> */}
            </div>
        );
    }
}

