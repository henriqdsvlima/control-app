import React from 'react';
import { Tabs, Tab, makeStyles, Grid, Typography } from '@material-ui/core'
import { TabContext, TabPanel } from '@material-ui/lab'
import styles from './styles'

export default () => {
  const [currentTabValue, setCurrentTaValue] = React.useState("1")
  const componentStyles = makeStyles(styles)
  const classes = componentStyles()

  const handleChange = (_, newTabs) => {
    setCurrentTaValue(newTabs)
  }

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
      >
        <TabContext
          value={currentTabValue}
        >
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
            >
              <Typography
                        className={classes.titleComponent}
                    >
                        Cadastro 
              </Typography>
              <Tabs 
                aria-label="simple tabs example"
                orientation="vertical"
                onChange={handleChange}
                value={currentTabValue}
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </Tabs>
            </Grid>
            <Grid
              item
            >
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item two</TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}
