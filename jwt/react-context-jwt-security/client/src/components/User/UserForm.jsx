import React from 'react'

const UserForm = ({userInfo, updateUser, deleteUser}) => {

    const onUpdate = (e) => {
        e.preventDefault()  // submit 버튼 누르면 제출되는거 막기(기본 액션)

        const form = e.target
        const userId = form.username.value
        const userPw = form.password.value
        const name = form.name.value
        const email = form.email.value

        console.log(userId, userPw, name, email);

        updateUser({userId, userPw, name, email})   // 내려받은 updateUser
    }

    return (
        <div className="form">
            <h2 className="login-title">Join</h2>

            <form className='login-form' onSubmit={(e) => onUpdate(e) }>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id='username'
                    placeholder='username'
                    name='username'
                    autoComplete='username'
                    required
                    readOnly
                    defaultValue={userInfo?.userId} // 렌더링 되는 시점에 따라 아이디가 null일 수도 있으니 체크
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
                    defaultValue={userInfo?.name}
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
                    defaultValue={userInfo?.email}
                    />
                </div>

                <button type='submit' className='btn btn--form btn-login'>
                    수정하기
                </button>
                <button type='button' className='btn btn--form btn-login' onClick={() => deleteUser(userInfo.userId)} >
                    회원 탈퇴
                </button>
            </form>
        </div>
    )
}

export default UserForm