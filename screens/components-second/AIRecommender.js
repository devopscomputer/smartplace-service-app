import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const mockAIRecommendations = [
  {
    id: '1',
    title: 'Limpeza Residencial Profunda',
    rating: 4.9,
    region: 'Campinas, SP',
    image: 'https://images.unsplash.com/photo-1581579185169-1b5bcbf84a1b',
    badge: 'Top Pro',
  },
  {
    id: '2',
    title: 'Serviço de Jardinagem',
    rating: 4.8,
    region: 'Valinhos, SP',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf',
    badge: '🔥 Popular',
  },
  {
    id: '3',
    title: 'Organização Pós-Mudança',
    rating: 4.7,
    region: 'Hortolândia, SP',
    image: 'https://images.unsplash.com/photo-1621976494666-5d18337bdc8e',
    badge: '💎 Novo',
  },
];

export default function AIRecommender({ user = 'Paulo' }) {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulando inteligência artificial com carregamento
    const timeout = setTimeout(() => {
      setRecommendations(mockAIRecommendations);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <ImageBackground source={{ uri: item.image }} style={styles.image} imageStyle={{ borderRadius: 16 }}>
        <View style={styles.overlay}>
          <Text style={styles.badge}>{item.badge}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.meta}>{item.region} • {item.rating} ⭐</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>🎯 Recomendações para você, {user}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  card: {
    width: 180,
    height: 240,
    borderRadius: 16,
    marginRight: 18,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badge: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
  },
  cardInfo: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  meta: {
    fontSize: 12,
    color: '#eee',
    marginTop: 2,
  },
});