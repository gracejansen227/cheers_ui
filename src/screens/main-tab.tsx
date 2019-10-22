import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'BarDetails',
                label: 'BarDetails',
                title: 'Bar Details'
            },
            {
                screen: 'BarSearch',
                label: 'BarSearch',
                title: 'Bar Search'
            },
        ]
    })
}

export default startTabs;