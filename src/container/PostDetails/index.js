import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Skeleton, Button } from 'antd';
import * as UserActions from '../../store/Users/actions';
import { objectComparison, arrayComparison } from '../../utils/comparisonModule';
import './style.css';

class PostDetails extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
        post:{},
        comments: [],
    };
  }

    componentDidMount() {
        this.props.UserActions.getPostDetails({ postId: this.props.match.params.postId });
    }

    componentDidUpdate(prevProps) {
        if (!objectComparison(prevProps.userReducer.postDetails, this.props.userReducer.postDetails)) {
            this.setState({ post: this.props.userReducer.postDetails });
        }

        if (!arrayComparison(prevProps.userReducer.comments, this.props.userReducer.comments)) {
            this.setState({ comments: this.props.userReducer.comments });
        }

        if (!prevProps.userReducer.deleteCommentFetchSuccess && this.props.userReducer.deleteCommentFetchSuccess) {
            this.props.history.push(`/post-list/${this.props.match.params.userId}`);
        }
    }
  
    render () {
        return (
            this.props.userReducer.isPostDetailsFetchLoading?
                <Skeleton 
                    className="details-skeleton"
                    loading={true}
                    active
                />
                : <div className='post-detail-container'>
                    <div style={{display: 'flex'}}>
                        <div className='comment-title'>{this.state.post.title}</div>
                        <Button 
                            type="text"
                            className='comment-delete-button'
                            onClick={() => {
                                this.props.UserActions.deleteComment({ postId: this.props.match.params.postId });
                            }}
                            danger
                        >
                            DELETE POST
                        </Button>
                    </div>
                    <div className='comment-body'>{this.state.post.body}</div>
                    {this.props.userReducer.areCommentsFetchLoading? 
                        <Skeleton 
                            className="details-skeleton"
                            loading={true}
                            active
                        />
                        :  this.state.comments.length>0?
                                this.state.comments.map(comment => {
                                    return  <div className='comment-container'>
                                        <div className='comment-name'>{comment.name}</div>
                                        <div className='comment-email'>{comment.email}</div>
                                        <div className='comment-body'>{comment.body}</div>
                                    </div>
                                })
                                : <div
                                    className='show-more-link'
                                    onClick={() =>{
                                        this.props.UserActions.getCommentList({ postId: this.props.match.params.postId });
                                    }}
                                >
                                    Show comments...
                                </div>
                    }
                </div>
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

export default  connect(mapStateToProps, mapDispatchToProps)(PostDetails);
