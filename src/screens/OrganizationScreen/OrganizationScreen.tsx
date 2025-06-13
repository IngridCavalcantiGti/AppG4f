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
import OrganizationCard from '../../components/OrganizationCard/OrganizationCard';

import { mockOrgs } from '../../../__mocks__/organizations.mock';
import BottomTab from '../../components/BottomTab/BottomTab';

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
    <OrganizationCard name={item.name} city={item.city} state={item.state} />
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

       <BottomTab />
    </SafeAreaView>
  );
}