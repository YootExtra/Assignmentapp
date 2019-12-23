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
  

export default class Test extends React.Component {

    static navigationOptions = {
        title: 'Test',
      };

      state = {
          listNumber:[],
          blorefreshing: false,
    }

      constructor(props) {
        super(props);
        
        this.state = {
            listNumber : [
                {
                  index : 1,
                  name: 3,
                },
                {
                  index : 2,
                  name: 5,
                },
                {
                  index : 3,
                  name: 9,
                },
                {
                  index : 4,
                  name: 15,
                },
              ],
              blorefreshing: true,
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




      keyExtractor = (item, index) => index.toString()
  
  _renderItem = ({ item }) => (
    <ListItem
      title={item.name.toString()}
      leftAvatar={{
        source: null,
        title: item.index.toString()
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
                    Create a function in terms of x to find the next value in the given sequence: 3, 5, 9, 15, and so forth.
                  </Text>
              </View>
              
              <View style={styles.ccsBox}>
                    <FlatList
                        key={this.state.listNumber.length} 
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.listNumber}
                        initialNumToRender={15}
                        renderItem={this._renderItem.bind(this)}
                      />
              </View>
            <View style={styles.cssBtnCul}>
              <Button
                  icon={{
                    name: "refresh",
                    size: 25,
                    color: "white"
                  }}
                  buttonStyle={styles.cssBtnNexV}
                  title="next value"
                  onPress={() => {
                      this.state.blorefreshing = true;
                      let _list = this.state.listNumber;
                      console.log(_list[_list.length-1].name);
                      _list.push({
                      index : _list.length+1,
                      name: (_list[_list.length-1].name)+(_list.length*2),
                    })

                    this.setState({listNumber:_list});
                    console.log(_list);
                  }}
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
      height: '70%',
      maxHeight: '70%',
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
  