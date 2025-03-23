import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

// Componentes avançados do perfil (todos devem ser export default)
import HeaderProfile from './components-profile/HeaderProfile';
import Badges from './components-profile/Badges';
import ProfileBio from './components-profile/ProfileBio';
import ServiceList from './components-profile/ServiceList';
import ServicePackageCard from './components-profile/ServicePackageCard';
import ReviewList from './components-profile/ReviewList';
import PortfolioGallery from './components-profile/PortfolioGallery';
import CoverageMap from './components-profile/CoverageMap';
import ServiceFAQ from './components-profile/ServiceFAQ';
import Highlights from './components-profile/Highlights';
import FloatingCTA from './components-profile/FloatingCTA';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderProfile />
        <PortfolioGallery />
        <ServiceList />
        <Badges />
        
        <ProfileBio />
        
        <Highlights />
        
        <ServicePackageCard />
        <ReviewList />
        <CoverageMap />
        <ServiceFAQ />
      </ScrollView>

      <FloatingCTA />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});