import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db } from './firebase';

const Keysubmit= () => {
  const [registrationNo, setRegistrationNo] = useState('');
  const [roomNo, setRoomNo] = useState('');
   const [Time, setTime] = useState('');

  // Function to handle key submission
  const handleSubmit = () => {
    // Validate the inputs
    db.collection('keysubmit')
      .add({
        registrationNo,
        roomNo,
        Time
        


      })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        Alert.alert("data added successfully!")

      })
      .catch((error) => {
        console.error('Error adding document:', error);
        Alert.alert("not add");
      });
  };

  // Function to submit key details
  const submitKey = (regNo, room) => {
    // Replace this with your own logic to process key submission
    console.log(`Key submitted for registration number: ${regNo}, Room number: ${room}`);
    // You can perform database operations or API calls here to save the key submission details
  };
const navigation=useNavigation();
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={registrationNo}
        onChangeText={setRegistrationNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        value={roomNo}
        onChangeText={setRoomNo}
      />
       <View style={styles.formGroup}>
        
        <TextInput
          value={Time}
          onChangeText={setTime}
          style={styles.input}
          placeholder="Time"
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
     backgroundColor:'#B9D1EB',
  },
  
  input: {
    height: 40,
    borderWidth: 1,
     borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
});

export default Keysubmit;



