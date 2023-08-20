import type { ISourceOptions } from "tsparticles-engine";

const snowOpts: ISourceOptions = {
  name: "Snow",
  fpsLimit: 120,
  particles: {
    number: {
      value: 800,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      straight: true,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
      opacityRate: 10,
      sizeRate: 10,
      velocityRate: 10,
    },
  },
  background: {
    color: "transparent",
  },
};

export default snowOpts;
