import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { City } from './city';
import { Home } from './home';

// Мы и так понимаем что находимся в папке страниц,
// поэтому не дублируем это еще раз, в названии компонентов — CityPage

// Кажется, что раздел Page не должен знать о существовании react-router-dom
// и роутинг дожен находится в /app/providers/with-router
// но именно это правило во избжеать путаницы я люблю нарушать

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<City />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
