"use client";

// Remember you must use an AuthProvider for
// client components to useSession
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client');
        }
    });

    return (
        <h1>Logged In!</h1>
    )
}