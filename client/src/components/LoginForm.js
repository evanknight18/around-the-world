import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // Call an API here to log in, for example:
        // axios.post('/api/login', data).then(...)...

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" }})} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
