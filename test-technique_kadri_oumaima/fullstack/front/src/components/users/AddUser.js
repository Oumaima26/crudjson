import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
class AddUser extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      mail: '',
      company: '',
      phone_number: 0,
      location: {
        address: '',
        city: '',
        zipcode: 0,
      },
      card: {
        expiration: '',
        cvc2: 0,
      },
      formErrors: {
        first_name: '',
        last_name: '',
        mail: "",
        company: '',
        phone_number: 0,
        location: {
          address: '',
          city: '',
          zipcode: 0,
        },
        card: {
          expiration: '',
          cvc2: 0,
        },
      },
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
  }
  mponentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mail: this.state.mail,
      company: this.state.company,
      phone_number: this.state.phone_number,
      location:{
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zipcode,
      },
      card:{
        expiration: this.state.expiration,
        cvc2: this.state.cvc2
      },
    };
    console.log(newUser)
    axios.post("http://localhost:8080/", newUser)
      .then(res => {
        console.log(res)
        console.log(localStorage.getItem('uid'))
      }
      )
      .catch(err => {
        console.log(err)
      }
      );
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h5">
            <h1 style={{ color: 'rgb(82, 78, 78)' }}><center>Sign up</center></h1>
          </Typography>
          <form className="form" noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone number"
                  name="phone_number"
                  autoComplete="phone_number"
                  value={this.state.phone_number}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mail"
                  label="Email Address"
                  name="mail"
                  autoComplete="email"
                  value={this.state.mail}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="company"
                  label="Company"
                  id="company"
                  autoComplete="current-password"
                  value={this.state.company}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="fname"
                  name="address"
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="lname"
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="zipcode"
                  label="Zip code"
                  name="zipcode"
                  autoComplete="lname"
                  value={this.state.zipcode}
                  onChange={this.onChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="expiration"
                  variant="outlined"
                  required
                  fullWidth
                  id="expiration"
                  label="expiration"
                  autoFocus
                  value={this.state.expiration}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="cvc2"
                  label="cvc2"
                  name="cvc2"
                  autoComplete="lname"
                  value={this.state.cvc2}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
            <br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default AddUser