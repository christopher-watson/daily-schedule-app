/* global google */
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'

/**
 * Google Auth Component
 * 
 * Used to manage user credentials
 * 
 * @returns User credentials {First & Last Name, Email Add}
 */

function GoogleAuth() {
   const [user, setUser] = useState({});


   // call back from Google Auth API
   const handleCallbackResponse = (response) => {
      const userObject = jwtDecode(response.credential);
      setUser({
         firstName: userObject.given_name,
         lastName: userObject.family_name,
         email: userObject.email
      })
   };

   // Initialize Google API Application
   // and generate Sign in Button
   useEffect(() => {
      google.accounts.id.initialize({
         client_id: process.env.REACT_APP_CLIENT_ID,
         callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
         document.getElementById("google-button"),
         { theme: "outline", size: "large" }
      );
   }, []);

   useEffect(() => {
      console.log('user', user);
   }, [user]);


   return (
      <div className="GoogleAuth">
         <div id="google-button"></div>
      </div>
   );
}

export default GoogleAuth;
