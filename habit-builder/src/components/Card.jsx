import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          bgcolor: '#0362fc',
          height: "10px",
          // marginRight: window.innerWidth * 0.01,
          // marginLeft: window.innerWidth * 0.01,
          width: "10px"

        }}
      >

      </Box>
      <Box
        sx={{
          bgcolor: '#c390f0',
          height: "10px",
          width: "10px"
        }}
      >
      </Box>
      <Box
        sx={{
          bgcolor: '#f23860',
          height: "10px",
          width: "10px"

        }}
      >

      </Box>
      <button>

      </button>

    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minHeight: (window.innerHeight * 0.12), minWidth: (window.innerWidth * 0.50), marginRight: window.innerWidth * 0.01, marginLeft: window.innerWidth * 0.01 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
