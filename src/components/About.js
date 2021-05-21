import React from 'react'
import {Card, Container, Image} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'

function About() {
    return (
        <div>
            {/* <Container className="breadcrumb-container">
                <Breadcrumb> 
                        <LinkContainer to="/">
                            <Breadcrumb.Item>
                                Projects
                            </Breadcrumb.Item>
                        </LinkContainer>

                        <LinkContainer to="/about">
                            <Breadcrumb.Item active>
                                About
                            </Breadcrumb.Item>
                        </LinkContainer>
                </Breadcrumb>
                </Container> */}

                    <Container className="about-container">
                        <h1>About Me</h1>
                        <div className="about-me-line">
                            <hr></hr>
                        </div>
                        <Image className="profile-image" src="reymond2.jpg" roundedCircle/>
                        <h3>Reymond R. Mesuga</h3>
                        {/* <h3 className="profile-info">Artificial Intelligence and React App Development Enthusiast</h3> */}
                        <Card.Text className="about-info">
                                        <p>React App Development and Artificial Intelligence Enthusiast</p>
                                        <p><i>
                                        I'm a programmer and a physics student at PUP Manila. I enjoy doing data
                                        analysis, artificial intelligence and app development on my spare time. 
                                        I made this website mainly to showcase the projects
                                        that i have done so far including personal projects and academic research
                                        contributions that is related to data analysis and artificial intelligence. 
                                        The branch of artificial intelligence that i am talking
                                        here is machine and deep learning that are mostly featured on my projects. I use
                                        python as my main programming language when it comes to data analysis and
                                        artificial intelligence. When it comes to app development, i use javascript 
                                        as my main languange and especially its framework called React JS. 
                                        In fact, i made this website using React JS and work on it for almost 
                                        3 days before it looks decent. For more info, follow me on GitHub 
                                        or connect with me via LinkedIn.
                                        </i></p>
                        </Card.Text>
                </Container>
        </div>
    )
}

export default About
