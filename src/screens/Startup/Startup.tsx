import type { RootScreenProps } from '@/navigation/types';

import { useEffect } from 'react';
import { View } from 'react-native';
import { AssetByVariant } from '@/components/atoms';
import { colors } from '../../theme/color';
import { useTheme } from '@/theme';
import { Paths } from '@/navigation/paths';
import { SafeScreen } from '@/components/templates';
import LottieView from "lottie-react-native";
import lottieLogo from '../../../assets/lottie/lottie-logo.json'

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { layout } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.Home }],
      });
    }, 2000);
  });

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
          styles
        ]}
      >
        <AssetByVariant
          path={'Mathid'}
          resizeMode={'contain'}
        />
        <LottieView 
          source={lottieLogo}
          style={{width: "100%", height: "60%"}}
          autoPlay
          loop
        />
      </View>
    </SafeScreen>
  );
}

const styles = {
  backgroundColor: colors.aliceBlue
}

export default Startup;
