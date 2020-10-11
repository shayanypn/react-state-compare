import React from 'react';
import Messages from '../Messages';
import Form from '../Form';

const ChatBox = () => (
	<div className="card">
	  <div className="card-header">
	    Featured
	  </div>
	  <div className="card-body">
			<Messages />
	  </div>
	  <div className="card-footer text-muted">
			<Form />
	  </div>
	</div>
);

export default ChatBox;