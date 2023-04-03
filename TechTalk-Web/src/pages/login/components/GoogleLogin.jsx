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
        { theme: 'outline', size: 'large', logo_alignment: 'center' }, // customization attributes
      );
    };
    return () => {
      google.accounts.id.disableAutoSelect();
    };
  }, []);

  return <div id='buttonDiv'></div>;
}
