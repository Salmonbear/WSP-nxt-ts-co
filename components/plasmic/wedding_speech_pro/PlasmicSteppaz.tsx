// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sj7u5T6A4j1Xdo61ZkYEWA
// Component: kjxIGF8quPxY

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

import { AntdSteps } from "@plasmicpkgs/antd5/skinny/registerSteps";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sj7u5T6A4j1Xdo61ZkYEWA/projectcss
import sty from "./PlasmicSteppaz.module.css"; // plasmic-import: kjxIGF8quPxY/css

createPlasmicElementProxy;

export type PlasmicSteppaz__VariantMembers = {};
export type PlasmicSteppaz__VariantsArgs = {};
type VariantPropType = keyof PlasmicSteppaz__VariantsArgs;
export const PlasmicSteppaz__VariantProps = new Array<VariantPropType>();

export type PlasmicSteppaz__ArgsType = {};
type ArgPropType = keyof PlasmicSteppaz__ArgsType;
export const PlasmicSteppaz__ArgProps = new Array<ArgPropType>();

export type PlasmicSteppaz__OverridesType = {
  steps3?: Flex__<typeof AntdSteps>;
};

export interface DefaultSteppazProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSteppaz__RenderFunc(props: {
  variants: PlasmicSteppaz__VariantsArgs;
  args: PlasmicSteppaz__ArgsType;
  overrides: PlasmicSteppaz__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "steps3.current",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 1
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <AntdSteps
      data-plasmic-name={"steps3"}
      data-plasmic-override={overrides.steps3}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.steps3
      )}
      current={generateStateValueProp($state, ["steps3", "current"])}
      items={(() => {
        const __composite = [
          { title: null, description: null },
          { title: null, description: null },
          { title: null, description: null }
        ];
        __composite["0"]["title"] = "Establish Your Themes";
        __composite["0"]["description"] = ``;
        __composite["1"]["title"] = "Make Your Stories Pop";
        __composite["1"]["description"] = ``;
        __composite["2"]["title"] = "Intros and Outros";
        __composite["2"]["description"] = ``;
        return __composite;
      })()}
      onChange={generateStateOnChangeProp($state, ["steps3", "current"])}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  steps3: ["steps3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  steps3: typeof AntdSteps;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSteppaz__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSteppaz__VariantsArgs;
    args?: PlasmicSteppaz__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSteppaz__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSteppaz__ArgsType,
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
          internalArgPropNames: PlasmicSteppaz__ArgProps,
          internalVariantPropNames: PlasmicSteppaz__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSteppaz__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "steps3") {
    func.displayName = "PlasmicSteppaz";
  } else {
    func.displayName = `PlasmicSteppaz.${nodeName}`;
  }
  return func;
}

export const PlasmicSteppaz = Object.assign(
  // Top-level PlasmicSteppaz renders the root element
  makeNodeComponent("steps3"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSteppaz
    internalVariantProps: PlasmicSteppaz__VariantProps,
    internalArgProps: PlasmicSteppaz__ArgProps
  }
);

export default PlasmicSteppaz;
/* prettier-ignore-end */
