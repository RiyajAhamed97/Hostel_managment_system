import * as React from 'react';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import AdminLogin from './Screens/AdminLogin';
import Signup from './Screens/Signup';
import AddStudent from './Screens/AddStudent';
import AdminDash from './Screens/AdminDash';
import ListOfDetails from './Screens/ListOfDetails';
import AssignRoom from './Screens/AssignRoom';
import AssignKey from './Screens/AssignKey';
import RoomDetails from './Screens/RoomDetails';
import HomeDetails from './Screens/HomeDetails';
import TownDeatils from './Screens/TownDeatils';
import HospitalDeatils from './Screens/HospitalDeatils';
import RepairDetails from './Screens/RepairDetails';
import PaymentDetails from './Screens/PayementDetails';
import StudentDash from './Screens/StudentDash';
import AddHome from './Screens/AddHome';
import AddTown from './Screens/AddTown';
import AddHospital from './Screens/AddHospital';
import AddRepair from './Screens/AddRepair';
import AddPayement from './Screens/AddPayement';
import Keysubmit from './Screens/Keysubmit';




import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Happy Mess" component={Landing}/>
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="AdminLogin" component={AdminLogin}/>
     <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="AddStudent" component={AddStudent}/>
      <Stack.Screen name="AdminDash" component={AdminDash}/>
      <Stack.Screen name="ListOfDetails" component={ListOfDetails}/>
      <Stack.Screen name="AssignRoom" component={AssignRoom}/>
       <Stack.Screen name="AssignKey" component={AssignKey}/>
        <Stack.Screen name="RoomDetails" component={RoomDetails}/>
         <Stack.Screen name="HomeDetails" component={HomeDetails}/>
          <Stack.Screen name="TownDeatils" component={TownDeatils}/>
           <Stack.Screen name="HospitalDeatils" component={HospitalDeatils}/>
            <Stack.Screen name="RepairDetails" component={RepairDetails}/>
             <Stack.Screen name="PaymentDetails" component={PaymentDetails}/>
             <Stack.Screen name="StudentDash" component={StudentDash}/>
              <Stack.Screen name="AddHome" component={AddHome}/>
               <Stack.Screen name="AddTown" component={AddTown}/>
               <Stack.Screen name="AddHospital" component={AddHospital}/>
                <Stack.Screen name="AddRepair" component={AddRepair}/>
                 <Stack.Screen name="AddPayement" component={AddPayement}/>
                  <Stack.Screen name="Keysubmit" component={Keysubmit}/>

             
      

     
     
     

    </Stack.Navigator>
    </NavigationContainer>
  );
}

