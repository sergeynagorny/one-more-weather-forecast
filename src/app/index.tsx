import React, { FC } from 'react';
import { Routing } from 'pages';
import { withProviders } from './providers';

const App: FC = () => {
    return <Routing />;
};

export default withProviders(App);
