import React from 'react';
import styled from '@emotion/styled';
//import Form from './shared/Form';

const SearchForm = styled.div
`
    display: flex;
    align-item: center;
    > button {
        margin-left: 1rem; 
    }
`;

const Search = () => {
    return (
        <SearchForm>
            Search
        </SearchForm>
    ); 
}; 

export default Search; 