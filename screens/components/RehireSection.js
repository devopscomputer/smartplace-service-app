import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const previous = [
  {
    id: '1',
    title: 'Limpeza Rápida',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=80',
},
  {
    id: '2',
    title: 'Eletricista',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    title: 'Montador de Móveis',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '4',
    title: 'Jardinagem',    
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=80',
},
];

export default function RehireSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔁 Contrate novamente</Text>
      <FlatList
        horizontal
        data={previous}
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
            <TouchableOpacity>
              <Text style={styles.button}>Agendar</Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
    marginRight: 4,
    marginLeft: 4,
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
  button: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6c5ce7',
  },
});
