import './signin.scss';
import { SlSocialLinkedin, SlSocialGoogle, SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import image from '../../assets/images/image.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  const submitForm = () => {
      navigate('/home');
  }

  return (
    <div className='sign-in-wrapper'>
        <div className='sign-in-section'>
            <div className='content'>
                <div className='heading'>
                    <h2>Sign In</h2>
                     <div><span>New user?</span> <Link to="#">Create an account</Link></div>
                </div>

                <form onSubmit={submitForm}>
                    <input type="text"  placeholder='Username or email'/>
                    <input type="password"  placeholder='Password'/>
                    <div className='keep-signed'>
                        <div>
                            <input type="checkbox" id="c1" checked={checked} onChange={() => setChecked(!checked)}/>
                            <label for="c1"></label>
                        </div>
                        <span>Keep me signed in</span>
                    </div>
                    <button type="submit">Sign In</button>
                </form>

                <div className='links'>
                    <div className="heading">
                        <div> Or Sign In with</div>
                    </div>
                    <div className='link-items'>
                        <span>
                            <SlSocialLinkedin className='item' />
                        </span>
                        <span>
                            <SlSocialGoogle className='item' />
                        </span>
                        <span>
                           <SlSocialFacebook className='item' />
                        </span>
                        <span>
                           <SlSocialTwitter  className='item' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='img-section'>
             <img src={image} alt="image with key"/>
        </div>
    </div>
  )
}

export default Login;