import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import AboutUsScreen from "./screens/AboutUsScreen";
import FavouritesScreen from "./screens/FavouriteScreen";
import { AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();

function DrawerNavigator(){
  //<NavigationContainer>
  return(
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#FFF4E0",
        drawerActiveTintColor: "#B46060",
        drawerStyle: {backgroundColor: "#FFF"},
        headerStyle: {backgroundColor: "#B46060"},
        headerTintColor: "#FFF4E0",
        sceneContainerStyle: {backgroundColor: "#FFF"}
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerLabel: "All Categories",
        drawerIcon: ((color) => <AntDesign name="home" color={color} size={18}/>)
      }}/>
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
        drawerLabel: "Favourites!",
        drawerIcon: ((color) => <AntDesign name="star" color={color} size={18}/>)
      }}/>
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} options={{
        drawerLabel: "About Us!",
        drawerIcon: ((color) => <AntDesign name="infocirlceo" color={color} size={18}/>)
      }}/>
    </Drawer.Navigator>
      //</NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#B46060" },
          headerTintColor: "white",
          contentStyle: {backgroundColor: "#FFF4E0"}
        }}>
          <Stack.Screen 
            name="Drawer" 
            //component={ CategoriesScreen } 
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={ MealsOverviewScreen }
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}

          /> 
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{
            headerRight: () => {
              return <Button title='Tap me'/>
            }}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
