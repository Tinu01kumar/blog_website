import React from "react"
import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
          <div style={{backgroundColor:"#fff"}}>
          
        
            <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
               
                <Grid container spacing={2} item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
            </div>
        </>
    )
}

export default Home;