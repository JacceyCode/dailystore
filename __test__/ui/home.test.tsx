import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page";

describe("Testing home UI: Unit testing", () => {
  test("display the homepage", () => {
    render(<Page />);

    //Act
    const heading = screen.getByRole("heading", {
      name: "Home",
    });

    //Assert
    expect(heading).toBeDefined();
  });
});
