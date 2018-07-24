import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  defaultcontainerstyle: {
    flexDirection:              'column',
    justifyContent:             'center',
  },
  defaultlabelstyle: {
    alignSelf:                  'center',
    backgroundColor:'transparent',    
    color: '#ffffff',
    // fontWeight: '700',
    fontSize:                   20,
  },
  validIcon: {
    color: '#ffffff',
    backgroundColor:'transparent',
    right: 0,
    position: 'absolute'     
  },
  identyIcon: {
    color: '#ffffff',
    backgroundColor:'transparent',
    left: 8,
    position: 'absolute'     
  }
});

export default styles;
