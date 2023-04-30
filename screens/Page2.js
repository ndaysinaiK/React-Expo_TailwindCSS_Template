import React from 'react'
import {Text, View} from 'react-native'

export default function Page2 ({route}){
const id = route.params.data
    return(

        <View className="flex-row items-center justify-center"><Text className="text-red-400 text-xl mt-10 ">Page2 getting id data = {id}</Text></View>

    )

}