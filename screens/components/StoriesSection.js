import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const stories = [
  {
    id: '1',
    name: 'Claudia Lima',
    specialty: 'Designer de Interiores',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '2',
    name: 'Lucas Rocha',
    specialty: 'Encanador',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: '3',
    name: 'Mariana Souza',
    specialty: 'Organizadora Profissional',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

export default function StoriesSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórias de prestadores</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyCard} activeOpacity={0.85}>
            <View style={styles.glowContainer}>
              <Image source={{ uri: story.image }} style={styles.image} />
            </View>
            <Text style={styles.name}>{story.name}</Text>
            <Text style={styles.specialty}>{story.specialty}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginBottom: 12,
    color: '#111',
  },
  storyCard: {
    width: width * 0.26,
    marginRight: 10,
    marginLeft: 2,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  glowContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#00BFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 14,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  specialty: {
    fontSize: 11,
    color: '#777',
    textAlign: 'center',
  },
});
