import Link from 'next/link'

export default function Footer() {

    return (
        <footer>
            <div className="footerContent">
                <div className="footerCol">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <h4>Finnsätergård</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/components/sheep/Sheep">Djuren</Link></li>
                        <li><Link href="#">Leran</Link></li>
                        <li><Link href="#">Gården</Link></li>
                    </ul>
                </div>
                <div className="footerCol">
                    <h4>Kontakt</h4>
                    <ul>
                        <li><Link href="#">kontaktformulär</Link></li>
                        <li>tel: 02024124123985</li>
                        <li>email: kontakt@kontakt.se</li>
                    </ul>
                </div>
                <div className="footerCol">

                    <h4>Nyhetsbrev</h4>
                    <input type="text" placeholder="email adress" ></input>
                    <button>Submit</button>
                </div>
                <div className="footerColSoc">
                    <h4>Social</h4>
                    <div className="socialLinks">
                            <Link href='' className="instagram "><i className="lni lni-instagram-original"></i></Link>
                            <Link href='' className="facebook"><i className="facebook lni lni-facebook-filled"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}