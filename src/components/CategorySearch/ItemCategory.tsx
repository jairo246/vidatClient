import * as Speech from 'expo-speech';
import { Text, Pressable } from 'react-native';
import { ItemCategoryType } from '../../interfaces/screens/CategorySearch.interface';
import CategorySearchStyle from '../../styles/CategorySearch.style';

const ItemCategory = ({name, color, onSpecialtySearchPress}:ItemCategoryType) => {

  const speak = () => {
    Speech.speak(name);
  };

    
  return (
    <Pressable       
            onPress={onSpecialtySearchPress}
            onLongPress={speak}
            style={[CategorySearchStyle.CategoryItemTouchSearch,{backgroundColor: color}]}
       >
      <Text style={CategorySearchStyle.CategoryItemTextSearch}>{name}</Text>
 
    </Pressable>
  );
}

export default ItemCategory