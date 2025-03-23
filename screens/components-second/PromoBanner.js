import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PromoBanner() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1588776814546-ec7d83d8c342?auto=format&fit=crop&w=800&q=80' }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 20 }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)"]}
          style={styles.overlay}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.badgeRow}>
              <Text style={styles.badge}>🔥 Oferta Especial</Text>
            </View>
            <Text style={styles.title}>15% OFF em serviços Premium</Text>
            <Text style={styles.subtitle}>Válido até domingo • Para novos agendamentos</Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaText}>Agendar agora</Text>
              <FontAwesome5 name="arrow-right" size={14} color="#fff" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  imageBackground: {
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  contentWrapper: {
    justifyContent: 'flex-end',
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#ddd',
    marginBottom: 12,
  },
  ctaButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
