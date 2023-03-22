import React from 'react'

const Items = () => {
  return (
    <div className='card p-2 shadow m-2'>
    <div className='d-flex justify-content-between'>
    <h6>Doctor</h6>
    <div>
    <i className="bi bi-star text-black m-1 cursor"></i>
    <i class="bi bi-trash3"></i>
    </div>
    </div>
      <div>
      <p>MD.Raja shekel</p>
      <p>01/12/2021 <span>12:00 PM</span></p>
      <p className='text-muted'>Description of the doctor for eyesight</p>
      </div>
    </div>
  )
}

export default Items;