const PLUGIN_NAME = "@wallneradam/custom_css";

import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ISettingRegistry } from '@jupyterlab/coreutils';
import { JSONObject } from '@phosphor/coreutils';


interface ICSSRule extends JSONObject {
    selector: string;
    styles: string[];
}


const extension: JupyterFrontEndPlugin<void> = {
    id: PLUGIN_NAME,
    requires: [ISettingRegistry],
    autoStart: true,

    activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry) => {
        console.log('JupyterLab extension custom_css is activated!');

        let styleElement = document.createElement("style");
        styleElement.type = "text/css";
        styleElement.id = PLUGIN_NAME;
        document.body.appendChild(styleElement);

        /**
         * Update settings on change
         * @param settings The loaded settings
         */
        function updateOptions(settings: ISettingRegistry.ISettings): void {
            let styles = "";
            let rules = settings.composite.rules as ICSSRule[];
            for (let rule of rules) {
                styles += `${rule.selector} \{`;
                styles += "\n  " + rule.styles.join(";\n  ")
                styles += "\n}\n";
            }
            document.body.removeChild(styleElement);
            styleElement.innerHTML = styles;
            document.body.appendChild(styleElement);
        }

        // Load settings
        settingRegistry
            .load(extension.id + ':plugin')
            .then(settings => {
                // Update options
                updateOptions(settings);

                // Update options on settings changed
                settings.changed.connect(() => {
                    updateOptions(settings);
                });
            });
    }
};


export default extension;
