import { View, Text, Button } from 'react-native';

export default function GenreSelectionScreen() {
  const genres = ['Action', 'Romance', 'Fantasy', 'Comedy'];

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Select Your Favorite Genres</Text>
      {genres.map((genre) => (
        <Button key={genre} title={genre} onPress={() => console.log('Selected:', genre)} />
      ))}
    </View>
  );
}
