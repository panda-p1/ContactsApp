import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import './ChatCreate.css'
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import TextField from '@material-ui/core/TextField';


export class SimpleCard extends Component {


  state = {
    valPhone: true,
    valName: true,
    valAge: true,
  }

  validate = (value) => {
    if (this.validateName(value.valName) && this.validateAge(value.valAge) && this.validatePhone(value.valPhone)) {
      this.setState({
        valPhone: true,

      })
      this.name.childNodes[1].firstChild.value = ''
      this.phone.childNodes[1].firstChild.value = ''
      this.age.childNodes[1].firstChild.value = ''
      return true;
    } else {
      return false;
    }

  }
  validatePhone = (phone) => {
    const regExp = /^\d[\d\(\)\ -]{4,14}\d$/;
    this.setState({
      valPhone: regExp.test(phone)
    })
    return regExp.test(phone);
  }
  validateName = (name) => {
    this.setState({
      valName: typeof name === 'string' ? name.length ? name : false : false
    })
    return !!name.length;
  }
  validateAge = (age) => {
    this.setState({
      valAge: parseInt(age)
    })
    return parseInt(age)
  }
  getRefName = (node) => this.name = node;
  getRefPhone = (node) => this.phone = node;
  getRefAge = (node) => this.age = node;
  render() {
    const { getActive, createContact } = this.props
    return (
      <Card className={`card`}>
        <ThreeSixtyIcon style={{position: 'absolute', right: '0%', top:'85%'}} onClick={() => getActive()}/>
        <TextField id="standard-basic" ref={this.getRefName} error={!this.state.valName} onChange={(event) => this.state.valName = event.target.value} required label="Name" style={{height: '40px'}}/>
        <TextField id="standard-basic" ref={this.getRefPhone} error={!this.state.valPhone} onChange={(event) => this.state.valPhone = event.target.value} required label="Phone" style={{height: '40px'}}/>
        <TextField id="standard-basic" ref={this.getRefAge} error={!this.state.valAge} onChange={(event) => this.state.valAge = event.target.value} required label="Age" style={{height: '40px'}}/>
        <Button onClick={() => {
          if (this.validate(this.state)) {
            getActive();
            createContact(this.state)
          }
        }} variant="contained" className={`submit-btn`}>Создать</Button>
      </Card>
    )
  }
}