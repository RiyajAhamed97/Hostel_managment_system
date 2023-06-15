import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

const Signup=()=>{
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation();

 const handleSignup = () => {
    // Create a new user with email and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Add the registration number to the user's profile
        userCredential.user.updateProfile({
          displayName: registrationNumber,
        });
      })
      .catch((error) => {
        // Handle any errors during signup
        console.log('Signup error:', error);
      });

    // Clear the input fields
    setRegistrationNumber('');
    setEmail('');
    setPassword('');
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
    placeholder="Registration No"
    onChangeText={registrationNumber=>setRegistrationNumber(registrationNumber)}
    defaultValue={registrationNumber}
    returnKeyType="go">
    </TextInput>
    <TextInput style={styles.input}
    placeholder="Email"
    onChangeText={email=>setEmail(email)}
    defaultValue={email}
    returnKeyType="go">
    </TextInput>

    <TextInput style={styles.input}
    secureTextEntry={true}
    placeholder="password"
    onChangeText={password=>setPassword(password)}
    defaultValue={password}
     returnKeyType="go"
    >
    </TextInput>
    
    
   
    <TouchableOpacity>
    <Text style={styles.buttonText} onPress={handleSignup}>Signup</Text>
    </TouchableOpacity>
    <Text style={styles.bt}>Already Registered!
    <Text>    </Text>
     <TouchableOpacity
    onPress={()=>navigation.navigate('Login')}>
     <Text style={styles.buttonText}>Login</Text>      
    
    </TouchableOpacity>
    </Text>
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
    height:30,
     backgroundColor:'#E26310',
    marginTop:10,
    marginBottom:30,
    width:300,
    borderRadius:10,
    color:"black",
    
     padding:5,
    fontSize:18,
  
  },
  buttonText:{
    fontSize:18,
    color:"white"
  },
  buttonContainer:{
    backgroundColor:"#004F98",
    width:200,
    height:30,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    
    borderRadius:10,
    marginTop:10

  },
  bt:{
    fontSize:15,
    color:'white',
    textAlign:"center",
    alignItems:"center"
  }


});


export default Signup;