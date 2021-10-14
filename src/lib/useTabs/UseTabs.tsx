import React, { createRef, useCallback, useState } from "react";

const useTabs = (tabs: Array<TabProps>, initialTabName?: string): TabGroup => {

    initialTabName = initialTabName || tabs[0].name;

    let initialTab: any, initialTabIndex;

    tabs.map((tab, i) => {

        if (!initialTab && tab.name === initialTabName) {
            initialTab = tab;
            initialTabIndex = i
        }

        return tab;
    })

    if (!initialTab && tabs[0]) {

        initialTab = tabs[0];
        initialTabIndex = 0;
        initialTabName = initialTab.name;

    }

    const [activeTab, setActiveTabState] = useState(initialTab);

    const [activeTabName, activeTabNameState] = useState(initialTabName);

    const [activeTabIndex, setActiveTabIndexState]: any = useState(initialTabIndex);

    const [tabDirection, setTabDirection] = useState('right');

    const setActiveTab = useCallback((tabName) => {

        tabs.map((tab, i) => {

            if (tabName === tab.name) {

                setTabDirection(i > activeTabIndex ? "right" : "left")

                setActiveTabState(tab);
                setActiveTabIndexState(i);
                activeTabNameState(tab.name);
            }

            return tab
        })

    }, [activeTab, activeTabIndex])

    return {
        tabBarRef: createRef(),
        tabBodyRef: createRef(),
        tabActiveRef: createRef(),
        tabIndicatorRef: createRef(),
        tabs: tabs,
        activeTab: activeTab,
        activeTabName: activeTabName,
        activeTabIndex: activeTabIndex,
        setActiveTab: setActiveTab,
        direction: tabDirection
    }
}


interface TabProps {
    label: string,
    name: string,
    onPress?: any,
    render?: any,
}

interface TabGroup {
    [key: string]: any;
}

export { useTabs };
export * from './TabBar';
export * from './TabBody';