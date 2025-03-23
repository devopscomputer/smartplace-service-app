import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';

const Overlay = styled.View`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color:rgb(255, 255, 255);
`;

const SpinnerContainer = styled(Animated.View)`
  width: 40px;
  height: 40px;
  position: relative;
`;

const Dot = styled.View`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color:rgb(180, 173, 173);
  border-radius: 3px;
`;

export default function LoadingScreen() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const radius = 12; // Raio do círculo
  const center = 20; // Centro do SpinnerContainer (40 / 2)
  const numDots = 8;
  const angleStep = (2 * Math.PI) / numDots;

  return (
    <Overlay>
      <SpinnerContainer style={{ transform: [{ rotate: rotation }] }}>
        {Array.from({ length: numDots }).map((_, i) => {
          const angle = i * angleStep;
          const top = center + radius * Math.sin(angle) - 3;  // -3 para centralizar
          const left = center + radius * Math.cos(angle) - 3;
          return <Dot key={i} style={{ top, left }} />;
        })}
      </SpinnerContainer>
    </Overlay>
  );
}
