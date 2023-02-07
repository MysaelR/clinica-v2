import { resources } from './../i18n/index';

// import { resources } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    // defaultNS: typeof defaultNS;
    resources: typeof resources["pt-BR"];
    // defaultNS: typeof defaultNS;
    // resources: typeof resources.pt;
  }
}