import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');

export default function CoverageMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Área de Atendimento</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.909938,
          longitude: -47.062633,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={{ latitude: -22.909938, longitude: -47.062633 }}
          title="Base do Prestador"
          description="Atendimento em Campinas e região."
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  map: {
    width: width - 40,
    height: 200,
    borderRadius: 12,
  },
});
