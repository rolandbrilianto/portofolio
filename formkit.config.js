import { defaultConfig } from "@formkit/vue";
import { genesisIcons } from "@formkit/icons";

const config = defaultConfig({
  icons: {
    ...genesisIcons,
  },
});

export default config;
