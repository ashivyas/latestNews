import React, { Component } from "react";
import { Card, CardItem, Text, Icon, Left, Body, Right } from "native-base";
import {
  Image,
  Linking,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import moment from "moment-timezone";

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.news_data;

    return (
      <TouchableWithoutFeedback onPress={() => Linking.openURL(data.url)}>
        <Card key={this.props.key}>
          <CardItem style={styles.cardMainItemStyle} cardBody>
            <Image
              resizeMode={"cover"}
              source={{ uri: data.urlToImage }}
              style={styles.imageStyle}
            />
          </CardItem>
          <CardItem style={styles.cardItemStyle}>
            <Left>
              <Text style={styles.titleSyle}>{data.title}</Text>
            </Left>
          </CardItem>
          <CardItem style={styles.cardItemPaddingStyle}>
            <Left>
              <Text style={styles.newsDescStyle}>{data.description}</Text>
            </Left>
          </CardItem>
          <CardItem
            cardBody
            style={styles.cardBodyStyle}
            key={data["id"] + "detail"}
          >
            <Left>
              {data.author && (
                <Text style={styles.msgStyle}>{" " + data.author}</Text>
              )}
            </Left>
            <Body />
            <Right>
              <Text style={styles.msgStyle}>
                {"  " + moment(data.publishedAt).fromNow()}
              </Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

let styles = {
  msgStyle: {
    fontSize: 10,
    color: "#a7a7a7",
    fontFamily: "gsr"
  },
  cardBodyStyle: {
    backgroundColor: "#F5F5F5",
    paddingLeft: 0,
    paddingRight: 5,
    height: 30
  },
  newsDescStyle: {
    fontSize: 12,
    fontFamily: "gsr"
  },
  titleSyle: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "gsr"
  },
  cardItemStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 5
  },
  imageStyle: {
    height: 200,
    width: null,
    flex: 1
  },
  cardMainItemStyle: {
    width: "100%",
    flex: 0
  },
  cardItemPaddingStyle: {
    paddingLeft: 0,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 5
  }
};
