import {useParams, useNavigate} from 'react-router-dom'
import products from '../datas/products';

const ProductInfo = () => {
    const {id} = useParams();

    //페이지 이동
    const navigate = useNavigate();

    const product = products.find((p => p.id === Number(id)));

    return(
        <div className="product-info">
            <h2>상품 정보</h2>
            <div className="detail">
                <p>상품 이름 : {product.name}</p>
                <p>가격 : {product.price}</p>
                <p>설명 : {product.description}</p>
            </div>
            <div>
                <button onClick={()=> {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo