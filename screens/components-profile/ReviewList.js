import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const reviews = [
  {
    id: '1',
    name: 'Carla Souza',
    rating: 5,
    comment: 'Simplesmente perfeito! Super educada, pontual e deixou tudo impecável. Recomendo muito!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    media: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    date: '2 dias atrás',
    tag: 'Muito Recomendado',
  },
  {
    id: '2',
    name: 'Lucas Rocha',
    rating: 4,
    comment: 'Bom serviço. Voltaria a contratar!',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    media: null,
    date: '5 dias atrás',
    tag: null,
  },
  {
    id: '3',
    name: 'Aline Pereira',
    rating: 5,
    comment: 'Impressionada com a dedicação e carinho. Virou minha favorita!',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    media: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    date: '1 semana atrás',
    tag: 'Favorita da semana',
  },
];

export default function ReviewList() {
  const [filter, setFilter] = useState(null);

  const filteredReviews = filter
    ? reviews.filter((r) => r.rating === filter)
    : reviews;

  const renderStars = (count) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {[...Array(5)].map((_, index) => (
          <FontAwesome
            key={index}
            name={index < count ? 'star' : 'star-o'}
            size={14}
            color="#f1c40f"
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Avaliações de Clientes</Text>

      {/* Filtro de Estrelas */}
      <View style={styles.filterRow}>
        {[5, 4].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setFilter(star)}
            style={[
              styles.filterButton,
              filter === star && styles.activeFilter,
            ]}
          >
            <Text style={styles.filterText}>{star} ⭐</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => setFilter(null)}
          style={[styles.filterButton, !filter && styles.activeFilter]}
        >
          <Text style={styles.filterText}>Todas</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Reviews */}
      <FlatList
        data={filteredReviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.headerRow}>
              <Image source={{ uri: item.photo }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              {item.tag && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.tag}</Text>
                </View>
              )}
            </View>
            {renderStars(item.rating)}
            <Text style={styles.comment}>{item.comment}</Text>
            {item.media && (
              <Image source={{ uri: item.media }} style={styles.media} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    
    color: '#222',
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#6c5ce7',
  },
  filterText: {
    fontSize: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
    marginRight: 10,
    marginLeft: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  badge: {
    backgroundColor: '#ffd700',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  comment: {
    fontSize: 13,
    color: '#555',
    marginVertical: 10,
    lineHeight: 18,
  },
  media: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },
});
