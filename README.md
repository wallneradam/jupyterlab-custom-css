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

### Reorder tool bar buttons

You can even reorder toolbar buttons and tabs by CSS:

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

Same technic could be good for menu entries (not tested).

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
