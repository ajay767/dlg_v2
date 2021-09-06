const options = [
  "inline",
  "blockType",
  "fontSize",
  "list",
  "image",
  "textAlign",
  "link",
  "embedded",
  "emoji",
  "remove",
  "history",
];

const blockType = {
  inDropdown: true,
  options: ["Normal", "H1", "H2", "H3", "Blockquote", "Code"],
  className: undefined,
  component: undefined,
  dropdownClassName: undefined,
};

export { options, blockType };
