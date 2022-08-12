import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
class AddContract extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      start_date: 0,
      end_date: 0,
      creation_date: 0,
      last_update: 0,
      object_type: '',
      price: 0,
      uid:'',
      formErrors: {
        start_date: 0,
        end_date: 0,
        creation_date: 0,
        last_update:0,
        object_type: '',
        price: 0,
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
    const newcontract = {
      start_date: 1655670181443,
      end_date: 1655670181443,
      creation_date: 1655670181443,
      last_update :1655670181443,
      object_type: 'Velo',
      price: 5000
    };
    console.log(newcontract)
    this.setState({
      uid:localStorage.getItem('uid')
    })
    console.log(localStorage.getItem('uid'))
    console.log(newcontract)
    axios.post(`http://localhost:8080/`+localStorage.getItem('uid')+`/contracts`, newcontract)
      .then(res => console.log(res)
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
            <h1 style={{ color: 'rgb(82, 78, 78)' }}><center>Add contract</center></h1>
          </Typography>
          <form className="form" noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="fname"
                  name="start_date"
                  variant="outlined"
                  required
                  fullWidth
                  id="start_date"
                  label="Start date"
                  autoFocus
                  value={this.state.start_date}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="end_date"
                  label="End date"
                  name="end_date"
                  autoComplete="lname"
                  value={this.state.end_date}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="creation_date"
                  label="Creation date"
                  name="creation_date"
                  autoComplete="creation_date"
                  value={this.state.creation_date}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="object_type"
                  label="Object type"
                  id="object_type"
                  autoComplete="current-password"
                  value={this.state.object_type}
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
            >Add contract
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default AddContract