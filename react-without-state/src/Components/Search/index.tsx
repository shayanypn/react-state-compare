import React from 'react';

const Search = () => (
	<form className="form-inline pr-3">
	  <div className="form-group">
	    <label className="sr-only">query</label>
	    <input type="text" className="form-control" id="query" placeholder="write your query..." />
	  </div>
	</form>
);

export default Search;