import React from 'react';
import { Text, View, Button } from 'react-native'


export default function HomeScreen({ navigation }) {

    return (

        <View className="mt-10">

            <Button
                title="Go to Page 2"
                onPress={() => navigation.navigate('Page2')}
            />
        </View>

    )

}