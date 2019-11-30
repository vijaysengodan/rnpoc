import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import styles from './src/App.styles';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>New POC Project</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
