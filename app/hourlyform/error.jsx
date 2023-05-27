'use client';

const error = (error) => {
    return (
        <div>
            <h1>This page failed to load due to:</h1>
            <p>{error}</p>
        </div>
    )
}

export default error