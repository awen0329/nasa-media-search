import React from "react"
import { PageContainer } from "../components/PageContainer"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ExpandMoreIcon,
  Grid,
  LabelField,
  Paper,
} from "../UILibrary"

const Search = () => {
  return (
    <PageContainer title="NASA Media Library">
      <Box>
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            marginBottom: "1.5rem",
            marginLeft: 3,
            backgroundColor: "transparent",
            "&.Mui-expanded": { marginLeft: 3 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "background.default" }} />}
            sx={{
              minHeight: "1.25rem",
              backgroundColor: "primary.main",
              padding: "0.375rem 1.25rem",
              maxWidth: "218px",
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
              "&.Mui-expanded": {
                paddingBottom: 2,
              },
            }}
          >
            <Button sx={{ p: 0, color: "background.default" }}>Filter Conditions</Button>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container component={Paper} sx={{ p: 2 }} spacing={2}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Search" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Title" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Center" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Description" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Keywords" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Location" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="Creator" />
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <LabelField fullWidth label="2nd Creator" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </PageContainer>
  )
}

export default Search
