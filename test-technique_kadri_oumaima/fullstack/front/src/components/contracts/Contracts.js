import React, { Component } from 'react';
import axios from 'axios';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const Contract = props => (
  <tr>
    <td><Link to="/">{props.contract.start_date}</Link></td>
    <td><Link to="/">{props.contract.end_date}</Link></td>
    <td><Link to="/">{props.contract.creation_date}</Link></td>
    <td><Link to="/">{props.contract.last_update}</Link></td>
    <td><Link to="/">{props.contract.object_type}</Link></td>
    <td><Link to="/">{props.contract.price}</Link></td>
  </tr>
);

export default class Contracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contracts: [] ,
        contractsdata:[]
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/`+localStorage.getItem('uid')+`/contracts`)
      .then(response => {
        JSON.parse(response.data)
        this.setState({ 
          
          contracts: response.data,
          contractsdata: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  contractList() {
    return this.state.contracts["72c47204-1937-4a52-a76b-e9e38a81c626"].map(currentcontract => {
      return (
        <Contract
        contract={currentcontract}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Contracts</h3>
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
              <th>start date</th>
              <th>end date</th>
              <th>creation date</th>
              <th>last update</th>
              <th>object type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.contractList()}
          </tbody>
        </table>
      </div>
    )
  }
}