import { React, useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import './facebook.css';



function Facebook() {
    const [login, setLogin] = useState();
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");
  
    const responseFacebook = (response) => {
      console.log(response);
      // Login failed
      if (response.status === "unknown") {
        alert("Login failed!");
        setLogin(false);
        return false;
      }
      setData(response);
      setPicture(response.picture.data.url);
      if (response.accessToken) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    };
    const logout = () => {
      setLogin(false);
      setData({});
      setPicture("");
    };
  
    return (
      <div className="container">
        {!login && (
          <FacebookLogin
            appId="1120967545199245"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile,email,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"
          />
        )}
  
        {login && (
          <div className="card">
            <div className="card-body">
              <img className="rounded" src={picture} alt="Profile" />
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">Email ID: {data.email}</p>
              <a href="http://localhost:3000" className="btn" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
export default Facebook;