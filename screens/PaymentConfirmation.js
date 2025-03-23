// PaymentConfirmation.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import CoverageMap from './components-profile/CoverageMap';

import Badges from './components-profile/Badges';
import ReviewList from './components-profile/ReviewList';

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

export default function PaymentConfirmation({ route, navigation }) {
  const { servant, selectedDate, method } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <Feather name="check-circle" size={48} color="#2ecc71" />
        <Text style={styles.headerTitle}>Agendamento Confirmado</Text>
        <Text style={styles.headerSubtitle}>Tudo certo para sua experiência com {servant.name}!</Text>
      </View>

      {/* Prestador */}
      <View style={styles.providerCard}>
        <Image source={{ uri: servant.image }} style={styles.avatar} />
        <View style={styles.providerInfo}>
          <Text style={styles.providerName}>{servant.name}</Text>
          <Text style={styles.providerRating}>{servant.rating} ⭐ ({servant.reviews})</Text>
          <Text style={styles.providerRegion}>{servant.region}</Text>
        </View>
      </View>

      {/* Serviço Resumido */}
      <View style={styles.serviceCard}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
          style={styles.serviceImage}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.serviceOverlay}>
            <Text style={styles.serviceTitle}>Limpeza Premium</Text>
            <Text style={styles.servicePrice}>R$ 280,00</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Galeria */}
      <View style={styles.galleryCard}>
        <Text style={styles.sectionTitle}>📸 Serviços Realizados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {galleryItems.map((item) => (
            <View key={item.id} style={styles.galleryImageWrapper}>
              <ImageBackground source={{ uri: item.image }} style={styles.galleryImage} imageStyle={{ borderRadius: 12 }}>
                <View style={styles.overlayLabel}>
                  <FontAwesome name="camera" size={14} color="#fff" style={{ marginRight: 4 }} />
                  <Text style={styles.labelText}>{item.label}</Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>

      

      {/* Resumo do Agendamento */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}> Detalhes do Agendamento</Text>
        <Text style={styles.detail}>Serviço: Limpeza Premium</Text>
        <Text style={styles.detail}>Data: {selectedDate}</Text>
        <Text style={styles.detail}>Horário estimado: 14h - 16h</Text>
        <Text style={styles.detail}>Forma de pagamento: {method}</Text>
        <Text style={styles.detail}>Código da transação: #1234567890</Text>
        <Text style={styles.detail}>Data do pagamento: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.total}>Total pago: R$ 280,00</Text>
      </View>
      <Badges />
      <ReviewList />
      <CoverageMap />

      {/* CTA */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate('SecondScreen')}
      >
        <Text style={styles.ctaText}>Voltar para a página inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', marginTop: 75, },
  headerWrapper: { paddingTop: 50, paddingBottom: 20, alignItems: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#222', marginTop: 10 },
  headerSubtitle: { fontSize: 14, color: '#777', marginTop: 6, textAlign: 'center', paddingHorizontal: 30 },
  
  providerCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#f9f9f9', padding: 6, marginHorizontal: 50,
    borderRadius: 118, elevation: 3, marginBottom: 40,
  },
  avatar: { width: 50, height: 50, borderRadius: 35, marginRight: 16 },
  providerInfo: { flex: 1 },
  providerName: { fontSize: 15, fontWeight: 'bold', color: '#222' },
  providerRating: { fontSize: 13, color: '#555', marginTop: 2 },
  providerRegion: { fontSize: 13, color: '#777', marginTop: 2 },
  serviceCard: { marginHorizontal: 20, borderRadius: 16, overflow: 'hidden', marginBottom: 20 },
  serviceImage: { height: 140, justifyContent: 'flex-end' },
  serviceOverlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 12, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  serviceTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  servicePrice: { color: '#fff', fontSize: 14, marginTop: 4 },
  infoCard: {
     marginHorizontal: 10, padding: 20,
    marginBottom: 8, marginTop: -19,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#222', marginBottom: 8 },
  detail: { fontSize: 14, color: '#444', marginBottom: 0 },
  total: { fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 10 },
  galleryCard: { paddingHorizontal: 20, marginBottom: 30 },
  galleryImageWrapper: {
    width: 140, height: 100, borderRadius: 12, overflow: 'hidden', marginRight: 12,
  },
  galleryImage: { width: '100%', height: '100%' },
  overlayLabel: {
    position: 'absolute', bottom: 8, left: 8, backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center',
  },
  labelText: { color: '#fff', fontSize: 12, fontWeight: '500' },
  ctaButton: {
    marginTop: 20, marginHorizontal: 20, backgroundColor: '#222',
    paddingVertical: 16, borderRadius: 16, alignItems: 'center',
  },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
