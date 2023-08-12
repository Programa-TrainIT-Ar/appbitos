import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page'
};

interface LoginLayout {
    children: React.ReactNode;
}

export default function SimpleLayout({ children }: LoginLayout) {
    return <React.Fragment>{children}</React.Fragment>;
}
