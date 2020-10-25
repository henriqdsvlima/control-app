import React from 'react';
import {makeStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styles from  './styles.js'
import {BsTrophy} from "react-icons/bs"

export default Points => {
    const componentStyles = makeStyles(styles)
    const classes = componentStyles()

    return(
       <>
        <Typography noWrap>
            Pontos
        </Typography>
        <Grid item xs={12}>
            Meus Desafios
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <BsTrophy />
     </>   
    )
}
