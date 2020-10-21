import React from 'react';
import { Paper, Grid, makeStyles, Input, Typography, Button} from '@material-ui/core'
import styles from './styles'
import { Link } from 'react-router-dom';

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
                        <Link
                          to="/signup"
                        > 
                            <Button className={classes.buttonRegister}
                                color="primary"
                                size="small"
                            >
                                Cadastra-se
                            </Button>
                        </Link>
                        <Link
                            to="/app"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                            >

                                Acessar
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </>)
}

export default auth