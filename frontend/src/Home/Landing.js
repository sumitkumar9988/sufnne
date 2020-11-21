/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav } from 'react-bootstrap'

const Landing = () => {
    return (
        <div>
        <header>
             <Navbar collapseOnSelect  bg="dark" variant='dark'>
                <Navbar.Brand href="#home"><img src='img/logo.png' width="90" height="55" alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link >Artist</Nav.Link>
                    <Nav.Link eventKey={2} >
                        users
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </header>

            <header className="masthead text-center text-white">
                <div className="masthead-content">
                <div className="container">
                    <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                    <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                    <a href='#' className="btn btn-primary btn-xl rounded-pill mt-5">Find Artist Near By</a>
                </div>
                </div>
                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src="img/01.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">For those about to rock...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src="img/02.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">We salute you!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src="img/03.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">Let there be rock!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Landing
