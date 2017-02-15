import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component
{
  render()
  {
    return(
      // const handleSubmit = this.props.handleSubmit
      // const title = this.props.fields.title
      const { fields: {title, categories, content}, handleSubmit } = this.props;

      <form onSubmit = { handleSubmit }>
        <h3>Add a new Post</h3>
        <div className="form-group">
          <label>Title</label>
          /* destructuring the title object so that 'onChange' and more show up in the input as a property*/
          <input type='text' className='form-control' {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className='form-control' {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}


// connect: 1st is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is config object, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm(
  {
    form:'PostsNewForm'
    fields: ['title', 'categories', 'content']
  }
)(PostsNew);
