import { FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import movies from './staticData/movies';

export default function SecondTab() {

    const [search, setSearch] = useState();
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [sortType, setSortType] = useState('asc');

    const renderItem = ({ item, index }) => {

        const { title, year, genres, actors, posterUrl } = item;

        return (
            <View
                key={index}
                style={styles.itemContainer}>
                <View style={{ width: 100, height: 100, margin: 5 }} >
                    {
                        posterUrl &&
                        <Image
                            style={{ width: 100, height: 100 }}
                            resizeMode='cover'
                            source={{ uri: posterUrl }}
                        />
                    }
                </View>
                <View style={{ width: '70%', padding: 5 }} >
                    <Text numberOfLines={2} style={styles.title}>
                        {title}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {genres.map((genre) => {
                            return (
                                <View style={styles.pills}>
                                    <Text style={{ fontSize: 10 }} >
                                        {genre}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <Text style={{ fontSize: 12 }}>
                        Released: {year}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        Actors: {actors}
                    </Text>
                </View>
            </View>
        )
    }

    const onSearch = keyword => {
        const result = movies.filter(
            (movie) => movie.title.toLowerCase().includes(keyword.toLowerCase())
        )
        setSearch(keyword)
        setFilteredMovies(result)
    }

    const clear = useCallback(() => {
        setSearch()
        setFilteredMovies(movies)
    })

    const sortByName = () => {
        const sorted = [...filteredMovies].sort((a, b) => {
            return sortType === 'asc' ?
                a.title.localeCompare(b.title) :
                b.title.localeCompare(a.title)
        });
        setFilteredMovies(sorted);
        setSortType(sortType === 'asc' ? 'desc' : 'asc');
    };

    const ListHeaderComponent = useMemo(() => {
        return (
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder={"Search"}
                        value={search}
                        defaultValue={search}
                        onChangeText={onSearch}
                    />
                    <FontAwesome name="search" size={24} color="lightgrey" />
                    <TouchableOpacity onPress={clear} style={styles.iconContainer}>
                        <FontAwesome name="close" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={sortByName} style={styles.iconContainer}>
                        <FontAwesome name="sort" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }, [search])

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredMovies}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                stickyHeaderIndices={[0]}
                style={styles.flatlistStyle}
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
    headerContainer: {
        backgroundColor: 'white',
        height: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        padding: 10
    },
    itemContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    flatlistStyle: {
        width: '100%',
        padding: 10
    },
    iconContainer: {
        flex: 0.1,
        alignItems: 'center'
    },
    pills: {
        backgroundColor: 'lightgray',
        borderRadius: 15,
        padding: 3,
        margin: 2
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        width: '100%'
    }
});
