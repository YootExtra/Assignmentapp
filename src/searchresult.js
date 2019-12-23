  import React from 'react';
  import { 
      StyleSheet, 
      Text, 
      View, 
      TouchableOpacity,
      ScrollView,
      Dimensions,
      Animated,
      Image,
      FlatList
  } from 'react-native';

  import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
  import { SearchBar,ListItem, Button } from '../node_modules/react-native-elements';
import { Config } from './config';

export default class SearchResult extends React.Component {

    static navigationOptions = {
        title: 'Search Result',
      };

      state = {txtsearch:'',listRestaurants:[]}
      constructor(props) {
        super(props);
        
        this.state = {
            txtsearch: "",
            listRestaurants:[]
        };
        this.onSearch();
    
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


      onSearch() {
        fetch(webGGMain+'?location='+DataLoclatlog+'&radius=100&type=restaurant&key='+keyGG)
        .then((response) => response.json()).then((responseJson) => {
        
          let getLett = this.state.listRestaurants;
          for (let index = 0; index < responseJson.results.length; index++) {
            const element = responseJson.results[index];
            getLett.push(element)
          }
            this.setState({
              listRestaurants:getLett
            });

            
        })
        .catch((error) => {
              alert(error);
        });
      }




      keyExtractor = (item, index) => index.toString()
  
      _renderItem = ({ item }) => (
        <ListItem
          title={item.name.toString()}
          subtitle={item.vicinity.toString()}
          leftAvatar={{
            source: { uri: item.icon},
            title: item.name.toString()
          }}
          bottomDivider
          chevron
        />
      )

      render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
            
              <Button
                  icon={{
                    name: "refresh",
                    size: 25,
                    color: "white"
                  }}
                  buttonStyle={styles.cssBtnNexV}
                  title="finding all restaurants in Bangsue"
                  onPress={() => {
                    console.log("geting data");
                    this.onSearch();
                  }}
                />
              <View style={styles.ccsBox}>

                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.listRestaurants}
                        initialNumToRender={15}
                        renderItem={this._renderItem.bind(this)}
                      />
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
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 18,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    ccsBox: {
      width: '100%',
      height: '75%',
      maxHeight: '75%',
      paddingBottom: 10,
    },
    cssBtnNexV : {
      width: '100%',
      height: 50,
      marginBottom: 10,
    }
  });
  
