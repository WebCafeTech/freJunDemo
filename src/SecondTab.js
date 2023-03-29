import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import movies from './staticData/movies';

export default function SecondTab() {

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 5,padding:5}}>
                            <View style={{width:100, height:100}} >
                                <Image style={{ width: 100, height: 100 }} resizeMode='cover' source={{ uri: item.posterUrl }} />
                            </View>
                            <View >
                                <Text style={{}}>{item.title} </Text>
                            </View>
                        </View>
                    )
                }}
                style={{
                    width:'100%',
                    padding:10
                }}
                ItemSeparatorComponent={()=>{
                    return <View style={{height:10}} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
