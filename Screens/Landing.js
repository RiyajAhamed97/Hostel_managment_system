import * as React from 'react';
import {Text,View,Image,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Landing=()=>{
  const navigation=useNavigation();
  return(
    <View style={styles.container}>
    <Image source={require('./image.jpg')}
    style={{flex:1,width:400}}></Image>
    <View style={{alignItems:'center',
  justifyContent:'center',backgroundColor:'white'}}>
    <Text style={{fontSize:30,fontWeight:'bold'}}>Hostel Mangement System</Text>
    <Text style={{fontSize:20}}>UNIVERSITY OF VAVUNIYA</Text>
    </View>
    
    <View style={styles.contain}>
     
       <TouchableOpacity onPress={()=>navigation.navigate('AdminLogin')}>
  
       <Text style={styles.btn}>ADMIN</Text>
       </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.btn}>USER</Text>
      </TouchableOpacity>
      </View>
    </View>
    
    
    
     
    
  );
}

const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:'column'
  
},
contain:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:15
},
btn:{
  marginBottom:20,
 backgroundColor:"blue",
    width:200,
    height:50,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    flexDirection:'row',
    borderRadius:10
}
});
export default Landing;