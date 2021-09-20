import * as React from 'react';
import { StyleSheet, FlatList, Text, View, Image, StatusBar, SafeAreaView,TouchableOpacity, Appbar, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const DATA = [
  {
    "id": "1",
    "name": "OCEANS",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1519076976365-9c64dbd98317?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80"
  },
  {
    "id": "2",
    "name": "OCEANS 2",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
  },
  {
    "id": "3",
    "name": "OCEANS 3",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    "id": "4",
    "name": "OCEANS 4",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1540593463874-59835505e99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    "id": "5",
    "name": "OCEANS 5",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1540593463874-59835505e99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    "id": "6",
    "name": "OCEANS 6",
    "theme": "Lesson Theme",
    "photo": "https://images.unsplash.com/photo-1540593463874-59835505e99d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
]


const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}> {title}</Text>
  </View>
)



export default function Classes({navigation}) {

  return (
    
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Stream')} style={styles.listItem}>
              
              <Image source={{uri:item.photo}}  style={styles.picture} />
              <View style={{alignItems:"center",flex:1}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.theme}>{item.theme}</Text>
              </View>
              {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"green"}}>Call</Text>
              </TouchableOpacity> */}
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:80
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  title: {
    fontWeight:"bold",
    fontSize: 20,
    paddingTop: 30,
    color: "black"
  },
  theme: {
    color: 'blue',
    paddingTop: 5,
  },
  picture: {
    width:150,
    height:100,
    borderRadius:5
  }
});