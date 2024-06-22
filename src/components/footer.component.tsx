function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-size">
                    <div className="footer-inner-size">
                        <div className="flex">
                            <div>
                                <div className="w-40 pt-2 pb-1">
                                    <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="inshorts" />
                                </div>
                                <div className="footer-logo">
                                    <span className="footer-logo-desc">
                                        <span className="footer-logo-name">Inshorts</span> Pte. Ltd.</span><br />
                                    <div className="footer-logo-desc">©<span style={{ fontSize: "12px" }}>COPYRIGHT 2024  </span>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-us">
                                <div className="w-36">
                                    <img src="https://assets.inshorts.com/website_assets/images/contact_icon.png" alt="contact" /></div><div style={{ marginTop: '16px' }}>
                                    <a className="footer-tc" target="_blank" href="/tnc"><span>Terms &amp; conditions</span><br />
                                        <div>Privacy Policies</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-banner">
                            <div className="footer-banner-display">For the best experience use &nbsp;
                            <a target="_blank" href="https://inshorts.com/mobile" style={{color: "white", appearance: "none", fontWeight: '500',}}>inshorts</a> app on your smartphone</div>
                            <div style={{display: 'flex'}}>
                                <a target="_blank" href="https://inshorts.onelink.me/398813699/Website" style={{display: 'flex'}}>
                                    <img className="iAjs3sBFVb0SFkCNlLII" src="https://assets.inshorts.com/website_assets/images/appstore.png" height="52" width="140" alt="inshorts"/></a>
                                    <a target="_blank" href="https://inshorts.onelink.me/398813699/Website" style={{display: 'flex'}}>
                                        <img className="iAjs3sBFVb0SFkCNlLII" src="https://assets.inshorts.com/website_assets/images/playstore.png" height="52" width="140" alt="inshorts"/></a>
                            </div>
                        </div>
                        <div className="footer-social-media">
                            <div className="w-9 p-1"><a target="_blank" href="https://www.facebook.com/inshortsapp" aria-label="Facebook">
                                <img alt="Facebook" src="https://assets.inshorts.com/website_assets/images/facebook.png" /></a>
                            </div>
                            <div className="w-9 p-1"><a target="_blank" href="https://twitter.com/inshorts" aria-label="Twitter">
                                <img alt="Twitter" src="https://assets.inshorts.com/website_assets/images/twitter.png" /></a>
                            </div>
                            <div className="w-9 p-1"><a target="_blank" href="https://www.linkedin.com/company/news-in-shorts" aria-label="Linkedin">
                                <img alt="Linkedin" src="https://assets.inshorts.com/website_assets/images/linkedin.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer