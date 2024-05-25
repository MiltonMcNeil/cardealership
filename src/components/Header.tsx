import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const signOutOnClick = () => {
    logout();
};

const signInOnClick = () => {
    loginWithRedirect();
};

  return (
    <div id="headerblock">
        <div id="navlinks">
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            {
              !isAuthenticated ? 
            
              <div>
                  <Link to='/dashboard'>Dashboard</Link>
              </div>
              :
              <div>
                  <Link to='/login' onClick={signOutOnClick}>Log Out</Link>
              </div>

            } 
        </div>
    </div>
  )
}

export default Header