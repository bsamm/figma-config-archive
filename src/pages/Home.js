import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

import Table from '../components/Table/Table';
import Logo  from '../components/Logo';
import { Grid, Row, Col } from '../components/Grid';

const ArchiveWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;

const Archive = styled.div`
  transform: rotate(-90deg);
  transform-origin: right;
  font-size: 90px;
  padding: 270px 0px;
`;

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col size={3} className='sidebar'>
            <Logo/>
            <ArchiveWrapper>
              <Archive>Archive</Archive>
            </ArchiveWrapper>
          </Col>
          <Col size={9}>
            <div>
              <Table/>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
