import React from 'react';
import {FlatList} from 'react-native';
import TagButton from './TagButton';


export default ({tags}) => {
  return (
    <>
      <FlatList
        style={{flexDirection: 'row', flexWrap: 'wrap'}}
        horizontal
        scrollEnabled={false}
        data={tags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          if (index === 0) {
            return <TagButton first tag={item}/>;
          }
          return <TagButton tag={item}/>;
        }}/>
    </>
  );
};
