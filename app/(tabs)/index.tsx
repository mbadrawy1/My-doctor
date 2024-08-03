import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OrderMedicines from '../OrderMedicines'; // Adjust the path as necessary

export default function HomeScreen() {

 


  return (
    <ScrollView style={styles.container}>
      <OrderMedicines />
      <View style={styles.header}>
        <Text style={styles.title}>Vezeeta</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="medkit" size={32} color="black" />
          <Text style={styles.gridText}>Clinic Visit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="medical" size={32} color="black" />
          <Text style={styles.gridText}>Pharmacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="call" size={32} color="black" />
          <Text style={styles.gridText}>Doctor Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="home" size={32} color="black" />
          <Text style={styles.gridText}>Home Visit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="clipboard" size={32} color="black" />
          <Text style={styles.gridText}>Procedures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="flask" size={32} color="black" />
          <Text style={styles.gridText}>Labs & Scans</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Exclusive PACKAGES</Text>
        <Text style={styles.bannerSubtitle}>
          Licensed & Personalized Therapists. Save up to 35% on online sessions. Exclusive On-Demand Support.
        </Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>See Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Book Clinic Appointment</Text>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for specialty, doctor, or hospital"
          />
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007aff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  gridItem: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  gridText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  banner: {
    backgroundColor: '#007aff',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  bannerButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bannerButtonText: {
    color: '#007aff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 20,
  },
  searchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 14,
    flex: 1,
  },
  locationContainer: {
    padding: 20,
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
  },
});
