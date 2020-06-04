import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

import HeroCard from "./index";

describe('Tests for HeroCard component', () => {
    it("Render component name", async () => {
        const { getByText} = render(<MemoryRouter><HeroCard name={'First test'}/> </MemoryRouter>)
        const elemName = await waitForElement(() => getByText('First test'))
        expect(elemName).toBeDefined();
    });

    it("Render component image", async () => {
        const imgUrl = 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
        const { getByTestId} = render(<MemoryRouter> <HeroCard thumbnail={imgUrl}/> </MemoryRouter>)
        const elemImage = await waitForElement(() => getByTestId('thumbnail'))
        expect(elemImage.src).toEqual(imgUrl);
    });
})


