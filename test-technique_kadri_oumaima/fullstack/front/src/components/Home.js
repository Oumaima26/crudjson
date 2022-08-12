import React, { Component } from 'react'
import Card from '@mui/material/Card';
import { Box, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from "axios";
export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      nbuser: 0,
      nbrcontract: 0,
      prix: 0,
    }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/")
      .then(res => {
        this.setState({
          nbuser: Object.keys(res.data).length
        }
        )
      }
      )
      .catch(err => {
        console.log(err)
      }

      );
      console.log(localStorage.getItem('uid'));
      axios.get(`http://localhost:8080/`+localStorage.getItem('uid')+`/contracts`)
      .then(res => {
        this.setState({
          nbrcontract: Object.keys(res.data).length
        }
        )
      }
      )
      .catch(err => {
        console.log(err)
      }

      );
      axios.get("http://localhost:8080/")
      .then(res => {
        this.setState({
          nbuser: Object.keys(res.data).length
        }
        )
      }
      )
      .catch(err => {
        console.log(err)
      }

      );
  }
  render() {
    return (
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-evenly" marginTop={5}>
          <Card sx={{ maxWidth: 400, bgcolor: "skyblue", flex: "5" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre d'utilisateurs
              </Typography>
              <Typography gutterBottom variant="h3" component="div">
                {this.state.nbuser}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 400, bgcolor: "skyblue", flex: "5" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nombre de contrats
              </Typography>
              <Typography gutterBottom variant="h3" component="div">
                {this.state.nbrcontract}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 400, bgcolor: "skyblue", flex: "5" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Prix de tous les contrats
              </Typography>
              <Typography gutterBottom variant="h3" component="div">
                50000
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Box>
    )
  }
}
