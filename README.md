
PWA
----

> Very simple code to practice Progressive Web Apps.

### Usage
This app runs on https://pwa-to-do-app-8uafe00zv-fahricigdem.vercel.app/

or

This app runs on `localhost`.

```bash
npm install http-server -g
http-server -c-1 # with cache disabled
```

Then open <http://localhost:8080> with Chrome.

Change `cacheStorageKey` in `sw.js` to update app version.

### Trouble shooting

* Why `-c-1` to disable cache?

`sw.js` can be cached by HTTP Caches, then in debugging we could get unexpected behaviors. Disable the cache to simplify the problem.
