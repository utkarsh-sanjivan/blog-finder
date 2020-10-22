import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as UserActions from '../../store/Users/actions';
import TableDetails from '../../component/TableDetails';
import './style.css';

class HomePage extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount () {
    this.props.UserActions.getUserList();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.userReducer.users) !== JSON.stringify(this.props.userReducer.users)) {
      this.setState({ users: this.props.userReducer.users });
    }
  }
  
  render () {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Company Name',
      key: 'company-name',
      render: (value, record) => (
        <div>
          <div>{record.company.name}</div>
        </div>
      ),
    }, {
      title: '',
      dataIndex: 'link',
      key: 'name',
      render: (value, record) => (
        <div
          className='blog-link'
          onClick={() => {
            this.props.history.push(`/post-list/${record.id}`);
          }}
        >
          Blog Posts...
        </div>
      ),
    }];

    return (
      <TableDetails 
        columns={columns}
        dataSource={this.state.users}
        loading={this.props.userReducer.isUserFetchLoading}
      />
    );
  }
}

const mapStateToProps = ( store ) => ({
    userReducer: store.userReducer,
});

function mapDispatchToProps(dispatch) {
    return {
      UserActions: bindActionCreators(UserActions, dispatch),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(HomePage);
