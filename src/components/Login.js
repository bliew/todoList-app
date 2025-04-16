import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      toast.success('Login Successful');
      onLogin();
    } else {
      toast.error('Incorrect username/password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
