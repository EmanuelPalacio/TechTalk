import { useState } from 'react';
import { FlatList } from 'react-native';
import { CardContact } from '../../components/styledComponents';
import styles from './styleComunity';

export default function ComunityScrenn() {
  const [data, setData] = useState();

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
