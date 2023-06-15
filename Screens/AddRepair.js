import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db } from './firebase';
const AddRepair = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [issue, setIssue] = useState('');
  

  const handleFormSubmit = () => {
    db.collection('repair')
      .add({
        roomNumber,
        issue
        


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
  
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Room Repair Form</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Room Number</Text>
        <TextInput
          value={roomNumber}
          onChangeText={setRoomNumber}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Issue</Text>
        <TextInput
          value={issue}
          onChangeText={setIssue}
          style={styles.input}
        />
      </View>

      
      

      <TouchableOpacity onPress={handleFormSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'#B9D1EB',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
     borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
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

export default AddRepair;
