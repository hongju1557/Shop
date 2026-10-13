import { useState } from "react"
import {useNavigate} from "react-router-dom"

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name:"",
        price:"",
        description:""
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;

            setFormData((prev) => ({
        ...prev,
        [name]: value
    }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("상품 추가", formData);

        // 입력값 검증(유효성 검사)
        if(!formData.name.trim() || !formData.price || !formData.description.trim()){
            alert("모든 필드를 입력하세요");
            return;
        }

        //가격 필드 검증
        if(isNaN(formData.price) || formData.price <0){
            alert("가격은 0보다 큰 숫자를 입력해주세요.")
            return;
        }

        alert("상품이 등록되었습니다.")
        navigate("/products");
        
    }
    const handleCancel = () => {
        //입력 필드 초기화
        setFormData({
            name:'',
            price:'',
            description:'',

        })
    }
    
    return(
        <div className="add-product">
            <h2>상품 추가</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="상품명을 입력하세요."
                     />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="가격을 입력하세요."
                     />
                </div>
                    <div>
                    <label htmlFor="description">설명</label>
                    <textarea 
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="상품설명을 입력하세요."
                     />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button type="button" onClick={handleCancel}>지우기</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct