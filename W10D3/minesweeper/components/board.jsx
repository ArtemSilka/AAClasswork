import React from 'react'
import Tile from './tile'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const mapper = 
            this.props.board.grid.map((row, rowIdx) => (
                // debugger
                <tr className='row' key={rowIdx}>
                    {row.map((tile, idx) => (
                        <Tile tile={tile} update={this.props.update} key={idx} />
                    ))}
                </tr>
            ));
            
        
        return (
            <table>
                <tbody>{mapper}</tbody>
            </table>
        );
    }
}