import React, { useState, useEffect } from 'react';
import {movieApi} from "../api";



const Movie = () => {

    const [movies, setMovies] = useState({
        results: [],
        error: null

    });

    const getData = async () => {
        const [results, error] = await movieApi.nowPlaying()
        setMovies({
            results: results,
            error: error
        })
        console.log(results)
    }

    useEffect(() => {
        console.log("test");
        getData()
    }, [])

    return (
        <div>
            <h1>Movie is {movies.results.length}</h1>
        </div>
    );
};

export default Movie;
