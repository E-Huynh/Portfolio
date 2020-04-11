import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
// import Stock from "../assets/stock-watcher.png";



export default function ProjectCard({project}) {
    // console.log(project)
    return (
        <Grid item sm={6}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Project Name"
                        src={project.image}
                        title={project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions align={'center'}>
                    <Button href={project.repo} target='_blank' size="small" color="primary">
                        Github
                    </Button>
                    <Button href={project.link} target='_blank' size="small" color="primary">
                        Link
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
