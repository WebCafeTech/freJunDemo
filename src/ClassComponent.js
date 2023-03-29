import React from 'react'
import { TouchableOpacity, View } from 'react-native'

class ClassComponent extends Component {
    constructror() {
        super()
        this.state = { counter: 0 }
    }
    incrementCounter() {
        this.setState({counter : counter++})
    }
    render() {
        return (
            <View>
                <Text>{this.state.counter} </Text>
                <TouchableOpacity onPress={()=>this.incrementCounter}  />
            </View>
        )
    }
}
