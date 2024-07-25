import { useState } from 'react'
import '@css/App.scss'
import '@css/styles.css';
import Layout from '@layouts/Layout';
import ReportWrite from '@pages/ReportWrite';
import GraphicalEditor from '@pages/GraphicalEditor';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<ReportWrite />} />
      </Route>
      <Route path="/editor" element={<GraphicalEditor />}></Route>
    </Routes>
  )
}

export default App;
