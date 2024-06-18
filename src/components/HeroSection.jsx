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
                    <h1 className="title">Projekt</h1>
                    <p className="description">
                        Szkoła jest sercem edukacji, gdzie uczniowie spędzają większość swojego czasu poza domem. W związku z tym, zapewnienie bezpieczeństwa i wsparcia w szkolnym otoczeniu ma kluczowe znaczenie. Naszą misją jest nieustanne dążenie do polepszania jakości tych placówek, aby każdy uczeń mógł rozwijać się w atmosferze pełnej zaufania i zrozumienia.
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
