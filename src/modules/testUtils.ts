import { MediaItem } from "../types"

export const mediaItemMockData = {
  href: "https://images-assets.nasa.gov/image/NASA 60th_SEAL_BLACK_150DPI/collection.json",
  data: [
    {
      album: ["NASA_60th_Anniversary"],
      center: "HQ",
      title: "NASA 60th_SEAL_BLACK_150DPI",
      nasa_id: "NASA 60th_SEAL_BLACK_150DPI",
      date_created: "2018-05-14T00:00:00Z",
      media_type: "image",
      location: "JRC",
      photographer: "Andrus Wen",
      description_508: "Seal for NASA's 60th anniversary. Black 1,500 dpi",
      secondary_creator: "NASA",
      description: "Seal for NASA's 60th anniversary. Black 1,500 dpi",
    },
  ],
  links: [
    {
      href: "https://images-assets.nasa.gov/image/NASA 60th_SEAL_BLACK_150DPI/NASA 60th_SEAL_BLACK_150DPI~thumb.jpg",
      rel: "preview",
      render: "image",
    },
  ],
} as MediaItem
