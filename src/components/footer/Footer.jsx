import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <footer id="footer" class="text-center mt-5">
                <Row>
                <Col>
                        <div className="footerCenter">
                            <ul className="footerList">
                                <li className="footerListItem">
                                    <Link className="footerLink" to="/">
                                        HOME
                                    </Link>
                                </li>
                                <li className="footerListItem">
                                    <Link className="footerLink" to="/about">
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="footerListItem">
                                    <Link className="footerLink" to="/bookstore">
                                        BOOK STORE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="logoFooter">
                            <a className="navbar-brand align-items-center" href="/">
                                <img src={process.env.PUBLIC_URL + '/Images/logofinal-navbar.png'} height="150" alt="Evince" />
                            </a>
                        </div>
                        <div className="text-center pb-3 text-light ">
                            <p className="p" >© 2023 Evince. All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </footer>
        </>
    )
}