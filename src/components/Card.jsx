import React, { useEffect, useState } from 'react';

import "../css/card.css";


const CardPokemon = () => {

	const [pkmn, setPkmn] = useState([])
	//const [type, setType] = useState([])

	useEffect(() => {

		const getPkmn = async () => {
			//Lista de pkmn
			const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
			const pkmnList = await res.json()
			const { results } = pkmnList

			const allPkmn = results.map(async (pokemon) => {

				const res = await fetch(pokemon.url)
				const poke = await res.json()

				return {
					id: poke.id,
					name: poke.name,
					img: poke.sprites.other.dream_world.front_default
				}
			})

			setPkmn(await Promise.all(allPkmn))
		}

		getPkmn()
	}, [])

	function Capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		pkmn.map(pokemon => {
			return (
				<>
					<div>
						<div className='card-img'>
							<img
								src={pokemon.img}
								alt={`Pokemon ${pokemon.name}`}
							/>
						</div>
						<div className='card-info'>
							<span className='pokemon-id'>N° {pokemon.id}</span>
							<h3>{Capitalize(pokemon.name)}</h3>
							<div className='card-types'>
								<p>{pokemon.type.Types}</p>
								{/*<span key={pokemon.type.name}>{pokemon.type}</span>*/}
								{/*{type.types.map(type => {
								<span key={type.types.name} className={type.type.name}>
									{type.type.name}
								</span>
							})}*/}
							</div>
						</div>
					</div>
				</>
			)
		})
	);
};

export default CardPokemon;