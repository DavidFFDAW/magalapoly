import PageWrapper from '@/components/PageWrapper';
import useRegister from './useRegister';

export default function Register() {
    const objetoMiCulo = useRegister();

    return (
        <PageWrapper title={'Registro'}>
            <h1 className="text">Register</h1>
        </PageWrapper>
    );
}
