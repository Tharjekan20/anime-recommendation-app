import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function RecommendationScreen() {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/recommendations')
      .then((res) => res.json())
      .then(setRecs);
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Recommendations</Text>
      {recs.map((anime) => (
        <Text key={anime.id}>{anime.title}</Text>
      ))}
    </View>
  );
}
