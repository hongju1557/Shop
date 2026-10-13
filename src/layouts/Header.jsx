import {Link, useNavigate} from "react-router-dom"
const Header = ({userName, setUserName}) => {
    const navigate = useNavigate()

    const handleLogout = () =>{
        setUserName("")
        navigate("/SignIn")
    }


    return (
        <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>상품 목록</Link>
            <Link to={"/addproduct"}>상품 등록</Link>
            {userName ? (
                <>
                <span>{userName}님 환영합니다.</span>
                <button className="logoutbutton" onClick={handleLogout}>로그아웃</button>
            </>
            ) : 
            (<Link to={"/Signin"}>로그인</Link>

            )}


            
        </div>
    )
}


export default Header