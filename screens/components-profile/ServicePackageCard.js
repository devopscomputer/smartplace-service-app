import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const packages = [
  {
    id: '1',
    title: 'Pacote Standard',
    description: 'Limpeza completa de 2 ambientes, sem lavagem de roupas.',
    price: '150',
    bg: 'https://images.unsplash.com/photo-1600891964599-f61ba0e2402',
  },
  {
    id: '2',
    title: 'Pacote Premium',
    description: 'Limpeza de toda a casa incluindo banheiros, cozinha, vidros e lavanderia.',
    price: '280',
    bg: 'https://images.unsplash.com/photo-1600891965056-7c9d2c30db1f',
  },
];

const galleryItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1618221780383-d1d42a93df5f',
  },
];

export default function ServicePackageCard() {
  const navigation = useNavigation();

  const handleCheckout = (item) => {
    navigation.navigate('Checkout', {
      service: item.title,
      price: item.price,
      description: item.description,
      servant: {
        name: 'João da Silva',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        age: '32',
        experience: '5 anos',
        region: 'Campinas, SP',
        rating: '4.8',
        reviews: '52',
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>📦 Pacotes de Serviço</Text>
      {packages.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.9}>
          <ImageBackground
            source={{ uri: item.bg }}
            style={styles.cardBackground}
            imageStyle={styles.imageStyle}
          >
            <BlurView intensity={50} tint="light" style={styles.blurOverlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
                  {galleryItems.map((img) => (
                    <View key={img.id} style={styles.galleryCard}>
                      <Image source={{ uri: img.image }} style={styles.galleryImage} />
                    </View>
                  ))}
                </ScrollView>

                <View style={styles.footerRow}>
                  <Text style={styles.price}>R$ {item.price}</Text>
                  <TouchableOpacity style={styles.bookButton} onPress={() => handleCheckout(item)}>
                    <Text style={styles.bookButtonText}>Agendar</Text>
                    <FontAwesome name="arrow-right" size={14} color="#fff" style={{ marginLeft: 6 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  card: {
    marginBottom: -19,
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardBackground: {
    width: width - 40,
    height: 260,
    justifyContent: 'flex-end',
    borderRadius: 24,
  },
  imageStyle: {
    borderRadius: 24,
  },
  blurOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 24,
    padding: 16,
  },
  overlayContent: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#333',
    marginBottom: 10,
  },
  galleryScroll: {
    marginBottom: 10,
  },
  galleryCard: {
    width: 100,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  bookButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
