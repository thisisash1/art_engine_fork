const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "QUADHASH : earthworm";
const description = "";
const baseUri = "ipfs://url";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  //   {
  //     growEditionSizeTo: 250,
  //     layersOrder: [
  //       { name: "Background" },
  //       { name: "Body" },
  //       { name: "Back" },
  //       { name: "Front" },
  //       // { name: "Onesie" },
  //       { name: "Extras" },
  //       { name: "Eyes" },
  //       { name: "Mouth" },
  //       { name: "Headwear" },
  //     ],
  //   },
  //   {
  //     growEditionSizeTo: 500,
  //     layersOrder: [
  //       { name: "Background" },
  //       { name: "Body" },
  //       // { name: "Back" },
  //       // { name: "Front" },
  //       { name: "Onesie" },
  //       { name: "Extras" },
  //       { name: "Eyes" },
  //       { name: "Mouth" },
  //       { name: "Headwear" },
  //     ],
  //   },
  // ];

  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Mane" },
      { name: "Body" },
      { name: "Head" },
      { name: "Extras" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Headwear" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2400,
  height: 2400,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
