import React, { Component } from "react";
import { Content, Spinner, Text } from "native-base";

export default class Loading extends Component {
  render() {
    return (
      <Content contentContainerStyle={styles.mainContentContainerStyle}>
        <Spinner color={"#F00"} />
        <Text style={styles.msgStyle}>Please wait...</Text>
      </Content>
    );
  }
}

let styles = {
  msgStyle: {
    color: "#F00",
    fontFamily: "gsr"
  },
  mainContentContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
