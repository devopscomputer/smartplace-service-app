import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

export default function ProfileBio() {
  return (
    <View style={styles.container}>
      {/* Título da Seção */}
      <Text style={styles.sectionTitle}>🙋‍♀️ Sobre a Profissional</Text>

      {/* Bio Curta */}
      <Text style={styles.bioText}>
        Maria Izabel é especialista em limpeza residencial, com mais de 10 anos de experiência e ênfase em atendimento humanizado, organização e pontualidade.
      </Text>

      {/* Certificações e Formação */}
      <View style={styles.sectionBlock}>
        <Text style={styles.subtitle}>🎓 Qualificações</Text>
        <Text style={styles.item}>• Técnico em Limpeza Profissional – SENAC</Text>
        <Text style={styles.item}>• Certificada em Higienização Pós-Obra</Text>
        <Text style={styles.item}>• Curso de Atendimento ao Cliente</Text>
      </View>

      {/* Diferenciais Visuais */}
      <View style={styles.sectionBlock}>
        <Text style={styles.subtitle}>✨ Diferenciais</Text>
        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Feather name="check-circle" size={14} color="#2ecc71" />
            <Text style={styles.tagText}> 100% Satisfação</Text>
          </View>
          <View style={styles.tag}>
            <Feather name="truck" size={14} color="#3498db" />
            <Text style={styles.tagText}> Atende no mesmo dia</Text>
          </View>
          <View style={styles.tag}>
            <Feather name="shield" size={14} color="#9b59b6" />
            <Text style={styles.tagText}> Verificada</Text>
          </View>
        </View>
      </View>

      {/* Redes Sociais e Link */}
      <View style={styles.sectionBlock}>
        <Text style={styles.subtitle}>🔗 Presença Digital</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/maria.izabel')}>
          <Text style={styles.link}>
            <Entypo name="instagram" size={16} color="#e1306c" /> @maria.izabel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://maria-clean.com')}>
          <Text style={styles.link}>
            <Feather name="link" size={16} color="#2c3e50" /> maria-clean.com
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  bioText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 18,
  },
  sectionBlock: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  item: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    color: '#333',
  },
  link: {
    fontSize: 13,
    color: '#2980b9',
    marginBottom: 6,
  },
});
