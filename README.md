# custom-css

Add custom CSS rules to JupyterLab

## Usage

After install the plugin, you should see an item called "Custom CSS" in the settings in "Advanced Settings Editor".
Here you can specify any CSS rules you want.

```javascript
{
    "rules": [
        {
            "selector": ".cls-parent .cls-child",
            "styles": [
                "max-height: 100px",
                "font-size: 14px"
            ]
        },
        ...
    ]
}
```

This will create an inline `<style>` element in the document's body.

When you save changes it will immediately be active, so you don't need to restart JupyterLab.

## Useful JupyterLab CSS tricks with custom-css

### Enlarge output height when scrolling is enabled

```javascript
{
    "rules": [
        {
            "selector": ".jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea",
            "styles": [
                "max-height: 300px"  // Original is 200px
            ]
        }
    ]
}
```

### Decrease output font size and make the same font for rendered HTML

```javascript
{
    "rules": [
        {
            "selector": ".jp-OutputArea-output.jp-RenderedText pre, .jp-OutputArea-output.jp-RenderedHTMLCommon",
            "styles": [
                "font-family: var(--jp-code-font-family)", // Make font the same as code font
                "font-size: 90%"  // Make font smaller
            ]
        },

        // Make tables the same font size as the other outputs
        {
            "selector": ".jp-RenderedHTMLCommon table",
            "styles": [
                "font-size: inherit !important" // Make use the same size
            ]
        },
    ]
}
```

### Reorder sidebar icons

You can even reorder sidebar icons and tabs by CSS:

```javascript
{
    "rules": [
        // Set order to 50 for default
        {
            "selector": ".p-TabBar-tab",
            "styles": [
                "order: 50"
            ]
        },
        // File browser always the 1st
        {
            "selector": ".p-TabBar-tab[data-id='filebrowser']",
            "styles": [
                "order: 1"
            ]
        },
        // Below 50 will be at the top
        {
            "selector": ".p-TabBar-tab[data-id='extensionmanager.main-view']",
            "styles": [
                "order: 2"
            ]
        },
        // Over 50 will be at the bottom
        {
            "selector": ".p-TabBar-tab[data-id='command-palette']",
            "styles": [
                "order: 51"
            ]
        }
    ]
}
```

Same technic could be good for menu entries and toolbar buttons (not tested).

### Grayscale icon if the extension has color icon (which is awful, because every other icons are monochrome)

```javascript
{
    "rules": [
        // HDF5 toolbar icon
        {
            "selector": ".jp-HdfIcon",
            "styles": [
                "filter: grayscale(1) brightness(3.5)"
            ]
        },
    ]
}
```

## Prerequisites

* JupyterLab
* Some CSS knowledge

## Installation

```bash
jupyter labextension install @wallneradam/custom_css
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
