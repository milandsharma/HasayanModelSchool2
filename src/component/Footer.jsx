import React from 'react'

function Footer(){
    const time = new Date().getFullYear();
    return(
        <div className="FooterMain">
            <footer>
                <div className="footerCon">
                    <h2><i class="fa-solid fa-location-dot"></i></h2>
                    <h2><a href="https://maps.app.goo.gl/U5cQwjzTSXeoMxJ48">Model Primary School Hasayan No.1 Hasayan Hathras Uttar Pradesh India</a></h2>
                </div>
                <div className="footerCon">
                <h2><i class="fa-brands fa-facebook"></i></h2>
                    <h2><a href="https://www.facebook.com/profile.php?id=100064044040225">Facebook</a></h2>
                </div>
                <div className="footerCon">
                <h2><i class="fa-brands fa-youtube"></i></h2>
                    <h2><a href="https://youtube.com/channel/UCwX5IolLn81EBcUsrKaKJfA">Youtube</a></h2>
                </div>
            </footer>
            <div className="copyright"><h4>Copyright <i class="fa-solid fa-copyright"></i> {time} All Rights Reserved. <a href="mailto: milandsharma24@gmail.com">Miland sharma</a></h4></div>
        </div>
    )
}

export default Footer