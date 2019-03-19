import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'antd-mobile';
import { Avatar as AntAvatar } from 'antd';
import styled from 'styled-components';

const Avatar = styled(AntAvatar)`margin: 3px !important`;
const SFlex = styled(Flex)`
  padding-left: 15px
  padding-right: 15px
`;
const avatarStrip = props => (<SFlex wrap="wrap">
  {
    props.users.map(u => (
      <Avatar shape="circle" src={u.photo_url} key={`${props.roleCardID}_avatar_${u.id}`} />
    ))
  }
</SFlex>);

avatarStrip.defaultProps = {
  users: []
};

avatarStrip.propTypes = {
  roleCardID: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    photo_url: PropTypes.string,
  }))
};

export default avatarStrip;
