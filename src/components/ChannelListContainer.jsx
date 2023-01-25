import React from 'react'
import { ChannelList,useChatContext } from 'stream-chat-react'
import { ChannelSearch,TeamChannelList,TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
// import HospitalIcon 

import HospitalIcon from '../assets/hospital.png'
import LogOutIcon from '../assets/logout.png'

const SideBar=()=>(
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt="Hospital" width="30"></img>
      </div>
    </div>

    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogOutIcon} alt="LogOut" width="30"></img>
      </div>
    </div>

  </div>
)

const CompanyHeader=()=>(
  <div className='channel-list__header'>
    <p className="channel-list__header__text">Chat Application</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
    <SideBar/>
    <div className="channel-list__list__wrapper">
      <CompanyHeader/>
      <ChannelSearch/> 

      <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
          <TeamChannelList
            {...listProps}
            type="team"
          />
        )}
        Preview={(previewProps)=>(
          <TeamChannelPreview
          {...previewProps}
          type="team"
          />

        )}
      />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
          <TeamChannelList
            {...listProps}
            type="messaging"
          />
        )}
        Preview={(previewProps)=>(
          <TeamChannelPreview
          {...previewProps}
          type="messaging"
          />

        )}
      />

    </div>
    </>
  )
}

export default ChannelListContainer