import React, { useState, useEffect } from 'react';

export const ScrambleText = ({ text, baseDelay = 0 }) => {
    const [letters, setLetters] = useState(text.split('').map(() => ''));
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        const letterAnimations = text.split('').map((targetLetter, index) => {
            const randomDelay = Math.random() * 1000;
            const iterations = 5 + Math.floor(Math.random() * 5);
            let currentIteration = 0;

            return setTimeout(() => {
                const interval = setInterval(() => {
                    setLetters(prev => {
                        const newLetters = [...prev];
                        if (currentIteration < iterations) {
                            newLetters[index] = characters[Math.floor(Math.random() * characters.length)];
                        } else {
                            newLetters[index] = targetLetter;
                            clearInterval(interval);
                        }
                        return newLetters;
                    });
                    currentIteration++;
                }, 50);

                return interval;
            }, baseDelay + randomDelay);
        });

        return () => letterAnimations.forEach(timeout => clearTimeout(timeout));
    }, [text, baseDelay]);
    return (
        <span className="inline-block">
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`inline-block ${letter === ' ' ? 'mx-2' : ''}`}
                    style={{
                        animation: `glitch-effect 3s infinite ${Math.random() * 1000}ms`
                    }}
                >
                    {letter || ' '}
                </span>
            ))}
        </span>
    );
};