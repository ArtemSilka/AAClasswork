import React from 'react';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }


    render() {
        const pokemon = this.props.pokemon;
        const pokemonList = pokemon.map((pokemon) => {
           return <li key={pokemon.id}>
               <img src={pokemon.image_url}/>
               { pokemon.name }
               </li>;
        });

        // return (
        //     <div>
        //         <ul>
        //          { pokemonList } 
        //         </ul>
        //     </div>
        // )

        return <ol>{pokemonList}</ol>;
    }
}