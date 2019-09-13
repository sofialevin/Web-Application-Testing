import React from 'react';
import * as rtl from '@testing-library/react';
import App, { ballCount, strikeCount, hit, foul } from "./App";
import { render } from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  render(<App />);
});

test("ball adds 1 pts", () => {
  expect(ballCount(0)).toBe(1);
  expect(ballCount(1)).toBe(2);
});

test("when balls is 4 or more, balls resets to 0", () => {
  expect(ballCount(3)).toBe(0);
  expect(ballCount(10)).toBe(0);
})

test("strike adds 1 pts", () => {
  expect(strikeCount(0)).toBe(1);
  expect(strikeCount(1)).toBe(2);
});

test("when strikes is 3 or more, strikes resets to 0", () => {
  expect(strikeCount(2)).toBe(0);
  expect(strikeCount(10)).toBe(0);
})

test("hit resets strikes and balls to 0", () => {
  expect(hit()).toBe(0);
})

test("foul adds 1 strike", () => {
  expect(strikeCount(0)).toBe(1);
  expect(strikeCount(1)).toBe(2);
})

test("if foul and strike is 2, strike stays at 2", () => {
  expect(foul(2)).toBe(2);
  expect(foul(3)).toBe(2);
})