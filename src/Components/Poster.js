import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  font-size : 12px;

`;

const Rate = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition: opacity 0.1s linear;
`

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rate}{
      opacity: 1;
    }
  }
`;


const Title = styled.span`
  margin-top: 5px;
  display: flex;
  margin-bottom: 3px;
  justify-content: center;
  
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255,255,255,0.5);
  justify-content: center;
  display: flex;
`;



const Poster = ({id, title, image_url, release_date, vote_average}) => {
    return (
        <Container>
            <ImageContainer>
                <Image bgUrl={
                    image_url
                        ? `https://image.tmdb.org/t/p/w500${image_url}`
                        : require("../assets/white-image.png")
                }

                />
                <Rate>
                    <span role="img" aria-label="rating">⭐ </span>
                    {(vote_average / 10)}
                </Rate>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0,18)}...` : title}</Title>
            <Year>{release_date}</Year>

        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired

};

export default Poster;
