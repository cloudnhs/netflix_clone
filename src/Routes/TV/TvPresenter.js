import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({airingToday, onTheAir, popular, topRated, error, loading}) => {
    return (
        <div>
            {airingToday && airingToday.length > 0 && (
                <div>
                    {airingToday.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </div>
            )}

            {onTheAir && onTheAir.length > 0 && (
                <div>
                    {onTheAir.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </div>
            )}


            {popular && popular.length > 0 && (
                <div>
                    {popular.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </div>
            )}

            {topRated && topRated.length > 0 && (
                <div>
                    {topRated.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </div>
            )}




        </div>
    );
};

TvPresenter.propTypes = {

};

export default TvPresenter;
