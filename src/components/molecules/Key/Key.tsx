import { AssetByVariant } from '@/components/atoms';
import { TouchableOpacity } from 'react-native';


export const Key = ({item, onKeyPress}) => {

  return (
    <TouchableOpacity onPress={() => onKeyPress(item)}>
      <AssetByVariant
        path={`${item}-key`}
        resizeMode={'contain'}
      />
      </TouchableOpacity>
  )
}