import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AnimeCard = ({ anime, isFavorite, onToggleFavorite, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: anime.imageUrl }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{anime.title}</Text>
      <Text style={styles.genre}>Genre: {anime.genre}</Text>
      <Text style={styles.synopsis}>{anime.synopsis}</Text>
      
      {/* Rating with Star Icon */}
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="gold" />
        <Text style={styles.rating}>{anime.rating}</Text>
      </View>

      {/* Icon for adding/removing from favorites */}
      <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteButton}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color="red"
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  genre: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  synopsis: {
    fontSize: 12,
    color: '#b0b0b0',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: '#ffd700',
    marginLeft: 4,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default AnimeCard;
