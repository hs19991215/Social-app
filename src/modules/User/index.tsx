/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {styles} from '../../common/styles';
import {ScreenName} from '../../common/commonText';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUser} from '../../redux/actions/userAction';

const User = () => {
  const dispatch = useDispatch<any>();
  const {data} = useSelector(state => state?.user);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const renderItem = (payload: any) => {
    return (
      <Pressable onPress={() => console.log('first')} style={styles.cards}>
        <View style={styles.flexRow}>
          <Text style={styles?.hardText}>Name: </Text>
          <Text style={styles?.softText}>{payload?.item?.name}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles?.hardText}>Email: </Text>
          <Text style={styles?.softText}>{payload?.item?.email}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles?.hardText}>Created at: </Text>
          <Text style={styles?.softText}>{payload?.item?.createdAt}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles?.softText}>
            No. of Posts: {payload?.item?.post?.length} |
          </Text>
          <Text style={styles?.softText}>
            {'  '}No. of Contributions: {payload?.item?.comments?.length}{' '}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.flex1}>
      <Header
        type={'left'}
        screenName={ScreenName.USER}
        onPressRight={() => props.navigation.openDrawer()}
      />

      <FlatList
        data={data.user}
        renderItem={renderItem}
        bounces={true}
        style={styles.marginTop10}
      />
    </SafeAreaView>
  );
};

export default User;
