/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import {
  MEDIA_CARD_CONTIANER_TEST_ID,
  MEDIA_CARD_LOCATION_TYPO_TEST_ID,
  MEDIA_CARD_PHOTOGRAPHER_TYPO_TEST_ID,
} from "../../constants"
import { mediaItemMockData } from "../../modules/testUtils"
import { MediaCard } from "../MediaCard"

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe("MediaCard", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MediaCard media={mediaItemMockData} />
      </BrowserRouter>
    )
  })

  it("should render media information", async () => {
    const { data } = mediaItemMockData
    const { title, photographer, location } = data[0]
    expect(screen.getByTestId(MEDIA_CARD_CONTIANER_TEST_ID)).toBeInTheDocument()
    expect(screen.getByTestId(MEDIA_CARD_CONTIANER_TEST_ID)).toHaveTextContent(title)
    if (photographer) {
      expect(screen.getByTestId(MEDIA_CARD_PHOTOGRAPHER_TYPO_TEST_ID)).toHaveTextContent(
        photographer
      )
    }
    if (location) {
      expect(screen.getByTestId(MEDIA_CARD_LOCATION_TYPO_TEST_ID)).toHaveTextContent(location)
    }
  })

  it("should go to detail page when click the card", async () => {
    const card = screen.getByTestId(MEDIA_CARD_CONTIANER_TEST_ID)
    await act(() => {
      userEvent.click(card)
    })

    const { data } = mediaItemMockData
    const { nasa_id } = data[0]

    expect(mockedUsedNavigate).toBeCalledWith(`/detail/${nasa_id}`)
  })
})
