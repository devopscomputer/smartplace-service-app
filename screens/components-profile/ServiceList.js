import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const services = [
  {
    id: '1',
    title: 'Limpeza Residencial',
    description: 'Serviço completo para residências: higienização de pisos, superfícies, banheiros, vidros e áreas comuns. Ideal para manutenção semanal ou quinzenal.'
  },
  {
    id: '2',
    title: 'Limpeza Pós-Obra',
    description: 'Remoção de poeira, tinta, cimento e resíduos de reforma com equipe especializada, garantindo um ambiente pronto para uso imediato.'
  },
  {
    id: '3',
    title: 'Organização Profissional',
    description: 'Transforme seu espaço! Organização de armários, documentos, closets e escritórios com técnicas de otimização, categorização e estética funcional.'
  },
];

export default function ServiceList() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        <Text style={{ color: '#000' }}>Serviços Oferecidos</Text>
      </Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <View style={styles.iconDot} />
            <View style={styles.textBox}>
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    color: '#333',
    marginBottom: 16,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconDot: {
    width: 2,
    height: 2,
    borderRadius: 5,
    backgroundColor: '#000',
    marginTop: 28,
    marginRight: 22,
  },
  textBox: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  separator: {
    height: 18,
  },
});
