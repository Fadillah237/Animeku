import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarRating = ({ rating }) => {
  const displayRating = (rating / 2).toFixed(1); // Menampilkan skala 5 dengan desimal 1 tempat

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="star" size={20} color="#FFD700" />
      <Text style={{ marginLeft: 5, color: '#FFD700' }}>{displayRating}</Text>
    </View>
  );
};

export default StarRating;
