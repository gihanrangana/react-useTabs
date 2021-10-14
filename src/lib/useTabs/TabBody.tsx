import React, { useLayoutEffect, useMemo, useState } from 'react'

const TabBody: React.FC<TabBodyProps> = (props) => {

    const { activeTab, activeTabIndex } = props;

    const tabStyles = props.tabStyles || {};
    
    const [currentTab, setCurrentTab] = useState(activeTab);
    const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);

    const [hide, setHide] = useState(false);

    useLayoutEffect(() => {

        if (currentTabIndex !== activeTabIndex) {

            setHide(true);

            setTimeout(() => {

                setHide(false);

                setCurrentTab(activeTab);
                setCurrentTabIndex(activeTabIndex);

            }, 300);

        }

    }, [activeTabIndex]);

    return useMemo(() => {

        return (
            <div
                key={currentTabIndex}
                ref={props.tabBodyRef}
                className={tabStyles.tabBody}
            >
                
                {currentTab && currentTab.render && currentTab.render()}

            </div>
        )
    }, [hide, currentTabIndex]);
}

interface TabBodyProps {
    [key: string]: any;
}

export default TabBody