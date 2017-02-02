//@flow

import React, {Component, PropTypes} from 'react';
import autobind from 'class-autobind';

type Props = {
  id: string;
  name: string;
  phoneNo: string;
  address: string;
  editContact: (Object) => void;
};

type State = {
  name: string;
  address: string;
  phoneNo: string;
};

export default class EditContact extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      name: this.props.name,
      address: this.props.address,
      phoneNo: this.props.phoneNo,
    };
    autobind(this);
  }
  editContact() {
    let newValue = {
      id: this.props.id,
      name: this.state.name,
      address: this.state.address,
      phoneNo: this.state.phoneNo,
    };
    this.props.editContact(newValue);
  }
  onNameChange(event: {target: {value: string}}) {
    this.setState({
      name: event.target.value,
    });
  }
  onAddressChange(event: {target: {value: string}}) {
    this.setState({
      address: event.target.value,
    });
  }
  onPhoneChange(event: {target: {value: string}}) {
    this.setState({
      phoneNo: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <p><input type="text" className="form-control" placeholder="Insert name here" onChange={this.onNameChange} value={this.state.name} /></p>
        <p><input type="text" className="form-control" placeholder="Insert address here" onChange={this.onAddressChange} value={this.state.address} /></p>
        <p><input type="text" className="form-control" placeholder="Insert phone no here" onChange={this.onPhoneChange} value={this.state.phoneNo} /></p>
        <button className="btn btn-default btn-block" onClick={this.editContact}><span className="fa fa-pencil"></span> Edit Contact</button>
      </div>
    );
  }
}

EditContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNo: PropTypes.string.isRequired,
  editContact: PropTypes.func.isRequired,
};
