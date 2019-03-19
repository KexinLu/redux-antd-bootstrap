import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Select as ASelect } from 'antd';
import { filterUserRole } from 'actions/actionCreators/userRoleActions';

const Select = styled(ASelect)`
  height: 45px;
  width: 90%;
  .ant-select-selection__placeholder {
    font-size: 20px !important;
  }
  .ant-select-selection__rendered {
    height: 45px !important;
  }
  .ant-select-selection {
    min-height: 45px;
  }
`;

class SearchBar extends Component {
  static propTypes = {
    userRoleOptions: PropTypes.object.isRequired,
    filterUserRole: PropTypes.func.isRequired,
  };

  state = {
    selectedItems: [],
  };

  handleChange = (selectedItems) => {
    this.setState({ selectedItems });
    this.updateFilter(selectedItems);
  };

  updateFilter = (selectedItems) => {
    const { userRoleOptions } = this.props;

    this.props.filterUserRole({
      ids: selectedItems.map(n => userRoleOptions[n])
    });
  };

  render() {
    const { selectedItems } = this.state;
    const { userRoleOptions } = this.props;
    const nameArray = Object.keys(userRoleOptions);
    const filteredOptions = nameArray.filter(o => !selectedItems.includes(o));

    return (
      <Select
        mode="multiple"
        placeholder="User Role Name"
        value={selectedItems}
        maxTagCount={2}
        onChange={this.handleChange}
        filterOption
        allowClear
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
}

export default connect(null, { filterUserRole })(SearchBar);
