import { Text, SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const request = async (callback) => {
  const response = await fetch ('https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=6');
  const parsed = await response.json();
  callback(parsed);
}

export default function App() {

  const [registros, setRegistro] = useState([]);

  useEffect(()=>{
    request(setRegistro)
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        The Bob's Burgers
      </Text>  

      <FlatList
      data={registros}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=>
      <View style={styles.item}>
      <Text style={styles.letra}> Nome: {item.name}</Text>
      <Text style={styles.letra}> id: {item.id}</Text>
      </View>
      }
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor:'#ADD8E6',
    flex:1,
    textAlign:'center',
    padding:10,
    margin:10,
  },
  letra: {
    fontSize:20,

  }
});
