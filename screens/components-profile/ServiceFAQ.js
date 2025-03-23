// ServiceFAQ.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Feather } from '@expo/vector-icons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={toggleExpand} style={styles.questionRow}>
        <Text style={styles.question}>{question}</Text>
        <Feather name={expanded ? 'chevron-up' : 'chevron-down'} size={18} color="#444" />
      </TouchableOpacity>
      {expanded && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

export default function ServiceFAQ() {
  const faqData = [
    {
      question: 'Você fornece produtos de limpeza?',
      answer: 'Sim, levo meus próprios produtos profissionais. Caso deseje que eu use os seus, posso adaptar.',
    },
    {
      question: 'Qual o tempo médio de duração do serviço?',
      answer: 'Em média, de 2 a 4 horas, dependendo do tamanho e tipo do ambiente.',
    },
    {
      question: 'Atende aos finais de semana?',
      answer: 'Sim, mediante agendamento com antecedência.',
    },
    {
      question: 'Tem garantia de satisfação?',
      answer: 'Sim! Se não estiver satisfeito, retornamos sem custo para ajustes.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  faqItem: {
    marginBottom: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    flex: 1,
    marginRight: 10,
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});