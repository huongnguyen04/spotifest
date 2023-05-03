import * as React from 'react';
import { createRoot } from 'react-dom/client';

import "./assets/styles.css";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<div>Hello!</div>);