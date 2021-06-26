import Footer from "../Components/Footer/Footer"
// import footerLinks from '.././Fixtures/footerlinks.json';

// const footerLinks = [{"id":1,"text":"FAQ"},{"id":2,"text":"Investor Relations"},{"id":3,"text":"Privacy"},{"id":4,"text":"Speed Test"},{"id":5,"text":"Help Centre"},{"id":6,"text":"Jobs"},{"id":7,"text":"Cookie Preferences"},{"id":8,"text":"Legal Notices"},{"id":9,"text":"Account"},{"id":10,"text":"Ways to Watch"},{"id":11,"text":"Corporate Information"},{"id":12,"text":"Netflix Originals"},{"id":13,"text":"Media Centre"},{"id":14,"text":"Terms of Use"},{"id":15,"text":"Contact Us"}]

function FooterContainer(){
    return(
        // <Footer>
        //     <Footer.Title>Questions? Contact us!</Footer.Title>
        //     <Footer.Break/>
        //     <Footer.Row>
        //         <Footer.Column>
        //         {footerLinks.map(item=>
        //             <Footer.Link href="#">{item.text}</Footer.Link>
        //         )}
        //         </Footer.Column>
        //     </Footer.Row>
        //     </Footer>
        <Footer>
            <Footer.Title>Questions? Contact us!</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                    <Footer.Select value="Language">
                        <option>English</option>
                        <option>Hindi</option>
                    </Footer.Select>
                    <Footer.Text>Netflix India</Footer.Text>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer>
    )
}

export default FooterContainer;