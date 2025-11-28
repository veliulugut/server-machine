import { Link } from 'react-router-dom';

export default function Breadcrumb({title, menus}) {
    return (
        <div className="breadcrumb-area bread-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="breadcrumb-title">
                            <h1>{title}</h1>
                            <h6 className="text-white">
                                <Link to="/">Ana Sayfa</Link>
                                {menus.map((menu, index) => (
                                    <span key={index}>
                                        /{' '}
                                        {menu.link ? (
                                            <Link to={menu.link}>{menu.label}</Link>
                                        ) : (
                                            menu.label
                                        )}
                                    </span>
                                ))}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
