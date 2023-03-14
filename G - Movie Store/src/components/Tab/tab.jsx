import React from 'react'

const Tab = ({tabId, setActiveTab, isActive}) => {

    const onClickTab = () => {
        setActiveTab(tabId)
    }

const tabClassName = isActive ? 'active' : 'in-active'

  return (
        <span onClick={onClickTab} className={tabClassName} >{tabId}</span>
  )
}

export default Tab
