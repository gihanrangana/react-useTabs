import React from 'react';

import styles from './App.module.scss';
import { UiTabBar, UiTabBody } from './components/UiTab/UiTab';
import { useTabs } from './components/useTabs/UseTabs';

export default function App() {

    const tabs = [
        {
            name: 'tab1',
            label: 'Tab 1',
            render: () => {
                return <p>Tab 1</p>
            }
        },
        {
            name: 'tab2',
            label: 'Tab 2',
            render: () => {
                return <p>Tab 2</p>
            }
        },
        {
            name: 'tab3',
            label: 'Tab 3',
            render: () => {
                return <p>Tab 3</p>
            }
        }
    ];

    const tabGroup = useTabs(tabs, 'tab2');

    return (
        <div className={styles.container}>

            <div className={styles.tabContainer}>

                <UiTabBar
                    {...tabGroup}
                />

                {/* <div> */}

                <UiTabBody
                    {...tabGroup}
                />

                {/* </div> */}

            </div>

        </div>
    )
}