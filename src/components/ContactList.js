//@flow

import React, {Component, PropTypes} from 'react';
import autobind from 'class-autobind';

import Contact from './Contact.js';

type MyContact = {
  id: string;
  name: string;
  address: string;
  phoneNo: string;
  images: Array<string>;
};

type Contacts = Array<MyContact>;

type Props = {
  contacts: Contacts;
  selectedContact: string;
  editContact: (Object) => void;
  deleteContact: (string) => void;
};

export default class ContactList extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    autobind(this);
  }
  selectContact(id: string){
    this.props.selectContact(id);
  }
  editContact(newValue: Object) {
    this.props.editContact(newValue);
  }
  deleteContact(id: string) {
    if (confirm('Are you sure you want to delete this contact?')) { // eslint-disable-line
      this.props.deleteContact(id);
    }
  }
  render() {
    let {contacts, selectedContact} = this.props;
    return (
      <div>
        <ul className="list-group">
          {contacts.map((contact) => {
            return <Contact name={contact.name} selectContact={this.selectContact} selectedContact={selectedContact} address={contact.address} images={contact.images} phoneNo={contact.phoneNo} id={contact.id} key={contact.id} editContact={this.editContact} deleteContact={this.deleteContact}/>;
          })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  selectedContact: PropTypes.string,
  selectContact: PropTypes.func,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
