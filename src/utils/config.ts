export const baseUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:6009/api"
    : "https://app.aiops.global/api";
