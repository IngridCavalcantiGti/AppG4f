import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './BottomTab.styles';

export default function BottomTab() {
  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/phone.png')} style={styles.tabIcon} />
        <Text style={styles.tabText}>ITEM 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/account.png')} style={styles.tabIcon} />
        <Text style={[styles.tabText, styles.activeTab]}>ITEM 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../../assets/favorite.png')} style={styles.tabIcon} />
        <Text style={styles.tabText}>ITEM 3</Text>
      </TouchableOpacity>
    </View>
  );
}

