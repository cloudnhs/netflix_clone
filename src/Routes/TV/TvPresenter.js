import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const TvPresenter = ({airingToday, onTheAir, popular, topRated, error, loading}) => {
    return (
        loading
            ? <Loader/>
            : (
                <>
                    {airingToday && airingToday.length > 0 && (
                        <Section title={"Airing Today"}>
                            {airingToday.map((tv) => (
                                //<span key={tv.id}> {tv.name}</span>
                                <Poster
                                    key={tv.id}
                                    vote_average={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                    image_url={tv.poster_path}
                                    release_date={tv.first_air_date}
                                />

                            ))}
                        </Section>
                    )}

                    {onTheAir && onTheAir.length > 0 && (
                        <Section title={"On the Air"}>
                            {onTheAir.map((tv) => (
                                //<span key={tv.id}> {tv.name}</span>
                                <Poster
                                    key={tv.id}
                                    vote_average={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                    image_url={tv.poster_path}
                                    release_date={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}


                    {popular && popular.length > 0 && (
                        <Section title={"Popular"}>
                            {popular.map((tv) => (
                                //<span key={tv.id}> {tv.name}</span>
                                <Poster
                                    key={tv.id}
                                    vote_average={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                    image_url={tv.poster_path}
                                    release_date={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}

                    {topRated && topRated.length > 0 && (
                        <Section title={"Top Rated"}>
                            {topRated.map((tv) => (
                                //<span key={tv.id}> {tv.name}</span>
                                <Poster
                                    key={tv.id}
                                    vote_average={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                    image_url={tv.poster_path}
                                    release_date={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}

                </>
            )


    );
};

TvPresenter.propTypes = {
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired


};

export default TvPresenter;
