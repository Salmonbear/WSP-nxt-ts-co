// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sj7u5T6A4j1Xdo61ZkYEWA
// Component: DWQ8Kd-IAGYP

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Button from "../../Button"; // plasmic-import: Dy4L9PNlqEQ/component

import { useScreenVariants as useScreenVariantszbPet7MzObh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: zbPET7mzOBH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sj7u5T6A4j1Xdo61ZkYEWA/projectcss
import sty from "./PlasmicGlobalHeader2.module.css"; // plasmic-import: DWQ8Kd-IAGYP/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mDNbn1ZLKrHu/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 5HAw4RHFxpJq/icon

createPlasmicElementProxy;

export type PlasmicGlobalHeader2__VariantMembers = {};
export type PlasmicGlobalHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicGlobalHeader2__VariantsArgs;
export const PlasmicGlobalHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicGlobalHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicGlobalHeader2__ArgsType;
export const PlasmicGlobalHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicGlobalHeader2__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
  text?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultGlobalHeader2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGlobalHeader2__RenderFunc(props: {
  variants: PlasmicGlobalHeader2__VariantsArgs;
  args: PlasmicGlobalHeader2__ArgsType;
  overrides: PlasmicGlobalHeader2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszbPet7MzObh()
  });

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__uIfh)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Wedding\nSpeech\nPro"}
          </div>
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__aie6)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__bBa8I
            )}
            component={Link}
            href={`/tools/quote-finder`}
            platform={"nextjs"}
          >
            {"Quote Finder"}
          </PlasmicLink__>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"yellow"}
            link={`/speech-wizard`}
          >
            {"Get Speech"}
          </Button>
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__glFta)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "button"],
  text: ["text"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  text: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGlobalHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGlobalHeader2__VariantsArgs;
    args?: PlasmicGlobalHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGlobalHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGlobalHeader2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGlobalHeader2__ArgProps,
          internalVariantPropNames: PlasmicGlobalHeader2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGlobalHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGlobalHeader2";
  } else {
    func.displayName = `PlasmicGlobalHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicGlobalHeader2 = Object.assign(
  // Top-level PlasmicGlobalHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicGlobalHeader2
    internalVariantProps: PlasmicGlobalHeader2__VariantProps,
    internalArgProps: PlasmicGlobalHeader2__ArgProps
  }
);

export default PlasmicGlobalHeader2;
/* prettier-ignore-end */
