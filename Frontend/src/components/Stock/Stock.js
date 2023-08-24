import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { baseUrl } from "../.."




const Stock=forwardRef((props,ref)=> {
  const {newProducts} = props 
    return (
          <div className="products_section" ref={ref}>
          <h3>Stock</h3>
          <div className="products">
            {newProducts.map((elem) => (
              <div>
                <Link
                  key={elem.id}
                  to={`/products/${elem.id}`}
                  className="product_title"
                >
                  <img
                    src={baseUrl + elem.image}
                    alt="photo"
                    width="350"
                    height="290"
                  />
                  <div className="product_price">
                    <p className="discont_price">{elem.discont_price}$</p>
                    <p className="price">{elem.price}$</p>
                    <p className="percent">
                      -
                      {Math.round(
                        100 - (elem.discont_price * 100) / elem.price
                      )}
                      %
                    </p>
                  </div>

                  {elem.title}
                </Link>
              </div>
            ))}
          </div>  
          </div>
         
          )
}
)
  export default Stock