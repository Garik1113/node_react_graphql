import React from "react";
import "./App.css";
import logo from "./logo.jpeg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Missions from "./components/Missions";
import MissionDetails from "./components/MissionDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <img
              src={logo}
              style={{ width: "300px", display: "block", margin: "auto" }}
            />
            <h4 className='text-center'>Missions</h4>
          </div>
          <Route path='/' exact component={Missions} />
          <Route
            path='/missions/:mission_id'
            exact
            component={MissionDetails}
          />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
