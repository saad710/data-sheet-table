import { Grid } from '@material-ui/core';
import React from 'react';
import ProjectLaborTable from '../dataSheetTable/ProjectLaborTable';
import WorksBoardTable from '../dataSheetTable/WorksBoardTable';


const Home = () => {
    return (
        <Grid container>
        
            <Grid item sm={12}>
                <WorksBoardTable/>
               <ProjectLaborTable/>
            </Grid>

        </Grid>
        
    );
};

export default Home;