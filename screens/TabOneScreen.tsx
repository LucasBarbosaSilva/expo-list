import { type } from 'os';
import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Item from '../components/Item';
import api from '../services/api';

type Countrie = {
  name: string,
  capital: string,
  region: string,
  subregion: string,
}

function TabOneScreen() {
  
  const [countries, setCountries] = useState([]);
  const [amount, setAmount] = useState(0);

  async function setCountriesList() {
    const resp = await api.get("all", {
      params: {
        _limit: 2,
        _sort: 'name'
      }
    })
    const data = resp.data;
    setCountries(data)
    setAmount(data.length);
  }
  
  useEffect(() => {setCountriesList()}, []);
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.textAmount} >Quantidade de países: {amount}</Text>
      
        <FlatList
          style={styles.flatList}
          maxToRenderPerBatch={15}
          ItemSeparatorComponent={() => {return <View style={styles.separator} />}}
          data={countries}
          renderItem={({item, index})=> {return (<Item countrie={item} />) }}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAmount: {
    textAlign: 'right',
    color: '#fff',
    marginVertical: 5,
  },
  flatList: {
    // paddingHorizontal: 10,
    width: '98%'
  },
  separator: {
    marginVertical: 3,
    height: 1,
    width: '80%',
    backgroundColor: "#393e46"
  }
});
