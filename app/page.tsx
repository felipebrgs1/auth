'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
    const { data: session } = useSession();
    console.log('Session:', session);

    if (session) {
        return (
            <div>
                <p>Olá, {session.user?.name}</p>
                <button onClick={() => signOut()}>Sair</button>
            </div>
        );
    }

    return <button onClick={() => signIn('google')}>Entrar com Google</button>;
}
