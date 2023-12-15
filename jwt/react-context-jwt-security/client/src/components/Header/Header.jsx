import { LoginContext } from '../../contexts/LoginContextProvider'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import './Header.css';

const Header = () => {

    // ✅ isLogin : 로그인 여부 - Y(true), N(false)
    // 🟩 logout() : 로그아웃 함수 - setLogin(false)
    const {isLogin, login, logout} = useContext(LoginContext)
    

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="https://i.imgur.com/fzADqJo.png" alt="logo" className='logo' />
                </Link>
            </div>

            <div className="util">
                {
                    // 비 로그인 시
                    !isLogin
                    ?
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                        <li><Link to="/about">소개</Link></li>
                        <li><Link to="/admin">관리자</Link></li>
                    </ul>
                    :
                    // 로그인 시
                    <ul>
                        <li><Link to="/user">마이페이지</Link></li>
                        <li><Link to="/admin">관리자</Link></li>
                        <li><button className='link' onClick={() => logout()}>로그아웃</button></li>
                    </ul>
                }
            </div>
        </header>
    )
}

export default Header