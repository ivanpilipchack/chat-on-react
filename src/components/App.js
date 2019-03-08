import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";

const App = () => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <SidePanel />

    <Grid.Column style={{ marginLeft: 257 }}>
      <Messages />
    </Grid.Column>
  </Grid>
);

export default App;