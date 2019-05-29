import TagManager from "react-gtm-module";

export function initGTM() {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_TRACKING_ID,
    auth: process.env.REACT_APP_GTM_AUTH,
    preview: "env-2"
  };

  TagManager.initialize(tagManagerArgs);
}
