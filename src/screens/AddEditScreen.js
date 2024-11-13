import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addAnime, updateAnime, getAnimeDetails } from '../api/animeService';

const AddEditScreen = ({ route, navigation }) => {
  const { id } = route.params || {};
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [vidioUrl, setVidioUrl] = useState('');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await getAnimeDetails(id);
        setTitle(data.title);
        setGenre(data.genre);
        setSynopsis(data.synopsis);
        setImageUrl(data.imageUrl);
        setVidioUrl(data.vidioUrl);
      };
      fetchData();
    }
  }, [id]);

  const handleSave = async () => {
    const animeData = { title, genre, synopsis, imageUrl, vidioUrl };
    id ? await updateAnime(id, animeData) : await addAnime(animeData);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        value={genre}
        onChangeText={setGenre}
        placeholder="Genre"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        value={synopsis}
        onChangeText={setSynopsis}
        placeholder="Synopsis"
        placeholderTextColor="gray"
        multiline
        style={styles.input}
      />
      <TextInput
        value={imageUrl}
        onChangeText={setImageUrl}
        placeholder="Image URL"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <TextInput
        value={vidioUrl}
        onChangeText={setVidioUrl}
        placeholder="Video URL"
        placeholderTextColor="gray"
        style={styles.input}
      />
      
      <TouchableOpacity onPress={handleSave} style={styles.iconButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  iconButton: {
    backgroundColor: 'tomato',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default AddEditScreen;
