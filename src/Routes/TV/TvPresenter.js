import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Components/Section";

const TvPresenter = ({airingToday, onTheAir, popular, topRated, error, loading}) => {
    return (
        <div>
            {airingToday && airingToday.length > 0 && (
                <Section title={"Airing Today"}>
                    {airingToday.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </Section>
            )}

            {onTheAir && onTheAir.length > 0 && (
                <Section title={"On the Air"}>
                    {onTheAir.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </Section>
            )}


            {popular && popular.length > 0 && (
                <Section title={"Popular"}>
                    {popular.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </Section>
            )}

            {topRated && topRated.length > 0 && (
                <Section title={"Top Rated"}>
                    {topRated.map((tv) => (
                        <span> {tv.name}</span>
                    ))}
                </Section>
            )}




        </div>
    );
};

TvPresenter.propTypes = {

};

export default TvPresenter;
