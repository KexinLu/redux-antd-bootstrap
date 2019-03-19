import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/presentational/PageHeader.jsx';
import ControlPanel from 'components/containers/ControlPanel.jsx';
import CardGrid from 'components/containers/CardGrid.jsx';

class UserRoleManagementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'properties'
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header title="User Roles Management" fontSize={50} />
        <ControlPanel />
        <CardGrid />
      </div>
    );
  }
}

export default connect(null, null)(UserRoleManagementPage);
