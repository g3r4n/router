---
title: Screen tracking for analytics
---

Unlike React Navigation, Expo Router always has access to a URL. This means screen tracking is as easy as the web.

1. Create a higher-order component that observes the currently selected URL
2. Track the URL in your analytics provider

```bash title="File System"
app/
  _layout.js # This Layout wraps all other routes
  ...
```

```js title=app/_layout.js
import { useEffect } from "react";
import { useHref, Children } from "expo-router";

export default function Layout() {
  const location = useHref();

  // Track the location in your analytics provider here.
  useEffect(() => {
    analytics.track(location);
  }, [location]);

  // Export all the children routes in the most basic way.
  return <Children />;
}
```

Now when the user changes routes, the analytics provider will be notified.

## Migrating from React Navigation

React Navigation's [screen tracking guide](https://reactnavigation.org/docs/screen-tracking/) cannot make the same assumptions about the navigation state that Expo Router can. As a result, the implementation requires the use of `onReady` and `onStateChange` callbacks. Avoid using these methods if possible as the root `<NavigationContainer />` is not directly exposed and allows cascading in Expo Router.
