const KnownFor = {
  toyota() {
    return "reliability";
  },

  volvo() {
    return "safety";
  },

  mercedes() {
    return "comfort";
  },

  default() {
    return "transporting from point A to B";
  },
};

function BrandKnownFor(brand) {
  return KnownFor[brand] || KnownFor.default;
}

export default BrandKnownFor;
