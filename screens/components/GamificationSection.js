import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function GamificationSection() {
  const progress = 0.6; // 60%

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>🏅 Sua evolução no App</Text>

      <View style={styles.card}>
        {/* Círculo com troféu */}
        <View style={styles.trophyWrapper}>
          <FontAwesome name="trophy" size={26} color="#f9b233" />
        </View>

        <Text style={styles.levelText}>Cliente Nível 2</Text>
        <Text style={styles.description}>Parabéns! Você concluiu 5 serviços com sucesso.</Text>

        {/* Barra de progresso */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <LinearGradient
              colors={['#f9b233', '#f1c40f']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
            />
          </View>
          <Text style={styles.progressLabel}>60% para atingir o Nível 3</Text>
        </View>

        {/* Conquistas visuais */}
        <View style={styles.achievementsRow}>
          <View style={styles.achievementBadge}>
            <FontAwesome name="check" size={16} color="#2ecc71" />
            <Text style={styles.badgeText}> Verificada</Text>
          </View>
          <View style={styles.achievementBadge}>
            <FontAwesome name="fire" size={16} color="#e74c3c" />
            <Text style={styles.badgeText}> +50 serviços</Text>
          </View>
          <View style={styles.achievementBadge}>
            <FontAwesome name="heart" size={16} color="#e84393" />
            <Text style={styles.badgeText}> Favorita dos Clientes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  trophyWrapper: {
    backgroundColor: '#fff5d1',
    padding: 12,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: '#f9b233',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  levelText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressContainer: {
    width: '100%',
    marginBottom: 14,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    borderRadius: 6,
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  progressLabel: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 6,
  },
  achievementsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  badgeText: {
    fontSize: 12,
    color: '#444',
    marginLeft: 4,
  },
});