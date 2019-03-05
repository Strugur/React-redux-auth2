import React, {useState,useEffect} from 'react'

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reg} from '../_actions/authAction';

const Register=props=> {
    const [username,setUserName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [passwordConf,setPasswordConf] = useState(null);
    const [errAll,setErrAll] = useState(null);
    const [errPass,setErrPass] = useState(null);
        
         if (props.userExists == false){
            window.location.href="/login"
        }else if (props.isAuth == true){
            window.location.href="/profile"
        }
        
    
    
    const handleUsername = (e)=>{
        setUserName(e.target.value);
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const handlePasswordConf = (e)=>{
        setPasswordConf(e.target.value);
    }

   


    const register =   ()=>{
        if(username && email && password && passwordConf){
            setErrAll(false);
            if(password == passwordConf){
                 props.reg(username,email,password);
                
                
            }else{
                setErrPass(true);
            }
        }else{
            setErrAll(true);
           
        }
    }
        return (
            <div className="reg-container">
           
            <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                            {errAll? <div className="alert alert-danger" role="alert" id="alert"> All fielld must be field</div>: null}
                            {errPass? <div className="alert alert-danger" role="alert" id="alert"> Passwords doesn't match</div>: null}
                            {props.userExists? <div className="alert alert-danger" role="alert" id="alert"> User already exists</div>:null}
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>
                                    <div className="col-md-6">
                                        <input 
                                        type="text"  
                                        className="form-control" 
                                        name="username"
                                        onChange={handleUsername}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div className="col-md-6">
                                        <input 
                                        type="text"  
                                        className="form-control"
                                        name="email"
                                        onChange={handleEmail}
                                         />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input 
                                        type="password" 
                                        id="password" 
                                        className="form-control" 
                                        name="password"
                                        onChange={handlePassword}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="passwordConf" className="col-md-4 col-form-label text-md-right">Password confirmation</label>
                                    <div className="col-md-6">
                                        <input 
                                        type="password" 
                                        id="passwordConf" 
                                        className="form-control"
                                        onChange={handlePasswordConf}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 offset-md-4">
                                    <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    onClick={register}
                                    >

                                        Register
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            

            
            
            </div>

        )
    
}
Register.propTypes = {
    reg: PropTypes.func.isRequired,
   
};

const mapDispatchToProps = ({
    reg: (username,email,password) => reg(username,email,password)
})
const mapStateToProps = state => ({
    userExists: state.auth.userExists,
    isAuth:state.auth.isAuth
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);