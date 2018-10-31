import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index';
import RequireAuth from '../components/hocs/RequireAuth';

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    console.log(this.props.context)
    return (
    <div>
      <h3>List of Admins:</h3>
      <ul>
        {this.renderAdmins()}
      </ul>
    </div>
    );
  }
}

export function loadData(store) {
  return store.dispatch(fetchAdmins());
}

const mapStateToProps = ({admins}) => {
  return {
    admins
  };
};

export default connect(mapStateToProps, { fetchAdmins })(RequireAuth(AdminsListPage));