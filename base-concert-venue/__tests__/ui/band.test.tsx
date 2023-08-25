import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

test("display correct band information", async () => {
  const { fakeBands } = await readFakeData();

  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

test("display error message in band component", () => {
  render(<BandComponent band={null} error="Everything is fine" />);

  const error = screen.getByRole("heading", { name: /everything is fine/i });

  expect(error).toBeInTheDocument();
});
