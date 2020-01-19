import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./background.css";
import "./footer.css";
import { Component } from "react";
import "../Images/lightbox.css";
import "./about.css";
import ptexta2 from "../Images/ptexta2.jpg";
import ptextawhole from "../Images/ptextawhole.jpg";
import "../Images/lightbox.css";
import { Helmet } from "react-helmet";
import toles_illustrator from "../Images/toles_illustrator.jpg";

const illustration = () => {
  return (
    <Row className="hideonMob">
      <Col md={{ span: 2, offset: 2 }}>
        <img id="tolesIll" alt="dummy" src={toles_illustrator} />
      </Col>
      <Col md={{ span: 4 }}>
        <p className="thanosCredits">
          Illustration by my inspirational friend,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/thanostryfonidis"
          >
            Thanos Tryfonidis
          </a>
        </p>
      </Col>
    </Row>
  );
};

class About extends Component {
  state = {
    showIllu: illustration
  };

  componentDidMount() {
    document.title = "The Ocean";
  }

  render() {
    return (
      <Container id="aboutContainer" fluid="true">
        <Helmet>
          <meta
            name="description"
            content=" Get to know me as a person ·
            Random facts, how i spend my free time or which hot liquid i prefer inside my cup."
          />
          <meta
            itemprop="description"
            content=" Get to know me as a person ·
            Random facts, how i spend my free time or which hot liquid i prefer inside my cup."
          />

          <meta NAME="ROBOTS" CONTENT="noindex,follow" />
        </Helmet>

        <h1 className="fade-in" id="pageTitle">
          FOOD TO KEEP PASSION FLOWING
        </h1>
        <Row id="aboutBoxes">
          <Col md={{ span: 6, offset: 1 }}>
            <h1 className="fade-in slide-in-top" id="aboutTitle">
              KAIZEN
            </h1>
          </Col>
        </Row>
        <Row>
          <Col id="SportsBox" md={{ span: 5, offset: 1 }}>
            <h1 className="boxTitle">Athletics</h1>
            <hr align="center" size="50" />
            <p className="press">
              Spending an hour or two sweating is enough to lift a day's
              weight.(puntastic). Extra points having a session in a more
              natural environment than gym - seaside or inside a forest - for
              working out both the body and spirit. What a combo!
            </p>
            <p>
              Talking about physical and spiritual improvement, i have zeal for
              the martial artist's lifestyle, where courage, discipline &
              respect are the root elements of a fighter's spirit.
              <i>
                The story begins with a young kid having extra fat and a
                hard-copy of Rocky. Passion forged from the italian stallion's
                story.
              </i>
            </p>
          </Col>
          <Col className="slide-in-right" id="BooksBox" md={{ span: 5 }}>
            <h1 className="boxTitle">Literature</h1>
            <hr align="center" size="50" />
            <p className="press">
              {" "}
              Books here and there, full of notes. My cup of tea includes
              self-improvement, philosophy and classic literature books. By the
              way, the closer I am to nature, the more i appreciate a good poem.
            </p>
            <p>
              I love trading books, so if you're up for some new suggestions and
              long conversations, don't forget to say so!
            </p>
            {/* //todo: CTA */}
          </Col>
        </Row>

        <Row className="aboutRow" id="secondRowAbout">
          <Col md={{ span: 8, offset: 2 }}>
            <Col id="videogamesBox" md={{ span: 12 }}>
              <h1 className="boxTitle">Entertainment</h1>
              <hr align="center" size="50" />
              <p className="press">
                My music preference ranges from the heaviest metal riffs to the
                slowest, calming hip-hop beats. It always depends on the mood,
                the situtation - and of course - the company. <br />
                <i>
                  the design of this website was influenced by Evidence's album,{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=APStAKRV8yE"
                  >
                    Weather or not.
                  </a>
                </i>
              </p>
              <span className="gamesSpan">
                <i>and if we're talking about...</i>
              </span>
              <p>
                Videogames feel just like reading a good book but here you're in
                the protagonist's shoes. I used to game on since i can remember,
                and in exchange i got some extra passion for challenges and
                exploration. Grew up with Crash Bandicoot, fell in love with
                Dark Souls and lately I am on a hunt for unique & innovating
                indie games.
                <br />I also used to write some amateur reviews on Steam, and
                you can find them right{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://steamcommunity.com/id/Unscxrred/recommended/"
                >
                  {" "}
                  here
                </a>
                , or you could simply hit me up with a friend request!{" "}
              </p>
              <span className="quote">'Don't you dare go hollow.'</span>
            </Col>
          </Col>
        </Row>

        <Row className="aboutRow">
          <Col className="mountainCol" md={{ span: 5, offset: 4 }}>
            <h1 className="boxTitle mountain">Conquer the Mountain </h1>
            <h4 className="boxTitle sisiphus">
              <i>even if you're Sisiphus.</i>
            </h4>
          </Col>
        </Row>

        {window.innerWidth <= 768 ? "" : <this.state.showIllu />}
      </Container>
    );
  }
}

export default About;
