import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

import Table from '../components/Table/Table';
import Logo  from '../components/Logo';
import { Grid, Row, Col } from '../components/Grid';

const Archive = styled.div`
  transform: rotate(-90deg);
  font-size: 100px;
  position: fixed;
  bottom: 130px;
  right: 69%;
`;

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col size={3} className='sidebar'>
            <Logo/>
            <Archive>
              Archive
            </Archive>
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
