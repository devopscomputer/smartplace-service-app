import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const suggestions = [
  {
    id: '1',
    title: 'Pintor Residencial',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
  },
  {
    id: '2',
    title: 'Montador de Móveis',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
  },
  {
    id: '3',
    title: 'Limpeza Pós-Obra',
    image: 'https://images.unsplash.com/photo-1598300056270-2c8d1f39cb96',
  },
];

export default function SuggestedSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sugestões para você</Text>
      <FlatList
        horizontal
        data={suggestions}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
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
    marginBottom: 14,
    color: '#222',
  },
  card: {
    marginRight: 14,
    width: 130,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    fontSize: 13,
    color: '#333',
    paddingHorizontal: 8,
    paddingTop: 6,
    textAlign: 'center',
  },
});
