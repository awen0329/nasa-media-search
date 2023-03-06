export interface FilterConditions {
  q?: string
  title?: string
  center?: string
  description?: string
  location?: string
  year_start?: string | null
  year_end?: string | null
  photographer?: string
  secondary_creator?: string
  keywords?: string
}

export type FilterFields = keyof FilterConditions

export type MediaCollection = {
  version: string
  href: string
  items: MediaItem[]
  links?: {
    href: string
    prompt: string
    rel: string
  }[]
  metadata: {
    total_hits: number
  }
}

export type MediaItem = {
  href: string
  links: {
    href: string
    rel: string
    render: string
  }[]
  data: {
    album?: string[]
    center: string
    date_created: string
    description: string
    description_508?: string
    media_type: "image" | "audio"
    nasa_id: string
    secondary_creator?: string
    title: string
    photographer?: string
    keywords?: string[]
    location?: string
  }[]
}
