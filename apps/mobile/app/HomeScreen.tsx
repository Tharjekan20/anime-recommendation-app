import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text style={{ fontSize: 32 }}>Anime App Home</Text>
      <Button title="Genres" onPress={() => router.push('/GenreSelectionScreen')} />
      <Button title="Recommendations" onPress={() => router.push('/RecommendationScreen')} />
    </View>
  );
}
