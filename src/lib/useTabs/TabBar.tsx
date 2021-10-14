import React, { useCallback, useEffect, useMemo } from 'react'

const TabBar: React.FC<TabBarProps> = (props) => {

    const { tabs, tabState, activeTabIndex, setActiveTab } = props;

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

        if (index === activeTabIndex) {
            tabClass.push(tabStyles.tabItemActive);
            tabLabelClass.push(tabStyles.tabLabelActive);
        }

        return (
            <a
                ref={index === activeTabIndex ? props.tabActiveRef : null}
                key={index}
                href={`#${tab.name}`}
                onClick={(e) => onClick(e, tab, index)}
                className={tabClass.join(' ')}
                data-active={index === activeTabIndex}
            >

                <span className={tabLabelClass.join(' ')}>{tab.label}</span>

            </a>
        )

    }, [activeTabIndex])

    useEffect(() => {

        const offsetLeft = props.tabActiveRef?.current?.offsetLeft;
        const offsetWidth = props.tabActiveRef?.current?.offsetWidth;
        
        props.tabIndicatorRef.current.style.left = offsetLeft + "px";
        props.tabIndicatorRef.current.style.width = offsetWidth + "px";
        
    },[props])

    return useMemo(() => (

        <div
            ref={props.forwardedRef}
            className={tabStyles.tabBar}
        >

            {tabs.map((tab: any, i: any) => (

                renderItem(tab, i)

            ))}

            <div ref={props.tabIndicatorRef} className={tabStyles.tabIndicator} />

        </div>

    ), [props])
}

interface TabBarProps {
    [key: string]: any;
}

export default TabBar