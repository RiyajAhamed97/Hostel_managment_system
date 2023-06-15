

import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground ,Alert,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db} from './firebase';

const ListOfDetails = () => {
   const [data, setData] = useState([]);
   const navigation=useNavigation();

  useEffect(() => {
    
    const fetchData = async () => {
      const snapshot = await db.collection('addstudent').get();
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    };

    fetchData();
  }, []);
 


  const renderRow = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.registrationNo}</Text>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.email}</Text>
      <Text style={styles.tableCell}>{item.dateOfBirth}</Text>
      <Text style={styles.tableCell}>{item.gender}</Text>
      <Text style={styles.tableCell}>{item.phoneNumber}</Text>
       <Text style={styles.tableCell}>{item.address}</Text>
       

    </View>
  );

  return (
    <View >
    <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>RegistrationNo</Text>
        <Text style={styles.tableHeaderCell}>Name</Text>
        <Text style={styles.tableHeaderCell}>Email</Text>
        <Text style={styles.tableHeaderCell}>DOB</Text>
        <Text style={styles.tableHeaderCell}>Gender</Text>
        <Text style={styles.tableHeaderCell}>Phone Number</Text>
        <Text style={styles.tableHeaderCell}>Address</Text>
         
        
        
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
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ListOfDetails;
