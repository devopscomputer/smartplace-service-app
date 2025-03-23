import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BottomMenu from '../BottomMenu';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Avatar e Nome */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>João da Silva</Text>
            <Text style={styles.sub}>Cliente VIP • Campinas, SP</Text>
          </View>
        </View>

        {/* Navegação */}
        <View style={styles.navSection}>
          <MenuItem icon="user" label="Informações Pessoais" />
          <MenuItem icon="star" label="Status VIP e Conquistas" />
          <MenuItem icon="calendar" label="Meus Agendamentos" />
          <MenuItem icon="heart" label="Favoritos" />
          <MenuItem icon="credit-card" label="Pagamentos e Faturas" />
          <MenuItem icon="settings" label="Preferências" />
          <MenuItem icon="message-circle" label="Suporte e Ajuda" />
          <MenuItem icon="bell" label="Notificações" />
          <MenuItem icon="clock" label="Histórico de Interações" />
          <MenuItem icon="log-out" label="Sair da Conta" isLogout />
        </View>
      </ScrollView>
      <BottomMenu />
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, label, isLogout }) => (
  <TouchableOpacity style={[styles.menuItem, isLogout && styles.logoutItem]}>
    <View style={styles.iconLabel}>
      <Feather name={icon} size={16} color={isLogout ? '#e74c3c' : '#333'} />
      <Text style={[styles.label, isLogout && styles.logoutText]}>{label}</Text>
    </View>
    {!isLogout && <Feather name="chevron-right" size={16} color="#999" />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  scrollContent: {
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 44,        // 👈 Aqui adiciona espaçamento entre topo e avatar
    marginBottom: 44,
    marginLeft: 45,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  sub: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  navSection: {
    
    gap: 12,
  },
  menuItem: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    
    fontSize: 13,
    color: '#333',
  },
  logoutItem: {
    backgroundColor: '#fff5f5',
  },
  logoutText: {
    color: '#e74c3c',
    fontWeight: '600',
  },
});

export default UserProfileScreen;
