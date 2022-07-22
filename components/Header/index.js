import { View, Text, StyleSheet }  from 'react-native'
import Colors from '../../constants/colors';

const Header = params => {
  const { title } = params;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary
  },
  headerTitle: {
    color: 'black',
    fontSize: 22
  }
})

export default Header;