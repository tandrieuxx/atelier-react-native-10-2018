import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, funcs}) => {

    return (
        <View>
            <FlatList data={actions}
                renderItem={({item}) => <UneAction action={item} funcs={funcs} />}
            />
        </View>
    )
}

export default ListeActions