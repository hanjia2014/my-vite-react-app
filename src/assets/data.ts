export const colourOptions = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

export const flavourOptions = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "salted-caramel", label: "Salted Caramel" },
];

export const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions.map((obj) => ({ ...obj, groupName: "Colors" })),
  },
  {
    label: "Flavours",
    options: flavourOptions.map((obj) => ({ ...obj, groupName: "Flavours" })),
  },
];
