import React, { Component } from 'react';
import axios from 'axios';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const User = props => (
  <tr>
    <td><Link to="/">{props.user.first_name}</Link></td>
    <td><Link to="/">{props.user.last_name}</Link></td>
    <td><Link to="/">{props.user.mail}</Link></td>
  </tr>
);

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [] ,
      usersdata:[]
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/")
      .then(response => {
        JSON.parse(response.data)
        this.setState({ 
          
          users: response.data,
          usersdata: response.data
        });
        console.log(this.state.usersdata)
        console.log(this.state.users["72c47204-1937-4a52-a76b-e9e38a81c626"])
      })
      .catch(error => {
        console.log(error);
      })
  }

  userList() {
    return this.state.users["72c47204-1937-4a52-a76b-e9e38a81c626"].map(currentuser => {
      return (
        <User
          user={currentuser}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Patients</h3>
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
              <th>User first name</th>
              <th>User last name</th>
              <th>User email</th>
            </tr>
          </thead>
          <tbody>
            {this.userList()}
          </tbody>
        </table>
      </div>
    )
  }
}