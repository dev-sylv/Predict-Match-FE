import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const GoogleSignIn: React.FC = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // Handle the Google Sign-In response
    if ("profileObj" in response) {
      const { profileObj } = response;
      const { email, name, imageUrl } = profileObj;
      // Send the user information to your sign-up logic
    }
  };

  return (
    <GoogleLogin
      clientId="107147686297-1bcekc77dc2bh1290basn3m5qslgd793.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignIn;
