import React from 'react'
import { Link } from 'react-router-dom';
import mainImg from "../img/image2.svg";


function Sale() {
  return (
    <div>
       <div className="section_one">
        <div className="section_one_wrapper">
          <h1>New year sale</h1>
          <div>
           <Link to="/categories/sales"> <button className="btn btn_sale">all sales</button></Link>
            <button className="btn_more">more</button>
          </div>
        </div>
        <div>
          <img src={mainImg} width="900" height="600" />
        </div>
      </div>
    </div>
  )
}

export default Sale
