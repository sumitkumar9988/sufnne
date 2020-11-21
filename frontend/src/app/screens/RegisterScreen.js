import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../component/Message'
import Loader from '../component/Loader'
import {register} from '../../actions/userActions'
import FormController from '../component/FormContainer'

const RegisterScreen = ({location,history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
  
    const dispatch = useDispatch()
  
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
  
    const redirect = location.search ? location.search.split('=')[1] : '/'
    
  
    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(register(name,email, password))
    }

    return (
       <FormController>
           <h1>Sign UP</h1>
           {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
           <Form onSubmit={submitHandler}>


           <Form.Group controlId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control
                     type='name' 
                     placeholder='Enter name'
                     value={name}
                     onChange={(e)=>setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control
                     type='email' 
                     placeholder='Enter email'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}>  
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                     type='password' 
                     placeholder='Enter Password'
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
           </Form>


           <Row className='py-3'>
        <Col>
          Already Have account?{' '}
         <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>

       </FormController>
    )
}

export default RegisterScreen
