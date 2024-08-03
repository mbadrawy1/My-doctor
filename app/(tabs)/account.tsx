import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; 

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Vezeeta!</Text>
        <Text style={styles.headerSubText}>Log in and enjoy the best healthcare experience</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login / SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingsItem}>
          <View style={styles.settingsIcon}>
            <MaterialIcons name="language" size={24} color="#2980b9" />
          </View>
          <Text style={styles.settingsText}>Country</Text>
          <View style={styles.settingsArrow}>
            <Image
              // Replace with your actual flag image
              style={styles.flag}
            />
            <Ionicons name="chevron-forward" size={24} color="#2980b9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <View style={styles.settingsIcon}>
            <FontAwesome name="language" size={24} color="#2980b9" />
          </View>
          <Text style={styles.settingsText}>App language</Text>
          <Text style={styles.settingsText}>English</Text>
          <View style={styles.settingsArrow}>
            <Ionicons name="chevron-forward" size={24} color="#2980b9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <View style={styles.settingsIcon}>
            <MaterialIcons name="email" size={24} color="#2980b9" />
          </View>
          <Text style={styles.settingsText}>Email us</Text>
          <View style={styles.settingsArrow}>
            <Ionicons name="chevron-forward" size={24} color="#2980b9" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <View style={styles.settingsIcon}>
            <MaterialIcons name="call" size={24} color="#2980b9" />
          </View>
          <Text style={styles.settingsText}>Call us</Text>
          <View style={styles.settingsArrow}>
            <Ionicons name="chevron-forward" size={24} color="#2980b9" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.socialIcons}>
          <FontAwesome name="facebook" size={24} color="#2980b9" />
          <FontAwesome name="instagram" size={24} color="#2980b9" />
          <FontAwesome name="linkedin" size={24} color="#2980b9" />
        </View>
        <View style={styles.footerText}>
          <Text style={styles.footerTextItem}>Terms of use</Text>
          <Text style={styles.footerTextItem}>Privacy policy</Text>
          <Text style={styles.footerTextItem}>Version 12.3.9</Text>
        </View>
      </View>
    </View>
  );
};

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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerSubText: {
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settings: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingsIcon: {
    marginRight: 15,
  },
  settingsText: {
    flex: 1,
    fontSize: 16,
  },
  settingsArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 5,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    flexDirection: 'row',
  },
  footerTextItem: {
    fontSize: 14,
    marginRight: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Account;