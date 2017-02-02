//@flow

import React, {Component, PropTypes} from 'react';
import autobind from 'class-autobind';

import EditContact from './EditContact';

type Props = {
  id: string;
  name: string;
  address: string;
  phoneNo: string;
  images: Array<string>;
  selectedContact: string;
  editContact: (Object) => void;
  deleteContact: (string) => void;
};

type State = {
  name: string;
  address: string;
  phoneNo: string;
  isShowingImages: boolean;
  isEditing: boolean;
};

export default class Contact extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phoneNo: '',
      isEditing: false,
      isShowingImages: false,
    };
    autobind(this);
  }
  onShowDetail() {
    if(this.props.id === this.props.selectedContact){
      this.props.selectContact('');
    } else {
      this.props.selectContact(this.props.id);
    }
  }
  onShowImages() {
    this.setState({
      isShowingImages: !this.state.isShowingImages,
    })
  }
  onEdit() {
    this.setState({
      isEditing: true,
    });
  }
  editContact(newValue: Object) {
    this.props.editContact(newValue);
    this.setState({
      isEditing: false,
    });
  }
  deleteContact() {
    this.props.deleteContact(this.props.id);
  }
  render() {
    let {id, selectedContact, name, address, phoneNo, images} = this.props;
    let style = {
      details: {
        marginTop: 10,
        marginBottom: 5,
      },
      imagesContainer: {
        marginTop: 10,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      image: {
        height: 140,
      },
    }
    let details;
    let myImages;
    (images.length > 0 && this.state.isShowingImages) ? myImages = images.map((image) => <img key={image} className="img-thumbnail" alt="" style={style.image} src={image} />) : myImages = '';
    if (id !== selectedContact) {
      details = '';
    } else if (!this.state.isEditing) {
      //NON-EDIT MODE
      details =
        <div style={style.details}>
          <p className="contact-attribute">Address:</p><p> {address}</p>
          <p className="contact-attribute">Phone No:</p><p> {phoneNo}</p>
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.onShowImages}><span className="fa fa-image"></span></button>
            <button className="btn btn-default" onClick={this.onEdit}><span className="fa fa-pencil"></span></button>
            <button className="btn btn-default" onClick={this.deleteContact}><span className="fa fa-trash"></span></button>
          </div>
          <div style={style.imagesContainer}>
            {myImages}
          </div>
        </div>;
    } else {
      //EDIT MODE
      details =
      <div style={style.details}>
        <EditContact name={name} address={address} phoneNo={phoneNo} id={id} editContact={this.editContact} />
      </div>;
    }
    return (
      <li className="list-group-item">
        <div className="contact-name" onClick={this.onShowDetail}>{name}</div>
        {details}
      </li>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  selectContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.string,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
