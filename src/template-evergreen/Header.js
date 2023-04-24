function Header() {

	const displayForm = (e) => {

	}
    return (
        <header className="header">
			<div className="logo"></div>
			<div className="nav">
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">Solutions</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Pricing</a></li>
					<li className="lastnav"><a href="">Contact</a></li>
				</ul>
			</div>
			<div className="loginwrapper">
				<ul>
					<li><a href="#" onClick={displayForm} className="signin">Sign in</a>
						<div className="loginform" id="loginwrapperform">
							<form method="post" action="">
							<input type="email" name="email" placeholder="email" />
							<input type="password" name="pass"  placeholder="password"/>
							<input type="submit" name="submit" value=" Log In" />
							</form>
						</div>
					</li>
					<li><a href="" className="signup">Sign up</a></li>
				</ul>
			</div>
		</header>
    )
}

export default Header;
