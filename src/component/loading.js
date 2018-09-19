import React,{Component} from 'react';
import {
  Content, 
  Spinner,
  Text
} from 'native-base';

export default class Loading extends Component {
  render() {
    return (
        <Content contentContainerStyle={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
          <Spinner color= {"#F00"}/>
          <Text style={{color: "#F00"}}>Please wait...</Text>
        </Content>
    );
  }
}