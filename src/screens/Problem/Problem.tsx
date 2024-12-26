import { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { SafeScreen } from '@/components/templates';
import { useAppContext } from '@/store/AppContext';
import { Keypad } from '@/components/organisms';
import { generateMathProblem } from '@/helper'
import { colors } from '@/theme/color';
import LottieView from "lottie-react-native";
import lottieTorphy from '../../../assets/lottie/lottie-trophy.json'
import lottieWrong from '../../../assets/lottie/lottie-wrong.json'
import lottieStar from '../../../assets/lottie/lottie-star.json'


export const Problem = ({}) => {
  const { state: { level, operators } } = useAppContext();
  const operatorArr = Object.keys(operators).filter(key => operators[key])
  const [math, setMath] = useState(generateMathProblem(level, operatorArr))
  const [stars, setStars] = useState(0)
  const [answer, setAnswer] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [correct, setCorrect] = useState(false)
  const modalGifRef = useRef()
  const starRef = useRef()

  const handleNewMathProblem = () =>  setMath(generateMathProblem(level, operatorArr))

  const clearModal = () => {
    setTimeout(() => {
      setShowModal(false)
    }, 2000);


  }

  const handleCheck = () => {
    console.log('handle check', answer,'=', math.answer)
    // check answer with typeed answer
    // if correct 
    if (answer == math.answer) {
      // call trophy
      setCorrect(true)
      setShowModal(true)
      // clear answer
      setAnswer('')
      // call new math problem
      clearModal()
      handleNewMathProblem()
      setTimeout(() => {
        modalGifRef?.current?.play()
      }, 10);
      setTimeout(() => {
        starRef?.current?.play()
        setTimeout(() => {
          setStars(stars + 1)
        }, 800);
      }, 2500);
    } else {
      // else incorrect
      setCorrect(false)
      setShowModal(true)
      setAnswer('')
      clearModal()
    }
  }

  const handleKeyPress = (key) => {
    if (key === 'check') {
      handleCheck()
    } else if (key === 'del') {
      setAnswer(answer.slice(0, -1))
    } else {
      if (answer.length < 8) {
        setAnswer(answer+key)
      }
    }
  }

  return (
    <SafeScreen>
      <Text style={{position: 'absolute', right: 90, top: 35, fontSize: 50}}>{stars}</Text>
      <LottieView 
        source={lottieStar}
        style={{position: 'absolute', width: "100", height: "100", right: 0, top: 20}}
        loop={false}
        ref={starRef}
      />
      <View style={styles.container}>
        <Text style={styles.num1}>{math.num1}</Text>
        <Text style={styles.operator}>{math.operatorSign}</Text>
        <Text style={styles.num2}>{math.num2}</Text>
        <Text style={styles.line}>{'______'}</Text>
        <Text style={styles.answer}>{answer}</Text>
        <Keypad onKeyPress={handleKeyPress} />
      </View>
      {showModal && (
        <View style={styles.lottieCont}>
          <LottieView 
            source={correct ? lottieTorphy : lottieWrong}
            style={{position: 'absolute', width: "100%", height: "60%"}}
            ref={modalGifRef}
            autoPlay
            loop={false}
          />
        </View>
      )} 
    </SafeScreen>
  )
}

const styles = {
  container: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  num1: {
    fontSize: 120,
    color: colors.turq
  },
  num2: {
    marginTop: -40,
    fontSize: 120,
    color: colors.blueYm
  },
  button: {
    backgroundColor: 'pink',
    width: 300,
    height: 100,
  },
  lottieCont: {
    zIndex: 1, 
    position: 'absolute',
    width: '100%', 
    height: '130%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  operator: {
    marginTop: -40,
    alignSelf: 'flex-start',
    paddingLeft: 200,
    fontSize: 120,
    color: colors.atomicTan
  },
  line: {
    marginTop: -80,
    fontSize: 120,
    color: colors.yellow,
  },
  answer: {
    fontSize: 120,
    color: colors.lightPurp
  }
}