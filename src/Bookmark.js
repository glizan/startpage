import "./Bookmark.css"


import { library } from '@fortawesome/fontawesome-svg-core'
import { faBaseballBatBall, faBeer, faCode, faDumpsterFire, faEnvelope, faHeadSideVirus, fas, faMoneyBillTrendUp, faSchool, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faRedditAlien, faGithub, faReact, faBootstrap, faGoogle, faFirefox, faFirefoxBrowser, faJs, faReacteurope, faYoutube, faFreeCodeCamp, faStackOverflow, faJava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { hover } from "@testing-library/user-event/dist/hover"

library.add(fas, faTwitter, faFontAwesome)


function handleClick(id, event) {
    console.log('event.currentTarget.dataset.id', id); // >> id
    document.querySelector("#first").style.visibility = "hidden";
    document.querySelector("#second").style.visibility = "hidden";
    document.querySelector("#third").style.visibility = "hidden";
    document.querySelector("#fourth").style.visibility = "hidden";

    switch (id) {
        case 'productivity':
            document.querySelector("#first").style.visibility = "visible";
            break;
        case 'reference':
            document.querySelector("#second").style.visibility = "visible";
            break;
        case 'information':
            document.querySelector("#third").style.visibility = "visible";
            break;
        case 'entertainment':
            document.querySelector("#fourth").style.visibility = "visible";
            break;
        default: console.log("default");

    }

}
function handleMouseEnter(event) {
    console.log("Enter " + event.target.id);
    //   event.visible = true;
    //    event.target.style.visible = "visible";
    //    event.target.style.backgroundColor = "green";
    //   const element = document.querySelector( "#first" ).setAttribute("hidden",true);
    //    element.visible = "visible";
}
function handleMouseLeave(event) {
    console.log("Leave " + event.target.id);
    document.querySelector("#first").style.visibility = "hidden";
    document.querySelector("#second").style.visibility = "hidden";
    document.querySelector("#third").style.visibility = "hidden";
    document.querySelector("#fourth").style.visibility = "hidden";
}
function onFocusHandler(id, event) {
    console.log('on Focus', id); // >> id
    document.querySelector("#first").style.visibility = "hidden";
    document.querySelector("#second").style.visibility = "hidden";
    document.querySelector("#third").style.visibility = "hidden";
    document.querySelector("#fourth").style.visibility = "hidden";

    switch (id) {
        case 'productivity':
            document.querySelector("#first").style.visibility = "visible";
            break;
        case 'reference':
            document.querySelector("#second").style.visibility = "visible";
            break;
        case 'information':
            document.querySelector("#third").style.visibility = "visible";
            break;
        case 'entertainment':
            document.querySelector("#fourth").style.visibility = "visible";
            break;
        default: console.log("default");

    }
}

function Bookmark() {



    return (
        <>

            <Container className="bookmark m-0 p-0" >
                <Row>
                    <Col className="bookmarkpage-col" sm={3} md={3} lg={3}>
                        <Container className="bookmark-panel m-0 p-0 ">
                            <Row className="bookmark-endrow m-0 p-0">
                            </Row>
                            <Row className="bookmark-row m-0 p-0 align-items-stretch align-content-stretch" sm={9} md={9} lg={9}>
                                <Col className="bookmark-col align-content-stretch my-auto" sm="12" md="12" lg="12" >
                                    <button className="headingbuttontitle" id="productivity" variant="" type='null' style={{ float: 'right', }} onFocus={(e) => onFocusHandler("productivity", e)} onClick={(e) => handleClick("productivity", e)} ><h2 className="headingbuttontitle" >
                                        Productivity</h2></button>
                                </Col>
                                <Col className="bookmark-col align-content-stretch my-auto" sm="12" md="12" llg="12">
                                    <button className="headingbuttontitle" id="reference" variant="" type='null' style={{ float: 'right', }} onFocus={(e) => onFocusHandler("reference", e)} onClick={(e) => handleClick("reference", e)} ><h2 className="headingbuttontitle" >
                                        Reference</h2></button>
                                </Col>
                                <Col className="bookmark-col align-content-stretch my-auto" sm="12" md="12" llg="12">
                                    <button className="headingbuttontitle" id="information" variant="" type='null' style={{ float: 'right', }} onFocus={(e) => onFocusHandler("information", e)} onClick={(e) => handleClick("information", e)}><h2 className="headingbuttontitle" >
                                        Information</h2></button>
                                </Col>
                                <Col className="bookmark-col align-content-stretch my-auto" sm="12" md="12" llg="12">
                                    <button className="headingbuttontitle" id="entertainment" variant="" type='null' style={{ float: 'right', }} onFocus={(e) => onFocusHandler("entertainment", e)} onClick={(e) => handleClick("entertainment", e)}><h2 className="headingbuttontitle" >
                                        Entertainment</h2></button>

                                </Col>
                            </Row>
                            <Row className="bookmark-endrow m-0 p-0 ">
                            </Row>

                        </Container>
                    </Col>
                    <Col className="page-col" sm={9} md={9} lg={9}>
                        <Container className="icon-panel m-0 p-0 ">
                            <Row className="icon-endrow m-0 p-0">
                            </Row>
                            <Row className="icon-row m-0 p-0 align-items-stretch align-content-stretch">
                                <Col className="icon-col align-content-stretch my-auto" sm="12"  md="12" lg="12" id="first"   onMouseLeave={handleMouseLeave}>
                                    <Button className="refButton" href="https://github.com/glizan" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.icloud.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faCloud} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFirefox} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="http://localhost/~graden/Start/index.html" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFirefoxBrowser} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.google.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGoogle} size="4x" />
                                    </Button>
                                    <Button className="refButton" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link">
                                        <FontAwesomeIcon icon={faCode} size="4x" />
                                    </Button>
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12"  md="12" lg="12" id="second" onMouseLeave={handleMouseLeave}>
                                    <Button className="refButton" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faJava} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://reactjs.org" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faReact} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://react-bootstrap.netlify.app/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faReacteurope} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://getbootstrap.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faBootstrap} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://fontawesome.com/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFontAwesome} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.w3schools.com/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faSchool} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.freecodecamp.org/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFreeCodeCamp} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.codecademy.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faCode} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://stackoverflow.com/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faStackOverflow} size="4x" />
                                    </Button>
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12"  md="12" lg="12" id="third" onMouseLeave={handleMouseLeave}>

                                    <Button className="refButton" href="https://www.motherjones.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faHeadSideVirus} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.drudgereport.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faNewspaper} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://news.google.com/topstories?hl=en-CA&gl=CA&ceid=CA:en" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faDumpsterFire} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.thestreet.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faMoneyBillTrendUp} size="4x" />
                                    </Button>
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12"  md="12" lg="12" id="fourth" onMouseLeave={handleMouseLeave}>
                                    <Button className="refButton" href="https://www.reddit.com/" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faRedditAlien} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.mlb.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faBaseballBatBall} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.barstoolsports.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faBeer} size="4x" />
                                    </Button>
                                    <Button className="refButton" href="https://www.youtube.com" style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="4x" />
                                    </Button>

                                </Col>
                            </Row>
                            <Row className="icon-endrow m-0 p-0 ">
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Bookmark;