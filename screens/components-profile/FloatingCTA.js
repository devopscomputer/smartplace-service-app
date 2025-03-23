// FloatingCTA.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Share } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function FloatingCTA() {
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Confira este prestador incrível no FreshClean!',
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="heart" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="message-circle" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="calendar" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Feather name="share-2" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    flexDirection: 'column',
    gap: 12,
    zIndex: 999,
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
});
