import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HeaderProfile() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
      style={styles.cover}
      imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.name}>Maria Izabel</Text>
        <View style={styles.locationRow}>
          <FontAwesome name="map-marker" size={14} color="#fff" />
          <Text style={styles.location}> Campinas, SP</Text>
        </View>
        <Text style={styles.price}>R$ 230</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 280,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  location: {
    color: '#eee',
    fontSize: 13,
  },
  price: {
    marginTop: 8,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
