import { useContext } from 'react';
import {  View, } from 'react-native';

import { SearchContext } from '../../context/Search.context';
import { ChooseSpecialtyType } from '../../interfaces/screens/SpecialtySearch.interface';

import ItemSpecialty from '../../queries/Filter.query';
import SpecialtySearchStyle from '../../styles/SpecialtySearch.style';

const ChooseSpecialty = ({onResultServicePress}:ChooseSpecialtyType) => {

    const { search } = useContext(SearchContext)

    return(

        <View style={SpecialtySearchStyle.SpecialtySearchChoose}>

        {search.specialtyesChoose.specialties.map((specialtiesGeneral,indexGeneral) => {

            return <View 
                    key={indexGeneral}
                    style={SpecialtySearchStyle.SpecialtySearchChooseRow}>

                {specialtiesGeneral.map((specialties, index) => {

                    return <ItemSpecialty 
                            key={index}
                            name={specialties.name} 
                            color={specialties.color}
                            onResultServicePress={() => {

                                onResultServicePress()
                            }}
                            />
                })}
            </View>

        })}
        </View>

    )
}

export default ChooseSpecialty;