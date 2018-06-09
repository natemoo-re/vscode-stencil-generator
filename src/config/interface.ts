import { WorkspaceConfiguration } from 'vscode';

export interface ComponentConfig extends WorkspaceConfiguration {
    create?: boolean,
    extension?: string,
    prefix?: string,
    shadow?: boolean,
    imports?: string[]|false
}
export interface StyleConfig extends WorkspaceConfiguration {
    create?: boolean,
    extension?: string
};
export interface TestConfig extends WorkspaceConfiguration {
    create?: boolean,
    extension?: string
};


export interface Config extends WorkspaceConfiguration {
    quotes?: 'single' | 'double',
    generateFolder?: boolean,
    componentsDirectory?: string,
    component: ComponentConfig,
    style: StyleConfig,
    test: TestConfig
}