import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex as AntFlex, Button } from 'antd-mobile';
import SearchBar from 'components/containers/SearchBar';
import Select from 'components/presentational/Select';
import RoleForm from 'components/presentational/RoleForm';
import styled from 'styled-components';
import { userRoleNameOptions } from 'selectors/userRoleSelector';
import { filterUserRole, startCreatingUserRole } from 'actions/actionCreators/userRoleActions';

const FlexItem = styled(AntFlex.Item)`
  min-width: 200px !important;
  margin: 0 !important;
`;

const Flex = styled(AntFlex)`
  padding: 15px 150px 15px 150px !important;
`;

class ControlPanel extends Component {
  static propTypes = {
    filterUserRole: PropTypes.func.isRequired,
    createUserRole: PropTypes.func.isRequired,
    userRoleOptions: PropTypes.object.isRequired,
  };

  state = {
    showModal: false
  };

  renderSwitch() {
    const options = [
      { label: 'ACTIVE', value: 'active' },
      { label: 'INACTIVE', value: 'inactive' },
      { label: 'BOTH', value: 'both' },
    ];
    const label = 'Select state';
    return (
      <Select
        switchOptions={options}
        label={label}
        submitValue={this.props.filterUserRole}
      />
    );
  }

  render() {
    const { userRoleOptions, createUserRole } = this.props;
    const { showModal } = this.state;
    const setModalVisible = (v) => {
      this.setState({ showModal: v });
    };
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (
      <>
        <RoleForm
          closeModal={closeModal}
          show={showModal}
          submit={createUserRole}
          title="Create User Role"
        />
        <Flex wrap="wrap" justify="center">
          <FlexItem >
            <SearchBar userRoleOptions={userRoleOptions} />
          </FlexItem>
          <FlexItem>
            {this.renderSwitch()}
          </FlexItem>
          <FlexItem>
            <Button icon="plus" onClick={openModal}>ADD NEW ROLE</Button>
          </FlexItem>
        </Flex>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  userRoleOptions: userRoleNameOptions(state, props)
});

export default connect(mapStateToProps, { filterUserRole, createUserRole: startCreatingUserRole })(ControlPanel);
