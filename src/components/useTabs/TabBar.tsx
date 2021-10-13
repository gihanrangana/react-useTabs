import React, { useCallback, useMemo } from 'react'

const TabBar: React.FC<TabBarProps> = (props) => {

    const { tabs, tabState, tabMinWidth, tabMinItems, activeTabName, activeTabIndex, setActiveTab } = props;

    const tabStyles = props.tabStyles || {};

    const onClick = useCallback((e, tab, index) => {

        e.preventDefault();

        if (tab.onPress) {
            tab.onPress(tab, tabState);

        } else if (props.onPress) {

            props.onPress(tab, tabState);

        } else {

            setActiveTab(tab.name);

        }

    }, [tabs])

    const renderItem = useCallback((tab, index) => {

        const tabClass = [tabStyles.tabItem];
        const tabLabelClass = [tabStyles.tabLabel];
        const tabIndicatorClass = [tabStyles.tabIndicator];

        if (index === activeTabIndex) {
            tabClass.push(tabStyles.tabItemActive);
            tabLabelClass.push(tabStyles.tabLabelActive);
            tabIndicatorClass.push(tabStyles.tabIndicatorActive);
        }

        return (
            <a
                key={index}
                href={`#${tab.name}`}
                onClick={(e) => onClick(e, tab, index)}
                className={tabClass.join(' ')}
            >

                <span className={tabLabelClass.join(' ')}>{tab.label}</span>
                
                <div className={tabIndicatorClass.join(' ')} />
            </a>
        )

    }, [activeTabIndex])

    return useMemo(() => (

        <div
            ref={props.tabBarRef}
            className={tabStyles.tabBar}
        >

            {tabs.map((tab: any, i: any) => (

                renderItem(tab, i)

            ))}

        </div>

    ), [props])
}

interface TabBarProps {
    [key: string]: any;
}

export default TabBar