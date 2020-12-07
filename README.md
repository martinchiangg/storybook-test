# HQ-components
HQ Component Library - (Design System + Component Library)

## Installation & Usage
Install dependencies:
```
yarn
```

Run Storybook
```
yarn run storybook
```

Development mode with HMR:
```
yarn run dev-mac
```

## Status Quo
Components live in a mixed state, between the following alignments:

- Plus React Components - Originally intended to be a component library, this repository quickly became a unmaintained house for the Digital Asset Manager (DAM).
- Plus Web Components
    - App-wide components live within `/components`
    - View-specific components live as siblings to their view components.
- Imported Components - From third-party libraries, such as Material UI, Chakra, etc.

## Improvements

We should be implementing components which each serve a distinct purpose, as follows:

- **Stateless Components** - Via a centralized component library (`hq-components`), we serve stateless components that tie directly to functionality such as `<Button />`, `<Table />`, or `<Card />`.
- **Pure Components** - Sibling to their respective views, Pure Components can serve as a way to reduce the re-render time and greatly improve page performance. These components tie to `shouldComponentUpdate` which only tells the component to re-render if it sees that its state has changed. These are best used as larger components within a view, such as `<UserProfile />`, `<ItemRow />`, or `<Navigation />`.
- **View Components** - Child only to a layout, these components correlate directly to the routes that serve them or other views that wish to present them. It's important to note that these components should be responsive and be presentable wherever they are used, whether it be in the content area of a layout or inside of a modal.

## Impact

These changes will impact both users and developers:

**User Impact:** Users will see faster page load performance at render time, less sustained memory usage, and an improved responsive and cross-browser experience by way of a design system.

**Developer Impact:** A well organized component architecture allows for improved debugging by way of named functions and component hierarchy, improved testability by way of functional, component-level unit tests, and faster iteration on design and user experience changes that can be applied app-wide instead of at each implementation.