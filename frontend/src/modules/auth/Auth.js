import React from 'react';
import { Paper, Grid, makeStyles, Input, Typography, Button,} from '@material-ui/core'
import styles from './styles'
import { Link } from 'react-router-dom';

import App from '../home/App'
import Auth from './Auth'
import Cadastro from './SignUp'

const componentStyles = makeStyles(styles)


const auth = () => {
    const classes = componentStyles()

    return (<>
        <Paper
          className={classes.paper}
        >
            <Grid
                container
                className={classes.gridRoot}
                spacing={4}
                justify="center"
            >
                <Grid item>
                    <Typography
                        className={classes.titleComponent}
                    >
                        Autenticador 
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Email 
                    </Typography>
                    <Input
                        placeholder="Digite seu email"
                        rows={20}
                        fullWidth={true}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Senha 
                    </Typography>
                    <Input
                        placeholder="Digite sua senha"
                        rows={20}
                        fullWidth={true}
                    />
                </Grid>
                <Grid
                    direction="row"
                    container
                    className={classes.buttonGroup}
                    justify="flex-end"

                >
                    <Grid
                        item
                    >
                        <Button className={classes.buttonRegister}
                            color="primary"
                            size="small"
                        >
                        <Link href="/singup"  />

                            Cadastra-se
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                        >

                            Acessar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </>)
}

export default auth