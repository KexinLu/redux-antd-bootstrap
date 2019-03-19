import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon as AIcon, Skeleton } from 'antd';
import AvatarStrip from './AvatarStrip';
import styled from 'styled-components';
import moment from 'moment';
import { Flex, Modal } from 'antd-mobile';
import { Tag } from 'antd';
import RoleForm from '../RoleForm';

const StyledCard = styled(Card)`
  margin: auto !important;
  height: 430px !important;
  max-width: 430px !important;
  width: 95% !important;
  
  .ant-card-body {
    height: 340px !important;
  }
  .ant-card-head {
     border-bottom: 0 !important;
  }
  .ant-card-head-title {
     padding-top: 35px;
     padding-bottom: 0;
  }
`;

const Icon = styled(AIcon)`
  font-size: 20px;
`;

const PDiv = styled.div`
  width: 90%;
  height: 80%;
  padding: 15px;
  overflow: scroll;
`;

const SFlexItem = styled(Flex.Item)`
  height: 25px;
  font-size: 12px;
`;

class RoleCard extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    userRole: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        photo_url: PropTypes.string,
      })).isRequired,
      editable: PropTypes.bool.isRequired,
      created_on: PropTypes.string.isRequired,
    }).isRequired,
    update: PropTypes.func.isRequired,
    deleteRole: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: false
  };

  state = {
    showEditModal: false
  };

  getActions() {
    const { userRole: { editable, created_on, id }, deleteRole } = this.props;
    const { alert } = Modal;

    const openModal = () => { this.setState({ showEditModal: true }); };
    return (editable) ? [
      <SFlexItem style={{ color: 'grey' }}>
        Created {moment(created_on).format('YYYY-MM-DD')}
      </SFlexItem>,
      <SFlexItem>
        <Icon type="form" style={{ height: '100%' }} onClick={openModal} />
      </SFlexItem>,
      <SFlexItem>
        <Icon
          type="delete"
          style={{ color: '#cc2443', height: '100%' }}
          onClick={() =>
            alert('Delete', 'You are about to delete the user role, are you sure?', [
              { text: 'Cancel', onPress: () => {} },
              { text: 'Ok', onPress: () => deleteRole(id) },
            ])
          }
        />
      </SFlexItem>
    ] : [
      <SFlexItem style={{ color: 'grey' }}>
        Created {moment(created_on).format('YYYY-MM-DD')}
      </SFlexItem>,
      <Flex.Item>
        <Icon type="lock" style={{ height: '100%', color: 'grey' }} />
      </Flex.Item>,
    ];
  }

  render() {
    const {
      loading,
      userRole,
      userRole: {
        id,
        name,
        description,
        active,
        users,
      },
      update
    } = this.props;
    const { Meta } = Card;
    const { showEditModal } = this.state;
    const closeModal = () => { this.setState({ showEditModal: false }); };
    const submit = (payload) => {
      update(payload);
    };

    return (
      <>
        <RoleForm
          title="EDIT USER ROLE"
          userRole={userRole}
          show={showEditModal}
          closeModal={closeModal}
          submit={submit}
        />
        <StyledCard
          bordered={false}
          actions={this.getActions()}
          title={
            (active) ? [] : (
              <Flex justify="end">
                <Tag color="red">
                  INACTIVE
                </Tag>
              </Flex>
            )
          }
          hoverable
        >
          <Skeleton loading={loading} active >
            <Meta
              title={name}
              style={{ paddingLeft: '15px', paddingRight: '15px' }}
            />
            <PDiv>
              <p>{description}</p>
            </PDiv>
            <AvatarStrip users={users} roleCardID={id} />
          </Skeleton>
        </StyledCard>
      </>
    );
  }
}

export default RoleCard;
