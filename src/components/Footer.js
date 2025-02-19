import { Fragment } from 'react';
import '../styles/Footer.css'
const Footer = (props) => {
    return (
        <Fragment>
            <footer className="mt-5 footer">
                <div className="footer-content">
                    <p className="credit">
                        Coded by{" "}
                        <a
                            href="https://github.com/MahsumaRezai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Masoumeh Nowrozi
                                     </a>
                        {" "}
                        <a
                            href="https://github.com/MahsumaRezai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                        </a>
                    </p>
                </div>
            </footer>
        </Fragment>
    )


}
export default Footer