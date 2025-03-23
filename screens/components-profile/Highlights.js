// components-profile/Highlights.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Highlights() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Destaques do Profissional</Text>

      {/* Estatísticas visuais */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <FontAwesome name="calendar" size={24} color="#4caf50" />
          <Text style={styles.statText}>10 anos</Text>
          <Text style={styles.statLabel}>de experiência</Text>
        </View>

        <View style={styles.statBox}>
          <FontAwesome name="users" size={24} color="#2196f3" />
          <Text style={styles.statText}>+200</Text>
          <Text style={styles.statLabel}>clientes atendidos</Text>
        </View>

        <View style={styles.statBox}>
          <FontAwesome name="repeat" size={24} color="#ff9800" />
          <Text style={styles.statText}>80%</Text>
          <Text style={styles.statLabel}>clientes recorrentes</Text>
        </View>
      </View>

      {/* Badges visuais */}
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <MaterialCommunityIcons name="shield-check" size={20} color="#fff" />
          <Text style={styles.badgeText}>Identidade Verificada</Text>
        </View>
        <View style={styles.badge}>
          <MaterialCommunityIcons name="account-check" size={20} color="#fff" />
          <Text style={styles.badgeText}>Background OK</Text>
        </View>
        <View style={styles.badge}>
          <MaterialCommunityIcons name="medal" size={20} color="#fff" />
          <Text style={styles.badgeText}>Top Prestador</Text>
        </View>
        <View style={styles.badge}>
          <MaterialCommunityIcons name="fire" size={20} color="#fff" />
          <Text style={styles.badgeText}>🔥 Muito contratado</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    width: '30%',
  },
  statText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  badge: {
    flexDirection: 'row',
    backgroundColor: '#6c5ce7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 10,
  },
  badgeText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '500',
  },
});