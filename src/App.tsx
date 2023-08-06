import React, {useState} from 'react';
import './App.tailwind.css';
import Scene from './components/PointCloudData/PointCloudData';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Stack } from '@mui/material';
import PatientFilter from './components/PatientFilter/PatientFilters';
import PatientList from './components/PatientList/PatientList';
import PointCloudData from './components/PointCloudData/PointCloudData';
import { ThemeProvider, createTheme } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import PatientBody from './components/PatientBody/PatientBody';


function App() {
  return (
        <div className="App">
          <NavigationBar />
          <PatientBody />
        </div>
  );
}

export default App;