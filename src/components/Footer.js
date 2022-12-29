import React from 'react';
import '../styles/footer.css';
import logoFooter from '../logoFooter.png';

const Footer = () => {
    return(
        <>
            <footer>
                <div className='rodape'>
                    <div className='logoFooter'>
                        <img src={logoFooter}/>
                    </div>
                    <div className='socialNetwork'>
                        <a href='https://www.instagram.com/emanuel_azevedo82018/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href='https://www.emanuelazevedo.com.br' target='_blank'><i class="fa-solid fa-globe"></i></a>
                        <a href='https://www.linkedin.com/in/emanuel-azevedo-7668b91b7/' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/nashEm8' target='_blank'><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;