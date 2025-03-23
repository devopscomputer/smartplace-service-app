import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Badges() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Selos de Confiança</Text>

      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <FontAwesome5 name="user-check" size={22} color="#2ecc71" />
          <Text style={styles.badgeText}>Identidade verificada</Text>
        </View>

        <View style={styles.badge}>
          <MaterialIcons name="verified" size={22} color="#3498db" />
          <Text style={styles.badgeText}>Profissional certificado</Text>
        </View>

        <View style={styles.badge}>
          <Feather name="award" size={22} color="#f1c40f" />
          <Text style={styles.badgeText}>Top Prestador 2025</Text>
        </View>
      </View>

      <View style={styles.highlightCard}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' }}
          style={styles.shieldIcon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.highlightTitle}>Garantia FreshClean</Text>
          <Text style={styles.highlightText}>
            Serviço protegido por política de satisfação total ou seu dinheiro de volta. Confiança garantida!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 0,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 22,
    marginTop: 22,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    
  },
  badge: {
    marginTop: 0,
    alignItems: 'center',
    flex: 1,
  },
  badgeText: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginTop: 6,
    
  },
  highlightCard: {
    flexDirection: 'row',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 12,
    marginRight: 8,
    marginLeft: 6,
  },
  shieldIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  highlightTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#2c3e50',
  },
  highlightText: {
    fontSize: 10,
    color: '#555',
    
  },
});
