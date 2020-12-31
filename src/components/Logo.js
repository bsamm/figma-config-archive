import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

import logo from '../assets/logo.mp4';

const Video = styled.video`
  width: 240px;
  position: fixed;
  margin: 16px 22px;
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { logo: logo };
  }

  render() {
    return (
      <Video className='logo' autoPlay loop muted>
        <source src={this.state.logo} type='video/mp4' />
      </Video>
    )
  }
}

export default Logo;
