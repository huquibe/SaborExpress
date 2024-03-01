import React from 'react';
import { Navigation } from "./routes";

import { ClientLayout } from "./Layouts"

export default function App() {
  return (
    <ClientLayout>
        <h1>Inicializando SaborExpress</h1>
      <Navigation />
    </ClientLayout>
  );
} 