// > CSS
import MainProductStyle from '../CSS/MainProduct.module.css';

function MainProduct(props){
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className={MainProductStyle.productImg} src={process.env.PUBLIC_URL +  '/images/product'+ props.i +'.png'} alt='productimage' />
                        <h1 className={MainProductStyle.name}>{ props.productdata.name }</h1>
                        <p className={MainProductStyle.gender}>{ props.productdata.gender }</p>
                        <p className={MainProductStyle.price}>{ props.productdata.price } 원</p>
                    </div>
                    {/* <div className="col-lg-4">
                        <img className={MainProductStyle.productImg} src={process.env.PUBLIC_URL +  '/images/product1.png'} alt="product2"/>
                        <h1 className={MainProductStyle.name}>{ props.productdata[1].name }</h1>
                        <p className={MainProductStyle.gender}>{ props.productdata[1].gender }</p>
                        <p className={MainProductStyle.price}>{ props.productdata[1].price } 원</p>
                    </div>
                    <div className="col-lg-4">
                        <img className={MainProductStyle.productImg} src={process.env.PUBLIC_URL +  '/images/product2.png'} alt="product3"/>
                        <h1 className={MainProductStyle.name}>{ props.productdata[2].name }</h1>
                        <p className={MainProductStyle.gender}>{ props.productdata[2].gender }</p>
                        <p className={MainProductStyle.price}>{ props.productdata[2].price } 원</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MainProduct;