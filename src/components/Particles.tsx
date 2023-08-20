import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import snowOpts from "./snowOpts";
import { loadFull } from "tsparticles";
import { useColorScheme } from "@mui/material";
import amongOpts from "./amongusOpts";

const ParticlesBG: React.FC = () => {
  const { mode } = useColorScheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={mode === "dark" ? amongOpts : snowOpts}
    />
  );
};

export default ParticlesBG;
