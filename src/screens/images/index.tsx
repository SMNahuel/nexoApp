import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Button,
  Text,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';

const token = 'PXlHjC7W1z0k7fdzSTp6gqTauXCk2Je0zaTHw7Gt';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    width: 350,
    height: 350,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
/* @ts-ignore */
const ImagesView = props => {
  const [state, setState] = useState([]);
  const [timeSelect, setTimeSelect] = useState('earth_date');
  const [time, setTime] = useState('2023-01-01');
  const [index, setIndex] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.route.params.name}/photos?${timeSelect}=${props.route.params.maxDate}&page=${index}&api_key=${token}`,
      )
      .then(result => {
        setState([...state, ...result.data.photos]);
      });
  }, [index]);

  const renderFooter = () => (
    <View>
      <ActivityIndicator />
    </View>
  );

  return (
    <SafeAreaView>
      <Text>{props.route.params.name}</Text>

      {state && (
        <FlatList
          data={state}
          renderItem={({item, key}) => (
            <Image
              style={styles.logo}
              key={key}
              source={{
                uri: item.img_src,
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
          ListHeaderComponent={() => {
            <Text>Header</Text>;
          }}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={() => setIndex(index + 1)}
        />
      )}
    </SafeAreaView>
  );
};

export default ImagesView;
