import React from "react";
import {Provider} from "react-redux";
import {fireEvent, render, waitForElement} from "@testing-library/react";
import configureMockStore from 'redux-mock-store';
import HeroForm from "./index";

const mockStore = configureMockStore();
const store = mockStore({viewHero: {hero: {name: 'Spider Man', description: 'Lorem Ipsum'}}});

describe('Tests for Hero Form component', () => {
    it("Clear name input", async () => {
        const {getByTestId} = render(<Provider store={store}> <HeroForm/> </Provider>);
        const inputName = await waitForElement(() => getByTestId('input-name'));
        const inputValue = '';
        fireEvent.change(
            inputName,
            {target: {value: inputValue}}
        )
        expect(inputName.value).toEqual(inputValue)
    });

    it("Clear description input", async () => {
        const {getByTestId} = render(<Provider store={store}> <HeroForm/> </Provider>);
        const inputName = await waitForElement(() => getByTestId('input-description'));
        const inputValue = '';
        fireEvent.change(
            inputName,
            {target: {value: inputValue}}
        )
        expect(inputName.value).toEqual(inputValue)
    });
})


