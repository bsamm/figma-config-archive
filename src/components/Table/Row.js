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
      <Tr key={this.props.index}>
        <Td>
          <h1>{this.props.title}</h1>
          <h3>with {this.props.speakerName}, {this.props.speakerTitle}, {this.props.speakerCompany}</h3>
        </Td>
        <Td className='center'><h3>{this.props.type}</h3></Td>
        <Td className='center'><h3>{this.props.event}</h3></Td>
        <Td><a href={this.props.link} target="_blank" rel="noreferrer"><Play/></a></Td>
      </Tr>
    )
  }
}

export default Row;
