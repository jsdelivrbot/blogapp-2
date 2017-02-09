import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component
{
  // This is only called once when it is to be rendered to the DOM for the first time
  componentWillMount()
  {
    this.props.fetchPosts();
  }
  render()
  {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add new Post
          </Link>
        </div>
        <div>List of Blogtposts</div>
      </div>
    );
  }
}


export default connect(null, { fetchPosts })(PostsIndex);
