import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {
  const islogin=useSelector(store=>store.authentication.isAuthenticated);
  const dispatch=useDispatch()

  const handleLogout=()=>{
     dispatch(authActions.Logout(false))
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {islogin&&<a href='/'>My Products</a>}
          </li>
          <li>
            {islogin&&<a href='/'>My Sales</a>}
          </li>
          <li>
            {islogin&&<button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
