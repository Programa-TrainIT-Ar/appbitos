'use client';
import LoginForm from './LoginForm';
import Link from 'next/link';

export default function Login() {
    return (
        <section className="h-screen flex align-items-center justify-content-center">
            <div className="border-2 border-blue-400 shadow-4 border-round px-3 sm:px-7 sm:w-30rem w-24rem  py-8">
                <h2 className="mb-4 text-center text-blue-800">Bienvenido</h2>
                <LoginForm />
                <Link href={'/'}>¿Aun no tienes cuenta?</Link>
            </div>
        </section>
    );
}
