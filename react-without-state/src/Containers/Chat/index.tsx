import React from 'react';
import Contacts from '../../Components/Contacts';
import Search from '../../Components/Search';
import ChatBox from '../../Components/ChatBox';

const Chat = () => (
  <main className="container">
    <section className="row">
      <div className="col-sm-4 col-lg-2 pr-0">
        <aside>
          <Search />
          <Contacts />
        </aside>
      </div>
      <div className="col-sm-8 col-lg-10 pl-0">
        <ChatBox />
      </div>
    </section>
  </main>
);

export default Chat;
