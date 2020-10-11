import React from 'react';

const Form = () => (
	<form className="form-inline">
	  <div className="form-group">
	    <label className="sr-only">Message</label>
	    <input type="text" className="form-control" id="msg" placeholder="write your message..." />
	  </div>
	  <button type="submit" className="btn btn-sm">
		  <i className="fas fa-paper-plane"></i>
	  </button>
	</form>
);

export default Form;