import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {db} from './firebase'
const AddHome = () => {
  const [registrationNo, setRegistrationNo] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [name, setName] = useState('');
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const [arrivalDate, setArrivalDate] = useState('');
  

  const handleFormSubmit = () => {
    // Perform form submission logic here
    db.collection('home')
      .add({
        registrationNo,
        roomNo,
        name,
        phoneNumber,
        departureDate,
        arrivalDate
        


      })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        Alert.alert("data added successfully!")

      })
      .catch((error) => {
        console.error('Error adding document:', error);
        Alert.alert("not add");
      });
      setRegistrationNo('')
      setRoomNo('')
      setName('')
      setPhoneNumber('')
      setDepartureDate('')
      setArrivalDate('')

    // Clear form fields or navigate to another screen
  };
 const navigation=useNavigation();
  return (
    <View style={styles.container}>
      

      <View style={styles.formGroup}>
        <Text style={styles.label}>Registration Number</Text>
        <TextInput
          value={registrationNo}
          onChangeText={setRegistrationNo}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Room Number</Text>
        <TextInput
          value={roomNo}
          onChangeText={setRoomNo}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Departure Date</Text>
        <TextInput
          value={departureDate}
          onChangeText={setDepartureDate}
          style={styles.input}
          placeholder="YYYY-MM-DD"
        />
      </View>

      

      <View style={styles.formGroup}>
        <Text style={styles.label}>Arrival Date</Text>
        <TextInput
          value={arrivalDate}
          onChangeText={setArrivalDate}
          style={styles.input}
          placeholder="YYYY-MM-DD"
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
    padding: 20,
     backgroundColor:'#B9D1EB',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000000',
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

export default AddHome;



