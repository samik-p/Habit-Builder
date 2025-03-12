import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'


const card = (
  <React.Fragment>
    <CardContent>
      <div className="box">
        <Box
          sx={{
            bgcolor: '#0362fc',
            height: "10vh",
            width: "30vw"


          }}
        >
          <div className='box1'>
            <Box
              sx={{
                bgcolor: '#ab1a1f',
                height: "4.5vh",
                width: "2.5vw"

              }}
            >
            </Box>
          </div>


        </Box>
        <Box
          sx={{
            bgcolor: '#c390f0',
            height: "10vh",
            width: "10vw"
          }}
        >
        </Box>
        <Box
          sx={{
            bgcolor: '#f23860',
            height: "10vh",
            width: "50vw"

          }}

        >

        </Box>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </CardContent>

  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxHeight: "15vh", width: "80vw", maxWidth: "1920px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
