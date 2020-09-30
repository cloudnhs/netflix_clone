import React, {useState, useEffect} from 'react';
import {tvApi} from "../../api"
import TvPresenter from "./TvPresenter";

const TV = () => {

    const [tv, setTv] = useState({
        airingToday: [],
        onTheAir: [],
        popular: [],
        topRated: [],
        airingTodayError: null,
        onTheAirError: null,
        popularError: null,
        topRatedError: null,
        loading: true
    });

    const getData = async () => {
        const [airingToday, airingTodayError] = await tvApi.airingToday()
        const [onTheAir, onTheAirError] = await tvApi.onTheAir()
        const [popular, popularError] = await tvApi.popular()
        const [topRated, topRatedError] = await tvApi.topRated()

        setTv({
            airingToday: airingToday,
            onTheAir: onTheAir,
            popular: popular,
            topRated: topRated,
            airingTodayError: airingTodayError,
            onTheAirError: onTheAirError,
            popularError: popularError,
            topRatedError: topRatedError,
            loading: false
        })
    }

    useEffect(() => {

        getData()
    }, [])

    return (
        <TvPresenter {...tv} />
    );
};

export default TV;
