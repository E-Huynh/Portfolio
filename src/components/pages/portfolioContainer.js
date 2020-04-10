import React from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'

export default function portfolioContainer() {

    return (
        <Container>
            <Typography variant='h1' align='center'>
                Portfolio container
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Paper>
                        <img src="https://e-huynh.github.io/updated_portfolio/assets/About_me.JPG" alt="" height="100%" width="100%"/>
                    </Paper>
                </Grid>
                <Grid item sm={8}>
                    <Paper>
                        <Typography variant='body1'>
                            Full Stack Web Developer leveraging multiple years of experience to manage, execute, and deliver products. Attained a B.S. in Biotechnology with 7+ years of research and development experience, and a certification in Full Stack Development from the University of Utah. First-hand knowledge of HTML5, CSS3, Javascript, React.js, Node and many other technologies in web development. Takes pleasure in the continual learning and collaboration amongst teams to accomplish a shared goal. Years of development experience enables me to contribute to problem solving, project management, and testing in web development.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
