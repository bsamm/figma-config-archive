const theme = {
  fontStyles: {
    size: '18px',
    family: 'Helvetica Neue'
  },
  colors: {
    blue: '#488CF2',
    brown: '#B58B1F',
    magenta: '#D842F0',
    red: '#F26539'
  },
  get colorsArray() {
    return Object.values(this.colors)
  }
};

export { theme };
