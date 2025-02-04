import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faGears, faUser, faUsers, faDownload, faBrush } from '@fortawesome/free-solid-svg-icons';

import './Documentation.css';

const Documentation = () => {
    return (
        <Container className="doc-section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="documentation"
            >
                <Container className="mt-5" id="documentation">
                    <h1 className="section-title">Pliki do pobrania</h1>
                    <div className="doc-cards">
                        <div className="documentation-card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <FontAwesomeIcon className="icon" icon={faUsers} />
                                    <FontAwesomeIcon className="icon" icon={faFileAlt} />
                                </div>
                                <h3 className="cardtitle">
                                    Raporty grupowe
                                    
                                </h3>
                                <a href="https://ukwbydgoszcz.sharepoint.com/:f:/s/S_ZPI.gr12_2024/EsYbrljavjJOsQzVC3c3MVkBrf8Y77K0ifxeKwxSnjuhnw?e=zFNKHn">
                                <Button
                                    variant="primary"
                                    className="custom-button"
                                >
                                    <FontAwesomeIcon icon={faDownload} className="button-icon" />
                                    Pobierz
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="documentation-card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <FontAwesomeIcon className="icon" icon={faUser} />
                                    <FontAwesomeIcon className="icon" icon={faFileAlt} />
                                </div>
                                <h3 className="cardtitle">
                                    Raporty indywidualne
                                    
                                </h3>
                                <a href="https://ukwbydgoszcz.sharepoint.com/:f:/s/S_ZPI.gr12_2024/EsYbrljavjJOsQzVC3c3MVkBrf8Y77K0ifxeKwxSnjuhnw?e=zFNKHn">
                                <Button
                                    variant="primary"
                                    className="custom-button"
                                >
                                    <FontAwesomeIcon icon={faDownload} className="button-icon" />
                                    Pobierz
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="documentation-card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <FontAwesomeIcon className="icon" icon={faGears} />
                                    <FontAwesomeIcon className="icon" icon={faFileAlt} />
                                </div>
                                <h3 className="cardtitle">Dokumentacja projektu
                                    
                                </h3>
                               
                                <a
                                    href="https://ukwbydgoszcz.sharepoint.com/:b:/s/S_ZPI.gr12_2024/EfepVtx-4cBEntpo0-md1KUBURkp0R3QWGW1EIBKRn3zLw?e=k3DXwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="custom-button"
                                >
                                    <FontAwesomeIcon icon={faDownload} className="button-icon" />
                                    Pobierz
                                </a>

                            </div>
                        </div>
                        <div className="documentation-card">
                            <div className="card-body">
                                <div className="card-icon">
                                    <FontAwesomeIcon className="icon" icon={faBrush} />
                                    <FontAwesomeIcon className="icon" icon={faFileAlt} />
                                </div>
                                <h3 className="cardtitle">Ulotka

                                </h3>

                                <Button
                                    variant="primary"
                                    className="custom-button"
                                    onClick={() => window.open('https://ukwbydgoszcz.sharepoint.com/:b:/s/S_ZPI.gr12_2024/EdeRj2-ehxNJkSrmI7TuSyAB2TRvbW-A-CjPuIVfhJBBbA?e=si187V', '_blank')}
                                >
                                    <FontAwesomeIcon icon={faDownload} className="button-icon" />
                                    Pobierz
                                </Button>

                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </Container>
    );
}

export default Documentation;
