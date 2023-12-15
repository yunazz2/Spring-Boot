import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header'
import { LoginContext } from '../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const {isLogin, userInfo, roles} = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    
    // 컴포넌트가 마운트 됐을 때 로그인 여부를 체크 하는데,
    if(!isLogin || !userInfo) {  // 로그인 상태가 아닌 경우
      alert(`로그인이 필요합니다.`)
      navigate("/login")
      return
    }
    if(!roles.isAdmin) {  // 로그인은 되어있으나 관리자 권한이 없는 경우
      alert(`권한이 없습니다.`)
      navigate(-1)  // 뒤로 가기
      return
    }
  }, [])

  return (
    <>
      {
        isLogin && roles.isAdmin &&
        <>
          <Header />
          <div className="container">
              <h1>Admin</h1>
              <hr />
              <h2>관리자 페이지</h2>
              <center>
                <img src="/img/loading.webp" alt="loading" />
              </center>
          </div>
        </>
      }
    </>
  )
}

export default Admin