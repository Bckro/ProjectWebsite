import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Element zostanie zarejestrowany tylko raz
        threshold: 0.2, // Wchodzi do widoku, gdy 20% elementu jest widoczne
    });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="footer footer-card"
        >
            <div className="contact-info">
                <h5>Kontakt</h5>
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Instytut Informatyki<br />
                    Mikołaja Kopernika 1<br />
                    Bydgoszcz, Polska
                </p>
                <p><FontAwesomeIcon icon={faPhone} /> 52 32 57 611</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> ii@ukw.edu.pl</p>
            </div>
        </motion.footer>
    );
}

export default Footer;
