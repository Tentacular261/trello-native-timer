import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export class BoardsScreen extends React.Component {
    render() {
        const usersboards = [];
        for (let i = 0; i < 11; i++) {
            usersboards.push(
                <View key={i.toString()} style={[styles.button, styles.board]}>
                    <Text style={styles.boardHeader}>
                        Board #{i}
                    </Text>
                </View>
            );
        }

        // const {navigate} = this.props.navigation;

        return (
          <View style={styles.container}>
              <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>
                      Select A Board
                  </Text>
              </View>
      
              <ScrollView style={styles.boardContainer}
                  contentContainerStyle={styles.boardContainerContent}>
                  { usersboards }
              </ScrollView>
      
              <View style={styles.footer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Export')}>
                      <Text style={[styles.button, styles.primaryBtn]}>
                          Export
                      </Text>
                  </TouchableOpacity>
      
                  <TouchableOpacity>
                      <Text style={[styles.button, styles.defaultBtn]}>
                          Settings
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    headerContainer: {
        backgroundColor: '#fbfbfb',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0,
        paddingVertical: 0,
        flex: .15,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 5,
                textAlignVertical: 'center'
            },
        }),
    }, 
    headerText: {
        marginVertical: 0,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: '500',
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
        flex: 1,
        ...Platform.select({
            android: {
                textAlignVertical: 'center'
            },
        }),
    },
    board: {
        height: 100,
        width: 185,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#93FF5E',
        flexBasis: 'auto',
        marginVertical: 10
        
    },
    boardHeader: {
        fontSize: 20,
        color: 'rgb(100, 100, 100)',
        fontWeight: '400'
    },
    boardContainer: {
        flex: .7,       
        marginVertical: 0,
        backgroundColor: '#FFF'
    },
    boardContainerContent: {
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    footer: {
        flex: .15,
        backgroundColor: '#fbfbfb',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    button: {
        fontSize: 14,
        letterSpacing: 2,
        textTransform: 'uppercase',
        borderRadius: 3,
        minHeight: 60,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowRadius: 3,
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 5,
                textAlignVertical: 'center'
            },
        }),
    },
    defaultBtn: {
        backgroundColor: '#FF8F5E'
    },
    primaryBtn: {
        backgroundColor: '#0CB39C'
    }
});
