import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from 'react-native'

type HomeProps = {
    demo: string;
}

const Home = (props) => {

    const [data, setData] = useState()
    console.log("props",props)

    useEffect(() => {
        promiseData()
    }, [])

    // const getData = () => {
    //     fetch('https://reactnative.dev/movies.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json.movies))
    // }

    const promiseData = () => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                setData(json.movies)
                console.log("khushi",json.movies)
            })
            .catch((error) => console.error(error))
    }

    const demoData = async() => {
        const response = await fetch('')
    }

    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            console.log("res", json)
            setData(json)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <View style={{ flex: 1, padding: 40, }}>
            {/* {data?.images.map((img) => 

            <View>
                <Image source={{uri:img}} height={100} width={100} style={{backgroundColor :'red'}}/>
            </View>
            )} */}
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row',justifyContent:'space-between',flex:1,width:'50%' }}>
                            <View style={{backgroundColor:'red'}}>
                                <Text>
                                    {item.title}
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {props.demo}

                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )

}
export default Home