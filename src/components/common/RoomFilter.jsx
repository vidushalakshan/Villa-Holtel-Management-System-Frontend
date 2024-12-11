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
      <select
      className='form-select'
      value={filter}
      onChange={handleSelectChange}
      >
        <option value={""}> Select a room type to filter.....</option>
        {roomType.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button className='btn btn-hotel' type='button' onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}

export default RoomFilter
