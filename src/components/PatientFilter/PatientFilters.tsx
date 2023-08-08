import React from 'react';
import { Box, Slider, Typography, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material';
import './PatientFilters.css';

enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

interface IPatientFilters {
  name: string,
  setName: Function,
  ageRange: [number, number],
  setAgeRange: Function,
  selectedGenders: Gender[],
  setSelectedGenders: Function
}

const PatientFilters = (props: IPatientFilters) => {
  
  const handleSliderChange = (event: Event, newAgeRange: number | number[]) => {
    if (Array.isArray(newAgeRange)) {
      props.setAgeRange(newAgeRange as [number, number]);
    }
  };

  console.log(props.selectedGenders)
  const handleGenderChange = (event: any) => {
    const { value } = event.target;

    if (props.selectedGenders.includes(value)) {
      props.setSelectedGenders(props.selectedGenders.filter((gender) => gender !== value));
    } else {
      props.setSelectedGenders([...props.selectedGenders, value]);
    }
  };

  const [test, setTest] = React.useState(true)

  const handleChange = (event: any) => {
    setTest(event.target.checked);
  };

  return (
    <Box className="mt-6 flex-row flex space-x-2 md:space-x-8 filterRowStyling px-3">
      <FormControl>
        <FormLabel id="input-filter-name-label"> <Typography variant="h2" component="h2">Name</Typography> </FormLabel>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel id="row-filter-gender-group-label"><Typography variant="h2" component="h2">Gender</Typography></FormLabel>
        <FormGroup
          row
          aria-label="gender"
          aria-labelledby="demo-row-radio-buttons-group-label"
          
        >
          <FormControlLabel 
            value={Gender.FEMALE}
            control={<Checkbox checked={props.selectedGenders.includes(Gender.FEMALE)} />} 
            label="Female" 
            onChange={handleGenderChange}
          />
          <FormControlLabel 
            value={Gender.MALE}
            control={<Checkbox checked={props.selectedGenders.includes(Gender.MALE)}/>} 
            label="Male" 
            onChange={handleGenderChange} 
          />
          <FormControlLabel 
            value={Gender.OTHER}
            control={<Checkbox checked={props.selectedGenders.includes(Gender.OTHER)}/>} 
            label="Other" 
            onChange={handleGenderChange}
          />
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="age-selection-label"><Typography variant="h2" component="h2">Age Range</Typography></FormLabel>
        <Slider
          value={props.ageRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={100}
          style={{ width: 150 }} // Adjust the width here
        />
        <Typography>
          Age: {props.ageRange[0]} - {props.ageRange[1]}
        </Typography>
      </FormControl>
      
    </Box>
  );
}

export default PatientFilters;
