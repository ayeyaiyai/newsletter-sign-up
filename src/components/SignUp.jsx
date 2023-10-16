import '../styles/SignUp.css';
import backgroundImage from '../images/illustration-sign-up-desktop.svg';
import successCheckmark from '../images/icon-success.svg';
import { useState } from 'react';

function SignUp() {
    // Declaring States
    const [userEmail, setUserEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [successfulEntry, setSuccessfulEntry] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (!userEmail) {
            setEmailError(true);
        } else {
            // Reset the error states when a valid email is submitted.
            setEmailError(false);
            
            // Check email format
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(userEmail)) {
                setEmailError(true);
            } else {
                setEmailError(false);
                setUserEmail('');
                setSuccessfulEntry(true);
            }
        }
    }

    function handleInputChange(event) {
        setUserEmail(event.target.value);
    }

    return (
        <div className='container'>
            {successfulEntry ? 
            (   <div className='success-message-container'>
                    <div className='success-icon'><img src={successCheckmark} className='success-icon-image'/></div>
                    <div className='success-title'>Thanks for subscribing!</div>
                </div>
            ) : (
                <div className="sign-up-container">
                <div className='sign-up-left'>
                    <div className='sign-up-title'>Stay updated!</div>
                    <div className='sign-up-subtitle'>Join 60,000+ product managers receiving monthly updates on:</div>
                    <div className='check-list'>
                        <div className='check-list-item'>
                            <div className='checkmark'></div>
                            <div className='check-list-text'>Product discovery and building what matters</div>
                        </div>
                        <div className='check-list-item'>
                            <div className='checkmark'></div>
                            <div className='check-list-text'>Measuring to ensure updates are a success</div>
                        </div>
                        <div className='check-list-item'>
                            <div className='checkmark'></div>
                            <div className='check-list-text'>And much more!</div>
                        </div>
                    </div>
                    <div className='email-section-header'>
                        <div className='email-header-left'>Email address</div>
                        <div className={`email-header-right ${emailError ? 'visible' : ''}`}>Valid email required</div>
                    </div>
                    <form className='email-form' onSubmit={handleSubmit}>
                        <input 
                        className={`email-address ${emailError ? 'email-address-error' : ''}`}
                        placeholder='email@company.com'
                        value={userEmail}
                        onChange={handleInputChange}>
                        </input>
                        <button className='confirm-button'>Subscribe to monthly newsletter</button>
                    </form>
                </div>
                <div className='sign-up-right'>
                    <div className='sign-up-image'><img src={backgroundImage} className='image-background' /></div>
                </div>
            </div>
            )}
  
        </div>
    )
}

export default SignUp;