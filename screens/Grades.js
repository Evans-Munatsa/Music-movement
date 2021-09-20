import * as React from 'react';
import { StyleSheet, FlatList, Text, View, Image, StatusBar, SafeAreaView,TouchableOpacity, Appbar, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const DATA = [
    {
      "id": "1",
      "grade": "Grade: R",
    },
    {
        "id": "2",
        "grade": "Grade: 1 - 4",
    },
    {
        "id": "3",
        "grade": "Grade: 5 - 7",
    },
]

const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}> {title}</Text>
    </View>
  )

export default function Grades({navigation}) {
    return (
    
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Classroom')} style={styles.listItem}>
                  
                  <Image source={{uri:item.photo}}  style={styles.picture} />
                  <View style={{alignItems:"center",flex:1}}>
                    <Text style={styles.title}>{item.grade}</Text>
                  </View>
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
      marginTop:200
    },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#000000",
      width:"90%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:5,
      paddingTop: 30
    },
    title: {
      fontWeight:"bold",
      fontSize: 40,
      paddingTop: 30,
      paddingBottom: 30,
      color: "white"
    },
});