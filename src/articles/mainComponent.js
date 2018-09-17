import React, {Component} from 'react';
import {View,StatusBar,FlatList} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import News from '../../component/news.js';
import Header from '../../component/top.js';

export const containerStyle = (data) => {
  if (data !== undefined && data.length > 0){
    return {}
  }else{
    return {flex: 1, justifyContent: 'center',alignItems: 'center'}
  }
}

export const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 10;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
}

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updatePage(1)
  }

  setPagination(){
    if (this.props.pagination){
      this.props.updatePagination(false)
      this.props.updatePage(this.props.page+1)
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
        </View>
          <Content
            contentContainerStyle = {containerStyle(this.props.news)}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent) && this.props.news.length > 0) {
                this.setPagination()
              }
            }}
          >
          <StatusBar />
            <FlatList
              data={this.props.news}
              keyExtractor={(item, index) => item.id}
              renderItem={(item, index) => {
                return (<News key={index} news_data={item.item}/>)
              }}
            />
          }
          {(!this.props.pagination && this.props.news.length > 0) ? <Spinner /> : null}
          </Content>}
      </Container>
    );
  }
}