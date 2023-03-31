import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, refreshPosts } from './redux/actions';



export default function FirstTab() {

  const { posts } = useSelector((state) => state);
  const {data, currentPage, isRefreshing, isFetching} = posts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(currentPage))
  }, []);

  const handleRefresh = () => {
    dispatch(refreshPosts())
  };

  const handleLoadMore = () => {
    dispatch(fetchPosts(currentPage))
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.item}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.01}
        ListFooterComponent={() =>
          isFetching && currentPage !== 1 ? <Text style={{flex:1, height:100, fontSize:24, textAlign: 'center'}}>Loading more...</Text> : null
        }
        keyExtractor={(item, index)=>index}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderColor:'grey',
    borderWidth:1,
    margin:10, 
    borderRadius:10
  }
});
