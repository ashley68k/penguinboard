# PenguinBoard

A lightweight web dashboard for convenient remote monitoring and management of self-hosted Linux servers.

## Installation

Clone the repository and install dependencies through NPM.
```bash
git clone https://github.com/ashley68k/penguinboard.git
cd penguinboard
npm install
```

## Usage

From the installation directory, run `npm run build` with your desired additional parameters to run PenguinBoard in production through Vite. Alternatively, `npm run dev` to test your modifications and debug the app.

## Frameworks/Dependencies

PenguinBoard primarily uses [SvelteKit](https://svelte.dev/) and [TailwindCSS](https://tailwindcss.com/), and extensively relies on the
[systeminformation](https://systeminformation.io/) library on NPM. PenguinBoard attempts to minimize external dependency usage where possible.

## License

This project is licensed under the [MPL-2.0](https://www.mozilla.org/en-US/MPL/) license.