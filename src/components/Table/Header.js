import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

const Th = styled.th`
  background-color: #F26539;
  height: 48px;
  position: sticky;
  top: 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  font-weight: normal;
`;

class Header extends Component {
  render() {
    return (
      <thead>
        <tr>
          <Th></Th>
          <Th>Type</Th>
          <Th>Event</Th>
          <Th>Watch</Th>
        </tr>
      </thead>
    )
  }
}

export default Header;
