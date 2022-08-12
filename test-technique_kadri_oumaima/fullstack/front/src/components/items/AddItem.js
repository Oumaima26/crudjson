import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
class AddItem extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      price: 0,
      formErrors: {
        name: '',
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
      name:this.state.name,
      price: this.state.price
    };
    this.setState({
      uid:localStorage.getItem('uid')
    })
    console.log(localStorage.getItem('uid'))
    console.log(newcontract)
    axios.post(`http://localhost:8080/`+localStorage.getItem('uid')+`/items`, newcontract)
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
            <h1 style={{ color: 'rgb(82, 78, 78)' }}><center>Add item</center></h1>
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
                  label="Name"
                  autoFocus
                  value={this.state.name}
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

            </Grid>
            <br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Add item
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default AddItem