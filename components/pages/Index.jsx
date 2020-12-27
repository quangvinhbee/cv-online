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
                        <p>
                            I am Lam Vinh,
                            I live in HCMC and am studying at the Post and Telecommunication Institute of Technology, HCMC.
                            I'm a 4th year student majoring in information security.
                            I love web programming, I have been learning web programming since my freshman year.
                            During my study, I learned some frameworks such as Wordpress, Spring, ReactJS, NextJS... And I did some related work. Please see my story for more info.
                            Thank you for visiting the website <i class="fa fa-heart red"></i>
                        </p>
                    </div>
                </div>
                <div className="session-3">
                    <div className="header-session">
                        <h3>VITA</h3>
                        <h4>MY WORK STORY</h4>
                    </div>
                    <div className="my-story">
                        <ul className="line">
                            <li>
                                <div className="images-story">
                                    <img src="images/avt/1.png" />
                                </div>
                                <div className="caption-story text-right mr500">
                                    <h3>2014-2017</h3>
                                    <h3>Binh Minh High School</h3>
                                    <p>story story story story story story story story story story </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/avt/1.png" />
                                </div>
                                <div className="caption-story text-left ml500">
                                    <h3>2014-2017</h3>
                                    <h3>Binh Minh High School</h3>
                                    <p>story story story story story story story story story story </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/avt/1.png" />
                                </div>
                                <div className="caption-story text-right mr500">
                                    <h3>2014-2017</h3>
                                    <h3>Binh Minh High School</h3>
                                    <p>story story story story story story story story story story </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/avt/1.png" />
                                </div>
                                <div className="caption-story text-left ml500">
                                    <h3>2014-2017</h3>
                                    <h3>Binh Minh High School</h3>
                                    <p>story story story story story story story story story story </p>
                                </div>
                            </li>
                            <li className='end-story'>
                                <h4>Be part of my story.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index;
