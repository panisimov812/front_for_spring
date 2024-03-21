import React, { useState, useEffect } from 'react';
import './Loader.css'; // Подключаем файл стилей для компонента Loader

const Loader = ({ duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false); // Устанавливаем видимость загрузчика в false через duration миллисекунд
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <div className={`loader-overlay ${visible ? 'visible' : ''}`}>
            <div className="loader-spinner"></div>
        </div>
    );
};

export default Loader;