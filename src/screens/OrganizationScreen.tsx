import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00492A',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },
});
