import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="about-section"
    >
        <Container className="mb-5" id="about">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="about-content">
                        <h2 className="about-title">O projekcie</h2>
                        <p class="about-description">
                            Szkolny Bezpiecznik to aplikacja umożliwiająca anonimowe zgłaszanie problemów pojawiających się w szkołach. Użytkownicy mogą w prosty sposób wypełnić formularz, podając swoje dane (adres e-mail oraz opcjonalnie imię), informacje o szkole oraz opis problemu. Każde zgłoszenie jest następnie przetwarzane przez administratorów, którzy po zalogowaniu mają możliwość kontaktu z osobą zgłaszającą, dodawania komentarzy oraz zmiany statusu zgłoszenia.
                        </p>
                        <p class="about-description">
                            Aplikacja oferuje trzy poziomy dostępu, różniące się zakresem uprawnień – od podstawowego zarządzania zgłoszeniami po pełną administrację użytkownikami. Dodatkowo, zalogowani użytkownicy mogą przeglądać statystyki zgłoszeń, co pozwala na lepsze monitorowanie i analizę problemów w szkołach.
                        </p>
                        <a href="https://szkolnybezpiecznik.onrender.com/" className="styled-link" target="_blank" rel="noopener noreferrer">
                            Link do aplikacji
                        </a>

                    </div>
                </Col>
            </Row>
            <Row className="image-row mt-4">
                <Col md={12}>
                    <h2 className="gallery-title">Galeria</h2>
                </Col>
            </Row>
            <Row className="image-row mt-2">
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/4gTch5j/Zrzut-ekranu-2024-11-14-095800.png" fluid className="about-image" />
                    <p className="image-caption">Formularz zgłoszeniowy</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/7nXg7zx/Zrzut-ekranu-2024-11-14-095815.png" fluid className="about-image" />
                    <p className="image-caption">Podgląd przesłanych zgłoszeń</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/stTJY79/Zrzut-ekranu-2024-11-14-095832.png" fluid className="about-image" />
                    <p className="image-caption">Strona główna</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/ZxRsrsP/Zrzut-ekranu-2024-11-14-100406.png" fluid className="about-image" />
                    <p className="image-caption">Edycja statusu i komentarza zgłoszenia</p>
                </Col>
                <Col md={4} className="image-container">
                    <Image classname="photo" src="https://i.ibb.co/9ZY2z2z/Zrzut-ekranu-2024-11-14-100647.png" fluid className="about-image" />
                    <p className="image-caption">Podgląd użytkowników</p>
                </Col>
            </Row>
        </Container>
    </motion.div>
);

export default About;
