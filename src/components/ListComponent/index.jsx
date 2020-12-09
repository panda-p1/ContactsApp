import React, {Component} from 'react';
import { SimpleCard } from '../PopUpCreateContact/PopUp.jsx'
import { InfoCard } from "../PopUpContactInfo/index.jsx";
import DropdownMenu from "../DropdownMenu/DropdownMenu.jsx";
import './style.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



export class ListComponent extends Component {
  toggleClass = () => {
    this.setState({
      activeCreate: !this.state.activeCreate
    })
  }
  getActive = () => this.setState({
    activeInfo: !this.state.activeInfo
  });
  base = {
    contacts: [
      {
        'id': 1, 'name': 'Andrey', 'phone': '79920967906', 'age': 25,
      },
      {
        'id': 2, 'name': 'Kolya', 'phone': '79221230906', 'age': 23,
      },
      {
        'id': 3, 'name': 'Jenya', 'phone': '79220580906', 'age': 18,
      }
    ]
  }
  state = {
    contacts: [
      {
        'id': 1, 'name': 'Andrey', 'phone': '79920967906', 'age': 25,
      },
      {
        'id': 2, 'name': 'Kolya', 'phone': '79221230906', 'age': 23,
      },
      {
        'id': 3, 'name': 'Jenya', 'phone': '79220580906', 'age': 18,
      }
    ],
    activeCreate: false,
    activeInfo: false,
  }

  createContact = (state) => {
    this.setState({
      contacts: this.state.contacts.concat({
        'id': this.state.contacts[this.state.contacts.length - 1].id + 1, 'name': state.valName, 'phone': state.valPhone, 'age': state.valAge
      })
    })
    this.base.contacts.concat({
      'id': this.state.contacts[this.state.contacts.length - 1].id + 1, 'name': state.valName, 'phone': state.valPhone, 'age': state.valAge
    })
  }
  getKey = (key) => {
    this.index = key;
  }
  index = 0;
  sortByAge = (age) => {
    this.state.contacts = this.base.contacts;
    this.setState({
      contacts: this.state.contacts.filter(el => el.age >= age),
    })
  }
  dontSort = () => {
    this.setState({
      contacts: this.base.contacts,
    })
  }
  render() {
    return (
      <div style={{display: 'flex', position: 'relative'}}>
        <AddCircleOutlineIcon onClick={() => this.toggleClass()}/>
        <div className={this.state.activeCreate ? 'b-popup' : 'toggle'}>
          <SimpleCard createContact={this.createContact} getActive={this.toggleClass}/>
        </div>
        <div className={this.state.activeInfo ? 'b-popup' : 'toggle'}>
          <InfoCard getActive={this.getActive}
                    name={this.state.contacts[this.index] ? this.state.contacts[this.index].name: ''}
                    age={this.state.contacts[this.index] ? this.state.contacts[this.index].age: ''}
                    phone={this.state.contacts[this.index] ? this.state.contacts[this.index].phone : ''}/>
        </div>
        <List>
          {this.state.contacts.map((el, idx) => <ListUnit getActive={this.getActive} getKey={this.getKey} key={idx} idx={idx} name={el.name} phone={el.phone}/>)}
        </List>
        <DropdownMenu sortByAge={this.sortByAge} dontSort={this.dontSort}/>
      </div>
    );
  }

}

class ListUnit extends Component {
  render() {
    const { name, phone, getActive, getKey, idx } = this.props
    return(
      <ListItem onClick={() => {getActive(); getKey(idx)}} className='list-item' style={{width: '200px'}}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={phone}/>
      </ListItem>
    )
  }
}