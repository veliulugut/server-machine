import { Link } from 'react-router-dom';
import logo from "@/assets/img/newlogo.png";
import { useAppContext } from "@/context";

export default function SearchDropdown() {
    const { isSearchActive, closeSearch } = useAppContext();

    return (
        <div className={`${isSearchActive ? 'search-active ' : ''}search-popup`}>
            <span className="search-back-drop" onClick={closeSearch}></span>

            <div className="search-inner">
                <div className="container">
                    <div className="logo">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <button className="close-search" onClick={closeSearch}><span className="la la-times"></span>
                    </button>
                    <form method="post" action="#">
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Anahtar kelimenizi yazın"
                                required="" />
                            <button type="submit"><i className="fal fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
