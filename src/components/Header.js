import React from 'react';
import { Header as HeaderUI, Sticky, Segment, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import profileImg from '../img/profile.jpeg'
const Header = () => {
    return (
        <HeaderUI as='h2' icon textAlign="center">
            <Sticky>
                <Segment size="massive" inverted clearing color="grey">
                    <Image
                        src={profileImg}
                        avatar
                    />
                    <Link to="/">
                        <Button>
                            Home
                        </Button>
                    </Link>
                    <Link to="/programming/">
                        <Button>
                            Programação
                        </Button>
                    </Link>
                    <Link to="/automotive/">
                        <Button>
                            Preparação automotiva
                        </Button>
                    </Link>
                </Segment>
            </Sticky>
        </HeaderUI>
    )
}

export default Header;