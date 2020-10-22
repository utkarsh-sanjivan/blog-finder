import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as UserActions from '../../store/Users/actions';
import { arrayComparison } from '../../utils/comparisonModule';
import TableDetails from '../../component/TableDetails';
import './style.css';

class PostPage extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount () {
    this.props.UserActions.getPostList({ userId: this.props.match.params.userId, skip: 0, reset: true });
  }

  componentDidUpdate(prevProps) {
    if (!arrayComparison(prevProps.userReducer.posts, this.props.userReducer.posts) && this.props.userReducer.posts.length>0) {
      this.setState({ 
        posts: this.props.userReducer.posts 
      }, () => {
        if (this.state.posts.length<=10*this.props.userReducer.pageNumber) this.props.UserActions.getPostList({ 
          userId: this.props.match.params.userId,
          skip: this.state.posts.length,
          reset: false
        });
      });
    }
  }
  
  render () {
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (value, record) => (
          <span
            className='blog-name'
            onClick={() => {
              this.props.history.push(`/post-detail/${this.props.match.params.userId}/${record.id}`);
            }}
          >
            {record.title}
          </span>
        ),
      },
      {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
      }
    ];
    return (
      <TableDetails 
        columns={columns}
        loading={this.props.userReducer.arePostsFetchLoading}
        dataSource={this.state.posts}
        onChange={this.onHandleChangeTable}
        pagination={{  
          position:  ['bottomCenter'],
          defaultPageSize: 10,
          current: this.props.userReducer.pageNumber,
          showSizeChanger: false,
        }}
      />
    );
  }

  onHandleChangeTable = (pagination, filters, sorter) => {
    if (Object.keys(pagination).length>0) {
      this.props.UserActions.setPageNumber(pagination.current);
      if (10*pagination.current ===this.state.posts.length) this.props.UserActions.getPostList({ userId: this.props.match.params.userId, skip: this.state.posts.length, reset: false });
    };
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

export default  connect(mapStateToProps, mapDispatchToProps)(PostPage);
