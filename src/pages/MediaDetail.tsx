import React from "react"
import { useParams } from "react-router-dom"
import { PageContainer } from "../components/PageContainer"
import { useGetMediaData } from "../queries/nasa"
import { Box, CircularProgress, Grid, Image, Typography } from "../UILibrary"

const MediaDetail = () => {
  const { nasaId } = useParams()
  const { data, isLoading, error } = useGetMediaData(nasaId || "")

  console.log(data, isLoading, error)
  if (error) {
    return (
      <Box display="flex" justifyContent="center" height="100vh" alignItems="center">
        <Typography.SubTitle>{error.message}</Typography.SubTitle>
      </Box>
    )
  }

  if (isLoading && !data) {
    return (
      <Box display="flex" justifyContent="center" height="100vh" alignItems="center">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <PageContainer
      title={data?.mediaInfo["AVAIL:Title"]}
      paths={[{ label: "Image collections", link: "/search" }, { label: "Detail" }]}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Image src={data?.assets.collection.items[0].href || ""} alt="Image Preview" />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box maxWidth={450}>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              Photographer: {data?.mediaInfo["AVAIL:Photographer"] || "Unknown"}
            </Typography.Description>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              Created at: {data?.mediaInfo["AVAIL:DateCreated"] || "Unknown"}
            </Typography.Description>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              Center: {data?.mediaInfo["AVAIL:Center"] || "Unknown"}
            </Typography.Description>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              Location: {data?.mediaInfo["AVAIL:Location"] || "Unknown"}
            </Typography.Description>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              {data?.mediaInfo["AVAIL:Description"]}
            </Typography.Description>
            <Typography.Description sx={{ color: "background.default", mb: 2 }}>
              Keywords:{" "}
              {data?.mediaInfo["AVAIL:Keywords"]
                ? data?.mediaInfo["AVAIL:Keywords"].join(", ")
                : "No keyword"}
            </Typography.Description>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default MediaDetail
