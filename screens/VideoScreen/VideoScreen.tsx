import * as React from 'react';
import { StyleSheet,Text, View, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import video from '../../assets/data/video.json';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem/Index';
import videos from '../../assets/data/videos.json';


import VideoPlayer from '../../components/VideoPlayer';

import BottomSheet from '@gorhom/bottom-sheet';



const VideoScreen = () => {

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'm'
  } else if (video.views / 1000) {
    viewsString = (video.views / 1000).toFixed(1) + 'k'    
  }

  return (
      <View style={{flex: 1}}>
          {/* Video Player */}
          <VideoPlayer videoURI = {video.videoUrl} thumbnailURI={video.thumbnail}/>
          {/* <Image style={styles.videoPlayer} source={{uri: video.thumbnail}} /> */}

          {/* Video info */}
          <View style={styles.videoInfoContainer}>
            <Text style={styles.tags}>{video.tags}</Text>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.subtitle}>{video.user.name} - {viewsString} - {video.createdAt}</Text>
          </View>

          {/* Action List */}
          <View style={styles.actionListContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.actionListItem}>
                <AntDesign name="like1" size={30} color="black" />
                <Text style={styles.actionText}> {video.likes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="dislike2" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="export" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>

              <View style={styles.actionListItem}>
                <AntDesign name="download" size={30} color="black" />
                <Text style={styles.actionText}> {video.dislikes}</Text>
              </View>
            </ScrollView>
          </View>
          {/* User info */}
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, borderColor: '#3d3d3d'}}>
            <Image style={styles.avatar} source={{ uri: video.user.image }} />

            <View style={{marginHorizontal:10, flex:1}}>
              <Text style={{color: 'grey', fontSize: 16, fontWeight: 'bold' }}>{video.user.name}</Text>
              <Text style={{color: 'lightgrey', fontSize: 16 }}>{video.user.subscribers} subscribers</Text>
            </View>

            <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10 }}>Subscribe</Text>
          </View>

          {/* Comments */}
          <View style={{padding: 10, marginVertical: 10}}>
            <Text style={{color: 'black'}}>Comments 333 </Text>
            {/* Comments Component */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
              <Image style={{width: 35, height: 35, borderRadius: 20, }} source={{ uri: video.user.image }} />
              <Text style={{color: 'grey', marginLeft: 10, }}>This is the Youtube Clone done in React native by Evans from Cape Town, South Africa</Text>
            </View>

            {/* All comments section */}

          </View>

          {/* Recomended Videos */}
          <BottomSheet>
            <Text> Hello</Text>
          </BottomSheet>
         
      </View>
  );
}

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

      <FlatList
        data={videos}
        renderItem={({ item}) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      /> 
    </SafeAreaView>
  )
}

export default VideoScreenWithRecommendation;