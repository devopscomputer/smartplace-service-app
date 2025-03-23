import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomMenu from '../screens/BottomMenu';
import SuggestedSection from '../screens/components/SuggestedSection';
import MapSection from '../screens/components/MapSection';
import StoriesSection from '../screens/components/StoriesSection';
import GamificationSection from '../screens/components/GamificationSection';
import RehireSection from '../screens/components/RehireSection';
import TestimonialsSection from '../screens/components/TestimonialsSection';

export default function SecondScreen({ navigation }) {
  const cards = [
    {
      title: 'Personal Trainner',
      description: 'Serviços rápidos e práticos',
      location: 'Sorocaba, SP',
      rating: '4.7',
      image: 'https://drive.google.com/uc?export=view&id=18NgewrALKSMYs_8V8XwyudmxEJOlJ-dB',
    },
    {
      title: 'Limpeza Residencial',
      description: 'Faxina completa para casa e apê',
      location: 'São Paulo, SP',
      rating: '4.8',
      image: 'https://drive.google.com/uc?export=view&id=1bOEAVS0o8HRppBWifrqg__ipZeEOAkfd',
    },
    
    {
      title: 'Manutenção Predial',
      description: 'Reparos elétricos e hidráulicos',
      location: 'Campinas, SP',
      rating: '4.6',
      image: 'https://drive.google.com/uc?export=view&id=1LzCrghKev0N6OXEml7511sEFJjVxaWYk',
    },
    {
      title: 'Jardinagem e Paisagismo',
      description: 'Cuidados com jardim e gramado',
      location: 'Ribeirão Preto, SP',
      rating: '4.9',
      image: 'https://drive.google.com/uc?export=view&id=198aNRg2yQ8Wwi70B_bEMqEcVIEof_L9h',
    },
   
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Paulo 👋</Text>
          <Text style={styles.subtitle}>Encontre serviços próximos de você</Text>
        </View>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.avatar}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="#888" style={{ marginRight: 10 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar serviços"
          placeholderTextColor="#888"
        />
        <FontAwesome name="sliders" size={18} color="#888" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        {/* Serviços Populares */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Serviços Populares</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterTabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Mais vistos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Perto de você</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Recentes</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('Profile', { service: card })}
            >
              <ImageBackground
                source={{ uri: card.image }}
                style={styles.cardImage}
                imageStyle={{ borderRadius: 16 }}
              >
                <TouchableOpacity style={styles.heartIcon}>
                  <FontAwesome name="heart-o" size={16} color="#fff" />
                </TouchableOpacity>
                <View style={styles.cardInfoWrapper}>
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardDescription}>{card.description}</Text>
                    <Text style={styles.cardLocation}>{card.location}</Text>
                    <Text style={styles.cardRating}>{card.rating} ⭐</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Componentes avançados abaixo */}
        <SuggestedSection />
        <MapSection />
        <StoriesSection />
        <GamificationSection />
        <RehireSection />
        <TestimonialsSection />
      </ScrollView>

      <BottomMenu navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 13,
    color: '#aaa',
  },
  filterTabs: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginRight: 10,
  },
  inactiveTab: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginRight: 10,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  inactiveTabText: {
    color: '#333',
    fontSize: 13,
  },
  card: {
    width: 160,
    marginRight: 42,
    marginTop: 12,
  },
  cardImage: {
    width: 190,
    height: 260,
    justifyContent: 'flex-end',
    padding: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    borderRadius: 16,
    zIndex: 2,
  },
  cardInfoWrapper: {
    marginLeft: -5,
  },
  cardInfo: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    paddingVertical: 6,
    paddingLeft: 10,
    paddingRight: 4,
    width: '100%',
    minHeight: '36%',
  },
  cardDescription: {
    color: '#eee',
    fontSize: 12,
    marginBottom: 1,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.2,
    marginTop: 1,
  },
  cardLocation: {
    color: '#ccc',
    fontSize: 11,
  },
  cardRating: {
    color: '#fff',
    fontSize: 11,
    marginTop: 2,
  },
});
