import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"
import { PageContainer } from "../components/PageContainer"
import { FilterConditions } from "../types"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  ExpandMoreIcon,
  Grid,
  LabelField,
  Paper,
  Typography,
} from "../UILibrary"
import { useGetImageCollections } from "../queries/nasa"
import { MediaCard } from "../components/MediaCard"
import { getFilterConditions, getFilterConditionsFromURLSearchParams } from "../modules/utils"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<FilterConditions>(
    getFilterConditionsFromURLSearchParams(searchParams)
  )
  const [expanded, setExpanded] = useState<boolean>(false)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      q: searchParams.get("q") || "",
      year_start: searchParams.get("year_start")
        ? new Date(`${searchParams.get("year_start")}-01-01`)
        : null,
      year_end: searchParams.get("year_end")
        ? new Date(`${searchParams.get("year_end")}-01-01`)
        : null,
      title: searchParams.get("title") || "",
      center: searchParams.get("center") || "",
      description: searchParams.get("description") || "",
      keywords: searchParams.get("keywords") || "",
      photographer: searchParams.get("photographer") || "",
      location: searchParams.get("location") || "",
      secondary_creator: searchParams.get("secondary_creator") || "",
    } as FilterConditions,
  })

  const { data, isLoading, error } = useGetImageCollections(filters)
  console.log(data, isLoading, error)

  const handleSearch = (formValue: FilterConditions) => {
    const filterParams = getFilterConditions(formValue)
    setSearchParams({ ...filterParams } as URLSearchParamsInit)
    setFilters(filterParams)
    setExpanded(false)
  }

  const handleResetConditions = () => {
    reset({
      q: "",
      year_start: null,
      year_end: null,
      title: "",
      center: "",
      description: "",
      keywords: "",
      photographer: "",
      location: "",
      secondary_creator: "",
    })
  }

  return (
    <PageContainer title="Image Collections" paths={[{ label: "Image collections" }]}>
      <Box>
        <Accordion
          expanded={expanded}
          disableGutters
          onChange={(_, expanded) => setExpanded(expanded)}
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
          <AccordionDetails sx={{ pt: 2 }}>
            <form onSubmit={handleSubmit(handleSearch)}>
              <Grid container component={Paper} sx={{ p: 2, pl: 0, overflow: "auto" }} spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="q"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Search"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Controller
                    control={control}
                    name="title"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Title"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Controller
                    control={control}
                    name="center"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Center"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="description"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Description"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="keywords"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Keywords"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="location"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Location"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="photographer"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="Creator"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="secondary_creator"
                    render={({ field: { name, onChange, value } }) => (
                      <LabelField
                        fullWidth
                        label="2nd Creator"
                        name={name}
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="year_start"
                    render={({ field: { onChange, value } }) => (
                      <LabelField
                        fullWidth
                        type="year-picker"
                        label="Start Year"
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12}>
                  <Controller
                    control={control}
                    name="year_end"
                    render={({ field: { onChange, value } }) => (
                      <LabelField
                        fullWidth
                        type="year-picker"
                        label="End Year"
                        value={value}
                        handleChange={onChange}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <Button type="submit" disableElevation variant="contained" color="primary">
                    Search
                  </Button>
                  <Button
                    type="button"
                    disableElevation
                    variant="outlined"
                    sx={{ ml: 2 }}
                    onClick={handleResetConditions}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
        {error ? (
          <Typography.Description>Something went wrong</Typography.Description>
        ) : isLoading ? (
          <Box display="flex" p={3} justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-between" }}>
            {data?.data.collection.items.map((item, index) => (
              <MediaCard key={index} media={item} />
            ))}
          </Box>
        )}
      </Box>
    </PageContainer>
  )
}

export default Search
