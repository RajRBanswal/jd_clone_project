import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
   
         <section class="bg-light py-3 py-md-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4" style={{position:"relative"}}>
                    <div class="card border border-light-subtle rounded-3 shadow-sm">
                          
                      <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="text-center mb-3">
                          <a href="#!">
                            <img src="assets\images\logo.png" alt="BootstrapBrain Logo" width="108" height="103"/>
                          </a>
                        </div>
                        <h2 class="fs-6 fw-normal text-center text-secondary mb-4">create your account</h2>
                        <form action="#!">
                          <div class="row gy-2 overflow-hidden">
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="name" id="name" value="" placeholder="Enter Your Name" required/>
                                <label for="text" class="form-label">Enter Your Name</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="email" id="number" placeholder="Enter Your Mobile Number" required/>
                                <label for="text" class="form-label">Enter Your mobile Number</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="email" id="number" placeholder="Enter Your mail" required/>
                                <label for="text" class="form-label">Enter Your mail</label>
                              </div>
                            </div>
                            
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required/>
                                <label for="password" class="form-label">Password</label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="d-flex gap-2 justify-content-between">
                                <div class="form-check">
                                </div>
                                <a href="#!" class="link-primary text-decoration-none">Forgot password?</a>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="d-grid my-3">
                                <button class="btn btn-primary btn-lg" type="submit">Log in</button>
                              </div>
                            </div>
                            <div class="col-12">
                              <p class="m-0 text-secondary text-center">i have a already account? <Link to="/Login" class="link-primary text-decoration-none">Login</Link></p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </section>
    )
}

export default Signup
