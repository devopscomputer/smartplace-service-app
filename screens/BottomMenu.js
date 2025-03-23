import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BottomMenu({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Início */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Second')}>
        <View style={styles.activeCircle}>
          <FontAwesome name="home" size={20} color="#00BFFF" />
        </View>
        <Text style={styles.activeText}>Início</Text>
      </TouchableOpacity>

      {/* Busca */}
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="search" size={20} color="#888" />
        <Text style={styles.inactiveText}>Busca</Text>
      </TouchableOpacity>

      {/* Histórico */}
      <TouchableOpacity style={styles.menuItem}>
        <FontAwesome name="clock-o" size={20} color="#888" />
        <Text style={styles.inactiveText}>Histórico</Text>
      </TouchableOpacity>

      {/* Perfil */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          console.log('🧭 Navegar para perfil');
          navigation.navigate('UserProfile');
        }}
      >
        <FontAwesome name="user" size={20} color="#888" />
        <Text style={styles.inactiveText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 12,
    paddingBottom: 22,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 18,
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  menuItem: {
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    marginBottom: 4,
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12, // Android sombra
  },
  activeText: {
    color: '#00BFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  inactiveText: {
    color: '#888',
    fontSize: 12,
  },
});
