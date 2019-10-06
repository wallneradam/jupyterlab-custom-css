# custom-css

Add custom CSS rules for JupyterLab

## Usage

After install the plugin, you should see an item called "Custom CSS" in the settings in "Advanced Settings Editor".
Here you can specify any CSS rules you want.

E.g. if you want to change the maximum output size in scrolled mode:
```json
{
    "rules": [
        {
            "selector": ".jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea",
            "styles": [
                "max-height: 300px"
            ]
        }
    ]
}
```

This will create an inline `<style>` element in the document`s body.

When you save changes it will immediately be active, so you don't need to restart JupyterLab.

## Prerequisites

* JupyterLab

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
