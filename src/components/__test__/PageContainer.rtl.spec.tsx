/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react"
import { PAGE_CONTAINER_TEST_ID } from "../../constants"
import { PageContainer } from "../PageContainer"

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe("PageContainer", () => {
  beforeEach(() => {
    const props = {
      title: "ABC",
      paths: [{ label: "ABC-Label", link: "/" }],
    }
    render(<PageContainer {...props}>Child node</PageContainer>)
  })

  it("should render page container", async () => {
    expect(screen.getByTestId(PAGE_CONTAINER_TEST_ID)).toBeInTheDocument()
    expect(screen.getByTestId(PAGE_CONTAINER_TEST_ID)).toHaveTextContent("ABC")
    expect(screen.getByTestId(PAGE_CONTAINER_TEST_ID)).toHaveTextContent("ABC-Label")
  })
})
