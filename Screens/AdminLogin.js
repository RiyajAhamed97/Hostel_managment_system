import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AdminLogin=()=>{
  const[username,setText]=useState('');
  const[password,setText1]=useState('');
  const navigation=useNavigation();
  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./image.jpg')}>
    <View style={styles.contain}>
    <View style={{alignItems:"center"}}>
    <Image source={require('./first.png')} style={{width:100,height:100,marginTop:30,marginBottom:5}}/>
    </View>
    <Text style={{fontWeight:"bold",textAlign:"center",marginBottom:50,fontSize:25,color:'white'}} >UOV HOSTEL</Text>
    <TextInput style={styles.input}
    placeholder="username"
    onChangeText={username=>setText(username)}
    defaultValue={username}
    returnKeyType="go">
    </TextInput>

    <TextInput style={styles.input}
    secureTextEntry={true}
    placeholder="password"
    onChangeText={password=>setText1(password)}
    defaultValue={password}
     returnKeyType="go"
    >
    </TextInput>
    
    
   
    <TouchableOpacity
    style={styles.buttonContainer}
    onPress={() => {
      var uname=username;
      var pword=password;

       if(username=="admin" && pword=="uovadmin@123"){
        Alert.alert('successfully logged in!!');
        navigation.navigate('AdminDash')
          
        
          
        }
      else{
        Alert.alert("Incorrect username or Password");
      }
      setText('');
      setText1('');
    }}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    
    </View>
  </ImageBackground>

    </View>
  );
}


const styles=StyleSheet.create({
  
  container:{
    flex:1,
   
    //backgroundColor:"blue"
  
  },
  contain:{
     justifyContent:'center',
    alignItems:'center',
  },
  input:{
    height:40,
     backgroundColor:'#E26310',
    marginTop:10,
    marginBottom:30,
    width:300,
    borderRadius:10,
    color:"black",
    padding:10,
    fontSize:18
  
  },
  buttonText:{
    textAlign:"center",
     alignItems:"center",
    color:"white",
     padding:5,
    fontSize:18

  },
  buttonContainer:{
    backgroundColor:"#004F98",
    width:200,
    height:40,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    borderRadius:10,
    marginTop:10

  }

});


export default AdminLogin;