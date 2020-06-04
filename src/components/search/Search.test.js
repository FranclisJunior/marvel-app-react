import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";

import { Search } from "./index";

describe('Tests for Search component', () => {
    it("Fill search input", async () => {
        const { getByTestId} = render(<Search/>)
        const searchInput = await waitForElement(() => getByTestId('search-input'))
        const searchValue = 'Spider Man'
        fireEvent.change(
            searchInput,
            {target: {value: searchValue }}
        )
        expect(searchInput.value).toEqual(searchValue)

    });
})


