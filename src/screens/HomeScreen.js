import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getAnimeList } from '../api/animeService';
import AnimeCard from '../components/AnimeCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [animeList, setAnimeList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimeList();
        setAnimeList(data);
      } catch (error) {
        console.error("Error fetching anime list:", error);
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = (animeId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(animeId)) {
        return prevFavorites.filter((id) => id !== animeId);
      } else {
        return [...prevFavorites, animeId];
      }
    });
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={animeList}
        renderItem={({ item }) => (
          <AnimeCard
            anime={item}
            rating={(
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="gold" /> {/* Ikon bintang */}
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            )}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Ionicons
        name="add-circle"
        size={50}
        color="tomato"
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEdit')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
