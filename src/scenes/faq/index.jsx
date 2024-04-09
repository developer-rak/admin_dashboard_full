import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to Change User Profile?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to See Pie Chart?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to add Event in Calendar?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to Manage Team?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to add Invoices
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  How to Create a User?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo deserunt ducimus vero illo laboriosam.
               </Typography>
            </AccordionDetails>
         </Accordion>

      </Box>
   );
}
 
export default FAQ;