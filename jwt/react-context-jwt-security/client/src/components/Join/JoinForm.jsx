import React from 'react'


const JoinForm = ({join}) => {
    
    const onJoin = (e) => { // e : 이벤트 객체
        e.preventDefault()  // 아래 폼 태그에서 join 버튼 클릭 시, submit 기본 동작 막아주기
        const form = e.target
        const userId = form.username.value
        const userPw = form.password.value
        const name = form.name.value
        const email = form.email.value

        console.log(userId, userPw, name, email);

        join({userId, userPw, name, email})

    }
    return (
        <div className="form">
            <h2 className="login-title">Join</h2>

            <form className='login-form' onSubmit={(e) => onJoin(e) }>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id='username'
                    placeholder='username'
                    name='username'
                    autoComplete='username'
                    required
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

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    id='name'
                    placeholder='name'
                    name='name'
                    autoComplete='name'
                    required
                    />
                </div>

                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text"
                    id='email'
                    placeholder='email'
                    name='email'
                    autoComplete='email'
                    required
                    />
                </div>

                <button type='submit' className='btn btn--form btn-login'>
                    Join
                </button>
            </form>
        </div>
    )
}

export default JoinForm