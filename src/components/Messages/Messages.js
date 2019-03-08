import React from "react";
import { Segment } from "semantic-ui-react";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends React.Component {

  render() {

    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment>
          <div className="messages">
            Messages will be here
          </div>
        </Segment>

        <MessageForm />
      </React.Fragment>
    );
  }
}

export default Messages;
