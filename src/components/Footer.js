import { Fragment } from 'react'
const Footer = (props) => {
    return (
        <Fragment>
            <footer className="mt-5 footer">
                <div className="footer-content">
                    <p className="credit">
                    {" "}
                        <a
                            href="https://github.com/MahsumaRezai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                          Designed and Developed by Masoumeh Nowrozi              </a>
                        {" "}
                        <a
                            href="https://github.com/MahsumaRezai/Dictionary_App"
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