import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

export default class NewsItem extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      urlToImage,
      url,
      author
    } = this.props.newsItem;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = publishedAt;
   
    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage 
          }}
        >
          <Text style={{ marginBottom: 10, fontFamily: "GoogleSans Regular",fontSize: 13 }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#ffffff' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{author}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 10,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
    fontFamily: "GoogleSans Regular"
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    fontFamily: "GoogleSans Regular",
    fontSize: 22
  }, 
  news: {
     marginBottom: 10,
     fontFamily: "GoogleSans Regular",
     fontSize: 10
  }
};