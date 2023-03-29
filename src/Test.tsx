import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";


const Test = () => {

    const [data, setData] = useState()

    const requestData = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: 55,
            id: 101,
            title: "Post title",
            body: "Post body",
        })
    }

    const updateValue = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            serId: 55,
            id: 101,
            title: "New Post title",
            body: "New Post body",
        })
    }

    // const getData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => console.log(error))
    // }

    const getData = async()=> {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await response.json()
        setData(res)
        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => {
        // postData()
        getData()
        // updateData()
    }, [])


    const postData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', requestData)
            .then((response) => response.json())
            .then((json) => console.log("Data", json))
            .catch((err) => console.log(err))
    }

    const updateData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', updateValue)
            .then((res) => res.json())
            .then((json) => console.log("updated Data", json))
            .catch((err) => console.log(err))
    }

    console.log("Data",data)

    return (
        <View >
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.id}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Test;