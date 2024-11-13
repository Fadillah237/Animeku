import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredAnime, setFilteredAnime] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    // Add logic to filter the anime list based on search query
    // For example, filter the list from a data source or state
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder="Search Anime"
      />
      {/* Render filtered list of anime based on search query */}
      <FlatList
        data={filteredAnime} // Replace with the actual anime list or filtered data
        renderItem={({ item }) => <Text style={styles.animeItem}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()} // Assuming `id` is unique
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  animeItem: {
    fontSize: 18,
    padding: 10,
  },
});

export default SearchScreen;
