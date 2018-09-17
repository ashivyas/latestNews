import React,{Component} from 'react';
import {
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { 
  Image, 
  Linking,
  TouchableWithoutFeedback 
} from 'react-native';
import moment from 'moment-timezone';

export default class Feed extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const data = this.props.feed_data;
    return (
      <TouchableWithoutFeedback onPress={ () => Linking.openURL(data.url) }>
        <Card key={this.props.key} >
          <CardItem style={{ width: "100%", flex: 0 }} cardBody>
            <Image resizeMode = {'cover'} source={{uri: data.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem 
            style={{paddingLeft: 0, paddingRight: 0, paddingTop:5}}
          > 
            <Left>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {data.title}
              </Text>
            </Left>
          </CardItem>
          <CardItem 
            style={{paddingLeft: 0, paddingRight: 5, paddingTop:0, paddingBottom: 5}}
          >
            <Left>
              <Text style={{fontSize: 12, fontFamily: 'OpenSans'}}>
                {data.description}
              </Text>
            </Left>
          </CardItem>
          <CardItem cardBody
            style={{backgroundColor: '#F5F5F5', paddingLeft: 0, paddingRight: 5, height: 30}} key={data["id"]+'detail'}
          >
            <Left >
              {data.author && <Text style={{fontSize: 10, color: '#a7a7a7'}}>
                {" "+data.author}
              </Text>}
            </Left>
            <Body/>
            <Right>
              <Text style={{fontSize: 10, color: '#a7a7a7'}}>
                <Icon name="md-time" style={{fontSize: 10, color: '#a7a7a7'}}/>
                 {" "+moment(data.publishedAt).fromNow()}
              </Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}