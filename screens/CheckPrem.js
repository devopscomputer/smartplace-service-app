import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function CheckoutScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { servant } = route.params;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const onDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
      setIsDateSelected(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Info do prestador */}
      <View style={styles.servantInfo}>
        <Image source={{ uri: servant.image }} style={styles.servantImage} />
        <View style={styles.servantDetails}>
          <Text style={styles.servantName}>{servant.name}</Text>
          <Text style={styles.servantDetail}>Idade: {servant.age}</Text>
          <Text style={styles.servantDetail}>Experiência: {servant.experience}</Text>
          <Text style={styles.servantDetail}>Região: {servant.region}</Text>
          <Text style={styles.servantRating}>
            {servant.rating} <FontAwesome name="star" size={14} color="#FFD700" /> ({servant.reviews})
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Checkout - Serviço Premium</Text>

      {/* Descrição do serviço */}
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          Você selecionou o serviço <Text style={styles.highlight}>Premium</Text>. Inclui:
        </Text>
        <Text style={styles.bullet}>• Limpeza completa da casa</Text>
        <Text style={styles.bullet}>• Cozinha, banheiro, vidros e lavanderia</Text>
        <Text style={styles.bullet}>• Ideal para limpezas profundas e detalhadas</Text>
      </View>

      {/* Seleção de data */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Escolha a data:</Text>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Selecionar Data</Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onDateChange}
            minimumDate={new Date()}
          />
        )}

        {isDateSelected && (
          <Text style={styles.selectedDateText}>
            Data selecionada: {selectedDate.toLocaleDateString()}
          </Text>
        )}
      </View>

      <Text style={styles.price}>Total: R$ 280,00</Text>

      {/* Opções de pagamento */}
      <View style={styles.paymentOptions}>
        <Text style={styles.paymentTitle}>Escolha o pagamento:</Text>

        {/* Cartão */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]}
          disabled={!isDateSelected}
          onPress={() => {
            navigation.navigate('PaymentConfirmation', {
              servant,
              selectedDate: selectedDate.toLocaleDateString(),
              method: 'Cartão de Crédito',
            });
          }}
        >
          <LinearGradient
            colors={['#4FC3F7', '#039BE5']}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="credit-card" size={20} color="#fff" />
            <Text style={styles.paymentButtonText}>Cartão de Crédito</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Pix */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]}
          disabled={!isDateSelected}
          onPress={() => {
            navigation.navigate('PaymentConfirmation', {
              servant,
              selectedDate: selectedDate.toLocaleDateString(),
              method: 'Pix',
            });
          }}
        >
          <LinearGradient
            colors={['#00C853', '#2E7D32']}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="qrcode" size={20} color="#fff" />
            <Text style={styles.paymentButtonText}>Pix</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Boleto */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]}
          disabled={!isDateSelected}
          onPress={() => {
            navigation.navigate('PaymentConfirmation', {
              servant,
              selectedDate: selectedDate.toLocaleDateString(),
              method: 'Boleto',
            });
          }}
        >
          <LinearGradient
            colors={['#FF7043', '#F4511E']}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="barcode" size={20} color="#fff" />
            <Text style={styles.paymentButtonText}>Boleto Bancário</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  servantInfo: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  servantImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  servantDetails: {
    flex: 1,
  },
  servantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  servantDetail: {
    fontSize: 13,
    color: '#666',
  },
  servantRating: {
    marginTop: 6,
    fontSize: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 6,
  },
  info: {
    fontSize: 15,
    marginBottom: 10,
    color: '#444',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#039BE5',
  },
  bullet: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  calendarContainer: {
    width: '100%',
    marginBottom: 20,
  },
  calendarTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 12,
    color: '#222',
    fontWeight: 'bold',
  },
  dateButton: {
    backgroundColor: '#039BE5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedDateText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: '#333',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 20,
  },
  paymentOptions: {
    width: '100%',
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    textAlign: 'center',
  },
  paymentButton: {
    marginBottom: 12,
  },
  disabledButton: {
    opacity: 0.5,
  },
  paymentButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  paymentButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 10,
  },
});
