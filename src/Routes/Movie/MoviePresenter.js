import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, popular, topRated, upcoming, error, loading}) => {
    return (
        <div>
            {nowPlaying && nowPlaying.length > 0 && (
                <div>
                    {nowPlaying.map((movie) => (
                        <span> {movie.title}</span>
                    ))}
                </div>
            )}

            {popular && popular.length > 0 && (
                <div>
                    {popular.map((movie) => (
                        <span> {movie.title}</span>
                    ))}
                </div>
            )}

            {topRated && topRated.length > 0 && (
                <div>
                    {topRated.map((movie) => (
                        <span> {movie.title}</span>
                    ))}
                </div>

            )}

            {upcoming && upcoming.length > 0 && (
                <div>
                    {upcoming.map((movie) => (
                        <span>{movie.title}</span>
                    ))}
                </div>
            )}

            {upcoming.length < 0
                ? (
                        <div>
                            {upcoming.map((movie) => (
                                <span>{movie.title}</span>
                            ))}
                        </div>
                    )
                : (
                        <div>
                            <h1>no data</h1>
                        </div>
                )}


        </div>
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
