import {StyleSheet, Dimensions } from 'react-native';

const { width: ScreenWidth } = Dimensions.get("screen");

const CategorySearchStyle = StyleSheet.create({

    CategorySearchScreen:{ 
        flex: 1, 
    },
    CategorySearchAudio:{ 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    CategorySearchChoose:{ 
        flex: 1.5,
    },
    CategorySearchChooseRow:{ 
        flexDirection: "row",
    },
    CategoryItemTouchSearch :{
        backgroundColor: '#313131',
        height: ScreenWidth/2,
        width: ScreenWidth/2 - 7,
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: 2,
        marginHorizontal: 2,
        resizeMode: 'cover',
        
      },
      CategoryItemTextSearch:{
        color: '#f1f1f1f1',
        fontSize: 27,
        fontWeight: "bold",
      }
});

export default CategorySearchStyle;