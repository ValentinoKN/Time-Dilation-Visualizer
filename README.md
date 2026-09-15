# ChronoLens V2 — Relativity Laboratory

A cinematic, zero-dependency browser laboratory for exploring special relativity and a focused Schwarzschild gravitational-time-dilation model.

## V2 chambers

- **Life / decay** — seed → tree/blossom → apple → aging → decay, driven by proper time.
- **Solar system** — stylized orbital clocks that visibly desynchronise.
- **Relativistic race** — moving vehicles with visual length contraction.
- **Human aging** — compressed biological clocks for twin-paradox intuition.
- **Light clocks** — photon-bounce clocks.
- **Time vortex** — cinematic proper-time phase visualization.
- **Twin paradox mission** — Earth ↔ Alpha Centauri round trips with reunion-time calculations.
- **Minkowski spacetime** — world-lines and light-cone visualization.
- **Relativistic Doppler** — wavelength compression/stretching and live Doppler factor.
- **Black-hole lab** — stationary-clock gravitational time dilation outside a Schwarzschild horizon.

V2 also adds signed velocities, relativistic A↔B relative velocity, length-contraction readouts, fullscreen presentation mode, guided mission presets, a wider simulation-rate range, and a clearer separation between quantitative physics and compressed teaching animations.

## Equations

```text
β = v/c
γ = 1 / √(1 − β²)
Δτ = Δt / γ
L = L₀ / γ
u′ = (u − v) / (1 − uv/c²)
D = √((1 + β) / (1 − β))
dτ/dt = √(1 − rₛ/r)       [stationary Schwarzschild clock]
```

## Scientific scope

ChronoLens is an educational visualizer, not a numerical general-relativity solver. The proper-time, Lorentz, relative-velocity, contraction, Doppler, twin-mission and Schwarzschild stationary-clock calculations are the quantitative layer. Biological lifecycles, orbital motion, vehicles and vortex effects are intentionally compressed or artistic.

Negative simulation flow is explicitly a **visual rewind control**. It does not imply that special or general relativity reverses entropy or thermodynamic time.

The black-hole chamber currently assumes a non-rotating Schwarzschild black hole and a stationary clock outside the event horizon. It is not a Kerr simulation, geodesic ray tracer, or physically complete accretion-disk model.

## Run

Open `index.html` in a modern browser. There is no build step and no external dependency.

Files are split into `index.html`, `styles.css`, and `app.js` so the project is easier to maintain and extend.

## Experiments

Try Observer A at 90%, 99%, and 99.9% of `c`, then compare the lifecycle and light clocks. Run the Alpha Centauri guided mission and inspect the reunion age difference. Open the spacetime chamber to see the world-line tilt. Finally, move the black-hole radius control toward `1 rₛ` and watch the stationary clock rate approach zero.

## Next frontier

Potential V3 work: WebGL/Three.js 3D rendering, Kerr black holes and frame dragging, ray-traced lensing, relativistic aberration, richer mission scripting, audio-reactive particles, accessibility controls, automated physics tests, and GitHub Pages deployment.