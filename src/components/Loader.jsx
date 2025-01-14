function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center inset-0 bg- vh-100">
            <div className="d-flex justify-content-center align-items-center">
                <svg className="spinner-border" role="status" viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth="5"></circle>
                </svg>
            </div>
        </div>
    );
}

export default Loader;