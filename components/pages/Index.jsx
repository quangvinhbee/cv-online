import React from 'react';
import Container from '@material-ui/core/Container';

const Index = () => {
    return (
        <>
            <div className="body">
                <div className="session-1">
                    <Container maxWidth="lg">
                        <div className="index-caption">
                            <h1>Hi! I'm Quang Vinh Bee</h1>
                            <h3>Design Web, Front end developer - ReactJS</h3>
                        </div>
                    </Container>
                </div>
                <div className="session-2">
                    <Container maxWidth="lg">
                        <div className="header-session">
                            <h3>ABOUT ME</h3>
                            <h4>GET TO KNOW ME BEFORE YOU DIVE INTO MY CONTENT.</h4>
                        </div>
                    </Container>
                </div>
            </div>

        </>
    );
}

export default Index;
