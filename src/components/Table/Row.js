import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

const Td = styled.td`
  padding: 6px 22px;
  border-bottom: 2px solid;
`;

const tdStyle = {
  columnWidth: '180px'
};

const Tr = styled.tr`
  height: 200px;
`;

const Play = styled.div`
  display: table;
  margin: 0 auto;
  border-width: 22px 0 22px 36px;
  border-style: solid;
  border-color:
    transparent
    transparent
    transparent
    ${props =>
      props.theme.colorsArray[props.itemNumber % props.theme.colorsArray.length] || props.theme.colors.blue};
  ;
`;

class Row extends Component {
  render() {
    return (
      <Tr key={this.props.itemNumber}>
        <Td>
          <h1>{this.props.title}</h1>
          <span>with <b>{this.props.speakerName}</b>, {this.props.speakerTitle} at {this.props.speakerCompany}</span>
        </Td>
        <Td className='center' style={tdStyle}><h3>{this.props.type}</h3></Td>
        <Td className='center' style={tdStyle}><h3>{this.props.event}</h3></Td>
        <Td style={tdStyle}><a href={this.props.link} target="_blank" rel="noreferrer"><Play itemNumber={this.props.itemNumber}/></a></Td>
      </Tr>
    )
  }
}

export default Row;
