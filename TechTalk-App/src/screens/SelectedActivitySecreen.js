import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import getActivity from '../services/getActivity.js';
import StyledText from '../components/StyledText.js';
import CardSelectActivity from '../components/CardSelectActivity.js';

const SelectedActivityScreen = ({ route }) => {
  const navigation = useNavigation();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const setData = async () => {
      const data = await getActivity(route.params.activity);
      setActivities(data.activities);
    };
    setData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.containerList}
        columnWrapperStyle={styles.columns}
        data={activities}
        renderItem={({ item }) => (
          <CardSelectActivity
            url={item.image.url}
            name={item.text.title}
            level={item.level}
            nav={() =>
              navigation.navigate('activityToSolve', { activity: item })
            }
          />
        )}
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
