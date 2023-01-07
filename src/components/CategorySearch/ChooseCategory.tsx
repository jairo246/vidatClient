import { useContext } from 'react';
import {  View, } from 'react-native';
import { SearchContext } from '../../context/Search.context';

import { ChooseCategoryType } from '../../interfaces/screens/CategorySearch.interface';
import ItemCategory from './ItemCategory';
import CategorySearchStyle from '../../styles/CategorySearch.style';

const ChooseCategory = ({onSpecialtySearchPress}:ChooseCategoryType) => {

    const { search, choose } = useContext(SearchContext)

    return(

        <View style={CategorySearchStyle.CategorySearchChoose}>

        {search.categoryList.map((categoryGeneral,indexGeneral) => {

            return <View 
                    key={indexGeneral}
                    style={CategorySearchStyle.CategorySearchChooseRow}>

                {categoryGeneral.map((Category, index) => {

                    return <ItemCategory 
                            key={index}
                            name={Category.name} 
                            color={Category.color}
                            onSpecialtySearchPress={() => {

                                onSpecialtySearchPress()
                                choose(Category.name)
                            }}
                            />
                })}
            </View>

        })}
        </View>

    )
}

export default ChooseCategory;