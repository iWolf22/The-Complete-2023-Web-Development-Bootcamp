"use client";
export default function ErrorBoundary({error} : {error: Error}) {
    return <div>Error in Review: {error.message}!</div>
}