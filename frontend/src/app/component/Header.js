import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import {userLogout} from '../../actions/userActions'

const Header = () => {

    const dispatch=useDispatch();
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin;
    useEffect(() => {

    }, [userInfo])
    const logoutHandler=(e)=>{
        e.preventDefault()
        dispatch(userLogout())
    }

    return (
        <header>
                    <Navbar  bg="dark" variant="dark"  expand="lg" collapseOnSelect>
                        <Container>
                            <LinkContainer to='/'>
                                <Navbar.Brand href="#home">ShopNear</Navbar.Brand>
                            </LinkContainer>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <LinkContainer to="/cart">
                                            <Nav.Link >
                                                <i className="fas fa-shopping-cart"></i>Cart
                                            </Nav.Link> 
                                        </LinkContainer>
                                        {userInfo?(<NavDropdown title={userInfo.name} id='username'>
                                            <LinkContainer to='/profile'>
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Item onClick={logoutHandler}>
                                                Logout
                                            </NavDropdown.Item>
                                            
                                        </NavDropdown>) :  (<LinkContainer to="/login">
                                            <Nav.Link >
                                                <i className="fas fa-user"></i>Sign In
                                            </Nav.Link>
                                        </LinkContainer>)
                                        }
                                    </Nav>
                                    {/* <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form> */}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
        </header>
    )
} 

export default Header