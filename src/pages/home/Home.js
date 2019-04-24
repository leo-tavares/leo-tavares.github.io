import React from 'react'
import { Container } from 'semantic-ui-react';
import Content from '../../components/Home/Body';
import '../PgStyle.css'

const Home = () => {
    return (
        <Container className="home">
            <Content />
        </Container>
    )
}

export default Home;