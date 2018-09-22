import React, { Component } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { Container, Content, Spinner } from "native-base";
import { containerStyle, isCloseToBottom } from "../config/Helper.js";
import Loading from "../component/Loading.js";
import NoFeed from "../component/NoFeed.js";
import News from "../component/News.js";
import Header from "../component/Top.js";
import Filter from "../component/Filter.js";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateLoading(true);
    this.props.updatePage(1);
    this.props.fetchSourceList();
  }

  setPagination() {
    if (this.props.pagination) {
      this.props.updatePagination(false);
      this.props.updatePage(this.props.page + 1);
    }
  }

  render() {
    return (
      <Container>
        <View>
          <Header
            updateQuery={this.props.updateQuery}
            emptyNewsList={this.props.emptyNewsList}
          />
          <Filter
            source={this.props.source}
            updateSource={this.props.updateSource}
            emptyNewsList={this.props.emptyNewsList}
          />
        </View>
        {this.props.loading && this.props.news.length < 1 ? (
          <Loading />
        ) : (
          <Content
            contentContainerStyle={containerStyle(this.props.news)}
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent) && this.props.news.length > 0) {
                this.setPagination();
              }
            }}
          >
            <StatusBar backgroundColor={"#F00"} />
            {this.props.news !== undefined && this.props.news.length > 0 ? (
              <FlatList
                data={this.props.news}
                keyExtractor={(item, index) => item.id}
                renderItem={(item, index) => {
                  return <News key={index} news_data={item.item} />;
                }}
              />
            ) : (
              <NoFeed message="Fetching data..." />
            )}
            {!this.props.pagination && this.props.news.length > 0 ? (
              <Spinner />
            ) : null}
          </Content>
        )}
      </Container>
    );
  }
}
