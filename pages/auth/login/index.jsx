import PageWrapper from '@/components/PageWrapper';
import Input from '@/components/Forms/Input';
import { FormButton } from '@/components/Forms/Button';
import CustomImage from '@/components/Image';
import NativeLink from '@/components/NativeLink';
import useLogin from './useLogin';

export default function Login() {
    const { setUserEmail, setUserPassword, submitLogin } = useLogin();

    return (
        <>
            <PageWrapper title={'Login'}>
                <div className="login-page">
                    <div className="login-form">
                        <CustomImage
                            src={'/icons/magalapoly.png'}
                            alt={'logo'}
                            width={200}
                            height={200}
                            className="login-image"
                        />
                        {/* <h1>Login</h1> */}
                        <form action="POST" onSubmit={submitLogin} className="flex center al-center column gap">
                            <Input
                                label={'Email:'}
                                name={'email'}
                                type={'email'}
                                onChange={setUserEmail}
                                placeholder={'example@gmail.com'}
                                autocomplete={'email'}
                            />

                            <Input
                                label={'Password:'}
                                name={'password'}
                                type={'password'}
                                onChange={setUserPassword}
                                placeholder={'********'}
                                autocomplete={'current-password'}
                            />

                            <div className="w-100 flex between al-center gap">
                                <NativeLink href={'/'} className="w-100 btn btn-form">
                                    Cancelar
                                </NativeLink>
                                <FormButton text={'Login'} className="w-100 btn-red" />
                            </div>
                        </form>
                        <div className="flex center down">
                            <span onClick={ev => console.log(ev)} className="red pointer">
                                He olvidado mi contraseña
                            </span>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
