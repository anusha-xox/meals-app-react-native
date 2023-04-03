import { View, FlatList, Text, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
//import { useEffect } from "react";
import { useLayoutEffect } from "react";

function MealsOverviewScreen ({ route, navigation }) {
    // const route = useRoute();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    function renderMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title, 
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        function pressHandler(){
            navigation.navigate("MealDetails", {
                itemId: item.id,
            })
        };

        return (
            <MealItem {...mealItemProps} onPress={pressHandler}/>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={item => item.id} 
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});