//@flow

import React, {Component, PropTypes} from 'react';
import autobind from 'class-autobind';

type Props = {
  addContact: (Object) => void;
};

type State = {
  name: string;
  address: string;
  phoneNo: string;
  isAdding: boolean;
};

export default class AddContact extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      name: '',
      address: '',
      phoneNo: '',
      isAdding: false,
    };
  }
  addContact() {
    let newValue = {
      name: this.state.name,
      address: this.state.address,
      phoneNo: this.state.phoneNo,
    };
    this.setState({
      name: '',
      address: '',
      phoneNo: '',
      isAdding: !this.state.isAdding,
    });
    if (newValue.name !== '' && newValue.address !== '' && newValue.phoneNo !== '' && this.state.isAdding) {
      this.props.addContact(newValue);
      this.setState({
        isAdding: true,
      });
    }
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
    let {name, address, phoneNo} = this.state;
    let container = {
      paddingTop: 20,
      paddingBottom: 20,
    };
    let forms;
    (this.state.isAdding) ? forms =
      <div>
        <p><input type="text" className="form-control" placeholder="Insert name here" onChange={this.onNameChange} value={name} /></p>
        <p><input type="text" className="form-control" placeholder="Insert address here" onChange={this.onAddressChange} value={address} /></p>
        <p><input type="text" className="form-control" placeholder="Insert phone no here" onChange={this.onPhoneChange} value={phoneNo} /></p>
      </div> : forms = '';
    return (
      <div style={container}>
        {forms}
        <button className="btn btn-lg btn-default btn-block" onClick={this.addContact}><span className="fa fa-plus"></span> Add Contact</button>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
