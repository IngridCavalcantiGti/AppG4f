
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 304,
    height: 125,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardBottomLine: {
    height: 11,
    backgroundColor: '#F68B1F',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 58,
    height: 46,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  cardText: {
    color: '#545454',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;