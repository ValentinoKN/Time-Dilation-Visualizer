# ChronoLens — Time Dilation Visualizer

An interactive, cinematic special-relativity visualizer built as a zero-dependency browser app.

## What changed

The original clock/car demo has been rebuilt into a responsive visual laboratory with:

- **Apple lifecycle** — seed/sprout → blossom → ripe fruit → aging → decay, including reversible visual time.
- **Solar systems** — eight stylized planets orbit at rates driven by each observer's proper time.
- **Relativistic cars** — two moving observers provide an intuitive motion comparison.
- **Human aging** — compressed lifespans demonstrate twin-paradox intuition.
- **Light clocks** — a classic conceptual visualization of relativistic clock behavior.
- **Time vortex** — a cinematic phase-difference visualization inspired by magical time-manipulation aesthetics without using copyrighted assets.
- Independent Observer A/B speeds from 0 to 99.99% of `c`.
- Lorentz factors, proper-time rates and live clock separation.
- Forward and reverse simulation time.
- Responsive glass/cosmic interface with no external dependencies.

## Physics

The simulation uses special-relativistic time dilation:

```text
γ = 1 / √(1 − v²/c²)
Δτ = Δt / γ
```

Here `Δt` is elapsed laboratory-frame time and `Δτ` is the proper time accumulated by an observer moving at speed `v` relative to that frame.

The lifecycle, orbital, vehicle and aging animations deliberately compress real-world scales and durations so differences can be seen quickly. The live proper-time clocks and Lorentz-factor calculations are the quantitative part of the simulation.

## Run it

Open `index.html` directly in a modern browser. No build step, package manager or server is required.

## Suggested experiment

Set Observer A to `99% c` and Observer B to `0% c`. Compare the clocks and switch between Apple Lifecycle, Solar System and Human Aging. Then set simulation time negative to rewind the lifecycle visualization.

## Project direction

Possible next steps include WebGL/Three.js rendering, gravitational time dilation, interactive spacetime diagrams, educational guided scenarios, audio/particle effects and a proper test suite.