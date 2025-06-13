import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import styles from './OrganizationScreen.styles';

const mockOrgs = [
  { id: '1', name: 'Organização Alpha', city: 'Recife', state: 'PE' },
  { id: '2', name: 'Beta Institute', city: 'Olinda', state: 'PE' },
  { id: '3', name: 'ONG Gama', city: 'Jaboatão', state: 'PE' },
  { id: '4', name: 'Shopping Costa dourada', city: 'Ipojuca', state: 'PE' },
  { id: '5', name: 'CDF Pessoa', city: 'Caruaru', state: 'PE' },
];

interface Organization {
  name: string;
  city: string;
  state: string;
}

export default function OrganizationScreen() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(mockOrgs);

  const handleSearch = (text: string) => {
    setSearch(text);
    const results = mockOrgs.filter(org =>
      org.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(results);
  };

  const renderItem = ({ item }: { item: Organization }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.city}, {item.state}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#00492A" barStyle="light-content" />
      <Text style={styles.title}>Consultar Organização</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da organização..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma organização encontrada.</Text>}
      />
    </SafeAreaView>
  );
}