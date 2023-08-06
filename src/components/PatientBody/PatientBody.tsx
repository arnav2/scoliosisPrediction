import React, { useState, useEffect } from 'react'
import PatientFilters from '../PatientFilter/PatientFilters'
import PatientList from '../PatientList/PatientList'

enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

enum UploadStatus {
    NOT_UPLOADED,
    UPLOADING,
    ERROR_UPLOADING,
    UPLOADED,
}

enum PredictionStatus {
    NOT_DECIDED,
    PREDICTING,
    POSITIVE,
    NEGATIVE,
    INCONCLUSIVE,
}

interface IPatient {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    videoUploadStatus: UploadStatus;
    scoliosisPredictionStatus: PredictionStatus;
    pointCloudData: string;
}

// const FETCH_INTERVAL = 30 * 60 * 1000;

const PatientBody = () => {
    const [patients, setPatients] = useState<IPatient[]>([]); // Update this continuously with a refresh rate
    const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]); // Update this whenever we change the filter or patients get updated
    
    const [openModal, setOpenModal] = useState(false);
    
    const [ageRange, setAgeRange] = useState<[number, number]>([0, 100]); // Initial age range
    const [name, setName] = useState<string>('');
    const [selectedGenders, setSelectedGenders] = useState<Gender[]>([Gender.MALE, Gender.FEMALE, Gender.OTHER]);
    
    const [error, setError] = useState<string | null>(null)

    // fetch the data on component mount 
    useEffect(() => {
        const fetchPatients = async () => {
          try {
            const response = await fetch('http://localhost:5000/patients');
            const data = await response.json();
            setPatients(data);
            setFilteredPatients(data);
          } catch (error) {
            setError('Error fetching patients due to reason: ' + error);
          }
        };
        fetchPatients();
    }, []);

    // Apply filtering
    useEffect(() => {
        // Apply filters
        let filtered = patients;
    
        if (name !== '') {
            filtered = filtered.filter(patient => patient.name.toLowerCase().includes(name.toLowerCase()));
        }
        
        filtered = filtered.filter(patient => patient.age >= ageRange[0] && patient.age <= ageRange[1]);
    
        filtered = filtered.filter(patient => selectedGenders.includes(patient.gender));
        
        setFilteredPatients(filtered);
    }, [patients, name, ageRange, selectedGenders]);
    
    return (
        <>
            <PatientFilters
                name={name}
                setName={setName}
                ageRange={ageRange}
                setAgeRange={setAgeRange}
                selectedGenders={selectedGenders}
                setSelectedGenders={setSelectedGenders} 
            />
            <PatientList 
                setOpenModal={setOpenModal} 
                openModal={openModal} 
                filteredPatients={filteredPatients}
            />
        </>
    )
}

export default PatientBody