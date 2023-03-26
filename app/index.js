import { Link, useSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import menu from "./data/restaurants";

const  App = () => {

    const renderItem = ({ item }) => (
      <Link href={`./DishDatails/${item.id}`} asChild>
        <Pressable style={styles.menuItem}>
          <Image source={{ uri: item.image }} style={styles.menuItemImage} />
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.rating}>⭐4.5(7897) | new york city | 12 km </Text>
          <View style={styles.lasttext}>
            <Text style={styles.bottomtext}>$20 for Two</Text>
            <Text style={styles.bottomtext}>15-20 Min</Text>
            <Text style={styles.bottomtext}>Free Delivery</Text>
          </View>
              
        </Pressable>
      </Link>
     
    );

  return (
    <SafeAreaView>
      <FlatList
      data={menu}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.menuContainer}
      />
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    marginBottom: 16,
  },
  menuItemImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  menuItemName: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom:8,   
  },
  rating:{
    color:'gray',
    fontSize:10,
    marginBottom:8,
  },
  lasttext:{
    flexDirection:'row',
    marginBottom:8,
  },
  bottomtext:{
    marginLeft:20,
    padding:2,
    fontSize:10,
    color:'gray',
    borderWidth:1,
    borderRadius:2,
    borderColor:'gray',
  },

  
});

export default App;
