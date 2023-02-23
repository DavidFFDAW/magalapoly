import PageWrapper from "@/components/PageWrapper";

export default function login() {
    return (
        <PageWrapper title={'Login'}>
            <div className='login-page'>
                <div className='login-form'>
                <h1>Login</h1>
                <form>
                    <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' />
                    </div>
                </form>
                </div>
            </div>
        </PageWrapper>
    )
}
