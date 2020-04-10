import React from 'react';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';


export default function projectContainer() {
    return (
        <Container>
            <Grid container>
                <Grid item sm>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Name"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Stock Watcher"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
