import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses =
    'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await createUser({ firstName, lastName, username, email, password });
            setSuccess('Account created! Redirecting to login...');
            setTimeout(() => navigate('/auth/signin'), 1500);
        } catch (err) {
            setError(err.message || 'Sign up failed. Please try again.');
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Create your account with the same monochrome layout and shared button treatment.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSignUp}>
                {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </p>
                )}
                {success && (
                    <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600">
                        {success}
                    </p>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
                            First Name
                        </label>
                        <input
                            id="first-name"
                            type="text"
                            autoComplete="given-name"
                            className={inputClasses}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            type="text"
                            autoComplete="family-name"
                            className={inputClasses}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="username" className="text-sm font-medium text-zinc-700">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        autoComplete="username"
                        className={inputClasses}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
                        Email
                    </label>
                    <input
                        id="signup-email"
                        type="email"
                        autoComplete="email"
                        className={inputClasses}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
                        Password
                    </label>
                    <input
                        id="signup-password"
                        type="password"
                        autoComplete="new-password"
                        className={inputClasses}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                        Use a secure password with letters, numbers, and symbols.
                    </p>
                </div>
                <Button type="submit" variant="primary" className={actionButtonClassName}>
                    Create Account
                </Button>

                <div className="grid gap-3 sm:grid-cols-2">
                    <Button type="button" variant="secondary" className={actionButtonClassName}>
                        <svg className="mr-2 inline h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Sign up with Google
                    </Button>
                    <Button type="button" variant="secondary" className={actionButtonClassName}>
                        <svg className="mr-2 inline h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.898-1.454 2.327-1.283 3.69 1.351.104 2.715-.688 3.57-1.678z"/>
                        </svg>
                        Sign up with Apple
                    </Button>
                </div>
            </form>

            <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
                Already have an account?{' '}
                <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
                    Log in
                </Link>
            </div>
        </>
    );
};

export default SignUpPage;