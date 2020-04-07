//@ts-nocheck
declare module "my-config" {
  global {
    interface Window {
      Cypress: any;
      Store: any;
    }
  }
}
