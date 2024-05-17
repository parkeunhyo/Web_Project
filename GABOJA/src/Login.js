import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      alert('로그인 성공');
    } else {
      setError('잘못된 사용자명 또는 비밀번호입니다.');
    }
  };

  return (
    <div className="login-container form-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">ID</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요."
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="패스워드를 입력하세요."
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="button-group">
          <button type="submit">LOGIN</button>
          <button type="button" onClick={() => alert('회원가입 페이지로 이동합니다.')}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
