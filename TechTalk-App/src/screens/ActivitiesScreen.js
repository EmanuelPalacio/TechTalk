import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import CardActivity from '../components/CardActivity.js';
import { useNavigation } from '@react-navigation/native';

const ActivitiesScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <CardActivity
          nav={() =>
            navigation.navigate('selectedActivity', { activity: 'reading' })
          }
          name='Reading'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1681500368/Images%20proyect%20techTalk/TechTalkAssets/activities/Recurso_2reading-azul_3_ossngo.png'
        />
        <CardActivity
          /* nav={() =>
            navigation.navigate('selectedActivity', { activity: 'listeinig' })
          } */
          name='Listeinig'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1681500368/Images%20proyect%20techTalk/TechTalkAssets/activities/Recurso_2listeinig-azul_4_hpmsbl.png'
        />
        <CardActivity
          /* nav={() =>
            navigation.navigate('selectedActivity', { activity: 'writing' })
          } */
          name='Writing'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1681500368/Images%20proyect%20techTalk/TechTalkAssets/activities/Recurso_1writing-azul_3_j8lfjc.png'
        />
        <CardActivity
          /* nav={() =>
            navigation.navigate('selectedActivity', { activity: 'speaking' })
          } */
          name='Speaking'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1681500368/Images%20proyect%20techTalk/TechTalkAssets/activities/Recurso_2speaking-azul_3_pqhkfd.png'
        />
      </View>
    </ScrollView>
  );
};
export default ActivitiesScreen;

const styles = StyleSheet.create({
  containerScroll: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
