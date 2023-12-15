import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as auth from '../apis/auth'
import Header from '../components/Header/Header'
import UserForm from '../components/User/UserForm'
import { LoginContext } from '../contexts/LoginContextProvider'
import * as Swal from '../apis/alert'

const User = () => {

  const {isLogin, roles, logout} = useContext(LoginContext)
  const [userInfo, setUserInfo] = useState()
  const navigate = useNavigate();

  // 회원 정보 조회 - /user/info로 데이터를 먼저 받아와서 상태에 저장
  const getUserInfo = async () => {

    // 비로그인 또는 USER 권한이 없으면 로그인 페이지로 이동
    if(!isLogin || !roles.isUser) {
      navigate("/login")
      return
    }

    const response = await auth.info()
    const data = response.data
    console.log(`getUserInfo`);
    console.log(data);
    setUserInfo(data)
  }

  // 회원 정보 수정
  const updateUser = async (form) => {
    console.log(form);

    let response
    let data
    
    try {
      response = await auth.update(form)
    } catch (error) {
      console.error(`${error}`);
      console.error(`회원 정보 수정 중 에러 발생`);
      return
    }
    
    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`statue : ${status}`);
    
    if(status === 200) {
      
      console.log(`회원 정보 수정 완료`);
      Swal.alert("회원 정보 수정에 성공했습니다.", "로그아웃 후 다시 로그인 해주세요", "success", () =>{logout()})
      
      // 회원 정보 수정 시 로그아웃 처리
      // logout()
      
    } else {
      console.log(`회원 정보 수정 실패`);
      alert(`회원 정보 수정 실패!`)
    }
  }

  // 회원 탈퇴
  const deleteUser = async (userId) => {
    console.log(userId);
    
    let response
    let data
    
    try {
      response = await auth.remove(userId)

    } catch (error) {
      console.error(`${error}`);
      console.error(`회원 삭제 중 에러 발생`);
      return
    }

    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`statue : ${status}`);
    
    if(status === 200) {
      console.log(`회원 삭제 완료`);
      alert(`회원 삭제 성공!`)
      
      // 회원 정보 삭제 시 로그아웃 처리
      logout()
      
    } else {
      console.log(`회원 삭제 실패`);
      alert(`회원 삭제 실패!`)
    }
  }

  useEffect(() => {
    if(!isLogin) { // isLogin이 true일 때만 getUserInfo를 호출하겠다
      return
    }
    getUserInfo()
  }, [isLogin])
  
  return (
    <>
        <Header />
        <div className="container">
            <UserForm userInfo={userInfo} updateUser={updateUser} deleteUser={deleteUser} />
        </div>
    </>
  )
}

export default User