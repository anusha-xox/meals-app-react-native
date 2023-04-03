import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen ({ route, navigation }) {
    const itemId = route.params.itemId;
    const selectedMeal = MEALS.find((meal) => meal.id == itemId);

    function headerButtonPressedHandler(){
        console.log("Pressed")
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
            //return <Button title="Tap me" onPress={headerButtonPressedHandler} />
            return <IconButton icon="star" color="white" onPress={headerButtonPressedHandler}/>
        },
      })
    }, [navigation, headerButtonPressedHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle = {styles.detailText}
            />
            <View style={styles.outerContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    detailText: {
        fontWeight: "bold",
        color: "#B46060"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center"
    },
    outerContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "90%",
    }
});