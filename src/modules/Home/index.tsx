/* eslint-disable react/self-closing-comp */
import {
  FlatList,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState} from 'react';
import {styles} from '../../common/styles';
import Header from '../../components/Header';
import {ScreenName} from '../../common/commonText';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {markerData} from '../../../dummyData';
import {COLORS} from '../../common/colors';
// AIzaSyArTPWpAM0nnVzHvXQZKJpQD9djDpuzriU GMAP_API_KEY
// AIzaSyCaopvu9ApRA-_P_xlhnt3Ds8CeVRIvcbw
const Home = (props: any) => {
  const [open, setOpen] = useState('');
  const [getLocation, setGetLocation] = useState('');
  const data = [
    {id: 1, name: 'Users'},
    {id: 1, name: 'Posts'},
  ];

  const handleTabs = (payload: string) => {
    if (payload === 'Users') {
      props.navigation.navigate(ScreenName?.USER);
    } else if (payload === 'Posts') {
    }
  };
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       setGetLocation(position);
  //     },
  //     error => {
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // }, []);

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Cool Photo App Location Permission',
  //           message:
  //             'Cool Photo App needs access to your Location ' +
  //             'so you can take awesome pictures.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('You can use the Location');
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  //   requestLocationPermission();
  // }, []);
  const renderItem = (item: any) => {
    return (
      <Pressable
        onPress={() => handleTabs(item?.item?.name)}
        style={styles.homeTabs}>
        <Text>{item?.item?.name}</Text>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.flex1}>
      <Header
        type={'middle'}
        screenName="Home"
        onPressRight={() => props.navigation.openDrawer()}
      />
      <View style={{width: '100%'}}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={{padding: 8}}
        />
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 19.200753,
            longitude: 72.961512,
            // latitude: getLocation?.coords?.latitude,
            // longitude: getLocation?.coords?.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          onRegionChange={e => console.log(e)}>
          {markerData?.map((item: any, index: number) => {
            const isOpen = item?.name == open?.latitude;
            return (
              <Marker key={index?.toString()} coordinate={item}>
                <TouchableOpacity
                  onPress={() => setOpen(item?.latitude)}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    backgroundColor: COLORS.red,
                    zIndex: 999,
                  }}></TouchableOpacity>
                <View style={styles.alignSelfCenterr}>
                  <View style={styles.markerInnerContainer}>
                    <Text>{item?.name}</Text>
                  </View>
                </View>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
