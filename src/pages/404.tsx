// import nopageimg from '../assets/nopage.webp';

import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <section className='container'>
            <div className='nopage d column gap-2 center middle' style={{ margin: '0 auto', maxWidth: 700, minHeight: '80vh' }}>
                <img src="/assets/img/404-page.svg" alt="404-page" style={{width: '100%', height: 'auto'}} />
                <div className="d center middle gap wrap">
                    <div className="lg-text">Sorry! The page not found.</div>
                    <Link to='/' className="lg-text primary-text" style={{textDecoration: 'underline'}}>Go to Home Page</Link>
                </div>
            </div>
        </section >
    )
};

export default NoPage;