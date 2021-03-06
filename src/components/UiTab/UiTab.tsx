import React from 'react'
import { TabBar, TabBody } from '../../lib'

import tabBarStyles from './UiTabBar.module.scss'
import tabBodyStyles from './UiTabBody.module.scss'

const UiTabBar: React.FC<UiTabBarProps> = (props) => {

    return (
        <>
            <TabBar
                {...props}
                tabStyles={tabBarStyles}
            />
        </>
    )
}

const UiTabBody: React.FC<UiTabBodyProps> = (props) => {

    return (
        <>
            <TabBody
                {...props}
                tabStyles={tabBodyStyles}
            />
        </>
    )
}

interface UiTabBodyProps {
    [key: string]: any;
}

interface UiTabBarProps {
    [key: string]: any;
}


export { UiTabBar, UiTabBody }