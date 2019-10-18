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
    color: '#000000',
    // fontWeight: '700',
    fontSize:                   20,
  },
  validIcon: {
    color: '#000000',
    backgroundColor:'transparent',
    right: 0,
    position: 'absolute'     
  },
  identyIcon: {
    color: '#000000',
    backgroundColor:'transparent',
    left: 8,
    position: 'absolute'     
  }
});

export default styles;
