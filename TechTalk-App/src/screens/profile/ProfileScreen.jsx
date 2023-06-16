import { ImageBackground, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './profileStyle';
import { StyledText } from '../../components/styledComponents';
import {
  Listening,
  Reading,
  Speaking,
  Writing,
} from '../../components/svgComponents';

export default function ProfileScreen() {
  const { user } = useSelector((store) => store.user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.background}
          source={{
            uri: user?.backgroundImage,
          }}
        />
        <Image
          style={styles.profileImage}
          source={{
            uri: user.profileImage,
          }}
        />
        <View style={styles.level}>
          <StyledText color='second'>
            Principiante {user.learningLevel?.global || 'A1'}
          </StyledText>
        </View>
      </View>
      <View style={styles.infoUser}>
        <StyledText color='third' fontSize='title' bold fontTitle>
          {user.fullname}
        </StyledText>
        <StyledText bold>Desarrollador Web</StyledText>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Listening />
          <StyledText color='second' fontSize='subTitle'>
            Listening
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            {user.learningLevel?.listening || 'A1'}
          </StyledText>
        </View>
        <View style={styles.card}>
          <Reading />
          <StyledText color='second' fontSize='subTitle'>
            Reading
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            {user.learningLevel?.reading || 'A1'}
          </StyledText>
        </View>
        <View style={styles.card}>
          <Speaking />
          <StyledText color='second' fontSize='subTitle'>
            Speaking
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            {user.learningLevel?.speaking || 'A1'}
          </StyledText>
        </View>
        <View style={styles.card}>
          <Writing />
          <StyledText color='second' fontSize='subTitle'>
            Writing
          </StyledText>
          <StyledText color='second' fontSize='subTitle'>
            {user.learningLevel?.writing || 'A1'}
          </StyledText>
        </View>
      </View>
    </View>
  );
}
