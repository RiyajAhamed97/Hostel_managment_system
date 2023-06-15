import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

const Login=()=>{
  const[email,setText]=useState('');
  const[password,setText1]=useState('');
  const navigation=useNavigation();
  const handleLogin = () => {
     firebase
    .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in successfully!');
        navigation.navigate('StudentDash');
      })
      .catch((error) => {
         console.log('Signup error:', error);
      });
      setText('');
      setText1('');
      
  };

  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./image.jpg')}>
    <View style={styles.contain}>
    <View style={{alignItems:"center"}}>
    <Image source={require('./first.png')} style={{width:100,height:100,marginTop:30,marginBottom:5}}/>
    </View>
    <Text style={{fontWeight:"bold",textAlign:"center",marginBottom:40,fontSize:25,color:'white'}} >UOV HOSTEL</Text>
    <TextInput style={styles.input}
    placeholder="Email"
    onChangeText={email=>setText(email)}
    defaultValue={email}
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
    
    
   <View style={styles.main}>
    <TouchableOpacity
    style={styles.buttonContainer}
    
  >
    <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttonContainer}
     onPress={()=>navigation.navigate('Signup')}>
    <Text style={styles.buttonText}>Signup</Text>
    
    </TouchableOpacity>
    
    </View>
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
    fontSize:18,
     
  
  },
  buttonText:{
    
    textAlign:"center",
     alignItems:"center",
    color:"white",
     paddingTop:5,
     fontSize:18
    
  },
  buttonContainer:{
    backgroundColor:"#004F98",
    width:100,
    height:40,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    borderRadius:10,
    marginTop:18,
    marginRight:10

  },
  main:{
     flex: 1,
    flexDirection: "row",
     marginTop:18,
    alignItems:'center',
    justifyContent: "space-around"
  }

});


export default Login;