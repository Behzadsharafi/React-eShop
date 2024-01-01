import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ItemCard } from "./ItemCard";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import CartContextProvider from "../../context/CartContextProvider";
import FavouriteContextProvider from "../../context/FavouriteContextProvider";
import ItemsContextProvider from "./../../context/ItemsContextProvider";

describe("ItemCard", () => {
  it("should have Add To Bag rendered", () => {
    render(
      <BrowserRouter>
        <CartContextProvider>
          <FavouriteContextProvider>
            <ItemsContextProvider>
              <ItemCard
                name="Test Item"
                image="test.jpg"
                price={10.99}
                id="test-id"
                items={[]}
              />
            </ItemsContextProvider>
          </FavouriteContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    );

    const addButton = screen.getByText(/Add/i);
    expect(addButton).toBeVisible();
  });

  it("should have Pick a size rendered", () => {
    render(
      <BrowserRouter>
        <CartContextProvider>
          <FavouriteContextProvider>
            <ItemsContextProvider>
              <ItemCard
                name="Test Item"
                image="test.jpg"
                price={10.99}
                id="test-id"
                items={[]}
              />
            </ItemsContextProvider>
          </FavouriteContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    );

    const size = screen.getByText(/Pick a size/i);
    expect(size).toBeVisible();
  });
});
