
function ErrorLoading({ error, loading }) {
    return (
        <>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {loading && <p style={{ textAlign: 'center', color: '#196130', fontStyle: 'italic' }}>Getting your weather...</p>}
        </>
    );
}

export default ErrorLoading;