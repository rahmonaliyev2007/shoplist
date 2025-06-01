import React from 'react'
import { useParams } from 'react-router'
import getSingleGroup from '../../../service/getGroups'

const Group = () => {
    const {data} = getSingleGroup();
  return (
    <div className={`bg-red-300 w-full`}>Group</div>
  )
}

export default Group