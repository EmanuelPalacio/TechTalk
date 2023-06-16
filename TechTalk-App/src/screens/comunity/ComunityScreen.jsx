import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { getUser } from '../../services/Firebase';
import { CardContact } from '../../components/styledComponents';
import styles from './styleComunity';

export default function ComunityScrenn() {
  const [data, setData] = useState();

  useEffect(() => {
    getUser()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => (
        <CardContact name={item.fullname} img={item.profileImage} />
      )}
      keyExtractor={(item) => item.userId}
    />
  );
}
