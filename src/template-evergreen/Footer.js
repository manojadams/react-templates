function Footer() {
    return (
        <footer className="footer">
            <div className="subwrapper">
			    <div className="footernav">
			        <h4>Agile</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">About</a></li>
                        <li className="lastnav"><a href="">Contact</a></li>
                    </ul>
                    <h4>More information</h4>
                    <ul>
                        <li><a href="">Support Center</a></li>
                        <li><a href="">Contact Information</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
			    </div>
                <div className="socialicons">
                    <h4>Join us on</h4>
                    <ul>
                        <li><a href="" className="fb"></a></li>
                        <li><a href="" className="twitter"></a></li>
                        <li><a href="" className="linkedin"></a></li>
                        <li><a href="" className="youtube"></a></li>
                        <li><a href="" className="gplus"></a></li>
                    </ul>
                </div>
			</div>
			<div className="copyright">
				<hr />
				<h6>Copyright &copy; 2023. All rights reserved. Terms of Use. | Privacy Policy</h6>
			</div>
        </footer>
    )
}

export default Footer;
