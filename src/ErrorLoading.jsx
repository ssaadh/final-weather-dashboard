
function ErrorLoading({ error, loading }) {
    return (
        <>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {loading && <p style={{ textAlign: 'center', color: '#274b7e' }}>Getting your weather</p>}
        </>
    );
}

export default ErrorLoading;