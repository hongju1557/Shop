import { useState } from "react"
import users from "../data/users"
import { useNavigate } from "react-router-dom"



const SignIn = ({setUserName}) => {
    const [formData,setFormData] = useState({
        username:"", //id
        password:"" //password
    })

    //페이지 이동 훅 = useNavigate()
    const navigate = useNavigate();

    //로그인 결과 상태관리
    const [result, setResult] = useState("")

    const handleInputChange = (e) => {
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출 데이터 : ", formData);

        //로그인 결과 처리
        const {username, password} = formData;

        //데이터 일치 여부 - find()
        const matched = users.find((user) => {
            return user.username === username && user.password === password;
        }
    );
        // setResult(matched ? "success" : "fail")
        if(matched){
            setUserName(matched.username);
            setResult("success")
            navigate("/");
        }else(
            setResult("fail")
        )

        //입력값 초기화
        // setFormData({username:"",password:""});

        //메인 페이지 이동
        
    }

    return (
        <div className="sign-in">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text"
                    name="username"
                    placeholder="아이디 입력"
                    value={formData.username}
                    onChange={handleInputChange}
                     />
                </div>
                <div>
                    <input 
                    type="password"
                    name="password"
                    placeholder="비밀번호 입력"
                    value={formData.password}
                    onChange={handleInputChange}
                     />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
            {/* 결과 메시지 출력 */}
            {/* {result === "success" && (<p>환영합니다.</p>)} */}
            {result === "fail" && (<p>아이디 혹은 비밀번호를 확인해주세요.</p>)}
        </div>
    )
}

export default SignIn