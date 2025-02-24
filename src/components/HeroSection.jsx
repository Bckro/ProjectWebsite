import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Importujemy motion z framer-motion
import './HeroSection.css'; // Importujemy stylizację sekcji Hero

const HeroSection = () => {

    const handleLearnMoreClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-section"
        >
            <Container className="mt-5" id="hero-section">
                <div className="hero-content">
                    <h1 className="title">Szkolny Bezpiecznik</h1>
                    <p className="description">
                        Aplikacja służąca do zgłaszania problemów w szkołach.
                    </p>
                    <Button onClick={handleLearnMoreClick}
                        variant="primary"
                        className="custom-button"
                    >
                        Zobacz szczegóły
                    </Button>
                </div>
            </Container>
        </motion.div>
    );
};

export default HeroSection;
