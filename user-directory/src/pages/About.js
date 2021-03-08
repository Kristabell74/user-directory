import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
                <h1>People of Earth</h1>
                <h2>They might be the next person you see walking down the street.</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome To The Random User Directory!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            Here at at this user directory people are able to sort out and find people on a random user directory.
                            The two different options that people will be able to look for are the gender name and nationaliy of a person or the name and a picture of a person.
                            We let you have two options. the user can use their imagination and guess what someone might look like based on a little bit of information or you
                            can look at a picture and a name and decide what someone may be like. It is not a game just a random user profile generator. This does not give the
                            user a lot of information but it does give them something to utilize to find people.

            </p>
                        <p>

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
