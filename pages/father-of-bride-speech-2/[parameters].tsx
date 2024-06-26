// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/wedding_speech_pro/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../../components/plasmic/wedding_speech_pro/PlasmicGlobalVariant__Screen";
import { Plasmic_4BestManSpeech2 } from "../../components/plasmic/wedding_speech_pro/Plasmic_4BestManSpeech2";
import { useRouter } from "next/router";

function _4BestManSpeech2() {
  // Use Plasmic_4BestManSpeech2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_4BestManSpeech2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmic_4BestManSpeech2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <Plasmic_4BestManSpeech2 />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default _4BestManSpeech2;
