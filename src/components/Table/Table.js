import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

import Header from './Header';
import Body from './Body';

const Wrapper = styled.table`
  border-collapse: separate;
  width: 100%;
  border-spacing: 0;
  border-right: 2px solid;
`;

class Table extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Body/>
      </Wrapper>
    )
  }
}

export default Table;
