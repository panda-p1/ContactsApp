import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import './ChatCreate.css'
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

export class InfoCard extends Component {
  render() {
    const { getActive, name, age, phone } = this.props
    return (
      <Card className={`card`}>
        <h1 style={{alignSelf:'center'}}>{name}</h1>
        <h3 style={{alignSelf:'center'}}>{age} years old</h3>
        <h3 style={{alignSelf:'center'}}>Phone: {phone}</h3>
        <ThreeSixtyIcon style={{position: 'absolute', right: '0%', top:'85%'}} onClick={() => getActive()}/>
      </Card>
    )
  }
}