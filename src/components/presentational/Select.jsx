import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select as AntSelect } from 'antd';
import styled from 'styled-components';

const Option = AntSelect.Option;
const StyledSelect = styled(AntSelect)`
       width: 95% !important;
       height: 45px !important;
       .ant-select-selection {
          height: 100% !important;
       }
       .ant-select-selection__placeholder {
          padding: 1px !important;
          font-size: 20px !important;
       }
       .ant-select-selection-selected-value {
          padding-top: 8px !important;
          font-size: 20px !important;
       }
       .ant-select-selection__rendered {
          height: 100% !important;
       }
`;

class Select extends Component {
  static propTypes = {
    submitValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    switchOptions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  getOptions() {
    const { switchOptions } = this.props;
    return switchOptions.map(v => (
      <Option key={`select_option_${v.label}_${v.value}`} value={v.value}>{v.label}</Option>
    ));
  }

  render() {
    const { submitValue, label } = this.props;
    const handleChange = (value) => {
      submitValue({ state: value });
    };
    return (<StyledSelect
      showSearch
      placeholder={label}
      optionFilterProp="children"
      onChange={handleChange}
      filterOption={
        (input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {this.getOptions()}
    </StyledSelect>);
  }
}

export default Select;
