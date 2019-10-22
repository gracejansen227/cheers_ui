import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'rncreate.BarDetails',
                label: 'BarDetails',
                title: 'Bar Details'
            },
            {
                screen: 'rncreate.BarSearch',
                label: 'BarSearch',
                title: 'Bar Search'
            },
        ]
    })
}

export default startTabs;