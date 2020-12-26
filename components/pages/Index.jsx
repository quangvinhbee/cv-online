import React from 'react';
import Container from '@material-ui/core/Container';
import Link from 'next/link'

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
                    <div className="header-session">
                        <h3>ABOUT ME</h3>
                        <h4>GET TO KNOW ME BEFORE YOU CHOOSE ME</h4>
                    </div>
                    <div className="avt-me">
                        <img src="images/avt/1.png" alt="" />
                    </div>
                    <div className="caption">
                        <p>I am a self-employed software and web engineer dedicated to learning and teaching JavaScript for client-server architectures. After obtaining my Master's Degree in computer science, I gained experience from the startup world, where I used JavaScript intensively during both my professional life and spare time. Eventually it led me to teach others about these topics and to offer online courses and on-site consulting for companies. I am happy to welcome you on my website :-)</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index;
