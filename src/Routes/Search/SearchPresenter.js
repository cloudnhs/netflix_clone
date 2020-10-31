import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 60px;
  width: 100%
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;



const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit, loading}) => {
    return (
        <Container>
            <Form>
                <Input
                    placeholder={"Search Movies or TV shows.."}
                    value = {keyword}
                    onChange={onChange}
                />
            </Form>

        </Container>
    );
};

export default SearchPresenter;
