import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db } from './firebase';


const AddPayement = () => {
   const[RegistrationNo,setRegisterNo]=useState('');
  const [studentName, setStudentName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [amount, setAmount] = useState('');
 const navigation=useNavigation();

  const handlePaymentSubmit = () => {
   db.collection('payment')
      .add({
        RegistrationNo,
        studentName,
        roomNumber,
        amount:parseInt(amount)


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
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Details</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Student Registration No</Text>
        <TextInput
          value={RegistrationNo}
          onChangeText={setRegisterNo}
          style={styles.input}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Student Name</Text>
        <TextInput
          value={studentName}
          onChangeText={setStudentName}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Room Number</Text>
        <TextInput
          value={roomNumber}
          onChangeText={setRoomNumber}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity  style={styles.button}>
        <Text style={styles.buttonText} onPress={handlePaymentSubmit}>Submit Payment</Text>
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
  button: {
    backgroundColor: '#FF6F00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddPayement;









