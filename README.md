# UXP Vue CLI

Working out the kinks of how to hook [Vue CLI](https://cli.vuejs.org/) into [Adobe UXP](https://medium.com/adobetech/creative-cloud-updates-this-year-d2fc1628b71) (Unified Extensibility Platform, currently only available in XD but prepped to deprecate CEP/Common Extensibility Platform in the coming years).

UXP has some interesting and great pros:

- No separation of contexts for scripting and panel UI (no need for separate files between interacting with the host application's DOM and the panel's own DOM)
- Native support for ES5/V8 Javascript
- Presumed updated scripting engines
- [Online documentation](https://adobexdplatform.com/plugin-docs/reference/how-to-read.html) for API
- Native component libraries for simple elements like inputs, checkboxes, etc.

Some of my own cons of the current iteration as I know them so far:

- Relies on NodeJS equivalents instead of providing pure Node compatibility
- Doesn't provide a browser context. Only whitelisted/handcrafted HTML and CSS are available to use -- I anticipate this means there will be a lot of modern support in the initial launch, but as Browser APIs continue to develop and grow from a rich ecosystem pushing them forward in all directions, UXP will (to my mind) inevitably fall behind in the coming years. This may potentially mean that in ten years, UXP will be even more antiquated compared to modern development than CEP currently is.
  - No CSS Grid
  - No `<iframe>`s
  - No Web Workers
