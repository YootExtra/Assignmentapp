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
  import { SearchBar,ListItem } from '../node_modules/react-native-elements';

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
    
        const screenHeight = Math.round(Dimensions.get("window").height);
        if (Platform.OS == "ios") {
          this.moveAnimation = new Animated.ValueXY({ x: 0, y: screenHeight - 90 });
        } else {
          this.moveAnimation = new Animated.ValueXY({
            x: 0,
            y: screenHeight - 110
          });
        }
        this.onSearch();
      }


      onSearch() {
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.8030762,100.5370008&radius=100&type=restaurant&key=AIzaSyBy_TA6McsusI8rdYjkp2CnuKmbMWyLG3E')
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
      };




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
            
              <View style={styles.welcomeContainer}>
                
              </View>
      
              <View style={styles.getStartedContainer}>
                  <Text style={styles.getStartedText}>
                  finding all restaurants in Bangsue district area (an area in Bangkok)                  
                  </Text>
              </View>
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
      marginTop: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    cssBtnNexV : {
      width: '100%',
      height: 50,
      marginBottom: 10,
      marginTop: 5,
    }
  });
  
/*

  geometry: {location: {…}, viewport: {…}}
icon: "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png"
id: "617c62ead042d5cb48edcf3adc748f27d0313e40"
name: "The Deli House"
opening_hours: {open_now: true}
photos: [{…}]
place_id: "ChIJc6zFPXOc4jARh9dACrAddgM"
plus_code: {compound_code: "RG3P+8W Bangkok, Thailand", global_code: "7P52RG3P+8W"}
rating: 4.1
reference: "ChIJc6zFPXOc4jARh9dACrAddgM"
scope: "GOOGLE"
types: (6) ["restaurant", "bakery", "food", "point_of_interest", "store", "establishment"]
user_ratings_total: 32
vicinity: "1 ถนนปูนซิเมนต์ไทย, บางซื่อ, Bang Sue"

*/