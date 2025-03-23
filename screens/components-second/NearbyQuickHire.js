import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const quickHireData = [
  {
    id: 1,
    name: 'Joana Lima',
    service: 'Limpeza Expressa',
    image:
      'https://images.unsplash.com/photo-1592126793548-25ef3d574014?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    location: 'Próximo a você',
    nextSlot: 'Hoje às 14h',
  },
  {
    id: 2,
    name: 'Carlos Duarte',
    service: 'Manutenção Rápida',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=300&q=80',
    rating: 4.8,
    location: 'Campinas, SP',
    nextSlot: 'Hoje às 15h',
  },
  {
    id: 3,
    name: 'Fernanda Souza',
    service: 'Organização de Ambientes',
    image:
      'https://images.unsplash.com/photo-1590080876214-fd729ccfa9eb?auto=format&fit=crop&w=300&q=80',
    rating: 5.0,
    location: 'Próximo a você',
    nextSlot: 'Hoje às 16h',
  },
];

export default function NearbyQuickHire() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>⚡ Agendamento Imediato</Text>
      <Text style={styles.sectionSubtitle}>Profissionais com horários disponíveis hoje</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 12 }}
      >
        {quickHireData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.infoWrapper}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.service}>{item.service}</Text>
              <Text style={styles.location}>
                <FontAwesome name="map-marker" size={12} color="#666" /> {item.location}
              </Text>
              <Text style={styles.slot}>🕒 {item.nextSlot}</Text>
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={14} color="#f1c40f" />
                <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
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
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  infoWrapper: {
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  service: {
    fontSize: 13,
    color: '#444',
    marginBottom: 2,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  slot: {
    fontSize: 12,
    color: '#27ae60',
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 13,
    color: '#555',
  },
});
