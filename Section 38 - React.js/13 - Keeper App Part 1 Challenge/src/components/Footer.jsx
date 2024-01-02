import react from "react";

const currentYear = new Date().getFullYear()

function Footer() {
    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer;