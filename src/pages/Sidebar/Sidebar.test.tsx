import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("<Sidebar />", () => {
  render(<Sidebar />);

  it("should render a search bar", () => {
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });
});
