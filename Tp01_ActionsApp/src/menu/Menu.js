import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({filters}) => (
    <View style={styles.menu}>
        <OptionMenu name="Actives" filter={filters.active} />
        <OptionMenu name="Toutes" filter={filters.all} />
        <OptionMenu name="Terminées" filter={filters.done} />
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu