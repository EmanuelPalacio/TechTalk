import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import getActivity from '../services/getActivity.js';
import StyledText from '../components/StyledText.js';

const SelectedActivityScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // IIFE function
    const setData = async () => {
      const data = await getActivity(route.params.activity);
      setActivities(data.activities);
    };
    setData();
  }, []);
  useEffect(() => {
    console.log(activities);
  }, [activities]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.containerList}
        columnWrapperStyle={styles.columns}
        data={activities}
        renderItem={({ item }) => <StyledText>{item.question}</StyledText>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
export default SelectedActivityScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    minHeight: '100%',
  },
  containerList: {
    alignItems: 'center',
    width: '100%',
    gap: 10,
    marginTop: 20,
  },
  columns: {
    gap: 30,
    width: '40%',
  },
});
