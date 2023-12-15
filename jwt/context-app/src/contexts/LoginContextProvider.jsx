import React, { createContext, useEffect, useState } from 'react'

export const LoginContext = createContext();
LoginContext.displayName = 'LoginContextName';  // 출력하고 싶은 이름..?

const LoginContextProvider = ({children}) => {    // 이 안에서 LoginContextProvider를 정의

    // context value : 로그인 여부, 로그아웃 함수
    const [isLogin, setLogin] = useState(false);

    const logout = () => {
        setLogin(false)
    }

    useEffect(() => {
        // 3초 뒤에 로그인
        setTimeout(() => {
            setLogin(true)
        }, 3000)
    }, [])

    return (
        <LoginContext.Provider value={{isLogin, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider