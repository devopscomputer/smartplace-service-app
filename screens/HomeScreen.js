import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const glowAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 0.9,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://drive.google.com/uc?export=view&id=1ZC7KfhiiP2d30K0QGAENYfg84XnEZ8q' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://drive.google.com/uc?export=view&id=1bEp4T_bA3nrg8oqxtXadbNHk9phRrxp9' }}
        />

        <Text style={styles.welcomeText}>
          Encontre os melhores profissionais para sua casa, negócio ou projeto!
        </Text>
        <Text style={styles.subText}>Como deseja continuar?</Text>

        <Animated.View style={[styles.googleButton, { backgroundColor: glowAnim.interpolate({
          inputRange: [0.4, 0.9],
          outputRange: ['rgba(97, 97, 97, 0.4)', 'rgba(97, 97, 97, 0.9)'],
        }) }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Explorar Serviços</Text>
          </TouchableOpacity>
        </Animated.View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    top: 70,
    width: 340,
    height: 100,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 90,
    color: '#fff',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20,
    color: '#ddd',
  },
  googleButton: {
    flexDirection: 'row',
    padding: 12,
    width: '70%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
