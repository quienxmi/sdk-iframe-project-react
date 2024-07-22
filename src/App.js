import './App.css';
import React, { useEffect, useState } from 'react';

import QxmIframeProject from '@quienxmi/sdk-iframe-project';

function App() {
  const [token, setToken] = useState('');
  const [iFrameProject, setIFrameProject] = useState(null);

  useEffect(() => {
    return () => {
      const project = new QxmIframeProject('#iframeTestModule', {
        logs: true
      });

      project.error((res) => {
        console.log('error:', res);
        alert(res.message);
      });

      project.modals((res) => {
        console.log('Modal message:', res);
      });

      setIFrameProject(project);
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    iFrameProject.setToken(token).then((decodedToken) => {
      console.log('Decoded token: ', decodedToken);
    });
  };

  return (
    <>
      <div className='container'>
        <form id="formInput" className='form' onSubmit={handleSubmit}>
            <img src="./logo.svg" alt="Logo Qxm" height="60"></img>
            <small className="legend">To use this module, you need to have a backend implementation and the appropriate
                access credentials.</small>
            <textarea 
              id="input"
              type="text"
              placeholder="Enter the generated token"
              minLength="100"
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
            ></textarea>
            <button id="submitButton" type="submit" disabled={token.length < 100}>Cargar modulo</button>
        </form>
      </div>
      <div className="content-iframe">
        <iframe id="iframeTestModule" height="500" width="100%" style={{margin:'20px 0',padding:'0 20px'}}></iframe>
      </div>
    </>
  );
}

export default App;
