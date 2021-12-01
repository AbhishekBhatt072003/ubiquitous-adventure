import React from 'react'
import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core'
const App = () => {
    return (
        <Container maxWidth="lg" >
            <AppBar color="inherit" position="static" >
                <Typography variant="h2" align="center" >
                    Memories
                </Typography>
            </AppBar>
        </Container>
    )
}

export default App
