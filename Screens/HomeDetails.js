

import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground ,Alert,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db } from './firebase';
const HomeDetails = () => {
   const [data, setData] = useState([]);
   const navigation=useNavigation();

  useEffect(() => {
    
    const fetchData = async () => {
      const snapshot = await db.collection('home').get();
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    };

    fetchData();
  }, []);

  const renderRow = ({ item }) => (
    <View style={styles.tableRow}>
    
        
        
        

      <Text style={styles.tableCell}>{item.registrationNo}</Text>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.roomNo}</Text>
      
      <Text style={styles.tableCell}>{item.departureDate}</Text>
       <Text style={styles.tableCell}>{item.arrivalDate}</Text>

    </View>
  );

  return (
    <View >
    <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>RegistrationNo</Text>
        <Text style={styles.tableHeaderCell}>Name</Text>
         <Text style={styles.tableHeaderCell}>Room No</Text>
        <Text style={styles.tableHeaderCell}>Departure Date</Text>
        <Text style={styles.tableHeaderCell}>Arrival Date</Text>
        
      </View>
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
   tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    
    flex: 1,
    padding: 10,
    
    borderWidth: 1,
    borderColor: '#000',
    
    
  },
});

export default HomeDetails;
