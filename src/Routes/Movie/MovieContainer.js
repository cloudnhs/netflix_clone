import React, { useState, useEffect } from 'react';
import {movieApi} from "../../api";
import MoviePresenter from "./MoviePresenter";


const MovieContainer = () => {

    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        topRatedError: null,
        upcomingError: null,
        loading: true
    });

    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying()
        const [popular, popularError] = await movieApi.popular()
        const [topRated, topRatedError] = await movieApi.topRated()
        const [upcoming, upcomingError] = await movieApi.upcoming()

        setMovies({
            nowPlaying: nowPlaying,
            popular: popular,
            topRated: topRated,
            upcoming: upcoming,
            nowPlayingError: nowPlayingError,
            popularError: popularError,
            topRatedError: topRatedError,
            upcomingError: upcomingError,
            loading: false
        })

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <MoviePresenter {...movies} />
    );
};

export default MovieContainer;
