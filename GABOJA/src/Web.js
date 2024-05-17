import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Web.css';

function Web() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="Web">
      <header className="Web-header">
        {/*<div className="logo">GABOJA</div>*/}
        <div className="nav-buttons">
          <button onClick={() => setShowSignup(false)}>LOGIN</button>
          <button onClick={() => setShowSignup(true)}>SIGN UP</button>
        </div>
      </header>
      <main>
        {showSignup ? <Signup /> : <Login />}
      </main>
    </div>
  );
}

export default Web;
