import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground,Button,onPressLearnMore,tabBarIcon,TabIcon,ScrollView,FontAwesomeIcon,Icon} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';
const AdminDash=()=>{
  const navigation=useNavigation();
 const handleLogout = () => {
  
      
      Alert.alert("Logged Out!");
      navigation.navigate('AdminLogin')
   
};
  return(
    
  
    <View style={styles.container}>
    
    <View style={styles.contain}>
  
    <ScrollView horizontal>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('AddStudent')}>
          <Image
            source={require('./e.jpeg')}
            style={styles.image}
          />
          <Button title="Add Student"  
          style={styles.button}/>
        </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('AssignRoom')}>
          <Image
            source={require('./img.jpeg')}
            style={styles.image}
          />
          <Button title="Assign to room"  
          style={styles.button}/>
        </TouchableOpacity>

       

        
      </View>
    </ScrollView>
    
    
<ScrollView horizontal>
      <View style={styles.container}>

        

        <TouchableOpacity onPress={() =>navigation.navigate('AssignKey') }>
          <Image
            source={require('./3.jpg')}
            style={styles.image}
            
          />
          <Button title="Assign Key"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate('ListOfDetails')}>
          <Image
            source={require('./Girl.jpg')}
            style={styles.image}
          />
          <Button title="Student Details"  
          style={styles.button}/>
        </TouchableOpacity>
 
        
      </View>
    </ScrollView>
    <ScrollView horizontal>
      <View style={styles.container}>

        <TouchableOpacity onPress={() =>navigation.navigate('PaymentDetails') }>
          <Image
            source={require('./ee.jpeg')}
            style={styles.image}
            
          />
          <Button title="Payement Details"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RoomDetails')}>
          <Image
            source={require('./download.jpg')}
            style={styles.image}
            
          />
          <Button title="View Rooms"  />
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    <ScrollView horizontal>
      <View style={styles.container}>
        

       

        
      </View>
    </ScrollView>
    <ScrollView horizontal>
      <View style={styles.container}>

        <TouchableOpacity onPress={() =>navigation.navigate('HomeDetails')}>
          <Image
            source={require('./home.jpeg')}
            
            style={styles.image}
          />
          <Button title="View Home"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('TownDeatils')}>
          <Image
            source={require('./vavuniyaa.jpeg')}
            style={styles.image}
            
          />
          <Button title="View Town"  />
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    <ScrollView horizontal>
      <View style={styles.container}>

        <TouchableOpacity onPress={() =>navigation.navigate('HospitalDeatils')}>
          <Image
            source={require('./jk.jpeg')}
            style={styles.image}
          />
          <Button title="View Hospital"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('RepairDetails')}>
          <Image
            source={require('./8.jpeg')}
            style={styles.image}
            
          />
          <Button title="View Repair"  />
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    <ScrollView horizontal>
      <View style={styles.container}>

        

        

        
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
  marginTop:18,
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
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  

});

export default AdminDash;
