import React, { useContext } from 'react'
import './LoginForm.css'
import { LoginContext } from '../../contexts/LoginContextProvider'

const LoginForm = () => {

    const {login} = useContext(LoginContext)

    const onLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const username = form.username.value
        const password = form.password.value

        login(username, password)
    }

    return (
        <div className="form">
            <h2 className="login-title">Login</h2>

            <form className='login-form' onSubmit={(e) => onLogin(e) }> {/* onLogin도 이벤트 객체를 담아주어야겠죠? */}
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id='username'
                    placeholder='username'
                    name='username'
                    autoComplete='username'
                    required
                    // TODO
                    // defaultValue={}  // 추후 아이디 저장 기능을 구현했을 때 추가 예정
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password"
                    id='password'
                    placeholder='password'
                    name='password'
                    autoComplete='password'
                    required
                    />
                </div>

                {/* 아래에서 onClick={() => login}을 걸어도 되지만, form 태그에서 위 처럼 걸어도 된다. */}
                <button type='submit' className='btn btn--form btn-login'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm