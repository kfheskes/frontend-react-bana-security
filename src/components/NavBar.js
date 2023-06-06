import React, {useState} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate,Link } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null)
// function handleClick() {
//   login();
//   navigate ();
//   }
//
//   function logIn(){
//
//   }
//
//   function logOut {
//
//   }

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
          onClick={() => navigate('/signin')}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
      </div>
    </nav>
  );
}

export default NavBar;