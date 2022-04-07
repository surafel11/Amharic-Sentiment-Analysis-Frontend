import React from 'react';
import { CssBaseline, Grid, Button, Typography, IconButton, TextField, MenuItem, InputAdornment, OutlinedInput, FormControl } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Map from '../map/Map';

import './HomePage.css';

const currencies = [
  {
    value: 'ET',
    label: 'ETHIOPIA',
  },
  {
    value: 'US',
    label: 'UNITED STATES OF AMERICA',
  }
];

function HomePage() {
    const [currency, setCurrency] = React.useState('ET');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
    return (
        <div>
            <CssBaseline/>
            <Grid container direction="column" width="100%" height="100vh">
                <Grid container direction="row" height="10vh" alignItems="center" style={{backgroundColor: "#fcd1ac"}} paddingLeft={5} paddingRight={5}>
                    <Typography component="div" style={{fontSize: 40, color: "#19304a", fontWeight: 300, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                        የጥላቻ ንግግር መለያ
                    </Typography>
                <Grid item flexGrow={1}>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography component="div" style={{fontSize: 23, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                            መነሻ ገጽ
                        </Typography>
                    </Button>
                </Grid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid item>
                    <Button>
                        <Typography component="div" style={{fontSize: 23, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                            የህዝብ ምንጭ
                        </Typography>
                    </Button>
                </Grid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Grid item>
                    <Button>
                        <Typography component="div" style={{fontSize: 23, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                            ስለኛ
                        </Typography>
                    </Button>
                </Grid>
                </Grid>
                <Grid container direction="row" height="90vh" width="100%" style={{backgroundColor: "#ffffff"}}>
                    <Grid item width="77%" height="100%" padding={2}>
                        <Map/>
                    </Grid>
                    <Grid container direction="column" width="22%"  style={{backgroundColor: "#ffffff", borderRadius: 20}} marginTop={2} marginBottom={2} padding={3}>
                        <Typography component="div" style={{fontSize: 25, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                            ማጣሪያዎች
                        </Typography>
                        <br />
                        <Typography component="div" style={{fontSize: 20, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}} marginBottom={2}>
                            ሀገር
                        </Typography>
                        <TextField
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        helperText="እባክዎ አገር ይምረጡ"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <br />
                        <Grid container direction="row" alignItems="center">
                            <Typography component="div" style={{fontSize: 20, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                                የቀን ክልል
                            </Typography>
                            &nbsp;&nbsp;

                            <IconButton onClick={() => {
                                console.log("Calendar Clicked");
                            }}>
                                <DateRangeIcon/>
                            </IconButton>
                        </Grid>
                        <br />
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item xs={5}>
                                <TextField
                                // label="With normal TextField"
                                id="outlined-start-adornment"
                                placeholder='ቀን / ወር / አመት'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">ከ</InputAdornment>,
                                }}
                                />
                            </Grid>
                            <h2>-</h2>
                            <Grid item xs={5}>
                                <TextField
                                // label="With normal TextField"
                                id="outlined-start-adornment"
                                placeholder='ቀን / ወር / አመት'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">ወደ</InputAdornment>,
                                }}
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item xs={5}>
                                <Button variant='contained' color='primary' fullWidth>
                                    <Typography component="div" style={{fontSize: 20, color: "#ffffff", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                                        አጣራ
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button variant='outlined' color='primary' fullWidth>
                                    <Typography component="div" style={{fontSize: 20, fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                                        አጽዳ
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <br /><br /><br />

                        <Typography component="div" style={{fontSize: 25, color: "#19304a", fontWeight:900, letterSpacing: 3, fontFamily: 'Ebrima'}}>
                            የጠቋሚዎች የቀለም ትርጉም
                        </Typography>
                        <br />

                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;