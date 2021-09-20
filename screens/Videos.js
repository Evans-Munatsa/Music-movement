import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import VideoListItem from '../components/VideoListItem/Index'
import videos from '../assets/data/videos.json';


export default function Videos() {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item}) => <VideoListItem video={item} />}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});