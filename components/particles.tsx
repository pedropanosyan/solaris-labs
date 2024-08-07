"use client";

import { useCallback } from "react";
import Particles, { ParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";

type InitType = ParticlesProps["init"];
type InitTypeNonNullable = NonNullable<InitType>;
type InitParameters = Parameters<InitTypeNonNullable>;
type Engine = InitParameters[0];

const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            className="h-screen fixed -z-10"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: ["grab", "bubble"],
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 250,
                            size: 2,
                            duration: 2,
                            opacity: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#5D5DFF",
                    },
                    links: {
                        color: "#282E51",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        direction: "none",
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        straight: false,
                        speed: 1,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 105,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 2, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;