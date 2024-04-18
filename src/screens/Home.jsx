import React from 'react';

import CardPokemon from '../components/Card'
import logo from '../img/International_Pokémon_logo.svg.png'

import '../css/estilos.css';

const HomePage = () => {
    return (
        <div className="page-container">

            <div className="page-topbar">
                <div className="logo">
                    <img type="logo" src={logo} alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..." />
                    <button>Buscar</button>
                </div>

            </div>

            <div className="items-container">
                {/* Aquí van tus 3 columnas de items */}
                <div className="item-column">
                    {/* Contenido de la primera columna */}
                    <p>Futuro filtrado</p>
                </div>
                <div className="item-column">
                    {/* Contenido de la segunda columna */}
                    <CardPokemon />
                </div>
            </div>
            <div>
                <button>Cargar más</button>
            </div>
            <div className="footer">
                {/* Aquí va tu footer */}
                <p>Footer</p>
            </div>
        </div>
    );
};

export default HomePage;