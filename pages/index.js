import React from "react";
import Head from "next/head";

import Bottombar from "../components/BottomBar";
import ViewFragments from "../components/Fragments";

export default class Home extends React.Component {
  static async getInitialProps({ apolloClient, query, res }) {
    const id = query.id;
    const page = query.v;
    return { page };
  }

  constructor(props) {
    super(props);
    console.log(this.props.page);
    this.state = {
      itemDrawerIndex: parseInt(this.props.page),
    };
  }
  stateBottombar = (item) => {
    this.setState({ itemDrawerIndex: item });
  };

  render() {
    return (
      <div style={{ position: "relative", display: "flex", height: "100vh" }}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 69,
            top: 0,
            maxHeight: "89vh",
            overflowX: "hidden",
          }}
        >
          <ViewFragments i={this.state.itemDrawerIndex} />
        </div>

        <Bottombar
          item={this.state.itemDrawerIndex}
          callBack={this.stateBottombar.bind(this)}
        />
      </div>
    );
  }
}
