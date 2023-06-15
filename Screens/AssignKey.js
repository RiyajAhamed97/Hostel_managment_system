import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {firebase} from "./firebase";
import {database} from "./firebase"


const AssignKey = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [keyAvailable, setKeyAvailable] = useState(false);
  const [checkStatus, setCheckStatus] = useState('');

  const handleCheckKey = () => {
    // Reference to the database
    


// Search query parameters
const searchKeyword = roomNumber; // The keyword you want to search for
const searchProperty = 'F16'; // The property/key you want to search in

// Construct the database query
const query = database.ref('keysubmit').orderByChild(searchProperty).equalTo(searchKeyword);

// Execute the query and retrieve the matched data
query.once('value', (snapshot) => {
  const matchedData = snapshot.val();

  // Handle the matched data (e.g., display it, perform further operations)
  console.log('Matched data:', matchedData);
  Alert.alert("Available");
})
.catch((error) => {
  // Handle any errors during the search
  console.log('Search error:', error);
  Alert.alert("Not Available");
});

  };
const navigation=useNavigation();
  return (
    <View style={styles.container}>
     <Image source={require('./4.jpg')}
    style={{flex:1,width:400}}></Image>
      <Text style={styles.heading}>Security Booth</Text>
      <View style={styles.checkKeyForm}>
        <Text style={styles.label}>Room Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter room number"
          value={roomNumber}
          onChangeText={setRoomNumber}
        />

        <Button title="Check Key Availability" onPress={handleCheckKey} />

        <Text style={styles.checkStatus}>{checkStatus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkKeyForm: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkStatus: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default  AssignKey;
