import React from 'react'

const RoomPaginator = ({currentPage, totalPages, onPageChange}) => {
    const pageNumbers = Array.from({length : totalPages}, (_, i) => i + 1)
  return (
    <nav>
        <ul className='pagination, justify-content-center '>

        </ul>
    </nav>
  )
}

export default RoomPaginator
