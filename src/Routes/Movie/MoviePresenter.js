import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const MoviePresenter = ({nowPlaying, popular, topRated, upcoming, error, loading}) => {
    return (
        loading
            ? <Loader/>
            : (
                <>
                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title={"Now Playing"}>
                            {nowPlaying.map((movie) => (
                                // <span key={movie.id}> {movie.title}</span>
                                <Poster
                                    key={movie.id}
                                    vote_average={movie.vote_average}
                                    id={movie.id}
                                    title={movie.title}
                                    image_url={movie.poster_path}
                                    release_date={movie.release_date}
                                />
                            ))}
                        </Section>
                    )}

                    {popular && popular.length > 0 && (
                        <Section title={"Popular"}>
                            {popular.map((movie) => (
                                // <span key={movie.id}> {movie.title}</span>
                                <Poster
                                    key={movie.id}
                                    // vote_average={movie.vote_average}
                                    id={movie.id}
                                    title={movie.title}
                                    image_url={movie.poster_path}
                                    release_date={movie.release_date}

                                />

                            ))}
                        </Section>
                    )}

                    {topRated && topRated.length > 0 && (
                        <Section title={"Top Rated"}>
                            {topRated.map((movie) => (
                                //<span key={movie.id}> {movie.title}</span>
                                <Poster
                                    key={movie.id}
                                    vote_average={movie.vote_average}
                                    id={movie.id}
                                    title={movie.title}
                                    image_url={movie.poster_path}
                                    release_date={movie.release_date}
                                />
                            ))}
                        </Section>

                    )}

                    {/*{upcoming && upcoming.length > 0 && (*/}
                    {/*    <Section title={"Upcoming"}>*/}
                    {/*        {upcoming.map((movie) => (*/}
                    {/*            <span>{movie.title}</span>*/}
                    {/*        ))}*/}
                    {/*    </Section>*/}
                    {/*)}*/}


                    <Section title={"Upcoming"}>
                        {upcoming.length > 0
                            ? <>
                                {upcoming.map((movie) => (
                                    //<span key={movie.id}>{movie.title}</span>
                                    <Poster
                                        key={movie.id}
                                        vote_average={movie.vote_average}
                                        id={movie.id}
                                        title={movie.title}
                                        image_url={movie.poster_path}
                                        release_date={movie.release_date}
                                    />
                                ))}
                            </>
                            : <>
                                <span>no data</span>
                            </>
                        }


                    </Section>
                    {/*{upcoming.length > 0*/}
                    {/*    ? (*/}
                    {/*            <Section title={"Upcoming"}>*/}
                    {/*                {upcoming.map((movie) => (*/}
                    {/*                    <span>{movie.title}</span>*/}
                    {/*                ))}*/}
                    {/*            </Section>*/}
                    {/*        )*/}
                    {/*    : (*/}
                    {/*            <div>*/}
                    {/*                <h1>no data</h1>*/}
                    {/*            </div>*/}
                    {/*    )}*/}


                </>
            )


    );
};

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
