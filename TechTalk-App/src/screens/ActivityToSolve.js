import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import StyledText from '../components/StyledText.js';
import theme from '../themes/theme.js';

const ActivityToSolve = ({ route }) => {
  const { activity } = route.params;
  const [selectedIndex, setIndex] = useState({});

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.textTitle}>
          <StyledText fontSize='title' color='secondary' fontWeight='bold'>
            {activity.text.title}
          </StyledText>
        </View>
        <View style={styles.textContent}>
          <StyledText fontSize='subheading'>{activity.text.content}</StyledText>
        </View>
        <StyledText color='third' fontWeight='bold'>
          {activity.question}
        </StyledText>
        <FlatList
          data={activity.listOfAnswers}
          renderItem={({ item, index }) => (
            <View style={styles.containerCheckbox}>
              <View style={styles.checkboxText}>
                <StyledText fontSize='subheading' color='secondary'>
                  {`${index + 1}. ${item.answer}`}
                </StyledText>
              </View>
              <View style={styles.checkboxs}>
                <View
                  style={{
                    ...styles.checkbox,
                    borderBottomWidth: 1,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <CheckBox
                    checked={selectedIndex[index] === true}
                    onPress={() =>
                      setIndex((prev) => ({ ...prev, [index]: true }))
                    }
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                  />
                  <StyledText>verdadero</StyledText>
                </View>
                <View style={styles.checkbox}>
                  <CheckBox
                    checked={selectedIndex[index] === false}
                    onPress={() =>
                      setIndex((prev) => ({ ...prev, [index]: false }))
                    }
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                  />
                  <StyledText>falso</StyledText>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </ScrollView>
  );
};

export default ActivityToSolve;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    height: '100%',
    padding: 20,
    gap: 20,
  },
  textTitle: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.secondary,
    paddingVertical: 20,
    borderRadius: 10,
  },
  textContent: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    padding: 10,
  },
  containerCheckbox: {
    overflow: 'hidden',
    minWidth: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  checkboxs: {
    width: '100%',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  checkboxText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    padding: 10,
  },
});
