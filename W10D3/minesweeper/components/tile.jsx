import React from 'react'


export default class Tile extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const flagged = event.altKey
        this.props.update(this.props.tile, flagged)
    }

    render () {
        const tile = this.props.tile;
        let className;
        let tileImage = ""; 

        if (tile.explored) {
            if (tile.bombed) {
                className="bombed"
                tileImage = "\u2622";

            } else {
                className="explored"
                tileImage = tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : "";
            }
        } else if (tile.flagged){
            className="flagged"
            tileImage = "\u2690";
        } else {
            className="unexplored"
        }

        return (
            <td className={className} onClick={this.handleClick}>
                {tileImage}
            </td>
        )
    }
};

