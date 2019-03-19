import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Switch, List, Flex, Toast } from 'antd-mobile';
import FormInput from 'components/presentational/FormInput';
import FormTextArea from 'components/presentational/FormTextArea';

class RoleForm extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
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
    }),
    closeModal: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    userRole: {
      id: -1,
      name: '',
      description: '',
      active: true,
      users: [],
      editable: true,
    }
  };

  state = {
    id: this.props.userRole.id,
    name: this.props.userRole.name,
    description: this.props.userRole.description,
    active: this.props.userRole.active,
    users: this.props.userRole.users,
    editable: this.props.userRole.editable,
    hasError: false,
  };

  componentWillReceiveProps(nextProps, _) {
    this.setState({
      id: nextProps.userRole.id,
      name: nextProps.userRole.name,
      description: nextProps.userRole.description,
      active: nextProps.userRole.active,
      users: nextProps.userRole.users,
      editable: nextProps.userRole.editable,
      hasError: false
    });
  }

  render() {
    const { title, show, closeModal, submit } = this.props;
    const { id, name, description, active, users, editable, hasError } = this.state;
    const getUpdateFunction = key => (value) => {
      this.setState({ [key]: value });
    };
    const toggleActive = () => {
      this.setState({ active: !this.state.active });
    };
    const toggleEditable = () => {
      this.setState({ editable: !this.state.editable });
    };
    const setHasError = (hasErr) => {
      this.setState({ hasError: hasErr });
    };

    const hasData = !(name === '' || description === '');

    return (
      <Modal
        style={{ width: '80%' }}
        visible={show}
        transparent
        maskClosable={false}
        title={title}
        footer={[
          { text: 'Save',
            onPress: () => {
              if (!hasData) {
                Toast.fail('Name and Description are required');
              } else if (!hasError) {
                submit(this.state);
                closeModal();
              } else {
                Toast.fail('Form has error');
              }
            }
          },
          { text: 'Cancel', onPress: () => { closeModal(); } }]
        }
      >
        <div style={{ height: '80%', width: '90%', overflow: 'scroll' }}>
          <div>
            ID : {id || 'id not available'}
          </div>
          <List>
            <FormInput title="Name" updateValue={getUpdateFunction('name')} placeHolder="Enter Name" value={name} setParentError={setHasError} />
            <FormTextArea title="Description" updateValue={getUpdateFunction('description')} placeHolder="Enter Description" value={description} setParentError={setHasError} />
            <List.Item>
              <Flex justify="between">
                <Flex.Item> Active </Flex.Item> <Flex.Item> <Switch checkedChildren="Active" unCheckedChildren="InActive" checked={active} onClick={toggleActive} /> </Flex.Item>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex justify="between">
                <Flex.Item> Editable </Flex.Item> <Flex.Item> <Switch checkedChildren="Editable" unCheckedChildren="Non-Editable" checked={editable} onClick={toggleEditable} /> </Flex.Item>
              </Flex>
            </List.Item>
          </List>
        </div>
      </Modal>
    );
  }
}

export default RoleForm;
