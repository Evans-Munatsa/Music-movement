import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
// import console = require('console');

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image: string;
    }
  }
}

export default function VideoListItem(props: VideoListItemProps) {

  const {video} = props;
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'm'
  } else if (video.views / 1000) {
    viewsString = (video.views / 1000).toFixed(1) + 'k'    
  }


  return (

    <View style={styles.videoCard}>
        {/* Thumbnail */}
        <View>
          <Image style={styles.thumbnail} source={{ uri: video.thumbnail}}/>
          <View style={styles.timeContainer}>
            <Text style={styles.time}> {minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
          </View>
        </View>

        {/* Tittle Row */}
        <View style={styles.titleRow}>
          {/* Avatar */}
          <Image style={styles.avatar} source={{uri: video.user.image}} />
          
          {/* Middle Container with Title */}
          <View style={styles.middleContainer}>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.subtitle}>{video.user.name} - {video.views} - {video.createdAt}</Text>
          </View>

          {/* Icon */}
          <Entypo name="dots-three-vertical" size={16} color="black" />
        </View>
    </View>
      
  );
}

