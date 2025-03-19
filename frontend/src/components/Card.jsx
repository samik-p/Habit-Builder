import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

import './Card.css'


export default function OutlinedCard() {
  const [selected, setSelected] = React.useState(false)
  return (
    <Box sx={{ maxHeight: "15vh", width: "60vw", maxWidth: "1920px" }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <div className="box">
              <Box
                sx={{
                  bgcolor: '#0362fc',
                  height: "10vh",
                  width: "50vw",


                }}
              >
                <div className='Icon'>
                  <Box
                    sx={{
                      bgcolor: '#ab1a1f',
                      height: "8vh",
                      width: "8vh",
                      marginLeft: "2%",
                      marginTop: "1.5%"


                    }}
                  >
                  </Box>
                </div>


              </Box>
              <Box
                sx={{
                  bgcolor: '#c390f0',
                  height: "10vh",
                  width: "20vw"
                }}
              >
              </Box>
              <Box
                sx={{
                  bgcolor: '#f23860',
                  height: "10vh",
                  width: "10vw"

                }}

              >

                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={() => setSelected((prevSelected) => !prevSelected)}
                  sx={{
                    bgcolor: '#ffffff',
                    marginTop: '18%',

                  }}
                >
                  <CheckIcon />
                </ToggleButton>

              </Box>
            </div>
          </CardContent>

        </React.Fragment>
      </Card>
    </Box>

  );
}



