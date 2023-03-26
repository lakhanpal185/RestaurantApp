import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import { Link, useSearchParams } from 'expo-router';
import menu from '../data/restaurants';

const DishDetails = () => {
  
  const {id} = useSearchParams();
  const dish = menu.find((r) => r.id == id);
  
  
  const handleSharePress = () => {
    console.warn("share button clicked");
  };

  const handleOrderNowPress = () => {
    console.warn("Order button clicked");
  };
  return (
   <ScrollView>
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>
        Sushi is a traditional Japanese dish that has gained popularity all over the world. It consists of vinegar-seasoned rice combined with various ingredients, including raw fish (sashimi), vegetables, and sometimes even fruits or egg. The ingredients are rolled up in seaweed (nori) sheets, forming a cylindrical shape that is then sliced into bite-sized pieces.{'\n'}
        {'\n'}Here are some common ingredients that can be found in sushi:{'\n'}

        Sushi rice (sumeshi): This is a short-grain rice that has been seasoned with rice vinegar, sugar, and salt{'\n'}
        Nori: This is a type of dried seaweed that is often used to wrap sushi rolls.{'\n'}
        Fish: Various types of fish are used in sushi, including tuna, salmon, yellowtail, eel, and many others. The fish can be raw or cooked.{'\n'}
        Vegetables: Vegetables such as cucumber, avocado, and carrot are often used in sushi rolls.{'\n'}
        Wasabi: This is a Japanese horseradish that is often served with sushi. It has a strong, spicy flavor.{'\n'}
        Soy sauce: This is a salty, savory sauce that is often used as a dipping sauce for sushi.{'\n'}
        Pickled ginger (gari): This is a type of pickled ginger that is often served with sushi. It is meant to be eaten between bites of sushi to cleanse the palate.{'\n'}
        Tobiko: These are small, brightly colored fish eggs that are often used as a garnish on sushi rolls.{'\n'}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSharePress} style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOrderNowPress} style={styles.button}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    padding:8
  },
  description: {
    fontSize: 14,
    fontWeight:'300',
    color:'gray',
    marginBottom: 16,
    padding:8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DishDetails;
