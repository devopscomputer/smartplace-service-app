import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const galleryItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    label: 'Antes',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    label: 'Depois',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    label: 'Durante o serviço',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    label: 'Resultado final',
  },
];

export default function PortfolioGallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfólio de Trabalhos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {galleryItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlayLabel}>
              <FontAwesome name="camera" size={14} color="#fff" style={{ marginRight: 4 }} />
              <Text style={styles.labelText}>{item.label}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    marginBottom: 14,
    color: '#333',
  },
  card: {
    width: width * 0.6,
    marginBottom: 10,
    marginTop: 10,
    height: 170,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayLabel: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});
