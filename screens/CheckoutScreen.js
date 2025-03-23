// CheckoutScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import BottomMenu from '../screens/BottomMenu';

const { width } = Dimensions.get('window');

export default function CheckoutScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { servant } = route.params;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [loadingRecommendations, setLoadingRecommendations] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRecommendations([
        {
          id: '1',
          title: 'Limpeza Residencial Profunda',
          rating: 4.9,
          region: 'Campinas, SP',
          image: 'https://images.unsplash.com/photo-1581579185169-1b5bcbf84a1b',
          badge: 'Top Pro',
        },
        {
          id: '2',
          title: 'Serviço de Jardinagem',
          rating: 4.8,
          region: 'Valinhos, SP',
          image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf',
          badge: '🔥 Popular',
        },
      ]);
      setLoadingRecommendations(false);
    }, 1000);
  }, []);

  const handleDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
      setIsDateSelected(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
          style={styles.headerBackground}
          imageStyle={styles.headerImageStyle}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.headerName}>{servant.name}</Text>
            <View style={styles.headerLocationRow}>
              <FontAwesome name="map-marker" size={14} color="#fff" />
              <Text style={styles.headerLocation}> {servant.region}</Text>
            </View>
            <Text style={styles.headerPrice}>R$ 280,00</Text>
          </View>
        </ImageBackground>

        {/* Badges */}
        <View style={styles.badgeContainer}>
          <Text style={styles.sectionTitle}>Selos de Confiança</Text>
          <View style={styles.badgeRow}>
            <View style={styles.badge}><Feather name="check-circle" size={20} color="#2ecc71" /><Text style={styles.badgeText}>Verificado</Text></View>
            <View style={styles.badge}><Feather name="award" size={20} color="#f1c40f" /><Text style={styles.badgeText}>Top 2025</Text></View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioCard}>
          <Text style={styles.bioText}>Olá! Me chamo {servant.name}, tenho {servant.age} anos e trabalho com serviços residenciais há {servant.experience}. Minha missão é deixar seu lar impecável com carinho e profissionalismo.</Text>
        </View>

        {/* Destaques */}
        <View style={styles.highlightCard}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <Text style={styles.highlightText}>+200 clientes atendidos | 80% recorrentes | 10 anos de experiência</Text>
        </View>

        {/* Detalhes do Serviço */}
        <View style={styles.serviceCard}>
          <Text style={styles.sectionTitle}>Serviço Premium</Text>
          <Text style={styles.description}>Limpeza completa da casa: cozinha, banheiros, vidros e lavanderia. Ideal para limpezas profundas.</Text>
        </View>

        {/* Portfólio */}
        <View style={styles.galleryCard}>
          <Text style={styles.sectionTitle}>Portfólio</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                source={{ uri: `https://picsum.photos/200/150?random=${i}` }}
                style={styles.galleryImage}
              />
            ))}
          </ScrollView>
        </View>

        {/* Reviews */}
        <View style={styles.reviewCard}>
          <Text style={styles.sectionTitle}>Avaliações</Text>
          <Text style={styles.reviewItem}>"Excelente serviço, muito caprichosa!" ⭐⭐⭐⭐⭐</Text>
          <Text style={styles.reviewItem}>"Chegou no horário e fez tudo com perfeição." ⭐⭐⭐⭐⭐</Text>
        </View>

        {/* Mapa */}
        <View style={styles.mapCard}>
          <Text style={styles.sectionTitle}>📍 Área de Atendimento</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -22.909,
              longitude: -47.062,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
            }}
          >
            <Marker coordinate={{ latitude: -22.909, longitude: -47.062 }} title="Base" />
          </MapView>
        </View>

        {/* Data */}
        <View style={styles.dateSection}>
  <Text style={styles.sectionTitle}>Escolha a data</Text>

  <TouchableOpacity style={styles.dateButton} onPress={() => setShowPicker(true)}>
    <Text style={styles.dateButtonText}>Selecionar Data</Text>
  </TouchableOpacity>

  {showPicker && (
    <DateTimePicker
      value={selectedDate}
      mode="date"
      display="default"
      onChange={handleDateChange}
      minimumDate={new Date()}
    />
  )}

  {/* Tudo abaixo só aparece após a seleção da data */}
  {isDateSelected && (
    <>
      <Text style={styles.selectedDate}>
        Data selecionada: {selectedDate.toLocaleDateString()}
      </Text>

      <View style={styles.confirmationBox}>
        <Text style={styles.confirmationTitle}>Confirmação do agendamento</Text>
        <Text style={styles.confirmationItem}>
          {selectedDate.toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <Text style={styles.confirmationItem}>Horário sugerido: Entre 14h e 16h</Text>
        <Text style={styles.confirmationItem}>Prestador: {servant.name}</Text>
        <Text style={styles.confirmationItem}>Região: {servant.region}</Text>
        <Text style={styles.confirmationItem}>Serviço: Limpeza Premium</Text>
        <Text style={styles.confirmationItem}>Total: R$ 280,00</Text>
        <TouchableOpacity>
          <Text style={styles.alterarText}>Alterar Data ou Serviço</Text>
        </TouchableOpacity>
      </View>
    </>
  )}
</View>


        {/* Pagamento */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Pagamento</Text>
          {[{ label: 'Cartão de Crédito', icon: 'credit-card', colors: ['#4FC3F7', '#039BE5'] },
            { label: 'Pix', icon: 'qrcode', colors: ['#00C853', '#2E7D32'] },
            { label: 'Boleto', icon: 'barcode', colors: ['#FF7043', '#F4511E'] }].map((method) => (
              <TouchableOpacity
                key={method.label}
                style={[styles.paymentButton, !isDateSelected && styles.disabledButton]}
                disabled={!isDateSelected}
                onPress={() => navigation.navigate('PaymentConfirmation', {
                  servant,
                  selectedDate: selectedDate.toLocaleDateString(),
                  method: method.label
                })}
              >
                <View style={styles.paymentButtonInner}>
  <FontAwesome name={method.icon} size={18} color="#222" />
  <Text style={styles.paymentTextModern}>{method.label}</Text>
</View>

              </TouchableOpacity>
            ))}
        </View>

        {/* Promo Banner */}
        <TouchableOpacity style={styles.promoBanner}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1588776814546-ec7d83d8c342' }}
            style={styles.bannerImage}
            imageStyle={{ borderRadius: 20 }}
          >
            <LinearGradient colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)"]} style={styles.bannerOverlay}>
              <Text style={styles.bannerTitle}>15% OFF em serviços Premium</Text>
              <Text style={styles.bannerSubtitle}>Válido até domingo</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>

        {/* Recomendações com IA */}
        <View style={styles.aiSection}>
          <Text style={styles.sectionTitle}>Recomendações para você</Text>
          {loadingRecommendations ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {recommendations.map((rec) => (
                <TouchableOpacity key={rec.id} style={styles.aiCard}>
                  <ImageBackground source={{ uri: rec.image }} style={styles.aiImage} imageStyle={{ borderRadius: 16 }}>
                    <View style={styles.aiOverlay}><Text style={styles.aiBadge}>{rec.badge}</Text></View>
                    <View style={styles.aiInfo}>
                      <Text style={styles.aiTitle}>{rec.title}</Text>
                      <Text style={styles.aiMeta}>{rec.region} • {rec.rating} ⭐</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Botão Fixo */}
      <View style={styles.floatingCTA}>
        <TouchableOpacity style={styles.ctaButton} disabled={!isDateSelected}>
          <Text style={styles.ctaText}>Confirmar Agendamento • R$ 280,00</Text>
        </TouchableOpacity>
      </View>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: 160 },
  headerBackground: { height: 240, justifyContent: 'flex-end' },
  headerImageStyle: { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerOverlay: { backgroundColor: 'rgba(0,0,0,0.4)', padding: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerName: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  headerLocationRow: { flexDirection: 'row', marginTop: 4 },
  headerLocation: { color: '#eee', fontSize: 13 },
  headerPrice: { marginTop: 8, color: '#fff', fontSize: 18, fontWeight: '600' },
  badgeContainer: { padding: 20 },
  badgeRow: { flexDirection: 'row', gap: 14 },
  badge: { flexDirection: 'row', alignItems: 'center' },
  badgeText: { marginLeft: 8, color: '#333', fontSize: 13 },
  bioCard: { paddingHorizontal: 20, marginBottom: 20 },
  bioText: { fontSize: 14, color: '#444', lineHeight: 20 },
  highlightCard: { paddingHorizontal: 20, marginBottom: 20 },
  highlightText: { fontSize: 13, color: '#555' },
  serviceCard: { backgroundColor: '#f9f9f9', padding: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 12 },
  description: { fontSize: 14, color: '#444' },
  galleryCard: { paddingLeft: 20, marginBottom: 20 },
  galleryImage: { width: width * 0.6, height: 160, borderRadius: 16, marginRight: 16 },
  reviewCard: { paddingHorizontal: 20, marginBottom: 20 },
  reviewItem: { fontSize: 13, color: '#444', marginBottom: 8 },
  mapCard: { paddingHorizontal: 20, marginBottom: 20 },
  map: { width: width - 40, height: 200, borderRadius: 12 },
  dateSection: { paddingHorizontal: 20, marginBottom: 20 },
  dateButton: {
    backgroundColor: '#111',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  confirmationBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  confirmationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  confirmationItem: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  alterarText: {
    marginTop: 10,
    fontSize: 13,
    color: '#039BE5',
    fontWeight: '600',
  },
  
  
  dateButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  selectedDate: { marginTop: 10, textAlign: 'center', color: '#333' },
  paymentSection: { paddingHorizontal: 20, marginBottom: 20 },
  paymentButton: {
    marginBottom: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  
  paymentButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  
  paymentTextModern: {
    color: '#222',
    fontSize: 15,
    fontWeight: '600',
  },
  
  disabledButton: { opacity: 0.5 },
  gradientButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 12, gap: 10 },
  paymentText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  promoBanner: { marginHorizontal: 20, marginBottom: 30 },
  bannerImage: { height: 160, borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-end' },
  bannerOverlay: { flex: 1, padding: 20, borderRadius: 20, justifyContent: 'flex-end' },
  bannerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  bannerSubtitle: { fontSize: 13, color: '#ddd' },
  aiSection: { paddingLeft: 20, marginBottom: 20 },
  aiCard: { width: 180, height: 240, borderRadius: 16, marginRight: 18, overflow: 'hidden' },
  aiImage: { width: '100%', height: '100%', justifyContent: 'flex-end' },
  aiOverlay: { position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 3 },
  aiBadge: { fontSize: 11, fontWeight: 'bold', color: '#333' },
  aiInfo: { backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  aiTitle: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  aiMeta: { fontSize: 12, color: '#eee', marginTop: 2 },
  floatingCTA: { position: 'absolute', bottom: 20, left: 20, right: 20 },
  ctaButton: { backgroundColor: '#222', padding: 16, borderRadius: 16, alignItems: 'center', elevation: 8 },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

