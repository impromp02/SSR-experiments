import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  const authButton = props.auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div>
      <Link to='/'>SSR</Link>
      <div>
        <Link to={'/users'}>Users</Link>
        <Link to={'/admins'}>Admins</Link>
        {authButton}
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Header);