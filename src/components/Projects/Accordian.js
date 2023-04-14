import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px',
        padding: '5px',
      }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          boxShadow: '10px 10px 30px #262626',
          borderRadius: 1,
        }}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor: 'var(--glow-color)',
            borderRadius: 1,
          }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Pipeline Inspection Robot
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>An autonomous robot that can go inside a pipe and capture images of the insides</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Equipped with precise, accurate and high-definition camera and sensors</li>
            <li>Can self-align with the pipe while avoiding any obstacles in the path</li>
            <li>Can map its surroundings</li>
            <li>Tools used
              <ul>
                <li>Arduino</li>
                <li>RaspberryPi</li>
              </ul>
            </li>
          </ul>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          boxShadow: '10px 10px 30px #262626',
          borderRadius: 1,
        }}
      >
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            backgroundColor: 'var(--glow-color)',
            borderRadius: 1,
          }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Simple ChatRoom
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>A simple chatroom where people can connect and talk to friends in real time</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Implements login with Google</li>
            <li><a href="#">Join Here</a></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          boxShadow: '10px 10px 30px #262626',
          borderRadius: 1,
        }}
      >
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            backgroundColor: 'var(--glow-color)',
            borderRadius: 1,
          }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            MERN ChatApp
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>ChatApp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>ChatApp with the functionality of one-to-one text and group chat</li>
            <li>Includes
              <ul>
                <li>Authentication</li>
                <li>Real time messaging</li>
                <li>Typing indicator</li>
                <li>Creating groups</li>
                <li>Adding and Removing users from group</li>
              </ul>
            </li>
            <li>Tools used
              <ul>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
              </ul>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
