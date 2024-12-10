import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-12 m-auto'>
                    <img src='./assets/images/6333213.jpg' style={{width: "100%"}} />
                </div>
                <div className='col-lg-6 col-12 text-center m-auto mt-lg-0 mt-5'>
                    <h1 style={{ color: "#fd7e14" }}>Sign-Up</h1>
                    
                    <input type="text" placeholder="Enter Name" name="name" required />
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <input type="text" placeholder="Address" name="address" required />
                    <input type="password" placeholder="Enter Password" name="password" required />
                    <input type="password" placeholder="Repeat Password" name="repeat password" required />

                    <button className='sign-up-button'>Sign-Up</button>

                    <p className='py-2'> If you already have a account? <Link to='/login' style={{ color: "#fd7e14" }}>Login Now</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
