import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import ContactInput from './components/ContactInput';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ContactInput />);
root.render(<ContactApp />);