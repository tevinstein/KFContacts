//@flow

import React, {Component} from 'react';
import autobind from 'class-autobind';

import AddContact from './AddContact';
import ContactList from './ContactList';

type Contact = {
  id: string;
  name: string;
  address: string;
  phoneNo: string;
  images: Array<string>;
};

type Contacts = Array<Contact>;

type State = {
  contacts: Contacts;
  selectedContact: string;
};

export default class App extends Component {
  state: State;

  constructor(props) {
    super(props);
    let storeState = this.props.dataStore.getState();
    this.state = {
      contacts: storeState.contacts,
      selectedContact: storeState.selectedContact,
    };
    autobind(this);
  }
  editContact(newValue: Contact) {
    let newContacts: Contacts = [].concat(this.state.contacts);
    for (let contact of newContacts) {
      if (contact.id === newValue.id) {
        contact.name = newValue.name;
        contact.address = newValue.address;
        contact.phoneNo = newValue.phoneNo;
      }
    }
    this.setState({
      contacts: newContacts,
    });
  }
  selectContact(id: string){
    this.setState({
      selectedContact: id,
    })
  }
  addContact(newValue: $Shape<Contact>) {
    let newContacts: Contacts = [].concat(this.state.contacts);
    newValue.id = Date.now().toString();
    newValue.images = [];
    newContacts.push(newValue);
    this.setState({
      contacts: newContacts,
    });
  }
  deleteContact(id: string) {
    let newContacts: Contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  }
  render() {
    let {contacts, selectedContact} = this.state;
    let container = {
      padding: 30,
      textAlign: 'center',
    };
    return (
      <div style={container}>
        <div id="logo">KF Contacts</div>
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
          <AddContact addContact={this.addContact} />
          <ContactList contacts={contacts} selectContact={this.selectContact} selectedContact={selectedContact} editContact={this.editContact} deleteContact={this.deleteContact}/>
        </div>
      </div>
    );
  }
}
