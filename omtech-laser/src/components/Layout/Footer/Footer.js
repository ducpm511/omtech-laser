const Footer = () => {
    return(
        <div className={`container`}>
            <div className={`footer`}>
                <div className={`footerTopLeft`}>
                    <span>Be in touch with us</span>
                    <div className={`subscribeInput`}>
                        <input type="text" placeholder="Email Address"></input>
                        <button type="button">Subscribe</button>
                    </div>
                </div>
                <div className={`footerTopRight`}>
                    <span>
                    United States (English/USD)
                    </span>
                </div>
                <div className={`row`}>
                    <div className={`col-md-3 footerMenu`}>
                        <span>Career</span>
                        <a href="#">Become a laser partner</a>
                        <a href="#">Become a laser partner</a>
                        <a href="#">Become a laser partner</a>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;