import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions}) => {

    return (
        <View>
            <FlatList data={actions}
                renderItem={({item}) => <UneAction action={item} />}
            />
        </View>
    )
}

export default ListeActions