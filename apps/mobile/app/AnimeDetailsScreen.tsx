import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function AnimeDetailsScreen() {
  const { id } = useLocalSearchParams();

  // For now, hardcoded example – fetch from API later
  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Anime ID: {id}</Text>
      <Text>Description goes here...</Text>
    </ScrollView>
  );
}
