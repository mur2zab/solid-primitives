import { vitestConfig } from "../../vite.config";

if (!vitestConfig.test) {
  vitestConfig.test = {};
}
vitestConfig.test.setupFiles = ["./test/setup.ts"];

export default vitestConfig;
