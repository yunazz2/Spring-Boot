import React from 'react'
import Header from '../components/Header/Header'
import JoinForm from '../components/Join/JoinForm'
import * as auth from '../apis/auth'
import { useNavigate } from 'react-router-dom'
import * as Swal from '../apis/alert'

const Join = () => {

  const navigate = useNavigate()

  // 회원 가입 요청
  const join = async (form) => {

    console.log(form);

    let response
    let data

    try {
      response = await auth.join(form)

    } catch (error) {

      console.error(`${error}`);
      console.error(`회원가입 요청 중 에러 발생`);
      return
    }

    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if(status === 200) {

      console.log(`회원 가입 성공`);
      Swal.alert("회원 가입 성공", "메인 페이지로 이동합니다.", "success", () => {navigate("/login")})
      
      navigate("/login")
      
    } else {
      
      console.log(`회원 가입 실패`);
      Swal.alert("회원 가입 실패", "다시 작성하세요.", "error")
    }
  }

  return (
    <>
        <Header />
        <div className="container">
          <JoinForm join={join} />
        </div>
    </>
  )
}

export default Join