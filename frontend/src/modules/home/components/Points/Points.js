import React from 'react';
import {makeStyles} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import styles from  './styles.js'



export default Points => {
    const componentStyles = makeStyles(styles)
    const classes = componentStyles()

    return(
        <Grid className={classes.container}>
            testessssssssssssss
        </Grid>

    )
}
