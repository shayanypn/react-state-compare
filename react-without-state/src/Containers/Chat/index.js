import React from 'react';

function Chat() {
  return (
    <main className="container">
      <section className="row">
      	<div className="col-2 pr-0">
      		<aside>
	      		<form className="form-inline pr-3">
						  <div className="form-group">
						    <label for="query" className="sr-only">query</label>
						    <input type="text" className="form-control" id="query" placeholder="write your query..." />
						  </div>
						</form>
						<ul className="list-group list-group-flush">
						  <li className="list-group-item">
						  	<img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-2 rounded-circle" alt="user" />
						  	<label class="badge active">&nbsp;</label>
						  	Cras justo odio
						  </li>
						  <li className="list-group-item">
						  	<img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-2 rounded-circle" alt="user" />
						  	<label class="badge active">&nbsp;</label>
						  	Dapibus ac facilisis in
						  </li>
						  <li className="list-group-item active">
						  	<img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-2 rounded-circle" alt="user" />
						  	<label class="badge active">&nbsp;</label>
						  	Morbi leo risus
						  </li>
						  <li className="list-group-item">
						  	<img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-2 rounded-circle" alt="user" />
						  	<label class="badge">&nbsp;</label>
						  	Porta ac consectetur
						  </li>
						  <li className="list-group-item">
						  	<img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-2 rounded-circle" alt="user" />
						  	<label class="badge">&nbsp;</label>
						  	Vestibulum at eros
						  </li>
						</ul>
      		</aside>
      	</div>
      	<div className="col-10 pl-0">
					<div className="card">
					  <div className="card-header">
					    Featured
					  </div>
					  <div className="card-body">
							<article>
								<ul className="list-unstyled">
								  <li className="media mb-4">
								    <img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-3 rounded-circle" alt="user" />
								    <div className="media-body">
								      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								      <time>11:56 AM</time>
								    </div>
								  </li>
								  <li className="media mb-4">
								    <img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-3 rounded-circle" alt="user" />
								    <div className="media-body">
								      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								      <time>11:56 AM</time>
								    </div>
								  </li>
								  <li className="media mb-4">
								    <img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="mr-3 rounded-circle" alt="user" />
								    <div className="media-body">
								      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								      <time>11:56 AM</time>
								    </div>
								  </li>
								  <li className="media mb-4">
									  <div className="media-body media-body--purple">
									    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									    <time>11:56 AM</time>
									  </div>
									  <img src="https://dummyimage.com/32x32/dddddd/000000&text=A" className="ml-3 rounded-circle" alt="user" />
									</li>
								</ul>
							</article>
					  </div>
					  <div className="card-footer text-muted">
							<form className="form-inline">
							  <div className="form-group">
							    <label for="msg" className="sr-only">Message</label>
							    <input type="text" className="form-control" id="msg" placeholder="write your message..." />
							  </div>
							  <button type="submit" className="btn btn-sm">
								  <i class="fas fa-paper-plane"></i>
							  </button>
							</form>
					  </div>
					</div>
      	</div>
      </section>
    </main>
  );
}

export default Chat;
