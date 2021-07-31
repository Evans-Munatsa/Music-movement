import * as React from 'react';
import { StyleSheet, FlatList, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Singing Lesson',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bass Guiter Lesson',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jazz History',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Drums History',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Singing History',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Dance',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}> {title}</Text>
  </View>
)




export default function Classes() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  // return (

  //   <Card>
  //     <Card.Title>HELLO WORLD</Card.Title>
  //     <Card.Divider/>
  //     <Card.Image source={require('../assets/img/music-logo.png')}>
  //       <Text style={{marginBottom: 10}}>
  //         The idea with React Native Elements is more about component structure than actual design.
  //       </Text>
  //       <Button
  //         icon={<Icon name='code' color='#ffffff' />}
  //         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
  //         title='VIEW NOW' />
  //     </Card.Image>
  //   </Card>
    
  // );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // card: {
  //   borderRadius: 10,
  // },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: '#ffff',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});