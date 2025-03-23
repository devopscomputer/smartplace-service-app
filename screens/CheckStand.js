import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones
import { LinearGradient } from 'expo-linear-gradient'; // Gradiente para botões
import DateTimePicker from '@react-native-community/datetimepicker'; // DateTimePicker para Android/iOS

export default function CheckStand({ route, navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Armazena a data selecionada
  const [showPicker, setShowPicker] = useState(false); // Controle para mostrar o DatePicker
  const [isDateSelected, setIsDateSelected] = useState(false); // Controle para saber se uma data foi selecionada

  const { servant } = route.params; // Pegando as informações da servidora selecionada da navegação

  // Função chamada quando o usuário seleciona uma data
  const onDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      setSelectedDate(date);
      setIsDateSelected(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Informações da servidora selecionada */}
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

      <Text style={styles.title}>Checkout - Serviço Standard</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          Você selecionou o serviço <Text style={styles.highlight}>Standard</Text>. Este serviço inclui:
        </Text>
        <Text style={styles.bullet}>• Limpeza básica residencial</Text>
        <Text style={styles.bullet}>• Organização de espaços</Text>
        <Text style={styles.bullet}>• Ideal para limpezas regulares</Text>
      </View>

      {/* Seletor de Data */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Selecione a data do serviço:</Text>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Escolher Data</Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onDateChange}
            minimumDate={new Date()} // Define a data mínima como hoje
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
        <Text style={styles.paymentTitle}>Escolha a forma de pagamento:</Text>

        {/* Cartão de Crédito */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]} // Desabilita se nenhuma data for selecionada
          disabled={!isDateSelected}
          onPress={() => {
            if (isDateSelected) {
              navigation.navigate('PaymentConfirmation', {
                servant,
                selectedDate: selectedDate.toLocaleDateString(),
              });
            }
          }}
        >
          <LinearGradient
            colors={['#4FC3F7', '#039BE5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="credit-card" size={24} color="#fff" />
            <Text style={styles.paymentButtonText}>Cartão de Crédito</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Pix */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]} // Desabilita se nenhuma data for selecionada
          disabled={!isDateSelected}
          onPress={() => {
            if (isDateSelected) {
              navigation.navigate('PaymentConfirmation', {
                servant,
                selectedDate: selectedDate.toLocaleDateString(),
              });
            }
          }}
        >
          <LinearGradient
            colors={['#66BB6A', '#43A047']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="qrcode" size={24} color="#fff" />
            <Text style={styles.paymentButtonText}>Pix</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Boleto */}
        <TouchableOpacity
          style={[styles.paymentButton, !isDateSelected && styles.disabledButton]} // Desabilita se nenhuma data for selecionada
          disabled={!isDateSelected}
          onPress={() => {
            if (isDateSelected) {
              navigation.navigate('PaymentConfirmation', {
                servant,
                selectedDate: selectedDate.toLocaleDateString(),
              });
            }
          }}
        >
          <LinearGradient
            colors={['#FF7043', '#F4511E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentButtonGradient}
          >
            <FontAwesome name="barcode" size={24} color="#fff" />
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
    flexGrow: 1, // Garante que o ScrollView se expanda para caber todo o conteúdo
    justifyContent: 'flex-start',
  },
  servantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
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
    color: '#333',
  },
  servantDetail: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2,
  },
  servantRating: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#4FC3F7',
  },
  bullet: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  calendarContainer: {
    marginBottom: 30,
    width: '100%',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  dateButton: {
    backgroundColor: '#4FC3F7',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  dateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedDateText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  paymentOptions: {
    width: '100%',
    marginBottom: 30,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentButton: {
    marginBottom: 15,
    width: '100%',
  },
  disabledButton: {
    opacity: 0.5, // Botão desabilitado fica transparente
  },
  paymentButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});
