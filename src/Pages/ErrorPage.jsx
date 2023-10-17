import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2>404</h2>
            <p>Page not found</p>
            <Link to={'/'}>
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;