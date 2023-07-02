import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password", "");

    const onSubmit = data => {
        // Call an API here to register, for example:
        // axios.post('/api/register', data).then(...)...

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username:</label>
                <input id="username" {...register('username', { required: 'Username is required' })} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

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

            <div>
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input id="confirm_password" type="password" {...register('confirm_password', { required: 'Please confirm password', validate: (value) => value === password || "Passwords should match"})} />
                {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
