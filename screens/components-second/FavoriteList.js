import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const favorites = [
  {
    name: 'Juliana Costa',
    specialty: 'Organizadora Profissional',
    location: 'São Paulo, SP',
    rating: 4.9,
    reviews: 89,
    verified: true,
    tag: 'Top Pro',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
  },
  {
    name: 'Ricardo Martins',
    specialty: 'Eletricista e Técnico',
    location: 'Campinas, SP',
    rating: 4.8,
    reviews: 132,
    verified: true,
    tag: 'Favorito da Semana',
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
];

export default function FavoriteList() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>💖 Seus Favoritos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((fav, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: fav.image }} style={styles.avatar} />
            <View style={styles.infoWrapper}>
              <Text style={styles.name}>{fav.name}</Text>
              <Text style={styles.specialty}>{fav.specialty}</Text>
              <View style={styles.row}>
                <FontAwesome name="map-marker" size={12} color="#888" />
                <Text style={styles.location}> {fav.location}</Text>
              </View>
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={12} color="#f1c40f" />
                <Text style={styles.rating}> {fav.rating} ({fav.reviews})</Text>
                {fav.verified && (
                  <View style={styles.badge}>
                    <Feather name="check-circle" size={12} color="#2ecc71" />
                    <Text style={styles.badgeText}> Verificado</Text>
                  </View>
                )}
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>🏅 {fav.tag}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
    width: 300,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 14,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  specialty: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    color: '#444',
    marginLeft: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eafaf1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 14,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 11,
    color: '#2ecc71',
    marginLeft: 4,
  },
  tagBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  tagText: {
    fontSize: 12,
    color: '#8e44ad',
    fontWeight: '600',
  },
});