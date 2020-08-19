import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trailData: []
    }
  }

  async componentDidMount () {
    await this.getData();
  }

  async getData() {
    try {
      let url ='http://localhost:3000/trails'
      let response = await fetch(url, { method:'GET' });
      let responseJson = await response.json();
      this.setState({trailData: responseJson});
    } catch (err) {
      console.warn(err);
    }
  }

  renderItem = ({item}) => {
      return (
      <View style={styles.mainItem}>
        <Text>{item.name}</Text>
      </View>
      );
    }

  keyExtractor = (item, index) => {
    return index.toString();
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
        extraData={this.state}
        data={this.state.productData}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  mainItem: {
    width:200,
    height: 80, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 10, 
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1
  },
});