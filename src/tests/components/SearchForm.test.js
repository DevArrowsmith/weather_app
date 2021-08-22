import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
    const validProps = {
        searchText: "Stub text",
        setSearchText: () => {},
        onSubmit: () => {},
    };

    it("renders correctly (snapshot)", () => {
        const { asFragment } = render(
            <SearchForm
                searchText={validProps.searchText}
                setSearchText={validProps.setSearchText}
                onSubmit={validProps.onSubmit}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
