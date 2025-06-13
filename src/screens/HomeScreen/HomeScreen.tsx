import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { RootStackParamList } from '../../../App';
import MapView, { Marker } from 'react-native-maps';
import styles from '../HomeScreen/HomeScreen.styles';
import CardButton from '../../components/CardButton/CardButton';
import BottomTab from '../../components/BottomTab/BottomTab';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipwho.is/');
        const data = await res.json();

        if (data.success && data.latitude && data.longitude) {
          setLocation({
            latitude: data.latitude,
            longitude: data.longitude,
          });
          setAddress(`${data.city}, ${data.region.replace('State of', 'Estado de')}`);
        } else {
          throw new Error('Dados inválidos da API');
        }
      } catch (err) {
        console.warn('Erro ao buscar localização:', err);

      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#00492A" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.welcomeText}>Olá, Alice</Text>

          <View style={styles.idRow}>
            <Image source={require('../../assets/location.png')} style={styles.location} />
            {address ? (
              <Text style={styles.idText}>{address}</Text>
            ) : (
              <ActivityIndicator size="small" color="#00492A" />
            )}
          </View>

          <View style={styles.mapWrapper}>
            {location ? (
              <MapView
                style={styles.map}
                region={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                scrollEnabled={false}
                zoomEnabled={false}
                rotateEnabled={false}
                pitchEnabled={false}
                showsUserLocation={true}
              >
                <Marker coordinate={location} />
              </MapView>
            ) : (
              <View style={styles.loadingMap}>
                <ActivityIndicator size="large" color="#00492A" />
                <Text style={styles.loadingText}>Carregando localização...</Text>
              </View>
            )}
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/home.png')} style={styles.image} />
          </View>
          <CardButton
            text="Cadastros"
            onPress={() => navigation.navigate('Register')}
            icon={require('../../assets/add.png')}
          />
          <CardButton
            text="Consultar Organização"
            onPress={() => navigation.navigate('Organization')}
            icon={require('../../assets/add.png')}
          />
        </ScrollView>
        <BottomTab />
      </SafeAreaView>
    </>
  );
}
