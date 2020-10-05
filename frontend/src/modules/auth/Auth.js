import React from 'react';
import { Paper, Grid, makeStyles, TextField } from '@material-ui/core'

const userStyles = makeStyles(() => ({
    paper: {
        margin: '70px auto'
    }
}))


const auth = () => {
    const classes = userStyles()

    return (<>
        <Grid
         container
        >
            <Grid
             item
             className={{ margin: '70px auto' }}
             xl={4}
             lg={6}
             md={6}
             sm={8}
             xs={10}
            >
                <Paper
                  elevation={3}
                >
                    <Grid container>
                        <Grid
                          item
                          xs={10}
                        >    
                            <TextField 
                                label="Email"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </>)
}

export default auth