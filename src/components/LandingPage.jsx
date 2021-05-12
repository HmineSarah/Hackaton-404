import React from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.css';

function LandingPage() {
    const history = useHistory();
    return (
        <>
        <div className="page">
        <div className="title-index">
           <h1>Your Are Not Alone, <br>
           </br>Love Is Waiting You !</h1> 
        </div>
        <div className="ph">
            <p>
            On ROBOT X, you’re more than just a photo. <br></br>You have stories to tell, and passions to share, and things to talk about that are more interesting than the weather. Get noticed for who you are, not what you look like. Because you deserve what dating deserves: better.
           </p>
            </div>
            <div className="btn-index">
                <a href="/" id="button-link">
            <button onClick={() => history.push('/search') } change path className="button">
                  Get Started !
              </button>
                
                </a>
            </div>
        </div>
        </>
    )
}

export default LandingPage;
