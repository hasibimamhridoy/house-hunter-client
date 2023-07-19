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
import { CITIES, PER_RENT , BED_ROOMS, BATH_ROOMS, ROOM_SIZE, IS_AVAILABLE } from "../../../stateManagement/FilterProvider/ActionName";
import { citiesData, bedrooms, marks, roomsSize, available } from "../../../datas/GeneralInfo/generalInfo";


const GenarelInformtaion = () => {

  const { dispatch,filterData } = useContext(FilterContext);
  const [selectedcities, setSelectedcities] = useState(null);
  const [selectedBedRooms, setSelectedBedRooms] = useState(null);
  const [selectedBathRooms, setSelectedBathRooms] = useState(null);
  const [selectedRoomSize, setSelectedRoomSize] = useState(null);
  const [selectedAvailable, setSelectedAvailable] = useState(null);
  const [RentPerMonth, setRentPerMonth] = useState([1000, 2500]);
  const [expanded, setExpanded] = useState(false);

  const {cities,how_many_bathrooms,how_many_beedrooms,room_size,rent_per_month} = filterData

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
              options={citiesData}
              sx={{ width: '100%' }}
              value={cities}
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
              value={how_many_beedrooms}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  {...params}
                  label="How many Bedrooms ?"
                />
              )}
            />
            <Autocomplete
              disablePortal
              onChange={(event, value) => {
                setSelectedBathRooms(value);
                dispatch({ type: BATH_ROOMS, payload: value });
              }}
              id="combo-box-demo"
              options={bedrooms}
              value={how_many_bathrooms}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  {...params}
                  label="How many Bathrooms ?"
                />
              )}
            />
            <Autocomplete
              disablePortal
              onChange={(event, value) => {
                setSelectedAvailable(value);
                dispatch({ type: IS_AVAILABLE, payload: value });
              }}
              id="combo-box-demo"
              options={available}
              value={selectedAvailable}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  {...params}
                  label="Is Available ?"
                />
              )}
            />

            <Autocomplete
              disablePortal
              onChange={(event, value) => {
                setSelectedRoomSize(value);
                dispatch({ type: ROOM_SIZE, payload: value });
              }}
              id="combo-box-demo"
              options={roomsSize}
              value={room_size}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  {...params}
                  label="Room Size?"
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
                  value={rent_per_month}
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
