import React from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import bioImage from '../../assets/Portfolio-Image.JPG'

const useStyles = makeStyles({
    paper: {
        padding: 20,
        color: '#747474',
        background: '#272727'
    },
    header: {
        padding: 10,
        color: '#9407e0'
    },
    foo: {
        padding: 10,
        color: 'pink'
    }
});

export default function portfolioContainer() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles()
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Typography variant='h3' align='left' className={classes.header}>
                        About Myself
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Paper className={classes.paper}>
                        <img src={bioImage} alt="Bio image" height={'100%'} width={'100%'} />
                    </Paper>
                </Grid>
                <Grid item sm={8}>
                    <Paper className={classes.paper}>
                        <Typography variant='body1'>
                            Full Stack Web Developer leveraging multiple years of experience to manage, execute, and deliver products. Attained a B.S. in Biotechnology with 7+ years of research and development experience, and a certification in Full Stack Development from the University of Utah. First-hand knowledge of HTML5, CSS3, Javascript, React.js, Node and many other technologies in web development. Takes pleasure in the continual learning and collaboration amongst teams to accomplish a shared goal. Years of development experience enables me to contribute to problem solving, project management, and testing in web development.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
