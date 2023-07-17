import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Slider,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FilterContext } from "../../../stateManagement/FilterProvider/FilterProvider";
import { CITIES, PER_RENT , BED_ROOMS } from "../../../stateManagement/FilterProvider/ActionName";
import { cities, bedrooms, marks } from "../../../datas/GeneralInfo/generalInfo";


const GenarelInformtaion = () => {

  const { dispatch } = useContext(FilterContext);
  const [selectedcities, setSelectedcities] = useState(null);
  const [selectedBedRooms, setSelectedBedRooms] = useState(null);
  const [RentPerMonth, setRentPerMonth] = useState([1000, 2500]);
  const [expanded, setExpanded] = useState(false);


  /**
   * _________Retrive the local storage data to set default value
   */
  useEffect(() => {
    const savedcities = localStorage.getItem("selectedcities");
    if (savedcities) {
      setSelectedcities(JSON.parse(savedcities));
    }

    const savedBedRooms = localStorage.getItem("selectedBedRooms");
    if (savedBedRooms) {
      setSelectedBedRooms(JSON.parse(savedBedRooms));
    }

    const savedAge = localStorage.getItem("RentPerMonth");
    if (savedAge) {
      setRentPerMonth(JSON.parse(savedAge));
    }

    const storedExpanded = localStorage.getItem("generalAccordionExpanded");
    if (storedExpanded) {
      setExpanded(JSON.parse(storedExpanded));
    }

  }, []);



  useEffect(() => {
    // Save selected values to local storage
    localStorage.setItem("selectedcities", JSON.stringify(selectedcities));
  }, [selectedcities]);

  useEffect(() => {
    // Save selected values to local storage
    localStorage.setItem("selectedBedRooms", JSON.stringify(selectedBedRooms));
  }, [selectedBedRooms]);

  useEffect(() => {
    // Save selected values to local storage
    localStorage.setItem("RentPerMonth", JSON.stringify(RentPerMonth));
  }, [RentPerMonth]);


  useEffect(() => {
    const storedExpanded = localStorage.getItem("generalAccordionExpanded");
    if (storedExpanded) {
      setExpanded(JSON.parse(storedExpanded));
    }
  }, []);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
    localStorage.setItem("generalAccordionExpanded", isExpanded ? "true" : "false");
  };


  return (
    <div>
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <div className="flex justify-center">
            <h1 className="text-center text-lg">Search Filter</h1>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div className="space-y-3">
            <Autocomplete
              disablePortal
              onChange={(event, value) => {
                setSelectedcities(value);
                dispatch({ type: CITIES, payload: value });
              }}
              id="combo-box-demo"
              options={cities}
              sx={{ width: '100%' }}
              value={selectedcities}
              renderInput={(params) => (
                <TextField variant="outlined" {...params} label="Which Area ?" />
              )}
            />
            <Autocomplete
              disablePortal
              onChange={(event, value) => {
                setSelectedBedRooms(value);
                dispatch({ type: BED_ROOMS, payload: value });
              }}
              id="combo-box-demo"
              options={bedrooms}
              value={selectedBedRooms}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  {...params}
                  label="How many Bedrooms ?"
                />
              )}
            />

            <div className="">
              <h1 className="text-md ">Rent Per Month</h1>

              <div className="px-5">
                <Slider
                  getAriaLabel={() => "Temperature"}
                  orientation="horizontal"
                  // getAriaValueText={valuetext}
                  value={RentPerMonth}
                  valueLabelDisplay="auto"
                  onChange={(event, value) => {
                    setRentPerMonth(value);
                    dispatch({ type: PER_RENT, payload: value });
                  }}
                  marks={marks}
                  
                  min={1000}
                  max={2500}
                />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GenarelInformtaion;
