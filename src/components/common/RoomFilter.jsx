import React, { useState } from 'react'

const RoomFilter = ({data, setFilterData}) => {
    const [filter, setFilter] = useState("")

    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value 
        setFilter(selectedRoomType)
        const filteredRooms = data.filter((room) =>
            room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase()))
        setFilterData(filteredRooms)
    }

    const clearFilter = () => {
        setFilter("")
        setFilteredData(data)
    }

    const roomType = ["", ...new Set(data.map((room) => room.roomType))]

  return (
    <div className='input-group mb-3'>
      <span className='input-group-text' id='room-type-filter'>
        Filter rooms by type
      </span>
    </div>
  )
}

export default RoomFilter
