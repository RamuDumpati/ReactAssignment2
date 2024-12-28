import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './Accordian.css'; 

const Accordian = () => {
  return (
    <div className="accordion-container">
     
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="custom-accordion-summary"
        >
          What is React?
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.
        </AccordionDetails>
      </Accordion>

     
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="custom-accordion-summary"
        >
          How does React work?
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          React creates a virtual DOM in memory, which represents the UI's state. When the state of an object changes, React updates the virtual DOM and then efficiently updates the real DOM, minimizing changes for better performance.
        </AccordionDetails>
      </Accordion>

    
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="custom-accordion-summary"
        >
          What are components in React?
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          Components are the building blocks of a React application. They are reusable pieces of UI that manage their own state and logic, making code easier to maintain and develop.
        </AccordionDetails>
      </Accordion>

     
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          className="custom-accordion-summary"
        >
          What is the difference between state and props in React?
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          In React, state is a local data storage that is managed by the component itself and can change over time. Props, on the other hand, are inputs to a component that are passed down from a parent component and are read-only.
        </AccordionDetails>
      </Accordion>

      
      <Accordion className="custom-accordion" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
          className="custom-accordion-summary"
        >
          Can you explain React hooks?
        </AccordionSummary>
        <AccordionDetails className="custom-accordion-details">
          React hooks are special functions that let you use state and other React features without writing a class. Common hooks include <code>useState</code> for managing state and <code>useEffect</code> for handling side effects like data fetching.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
