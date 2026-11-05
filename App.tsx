import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { NotasCard } from './src/app/components/Notas/NotasCard';
import { MoodsCard } from './src/app/components/Moods/MoodsCard';
import { Colors } from './src/app/consants/theme';
import TituloApp from './src/app/consants/TituloApp';

export default function App() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <StatusBar style="light" />
      <TituloApp />
      <MoodsCard />
      <NotasCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
