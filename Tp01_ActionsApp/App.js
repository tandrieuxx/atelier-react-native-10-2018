import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application il y aura probalement d'autres informations à
    // stocker
    state = {
        texteSaisie: '',
        actions: []
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        this.setState({texteSaisie: nouvelleSaisie});
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        const newKey = this.state.actions.length == 0
            ? '0'
            : parseInt(this.state.actions.slice(-1)[0].key) + 1 + ""

        this.setState({
            actions: [
                ...this.state.actions, {
                    key: newKey,
                    name: this.state.texteSaisie,
                    done: false
                }
            ]
        })
    }

    deleteAction = (action) => {
        const actions = [...this.state.actions];
        const index = actions.indexOf(action);
        actions.splice(index, 1);
        this.setState({actions: actions});
    }
    finishAction = (action) => {
        const actions = [...this.state.actions];
        const index = actions.indexOf(action);
        actions[index].done = !actions[index].done;
        this.setState({actions: actions});
    }

    render() {
        const {texteSaisie} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie
                        texteSaisie={texteSaisie}
                        evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions
                        actions={this.state.actions}
                        funcs={{delete: this.deleteAction, finish:this.finishAction}}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                < Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})