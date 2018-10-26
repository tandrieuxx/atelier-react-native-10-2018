import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({actions, filter, funcs}) => {

    return (
        <View>
            <FlatList data={actions} extraData={filter}
                renderItem={({item}) => {
                    if(item.done == (filter == 'done') || filter == 'all') {
                        console.log('Oui')
                        return <UneAction action={item} funcs={funcs} />;
                    }
                    console.log('Non')
                    return null;
                }}
            />
        </View>
    )
}

export default ListeActions