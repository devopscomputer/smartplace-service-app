import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const topRatedProviders = [
  {
    name: 'Carlos Andrade',
    specialty: 'Encanador Certificado',
    location: 'Campinas, SP',
    rating: 4.9,
    reviews: 152,
    verified: true,
    badge: 'Top Pro',
    profileImage: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    name: 'Luciana Silva',
    specialty: 'Diarista Profissional',
    location: 'São Paulo, SP',
    rating: 4.8,
    reviews: 198,
    verified: true,
    badge: 'Favorita da Semana',
    profileImage: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function TopRatedSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>🌟 Top Prestadores Avaliados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topRatedProviders.map((pro, index) => (
          <TouchableOpacity style={styles.card} key={index}>
            <Image source={{ uri: pro.profileImage }} style={styles.avatar} />
            <View style={styles.infoWrapper}>
              <Text style={styles.name}>{pro.name}</Text>
              <Text style={styles.specialty}>{pro.specialty}</Text>
              <View style={styles.row}>
                <FontAwesome name="map-marker" size={12} color="#888" />
                <Text style={styles.location}> {pro.location}</Text>
              </View>
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={12} color="#f1c40f" />
                <Text style={styles.rating}> {pro.rating} ({pro.reviews})</Text>
                {pro.verified && (
                  <View style={styles.badge}>
                    <Feather name="check-circle" size={12} color="#2ecc71" />
                    <Text style={styles.badgeText}> Verificado</Text>
                  </View>
                )}
              </View>
              <View style={styles.highlightTag}>
                <Text style={styles.highlightText}>🏅 {pro.badge}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default TopRatedSection;

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
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 4,
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
  highlightTag: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  highlightText: {
    fontSize: 12,
    color: '#8e44ad',
    fontWeight: '600',
  },
});
