import React from 'react';
import PropTypes from 'prop-types';
import { Toast, TextareaItem as ATextareaItem } from 'antd-mobile';
import styled from 'styled-components';

const TextareaItem = styled(ATextareaItem)`
  .am-textarea-label {
    width: 20% !important;
    min-width: 100px;
  }
`;

class FormInput extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    validator: PropTypes.func,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
    setParentError: PropTypes.func
  };

  static defaultProps = {
    validator: val => (val.length > 0),
    errorMessage: 'input can not be empty',
    value: '',
    setParentError: () => {},
  };

  state = {
    hasError: false,
    value: this.props.value
  };

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info(this.props.errorMessage);
    }
  };

  onChange = (value) => {
    const { validator, updateValue, setParentError } = this.props;
    if (!validator(value)) {
      this.setState({
        hasError: true,
      });
      setParentError(true);
    } else {
      this.setState({
        hasError: false,
      });
      setParentError(false);
    }
    this.setState({
      value,
    });
    updateValue(value);
  };

  render() {
    const { placeHolder, title } = this.props;
    return (
      <TextareaItem
        title={title}
        placeholder={placeHolder}
        error={this.state.hasError}
        onErrorClick={this.onErrorClick}
        onChange={this.onChange}
        value={this.state.value}
        rows={5}
        count={100}
      />
    );
  }
}

export default FormInput;
