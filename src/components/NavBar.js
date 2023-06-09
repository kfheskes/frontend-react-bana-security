import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate,Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";




function NavBar() {
  const navigate = useNavigate();

  const {isAuth, login, logout} = useContext(AuthContext)
  console.log(isAuth)

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        <button
          type="button"
          onClick={ isAuth ? logout : login}
        >
          { isAuth ? "logout" : "login"}
        </button>
        <button
          type="button"
          onClick={ () => navigate('/signup') }
        >
          Registeren
        </button>
      </div>
    </nav>
  );
}

export default NavBar;