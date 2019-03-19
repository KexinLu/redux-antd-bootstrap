import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex as AntFlex } from 'antd-mobile';
import {
  userRolesVisibleEntityArray,
  isFetchingUserRole,
} from 'selectors/userRoleSelector';
import {
  startFetchingUserRoleCollection,
  startDeletingUserRole,
  startUpdatingUserRole,
} from 'actions/actionCreators/userRoleActions';
import RoleCard from 'components/presentational/roleCard/RoleCard';
import styled from 'styled-components';

const FlexItem = styled(AntFlex.Item)`
  min-width: 300px !important;
  padding: 8px;
  margin: 0 !important;
`;

const Flex = styled(AntFlex)`
  padding-left: 10px;
  padding-right: 10px;
`;

class CardGrid extends Component {
  static propTypes = {
    fetchAll: PropTypes.func.isRequired,
    deleteRole: PropTypes.func.isRequired,
    updateRole: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    userRoles: PropTypes.arrayOf(
      PropTypes.shape({
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
          created: PropTypes.string.isRequired,
        })
      })
    ).isRequired,
  };

  static defaultProps = {
    userRoles: []
  };

  constructor(props) {
    super(props);
    this.state = {
      location: 'properties'
    };
  }

  componentDidMount() {
    const { fetchAll } = this.props;
    window.scrollTo(0, 0);
    fetchAll();
  }

  renderFlexRows() {
    const { userRoles, isFetching, updateRole, deleteRole } = this.props;
    const copyUrs = [...userRoles];
    const groupOfThree = []; const
      size = 3;
    while (copyUrs.length > 0) {
      groupOfThree.push(copyUrs.splice(0, size));
    }

    return groupOfThree.map((arr, i) => (
      <Flex key={`${i}_role_card_roll`} wrap="wrap" justify="center" >
        {
          arr.map((ur, j) =>
            (<FlexItem key={`${i}_${j}_role_card_item`} style={{ maxWidth: '450px', width: '95%' }}>
              <RoleCard
                userRole={ur}
                loading={isFetching}
                update={updateRole}
                deleteRole={deleteRole}
              />
            </FlexItem>)
          )
        }
      </Flex>
    ));
  }

  render() {
    return (
      <div>
        {this.renderFlexRows()}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  userRoles: userRolesVisibleEntityArray(state, props),
  isFetching: isFetchingUserRole(state, props),
});

const mapDispatchToProps = {
  fetchAll: startFetchingUserRoleCollection,
  deleteRole: startDeletingUserRole,
  updateRole: startUpdatingUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);
