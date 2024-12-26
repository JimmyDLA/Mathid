import { AssetByVariant } from '@/components/atoms';
import { TouchableOpacity } from 'react-native';


export const LevelButton = ({isSelected, level, handleClick}) => {

  return (
    <TouchableOpacity onPress={() => handleClick(level)}>
      {isSelected ? (
        <AssetByVariant
          path={`${level}-on`}
          resizeMode={'contain'}
        />
      ) : (
        <AssetByVariant
          path={`${level}-off`}
          resizeMode={'contain'}
        />
      )}
    </TouchableOpacity>

  )
};
