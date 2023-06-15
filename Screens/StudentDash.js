import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground,Button,onPressLearnMore,tabBarIcon,TabIcon,ScrollView,FontAwesomeIcon,Icon} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

const StudentDash=()=>{
  const navigation=useNavigation();
  const handleLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Logout successful
      console.log('User logged out successfully!');
      Alert.alert("Logged Out!");
      navigation.navigate('Login')
    })
    .catch((error) => {
      // Handle any errors during logout
      console.log('Logout error:', error);
    });
};

  return(
    
  
    <View style={styles.container}>
    
    <View style={styles.contain}>
    <ScrollView horizontal style={{marginTop:2}}>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('AddPayement')}>
          <Image
            source={require('./ee.jpeg')}
            style={styles.image}
          />
          <Button title="Add Payment"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('Keysubmit')}>
          <Image
            source={require('./3.jpg')}
            style={styles.image}
            
          />
          <Button title="Key Submit"/>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    
    
<ScrollView horizontal style={{marginTop:2}}>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('AddHome')}>
          <Image
            source={require('./home.jpeg')}
            style={styles.image}
          />
          <Button title="Add Home"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('AddTown') }>
          <Image
            source={require('./vavuniyaa.jpeg')}
            style={styles.image}
            
          />
          <Button title="Add Town"/>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    <ScrollView horizontal style={{marginTop:2}}>
      <View style={styles.container}>

        <TouchableOpacity onPress={() =>navigation.navigate('AddHospital')}>
          <Image
            source={require('./jk.jpeg')}
            style={styles.image}
          />
          <Button title="Add Hospital"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddRepair')}>
          <Image
            source={require('./8.jpeg')}
            style={styles.image}
            
          />
          <Button title="Add Repair"  />
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    
        

       

     <TouchableOpacity onPress={handleLogout} style={styles.button1}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
     
   
     
    
    </View>
 

    </View>
    
  );
}


const styles=StyleSheet.create({
  
  container:{
    flex:2,
   flexDirection: 'row',
    backgroundColor:"black",
  
  color:'#662D8C'
  },
  
 
  image: {
    width: 180,
    height: 70,
    marginRight: 9,
    marginLeft: 9, // Adjust the margin as needed
  },
 button:{
   color:'#662D8C'
 },

  button1: {
    backgroundColor: '#00008B',
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  

});

export default StudentDash;
