import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {db} from "./firebase";

const HostelAllocationScreen = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [registrationNumber, setRegistrationNo] = useState('');
  const [allocationStatus, setAllocationStatus] = useState('');

  const handleAllocation = () => {
    // Check if person is already allocated to room
    db.collection('room')
      .add({
        roomNumber,
        registrationNumber
        


      })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        Alert.alert("data added successfully!")

      })
      .catch((error) => {
        console.error('Error adding document:', error);
        Alert.alert("not add");
      });
      setRegistrationNo("")
      setRoomNumber("")
    const isAllocated = checkAllocation(roomNumber);

    if (isAllocated) {
      setAllocationStatus('Person is already allocated to the room');
    } else if (isRoomFull(roomNumber)) {
      setAllocationStatus('Room is already full');
    } else {
      // Perform allocation logic
      allocateRoom(roomNumber);
      setAllocationStatus('Room allocated successfully');
    }
  };

  const checkAllocation = (roomNumber, student) => {
    // Implement the logic to check if the person is already allocated to the room
    // Return true if allocated, false otherwise
    // You can use a data structure or database to store room allocations and perform the check
    return false;
  };

  const isRoomFull = (roomNumber) => {
    // Implement the logic to check if the room is already full
    // Return true if the room is full, false otherwise
    // You can use a data structure or database to store room allocations and perform the check
    return false;
  };

  const allocateRoom = (roomNumber, student) => {
    // Implement the logic to allocate the person to the room
    // You can use a data structure or database to store room allocations
  };
const navigation=useNavigation();
  return (
    <View style={styles.container}>
   <Image source={require('./img.jpeg')}
    style={{flex:1,width:400}}></Image>

      <Text style={styles.heading}>Romm Allocation</Text>
      <View style={styles.allocationForm}>
        <Text style={styles.label}>Room Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter room number"
          value={roomNumber}
          onChangeText={setRoomNumber}
        />

        <Text style={styles.label}>Registration No:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Registration No"
          value={registrationNumber}
          onChangeText={setRegistrationNo}
        />

        <Button title="Allocate" onPress={handleAllocation} />

        <Text style={styles.allocationStatus}>{allocationStatus}</Text>
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
  allocationForm: {
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
  allocationStatus: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default HostelAllocationScreen;
