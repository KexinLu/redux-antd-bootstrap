import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';
import { PageHeader } from 'antd';
import { isMobile } from 'util/envHelper';
import styled from 'styled-components';

const mobileHeader = (props) => {
  const { title } = props;
  const styledNav = styled(NavBar)`
    padding-top: 13px
  `;
  //return new styledNav(props);
  return React.createElement(
    styledNav,
    {
      ...props,
      mode: "light",
      icon: React.createElement(
        Icon,
        {
          type: "left"
        }
      )
    },
    title
  );
};

const webHeader = styled(PageHeader)`
    padding: 40px 50px 20px 60px;
    .ant-page-header-title-view-title {
      font-size: ${props => props.fontSize}px;
      font-family: 'Notable', sans-serif !important;
      font-weight: 100;
    }
`;

const header = (isMobile()) ? mobileHeader: webHeader;

header.propTypes = {
  fontSize: PropTypes.number
};

header.defaultProps = {
  fontSize: 18
};

export default header;
