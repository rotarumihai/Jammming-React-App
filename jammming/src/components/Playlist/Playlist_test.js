import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Playlist from "./Playlist";

describe("Playlist Component", () => {
  it("renders Playlist component with default name", () => {
    const onNameChangeMock = jest.fn();
    const onSaveMock = jest.fn();

    const { getByText, getByDisplayValue } = render(
      <Playlist
        onNameChange={onNameChangeMock}
        onSave={onSaveMock}
        playlistTracks={[]}
      />
    );

    // Check if the component renders with the default name and SAVE TO SPOTIFY button
    expect(getByDisplayValue("New Playlist")).toBeTruthy();
    expect(getByText("SAVE TO SPOTIFY")).toBeTruthy();
  });

  it("triggers onNameChange when input value changes", () => {
    const onNameChangeMock = jest.fn();
    const onSaveMock = jest.fn();

    const { getByDisplayValue } = render(
      <Playlist
        onNameChange={onNameChangeMock}
        onSave={onSaveMock}
        playlistTracks={[]}
      />
    );

    const inputElement = getByDisplayValue("New Playlist");

    fireEvent.change(inputElement, { target: { value: "My New Playlist" } });

    expect(onNameChangeMock).toHaveBeenCalledWith("My New Playlist");
  });

  it("triggers onSave when the SAVE TO SPOTIFY button is clicked", () => {
    const onNameChangeMock = jest.fn();
    const onSaveMock = jest.fn();

    const { getByText } = render(
      <Playlist
        onNameChange={onNameChangeMock}
        onSave={onSaveMock}
        playlistTracks={[]}
      />
    );

    const saveButton = getByText("SAVE TO SPOTIFY");

    fireEvent.click(saveButton);

    expect(onSaveMock).toHaveBeenCalled();
  });
});
