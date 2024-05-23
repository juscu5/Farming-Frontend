import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgLogin from '../../assets/login-svg-1.svg'

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/effects';
import { debounce } from 'lodash';
import { getCsrf } from '../../redux/auth/effects';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delayedCsrf = debounce(() => {
    dispatch(getCsrf());
  }, 300);

  useEffect(() => {
    delayedCsrf();
    return () => {
      delayedCsrf.cancel();
    };
  }, []);

  const callbackAuth = (err) => {
    if (err === null) {
      toast.success("Login Success!", {
        position: "bottom-right"
      })
    }
    else{
      toast.error(err, {
        position: "bottom-right"
      })
    }
  };

  const loginData = (value) => {
    dispatch(login(value, callbackAuth));
  }

  return (
    <>
    <div className="wrapper">      
      <div className="content">
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
          <div className="container">
            <div className="card login-card">
              <div className="card-body login-card-body">
                <div className="row">
                  <div className="col-md-7 left-side">
                    <div className="left-side-text-wrapper">
                      <p className="left-side-subtext">Welcome to</p>
                      <p className="left-side-text">PH Farming</p>
                    </div>                               
                    <img src={imgLogin} alt="login" className="login-card-img img-fluid"/>                                                           
                  </div>

                  <div className="col-md-5 right-side">
                    <div className="card-body">    
                      <div className="mt-2 mb-3">   
                        <p className="right-side-text">Login</p>
                        <p className="right-side-description mt-n3">Welcome! Please login to your account.</p>
                      </div>    
                      <hr/>
                      <Formik
                        initialValues={{
                          username: '',
                          password: ''
                        }}
                        onSubmit={loginData}
                      >
                      {({ handleSubmit, handleChange, values, touched, errors }) =>
                        <Form onSubmit={handleSubmit}>
                          <div className="material-textfield mt-4">
                            <Form.Control name="username" placeholder="" onChange={handleChange}/>
                            <label>Username</label>
                          </div>

                          <div className="material-textfield mt-3">
                            {/* <input placeholder=" " type="password"/> */}
                            <Form.Control name="password" type="password" placeholder="" onChange={handleChange}/>
                            <label>Password</label>
                          </div>
                                  
                          <div className="form-group mt-3">                   
                            <Button type="submit" className="btn btn-block">Login</Button>
                          </div>
                        </Form>
                      }
                      </Formik>
                      <div className="form-group text-center">                   
                        <small className="text-muted">Tip: Use your BMS Credentials</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>                
          </div>
        </main>
      </div>  
    </div>   
    <ToastContainer />
    </>  
  )
}

export default Login