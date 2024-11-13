import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AnimeCard from '../components/AnimeCard';

const FavoritesScreen = ({ favorites, animeList, toggleFavorite }) => {
  if (!favorites || !animeList) {
    // Handle case if the favorites or animeList are undefined or not passed correctly
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  // Filter the anime list to get only the favorite anime based on the favorites array
  const favoriteAnimes = animeList.filter((anime) => favorites.includes(anime.id));

  return (
    <View style={styles.container}>
      {favoriteAnimes.length === 0 ? (
        <Text>No favorite animes found!</Text> // Display a message if there are no favorite animes
      ) : (
        <FlatList
          data={favoriteAnimes}
          renderItem={({ item }) => (
            <AnimeCard
              title={item.title}
              genre={item.genre}
              imageUrl={item.imageUrl}
              synopsis={item.synopsis}
              rating={item.rating}
              isFavorite={true}  // Since we are in the FavoritesScreen, all items are favorites
              onToggleFavorite={() => toggleFavorite(item.id)}  // Toggle favorite on click
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',  // You can change this color as needed
  },
});

export default FavoritesScreen;
