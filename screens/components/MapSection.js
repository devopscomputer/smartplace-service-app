// components/MapSection.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const professionals = [
  {
    name: 'João Eletricista',
    distance: '1.2 km',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ana Faxineira',
    distance: '2.5 km',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Carlos Encanador',
    distance: '3.1 km',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
];

export default function MapSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profissionais no mapa</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1604472738363-743f9da1eeb2?auto=format&fit=crop&w=800&q=80',
        }}
        style={styles.mapImage}
      />

      <FlatList
        horizontal
        data={professionals}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.proCard} activeOpacity={0.8}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proDistance}>{item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  mapImage: {
    width: '100%',
    height: 5,
    borderRadius: 16,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingVertical: 4,
  },
  proCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  proName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  proDistance: {
    fontSize: 12,
    color: '#666',
  },
});
