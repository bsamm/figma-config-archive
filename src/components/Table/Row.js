import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

const Td = styled.td`
  padding: 6px 22px;
  border-bottom: 2px solid;
`;

const Tr = styled.tr`
  height: 200px;
`;

const Play = styled.div`
  border-width: 22px 0 22px 36px;
  border-color: transparent transparent transparent ${props => props.theme.colors.blue};
  border-style: solid;
  display: table;
  margin: 0 auto;
`;

class Row extends Component {
  render() {
    return (
      <Tr>
        <Td>
          <h1>Opening Keynote</h1>
          <h3>Opening Keynote adf adsf fdsafdsfdsf fdsaf</h3>
        </Td>
        <Td className='center'><h3>Keynote</h3></Td>
        <Td className='center'><h3>2020</h3></Td>
        <Td><a href="https://www.youtube.com/watch?v=lWy4fB3G9Gc" target="_blank" rel="noreferrer"><Play/></a></Td>
      </Tr>
    )
  }
}

export default Row;
