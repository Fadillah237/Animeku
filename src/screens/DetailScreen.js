import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getAnimeDetails, deleteAnime } from '../api/animeService';

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimeDetails(id);
      setAnime(data);
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    await deleteAnime(id);
    navigation.goBack();
  };

  if (!anime) return null;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{anime.title}</Text>
      <Text style={{ marginVertical: 10 }}>{anime.synopsis}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('AddEdit', { id })} />
      <Button title="Delete" onPress={handleDelete} color="red" />
    </View>
  );
};

export default DetailsScreen;
