"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id = "tsparticles", className, ...props }) => {
  const [init, setInit] = useState(false);

  // Initialize particles engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#070B14",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 70,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: false,
        },
        modes: {
          push: {
            quantity: 1,
          },
          attract: {
            distance: 200,
            duration: 0.6,
            easing: "ease-out-quad",
            factor: 1.5,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#3b82f6", "#6366f1", "#8b5cf6", "#06b6d4", "#10b981"],
        },
        links: {
          color: "#3b82f6",
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.4,
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 120,
        },
        opacity: {
          value: 0.6,
          random: {
            enable: true,
            minimumValue: 0.3,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"],
        },
        size: {
          value: { min: 1, max: 4 },
          random: {
            enable: true,
            minimumValue: 1,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
            color: {
              value: "#ffffff",
            },
          },
        },
      },
      detectRetina: true,
      smooth: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
