import React from "react";
import {Row, Container} from 'react-bootstrap';
import MovieCard from "./MovieCard";

const ListeFilm = ({films}) => {
    return(
        <>
            {
            films.map((film) =>
                <MovieCard film = {film} key = {film.id} />)}
        </>
    )
};

export default ListeFilm;