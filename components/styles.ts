import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  column: {
    flexDirection: 'column',
    margin: 10,
  },
  link: {
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
    backgroundColor: '#cbcbcb',
  },
  textCenter: {
    textAlign: 'center',
  },
  textOTP: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  textVerficiationCode: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  textPhoneNumber: {
    backgroundColor: '#FFFFFF',
    width: '75%',
    marginRight: 10,
  },
  fontLarge: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  fontMedium: {
    fontSize: 18,
  },
  fontSmall: {
    fontSize: 10,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: 200,
    backgroundColor: '#9b9b9b',
  },
});

export default styles;
