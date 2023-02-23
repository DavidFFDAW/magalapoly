import React from 'react';
import PageWrapper from '@/components/PageWrapper';

export default function Login() {
    const [formData, setFormData] = React.useState({ email: '', password: '' });

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <PageWrapper title={'Login'}>
                <div className="login-page">
                    <div className="flex center al-center column gap login-form">
                        <h1>Login</h1>
                        <form action="POST" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="text">
                                    Email
                                </label>
                                <input
                                    className="custom form-item"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={ev => setFormData({ ...formData, email: ev.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text">
                                    Password
                                </label>
                                <input
                                    className="custom form-item"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={ev => setFormData({ ...formData, password: ev.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
