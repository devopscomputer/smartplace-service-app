import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const testimonials = [
  {
    id: '1',
    name: 'Carla M.',
    comment: 'Serviço impecável! Recomendo muito.',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Lucas R.',
    comment: 'Rápido, limpo e confiável. Excelente!',
    photo: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Depoimentos</Text>
      <FlatList
        horizontal
        data={testimonials}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.comment}>"{item.comment}"</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 12,
    width: 178, // 10% menor que 220
    marginRight: 12,
    alignItems: 'center', // centraliza imagem e textos
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 12,
    marginTop: 12,
    marginRight: 10,
    marginLeft: 1,
  },
  photo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
  },
  comment: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
