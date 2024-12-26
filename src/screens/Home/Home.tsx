import { Text, View, TouchableOpacity } from 'react-native';
import { AssetByVariant } from '@/components/atoms';
import { Paths } from '@/navigation/paths';
import { SafeScreen } from '@/components/templates';
import { LevelButton, OperatorButton } from '@/components/organisms';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/store/AppContext';


export const Home = ({navigation}) => {
  const [isReady, setIsReady] = useState(false)
  const [levelSelect, setLevelSelect] = useState('')
  const [operatorSelect, setOperatorSelect] = useState({
    add: false,
    sub: false,
    mul: false,
    div: false,
  });
  const { updateLevel, updateOperators } = useAppContext();

  useEffect(() => {
    if (levelSelect) {
      for (const key in operatorSelect) {
        if (operatorSelect[key]) {
          return setIsReady(true)
        }
      }
    }
    return setIsReady(false)
  }, [levelSelect, operatorSelect])

  const updateSelectedLevel = (level) => {
    setLevelSelect(level)
  }

  const updateSelectedOperator = (operator) => {
    switch (operator) {
      case 'add':
        setOperatorSelect({
          ...operatorSelect,
          add: !operatorSelect.add,
        })
        break;
      case 'sub':
        setOperatorSelect({
          ...operatorSelect,
          sub: !operatorSelect.sub,
        })
        break;
      case 'mul':
        setOperatorSelect({
          ...operatorSelect,
          mul: !operatorSelect.mul,
        })
        break;
      case 'div':
        setOperatorSelect({
          ...operatorSelect,
          div: !operatorSelect.div,
        })
        break;
      default:
        break;
    }
  }

  const handleStart = () => {
    updateLevel(levelSelect)
    updateOperators(operatorSelect)
    navigation.push(Paths.Problem)
  }

  return (
    <SafeScreen style={styles.homeCont}>
      <View>
        <Text style={styles.header}>Choose Level</Text>
        <View style={styles.levelCont}>
          <LevelButton handleClick={updateSelectedLevel} level={'veryEasy'} isSelected={levelSelect === 'veryEasy'} />
          <LevelButton handleClick={updateSelectedLevel} level={'easy'} isSelected={levelSelect === 'easy'} />
          <LevelButton handleClick={updateSelectedLevel} level={'medium'} isSelected={levelSelect === 'medium'} />
          <LevelButton handleClick={updateSelectedLevel} level={'hard'} isSelected={levelSelect === 'hard'} />
          <LevelButton handleClick={updateSelectedLevel} level={'veryHard'} isSelected={levelSelect === 'veryHard'} />
        </View>
      </View>
      <View>
        <Text  style={styles.header}>Choose Any Operator</Text>
        <View style={styles.operatorCont}>
          <OperatorButton handleClick={updateSelectedOperator} operator={'add'} isSelected={operatorSelect.add} />
          <OperatorButton handleClick={updateSelectedOperator} operator={'sub'} isSelected={operatorSelect.sub} />
          <OperatorButton handleClick={updateSelectedOperator} operator={'mul'} isSelected={operatorSelect.mul} />
          <OperatorButton handleClick={updateSelectedOperator} operator={'div'} isSelected={operatorSelect.div} />
        </View>
      </View>
      <View>
        <TouchableOpacity disabled={!isReady} onPress={handleStart}>
          <AssetByVariant
            path={isReady ? 'start-button' : 'start-button-off'}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </SafeScreen>
  )
}

const styles = {
  homeCont: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 30
  },
  levelCont: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 70,
  },
  operatorCont: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 70,
  }
}