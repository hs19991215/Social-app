import {Pressable, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {styles} from '../../common/styles';

type PropsWithChildren = {
  name: string;
  email: string;
  createdAt: string;
  post: any[];
  comments: any[];
};

const CustomCard = (props: PropsWithChildren) => {
  const {name, email, createdAt, post, comments} = props;
  return (
    <Pressable onPress={() => console.log('first')} style={styles.cards}>
      <View style={styles.flexRow}>
        <Text style={styles?.hardText}>Name: </Text>
        <Text style={styles?.softText}>{name}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles?.hardText}>Email: </Text>
        <Text style={styles?.softText}>{email}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles?.hardText}>Created at: </Text>
        <Text style={styles?.softText}>{createdAt}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles?.softText}>No. of Posts: {post?.length} |</Text>
        <Text style={styles?.softText}>
          {'  '}No. of Contributions: {comments?.length}{' '}
        </Text>
      </View>
    </Pressable>
  );
};

export default CustomCard;
