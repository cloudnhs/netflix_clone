import React, {useState} from 'react';
import SearchPresenter from "./SearchPresenter";
import {searchApi} from "../../api"

const SearchContainer = () => {
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies: [],
        shows: [],
        contents: [],
        movieError: null,
        showsError: null
    })

    const onChange = (event) => setKeyword(event.target.value);
    const onSubmit = async () => {
        if(keyword === "") {
            return;
        }
        setLoading(true);
        const [movies, movieError] = await searchApi.movieSearch(keyword);
        const [shows, showsError] = await searchApi.tvSearch(keyword);
        const [contents, contentsError] = await searchApi.keywordSearch(keyword);

        setResults({
            movies: movies,
            shows: shows,
            contents: contents,
            movieError: movieError,
            showsError: showsError
        })

        setLoading(false);
        console.log("movie", movies)
        console.log("tv", shows)
        console.log("contents",contents)
    }


    return (
        <SearchPresenter
            {...results}
            onChange={onChange}
            onSubmit={onSubmit}
            keyword={keyword}
        />

    );
};

export default SearchContainer;
