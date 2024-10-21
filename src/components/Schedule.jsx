﻿import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './Schedule.css';

const Schedule = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const scheduleData = [
        { date: 'Spotkanie 1', description: 'Zapoznanie opiekuna oraz członków zespołu. Przedstawienie swoich mocnych oraz słabych stron. Nakreślenie ogólnych ram pracy.' },
        { date: 'Spotkanie 2', description: 'Zaprezentowanie przez wszystkich członków pomysłów tematu projektu oraz dyskusja.' },
        { date: 'Spotkanie 3', description: 'Ocena zaproponowych tematów. Analiza oraz ostateczny wybór tematu - aplikacja do anonimowego zgłaszania problemów w szkołach.' },
        { date: 'Spotkanie 4', description: 'Zweryfikowanie stworzonej strony internetowej - ocena, sugestie dotyczące poprawek.' },
        { date: 'Spotkanie 5', description: 'Przekazanie dokumentacji oraz zatwierdzenie ostatecznej wersji strony internetowej.' },
        { date: 'Spotkanie 6', description: 'Określenie, w jakich technologiach zostanie stworzony projekt. Podział ról. Stworzenie repozytorium na githubie. Stworzenie prostej bazy danych oraz frontendu formularza zgłoszeniowego.' },
    ];

    return (
        <Container id="schedule">
            <h1 className="schedule-title">Harmonogram</h1>
            <Container className="mt-5 schedule-container">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="schedule-item">
                            <Card.Body>
                                {scheduleData.map((item, index) => (
                                    <motion.div
                                        className="schedule-item"
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="schedule-header" onClick={() => toggleAccordion(index)}>
                                            <p className="schedule-date">{item.date}</p>
                                            <motion.div
                                                initial={false}
                                                animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="chevron-icon"
                                            >
                                                <FaChevronRight />
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            initial={false}
                                            animate={expandedIndex === index ? "open" : "collapsed"}
                                            variants={{
                                                open: { opacity: 1, height: 'auto' },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden', borderTop: '1px solid var(--primary-color)', paddingTop: '0.5rem' }}
                                        >
                                            <div className="schedule-description">
                                                <p>{item.description}</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Schedule;