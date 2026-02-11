import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import TechGrid from "../TechGrid/TechGrid";


const Skills = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getSkills();
    }, []);

    const getSkills = async () => {
        const querySnapshot = await getDocs(collection(db, 'skills'));
        setSkills(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderSkills = (skills) => {
        return (
            <div className="images-container">
                {
                    skills.map((skill, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={skill.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{skill.name}</p>
                                    <h4 className="description">{skill.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(skill.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills".split("")}
                        idx={15}
                    />
                </h1>
                <TechGrid />
                <div>{renderSkills(skills)}</div>
            </div>
            
            
            <Loader type="pacman" />
        </>
    );
}

export default Skills;