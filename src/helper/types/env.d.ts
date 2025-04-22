export {};

declare global {
  namespace NODEJS {
    interface ENV {
      ENV: "dev" | "uat";
    }
  }
}
