import React, { Component } from 'react';
import axios from 'axios';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const Item = props => (
  <tr>
    <td><Link to="/">{props.item.name}</Link></td>
    <td><Link to="/">{props.item.internal_id}</Link></td>
    <td><Link to="/">{props.item.price}</Link></td>
  </tr>
);

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [] ,
      itemsdata:[]
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/`+localStorage.getItem('uid')+`/items`)
      .then(response => {
        JSON.parse(response.data)
        this.setState({ 
          
          items: response.data,
          itemssdata: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  itemList() {
    return this.state.items["72c47204-1937-4a52-a76b-e9e38a81c626"].map(currentitem => {
      return (
        <Item
          item={currentitem}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Items</h3>
        <table className="container">
          <thead>
            <tr>     
              <th></th>       
              <th></th>
              <th>
                
                <Link to="/form">
                  <button className="btn btn" type="submit" 
                          style={{"float":"right","position": "relative"}}>
                          <PersonAddIcon style={{"color":"#000000"}}/></button>
                </Link>
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Internal id</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.itemList()}
          </tbody>
        </table>
      </div>
    )
  }
}