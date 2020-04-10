import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import ProjectCard from '../ProjectCard';
import {data} from '../ProjectStore';

class ProjectContainer extends Component {

    render() {
        return (
            <Container>
                <Grid container spacing={2}>
                    {data.map((obj) => {
                        return <ProjectCard key={obj.id} project={obj}/>
                    })}
                </Grid>
            </Container>
        )
    }
}

export default ProjectContainer;
