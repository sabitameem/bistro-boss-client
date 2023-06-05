import { Link } from 'react-router-dom';
import ErrorPhoto from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='w-full text-center'>
            <img className='mx-auto' src={ErrorPhoto} alt="" />
            <Link to='/'><button className='bg-custom-color text-white px-4 py-2 rounded-lg'>Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;