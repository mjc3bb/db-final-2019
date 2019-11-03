import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const cardStyle = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    borderRadius: 15,
    alignSelf: 'baseline',
    marginHorizontal: 3,
    paddingVertical: 4,
  },
  first:{
    marginLeft: 0
  },
  title:{
    fontSize: 12
  }
});

export default ({tag, first = false}) => {
  let style = [cardStyle.button];
  if (first) style.push(cardStyle.first);
  return <Button buttonStyle={[style]} titleStyle={cardStyle.title} title={tag.tagName}/>;
}
