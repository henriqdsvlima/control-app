import React from 'react';
import { Tabs, Tab, makeStyles, Grid, CardMedia, Card } from '@material-ui/core'
import { TabContext, TabPanel } from '@material-ui/lab'
import styles from './styles'
import logo from '../../assets/logo.png'
import Points from '../home/components/Points/Points'



export default () => {
  const [currentTabValue, setCurrentTaValue] = React.useState("1")
  const componentStyles = makeStyles(styles)
  const classes = componentStyles()

  const handleChange = (_, newTabs) => {
    setCurrentTaValue(newTabs)
  }

  return (
    <Grid
      container={true}
    >
      <Grid
        item
        xs={12}
      >
        <TabContext
          value={currentTabValue}
        >
          <Grid
            container
          >
            <Grid
              item
              xs={2}
            >
              <Card
                variant="outlined"
                className={classes.root}
              >
                <CardMedia
                  component="img"
                  className={classes.logo}
                  title="logo"
                  image={logo}
                />
              </Card>
              <Tabs  className={classes.root}
                aria-label="simple tabs example"
                orientation="vertical"
                onChange={handleChange}
                value={currentTabValue}
              >
                <Tab label="Meus gastos" value="1" />
                <Tab label="Pontos" value="2" />
                <Tab label="Metas" value="3" />
                <Tab label="Lembretes" value="4" />
                <Tab label="Extratos" value="5" />
              </Tabs>
            </Grid>
            <Grid
              item
            >
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2"><Points /></TabPanel>
              <TabPanel value='3'>Item Three</TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}
