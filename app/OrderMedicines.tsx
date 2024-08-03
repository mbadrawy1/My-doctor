import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderMedicines = () => {
  return (
    <View style={styles.medicinesContainer}>
      <Text style={styles.sectionTitle}>Order Medicines</Text>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for?"
        />
      </View>
      <View style={styles.medicinesButtons}>
        <TouchableOpacity style={styles.medicinesButton}>
          <Text style={styles.medicinesButtonText}>Prescription or Claim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicinesButton}>
          <Text style={styles.medicinesButtonText}>Product Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicinesButton}>
          <Text style={styles.medicinesButtonText}>Pharmacist Assistance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  medicinesContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  searchInput: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 14,
    flex: 1,
  },
  medicinesButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  medicinesButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
  },
  medicinesButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default OrderMedicines;
