import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Redirect } from 'expo-router';

export default function MyActivityScreen() {



  const handleSignInPress = () => {
    <Redirect href="/SignIn" />;  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Activity</Text>
      <View style={styles.content}>
        <Ionicons name="calendar" size={100} color="gray" style={styles.icon} />
        <Text style={styles.text}>Login to view your previous activity</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
