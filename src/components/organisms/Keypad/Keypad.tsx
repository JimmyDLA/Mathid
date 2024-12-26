import { View } from 'react-native'
import { Key } from '@/components/molecules'

export const Keypad = ({ onKeyPress }) => {

  return (
    <View style={styles.keypad}>
      <Key item={1} onKeyPress={onKeyPress} />
      <Key item={2} onKeyPress={onKeyPress} />
      <Key item={3} onKeyPress={onKeyPress} />
      <Key item={4} onKeyPress={onKeyPress} />
      <Key item={5} onKeyPress={onKeyPress} />
      <Key item={6} onKeyPress={onKeyPress} />
      <Key item={7} onKeyPress={onKeyPress} />
      <Key item={8} onKeyPress={onKeyPress} />
      <Key item={9} onKeyPress={onKeyPress} />
      <Key item={'del'} onKeyPress={onKeyPress} />
      <Key item={0} onKeyPress={onKeyPress} />
      <Key item={'check'} onKeyPress={onKeyPress} />
    </View>
  )
}

const styles = {
  keypad: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 35,
    width: 350
  }
}