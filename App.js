import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Header, ImageCard, Layout } from './src/components/uikit/index'



const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
      console.log(this.state.data)
    } catch (e) {
      throw e
    }
  }
  
  render() {
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
          <Layout>
            { data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </Layout>
          
      </View>
    )
  }
}


