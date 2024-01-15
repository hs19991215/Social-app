import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "../../common/styles";
import Header from "../../components/Header";
import { ScreenName } from "../../common/commonText";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailById } from "../../redux/actions/userAction";

const UserDetails = (props: any) => {
  const { data } = props.route.params;
  const dispatch = useDispatch<any>();
const userData = useSelector(state=>state.user?.userDetail?.result)
  useEffect(() => {
    const payload = {
      id: data?.item?._id,
    };
    dispatch(getUserDetailById(payload));
  }, []);
console.log("//>", userData)
  return (
    <SafeAreaView style={styles.flex1}>
      <Header type="left" screenName={ScreenName.USER_DETAILS} />
      <View style={[styles.cardContainer, ]}>
        <View style={[styles.flexRow, styles.justifyBetween]}>
          <View style={styles.profileCircle}>
            <Image source={{uri:userData?.image}} style={styles.profileCircle}/>
          </View>
          <View style={[styles.box1]}>
            <View style={styles.flexRow}>
            <Text style={styles.hardText}>Name:  </Text>
            <Text style={styles.softText}>{userData?.name}</Text>
            </View>
            <View style={styles.flexRow}>
            <Text style={styles.hardText}>Aadhar no:  </Text>
            <Text style={styles.softText}>{userData?.aadharCardNo ? `${userData?.aadharCardNo?.slice(0, 5)}XXXXXXX` :""}</Text>
            </View>
            <View style={styles.flexRow}>
            <Text style={styles.hardText}>DOB:  </Text>
            <Text style={styles.softText}>{userData?.dob}</Text>
            </View>
            <View style={styles.flexRow}>
            <Text style={styles.hardText}>Aadhar no:  </Text>
            <Text style={styles.softText}>{userData?.aadharCardNo ? `${userData?.aadharCardNo?.slice(0, 5)}XXXXXXX` :""}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
