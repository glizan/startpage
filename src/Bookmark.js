import "./Bookmark.css"


import { library } from '@fortawesome/fontawesome-svg-core';
import { faBaseballBatBall, faBeer, faCode, faDumpsterFire, faBookOpenReader, faMagnifyingGlass, faHeadSideVirus, fas, faMoneyBillTrendUp, faSchool, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faRedditAlien, faGithub, faDev, faReact, faCss3, faBootstrap, faGoogle, faFirefox, faFirefoxBrowser, faJs, faReacteurope, faYoutube, faFreeCodeCamp, faStackOverflow, faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";



library.add(fas, faTwitter, faFontAwesome)

const categoryElements = [
    { title: "Productivity", id: "productivity" },
    { title: "Reference", id: "reference" },
    { title: "Information", id: "information" },
    { title: "Entertainment", id: "entertainment" },
];


const productivityElements = [
    { href: "https://github.com/glizan", icon: faGithub },
    { href: "https://www.icloud.com", icon: faCloud },
    { href: "https://www.duckduckgo.com", icon: faMagnifyingGlass },
];

const referenceElements = [
    { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", icon: faJava },
    { href: "https://reactjs.org/", icon: faReact },
    { href: "https://fontawesome.com/", icon: faFontAwesome },
    { href: "https://www.w3schools.com/", icon: faSchool },
    { href: "https://www.freecodecamp.org/", icon: faFreeCodeCamp },
    { href: "https://www.codecademy.com", icon: faCode },
    { href: "https://stackoverflow.com/", icon: faStackOverflow },
    { href: "https://tailwindcss.com/", icon: faCss3 },
];

const newsElements = [
    { href: "https://www.motherjones.com", icon: faHeadSideVirus },
    { href: "https://www.drudgereport.com", icon: faNewspaper },
    { href: "https://news.google.com/topstories?hl=en-CA&gl=CA&ceid=CA:en", icon: faDumpsterFire },
    { href: "https://www.thestreet.com", icon: faMoneyBillTrendUp },
];

const entertainmentElements = [
    { href: "https://www.reddit.com/", icon: faRedditAlien },
    { href: "https://www.mlb.com", icon: faBaseballBatBall },
    { href: "https://www.barstoolsports.com", icon: faBeer },
    { href: "https://bleacherreport.com/", icon: faBookOpenReader },
    { href: "https://devrant.com/feed", icon: faDev },
    { href: "https://www.youtube.com", icon: faYoutube },
];

function renderCategoryElements() {
    return (
        categoryElements.map(d => <Col className="bookmark-col align-content-stretch my-auto" sm="12" md="12" lg="12" >
            <button className="headingbuttontitle" id={d.id} variant="" type='null' style={{ float: 'right', }} onFocus={(e) => onFocusHandler(d.id, e)} onClick={(e) => handleClick(d.id, e)} ><h2 className="headingbuttontitle" >
                {d.title}</h2></button>
        </Col>)
    );
}

function renderIconElements(elements) {
    return (
        elements.map(d => <Button className="refButton" href={d.href} style={{ backgroundColor: 'transparent', color: 'aliceblue' }} variant="link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={d.icon} size="4x" />
        </Button>)
    );
}


function handleClick(id, event) {
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
        default: ;

    }

}
function handleMouseEnter(event) {
    //   event.visible = true;
    //    event.target.style.visible = "visible";
    //    event.target.style.backgroundColor = "green";
    //   const element = document.querySelector( "#first" ).setAttribute("hidden",true);
    //    element.visible = "visible";
}
function handleMouseLeave(event) {
    document.querySelector("#first").style.visibility = "hidden";
    document.querySelector("#second").style.visibility = "hidden";
    document.querySelector("#third").style.visibility = "hidden";
    document.querySelector("#fourth").style.visibility = "hidden";
}
function onFocusHandler(id, event) {
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
        default: ;

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
                                {renderCategoryElements()}
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
                                <Col className="icon-col align-content-stretch my-auto" sm="12" md="12" lg="12" id="first" onMouseLeave={handleMouseLeave}>
                                    {renderIconElements(productivityElements)}
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12" md="12" lg="12" id="second" onMouseLeave={handleMouseLeave}>
                                    {renderIconElements(referenceElements)}
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12" md="12" lg="12" id="third" onMouseLeave={handleMouseLeave}>
                                    {renderIconElements(newsElements)}
                                </Col>
                                <Col className="icon-col align-content-stretch my-auto" sm="12" md="12" lg="12" id="fourth" onMouseLeave={handleMouseLeave}>
                                    {renderIconElements(entertainmentElements)}
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