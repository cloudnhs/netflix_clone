import React, {useState, useEffect} from 'react';
import {tvApi} from "../api"

const TV = () => {

    const [tv, setTv] = useState({
        results: [],
        error: null

    });

    const getData = async () => {
        const [results, error] = await tvApi.onTheAir()
        setTv({
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
            <h1>TV is {tv.results.length}</h1>
        </div>
    );
};

export default TV;
