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
                            During my study, I learned some frameworks such as Wordpress, Bootstrap, ReactJS, NextJS...
                            And I did some related work.
                            I am looking for a job in Front end web programming (React JS).
                            Thank you for visiting the website <i className="fa fa-heart red"></i>
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
                                    <img src="images/avt/6.png" />
                                </div>
                                <div className="caption-story text-right mr500">
                                    <h3>2014-2017</h3>
                                    <h3>Binh Minh High School</h3>
                                    <p>- Won 2 second prizes "Tin hoc tre" in 2016 and 2017 <br />
                                    - Won 1 consolation prize "HSG Tin hoc" in 2016
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/ptit.jpg" />
                                </div>
                                <div className="caption-story text-left ml500">
                                    <h3>2017-Now</h3>
                                    <h3>Post and Telecommunication Institute of Technology, HCMC - PTITHCM</h3>
                                    <p>- I learned many skills related to programming and security at PTITHCM
                                        such as: Data Structure and Algorithms, OOP, Web, Web Socket, Web Security, Database Security,... </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/freelancer.jpg" />
                                </div>
                                <div className="caption-story text-right mr500">
                                    <h3>2017-2019</h3>
                                    <h3>Freelancer - Self Employed</h3>
                                    <p>- While studying, I got some jobs to make money:
                                    <br />+ Design Logo, Banner, Poster, Video,...
                                    <br />+ Design web sales for several clients in HCMC.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/lam.png" />
                                </div>
                                <div className="caption-story text-left ml500">
                                    <h3>Jan 2020 - Jun 2020</h3>
                                    <h3>Lam Beauty Clinic (Part Time)</h3>
                                    <p>- I produced media, support marketing and website design (Wordpress).
                                        <Link href='https://lambeautyclinic.vn/'> Link website</ Link></p>
                                </div>
                            </li>
                            <li>
                                <div className="images-story">
                                    <img src="images/frontend.jpg" />
                                </div>
                                <div className="caption-story text-right mr500">
                                    <h3>Jan 2020 - Now</h3>
                                    <h3>Learn web programming</h3>
                                    <p><b>Jan - May 2020:</b> I learned Java Web (JSP/Servlet, Responsive, Bootstrap, MySQL, SQL Server,...).
                                        While studying, I did a project on the Toeic test. <br />Link:
                                        <Link href='https://github.com/quangvinhbee/Web_Toeic'> Source</ Link> &
                                        <Link href='https://www.youtube.com/watch?v=zRWvFNz5fiw'> Demo</ Link> <br />
                                        <b>May - Now 2020:</b> I learned ES6, SASS, ReactJS, NextJS, Redux, Router, Authentication Firebase,
                                         Web API, Restful API, Bootstrap UI, Material UI...
                                        While studying, I did some projects on the Game Caro Multiplayer Online (
                                            <Link href='https://github.com/quangvinhbee/game-caro-nextjs'> Source</ Link> &
                                        <Link href='https://game-caro.vercel.app/'> Demo</ Link>), Todo List (
                                            <Link href='https://github.com/quangvinhbee/react-redux-router-material'> Source</ Link>).
                                            Stay tuned to my <Link href='https://github.com/quangvinhbee/'>github</Link> to see more
                                    </p>
                                </div>
                            </li>
                            <li className='end-story'>
                                <h4>Be part of my story.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="session-4">
                    <div className="header-session">
                        <h3>MY SKILLS</h3>
                        <h4></h4>
                    </div>
                    <div className="skills-soft">
                        <ul>
                            <li>
                                <div className="img-skill">
                                    <img src="images/skill1.svg" alt="" />
                                </div>
                                <div className="header">
                                    <h3>Teamwork</h3>
                                </div>
                                <div className="caption">
                                    <p>
                                        I have been working in groups since I was at school, I always listen to and absorb people's opinions
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-skill">
                                    <img src="images/skill2.svg" alt="" />
                                </div>
                                <div className="header">
                                    <h3>Research</h3>
                                </div>
                                <div className="caption">
                                    <p>
                                        What I know is what I learn by myself and learn from the internet, my friends, my lecturers. I have the ability to learn very quickly
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-skill">
                                    <img src="images/skill3.svg" alt="" />
                                </div>
                                <div className="header">
                                    <h3>English</h3>
                                </div>
                                <div className="caption">
                                    <p>

                                        My English is only in reading and writing. I often read English documents to learn
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            <li>
                                <div className="header">
                                    <h3>PROGRAMMING LANGUAGES</h3>
                                </div>
                                <div className="caption">
                                    <p>
                                        HTML5, CSS3, Javascript ES6, Java, C/C++, Python
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="header">
                                    <h3>FRAMEWORKS & PLATFORMS</h3>
                                </div>
                                <div className="caption">
                                    <p>
                                        <b>Style: </b>Bootstrap, SASS, Material UI<br />
                                        <b>Framework: </b>NextJS (ReactJS), Redux, Router<br />
                                        <b>Database: </b>MySQL, SQL Server, Firebase<br />
                                        <b>Version Control: </b>Git<br />
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="header">
                                    <h3>IDE & EDITOR</h3>
                                </div>
                                <div className="caption">
                                    <p>
                                        <b>Code IDE: </b> Visual Studio, Visual Studio Code, Sublime Text, Netbeans, Eclipse, Dev C<br />
                                        <b>Design Tool: </b> Adobe Photoshop, Adobe Illustrator, Adobe Premiere<br />
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="session-5">
                    <div className="header-session">
                        <h3>Please contact me</h3>
                        <ul>
                            <li>
                                <Link href='mailto:lamquangvinh44@gmail.com'><i class="fa fa-envelope" aria-hidden="true"></i></ Link>

                            </li>
                            <li>
                                <Link href='https://www.facebook.com/quangvinhbee/'><i class="fa fa-facebook-square" aria-hidden="true"></i></ Link>

                            </li>
                            <li>
                                <Link href='https://www.linkedin.com/in/lam-quang-vinh-666a18120/'><i class="fa fa-linkedin-square" aria-hidden="true"></i></ Link>
                            </li>
                            <li>
                                <Link href='https://telegram.me/NoName160699'><i class="fa fa-telegram" aria-hidden="true"></i></ Link>
                            </li>
                            <li>
                                <Link href='https://github.com/quangvinhbee'><i class="fa fa-github-square" aria-hidden="true"></i></ Link>
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <div className="copyright">
                            <small>© Lam Quang Vinh</small>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    );
}

export default Index;
