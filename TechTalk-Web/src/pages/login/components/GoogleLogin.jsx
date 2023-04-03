import { useEffect } from 'react';
import googleLogin from '../../../service/googleLogin.js';

export default function GoogleSingIn() {
  const handleCredentialResponse = async (response) => {
    const { credential } = response;
    const resp = await googleLogin(credential);
    console.log(resp);
  };
  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        {
          theme: 'outline',
          size: 'medium',
          width: '250px',
          shape: 'circle',
          padding: '10px 25px',
          border: '1px solid black',
        }, // customization attributes
      );
    };
    return () => {
      google.accounts.id.disableAutoSelect();
    };
  }, []);

  return (
    <div
      style={{
        margin: '0 0 50px 0',
        border: '1px solid black',
        borderRadius: '15px',
      }}
      id='buttonDiv'
    ></div>
  );
}
