
import { AssetByVariant } from '@/components/atoms';
import { TouchableOpacity } from 'react-native';

export const OperatorButton = ({isSelected, operator, handleClick}) => {
  return (
    <TouchableOpacity onPress={() => handleClick(operator)}>
      {isSelected ? (
        <AssetByVariant
          path={`${operator}-on`}
          resizeMode={'contain'}
        />
      ) : (
        <AssetByVariant
          path={`${operator}-off`}
          resizeMode={'contain'}
        />
      )}
    </TouchableOpacity>
  )
}