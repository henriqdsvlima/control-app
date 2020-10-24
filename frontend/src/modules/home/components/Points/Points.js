import React from 'react';
import {makeStyles} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import styles from  './styles.js'
import {BsTrophy} from "react-icons/bs"

export default Points => {
    const componentStyles = makeStyles(styles)
    const classes = componentStyles()

    return(
        <>
        <div className={classes.pointsContainer}>
            <header className={classes.pointsTitle}> Pontos
            </header>
        </div>
            <div className={classes.pointsContainer}>
                <BsTrophy className={classes.trophyItem} />
            </div>
        </>
    )
}
