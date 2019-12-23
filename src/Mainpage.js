import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    Animated,
 } from 'react-native';


  import { ListItem,Button } from 'react-native-elements'
  

export default class Mainpage extends React.Component {

    static navigationOptions = {
        title: 'Main Page',
      };

      state = {
          listNumber:[],
          blorefreshing: false,
    }

      constructor(props) {
        super(props);
        
        this.state = {
        };
    
        const screenHeight = Math.round(Dimensions.get("window").height);
        if (Platform.OS == "ios") {
          this.moveAnimation = new Animated.ValueXY({ x: 0, y: screenHeight - 90 });
        } else {
          this.moveAnimation = new Animated.ValueXY({
            x: 0,
            y: screenHeight - 110
          });
        }
    
    
      }


      render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>

              
              <View style={styles.ccsBox}>
                    
                    <View style={styles.cssBoxNextpage}>
                        <Text style={styles.csstxt18}>
                        </Text>
                        <Button
                            icon={{
                                name: "star",
                                size: 25,
                                color: "white"
                            }}
                            buttonStyle={styles.cssBtnNexV}
                            title="Go to Test."
                            onPress={() => {
                                navigate('Test', {});
                            }}
                            />
                    </View>


                    <View style={styles.cssBoxNextpage}>
                        <Text style={styles.csstxt18}>
                        </Text>
                        <Button
                            icon={{
                                name: "star",
                                size: 25,
                                color: "white"
                            }}
                            buttonStyle={styles.cssBtnNexV}
                            title="Go to Search Restaurants."
                            onPress={() => {
                                navigate('SearchResult', {});
                            }}
                            />
                    </View>


              </View>
      
              
          </View>

        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    ccsBox: {
      width: '100%',
      height: '70%',
      maxHeight: '70%',
      marginTop: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    cssBoxNextpage: {
        width: '100%',
        paddingBottom: 20,
        paddingTop: 20,
        display: 'flex',
        textAlign: 'center',
    },
    csstxt18: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
    cssBtnNexV : {
      width: '100%',
      height: 80,
      marginBottom: 10,
      marginTop: 5,
    }
  });
  