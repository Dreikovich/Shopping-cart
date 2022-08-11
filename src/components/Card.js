import React from 'react'

const Card = () => {
  return (
    <div className="card ">
        <div className="favorite">
            <img width={22} height={22} src='image/heart-unliked.svg' alt="unliked heart"></img>
        </div>
      {/* <img width={22} height={22} src="image/heart-liked.svg" alt="unliked heart"></img> */}
        <img width={156} height={156}src="image/Lovepik_com-450079562-Be Creative T-shirt Design - Creative T-shirt Design - Motivatio.png" alt="t-shirt"></img>
        <h5>Regular-fit t-shirt for men</h5>
        <div className="d-flex justify-between align-center">
            <div className="cost d-flex flex-column ">
                <span>Price:</span>
                <b>10$</b>
            </div>
            <button>
                <img width={20} height={20} src="image/plus.png" alt="t-shirt">
                </img>
            </button>
        </div>
  </div>
  )
}

export default Card