import React, { Component } from 'react';
import { Header, Item, Input, Icon} from 'native-base';

export default class TopCompoent extends Component {
  onTextChange = (query) =>{
      this.props.emptyNewsList([])
      this.props.updateQuery(query, 1)
  }
  render() {
    return (
      <Header searchBar rounded hasSegment >
        <Item>
          <Input 
            placeholder="Search News" 
            onChangeText={(text) => this.onTextChange(text)}
          />
          <Icon name="md-paper" />
        </Item>
      </Header>
    );
  }
}