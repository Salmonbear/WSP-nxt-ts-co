// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sj7u5T6A4j1Xdo61ZkYEWA
// Component: jjOXCS2q1B5X

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sj7u5T6A4j1Xdo61ZkYEWA/projectcss
import sty from "./PlasmicQuoteCard2.module.css"; // plasmic-import: jjOXCS2q1B5X/css

createPlasmicElementProxy;

export type PlasmicQuoteCard2__VariantMembers = {};
export type PlasmicQuoteCard2__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuoteCard2__VariantsArgs;
export const PlasmicQuoteCard2__VariantProps = new Array<VariantPropType>();

export type PlasmicQuoteCard2__ArgsType = {};
type ArgPropType = keyof PlasmicQuoteCard2__ArgsType;
export const PlasmicQuoteCard2__ArgProps = new Array<ArgPropType>();

export type PlasmicQuoteCard2__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultQuoteCard2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuoteCard2__RenderFunc(props: {
  variants: PlasmicQuoteCard2__VariantsArgs;
  args: PlasmicQuoteCard2__ArgsType;
  overrides: PlasmicQuoteCard2__OverridesType;
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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column__teCbl)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rz9BR
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Barlow";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___6MPdb
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Quotee";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___3TbfB
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Love does not consist of gazing at each other, but in looking outward together in the same direction";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.column__uB32J)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mjhh
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $ctx.quoteSearch.choices[0].message.content;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Use this to inspire the couple and the guests with the idea of partnership and shared aspirations, as the couple embarks on their journey ahead.";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuoteCard2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuoteCard2__VariantsArgs;
    args?: PlasmicQuoteCard2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuoteCard2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuoteCard2__ArgsType,
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
          internalArgPropNames: PlasmicQuoteCard2__ArgProps,
          internalVariantPropNames: PlasmicQuoteCard2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuoteCard2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuoteCard2";
  } else {
    func.displayName = `PlasmicQuoteCard2.${nodeName}`;
  }
  return func;
}

export const PlasmicQuoteCard2 = Object.assign(
  // Top-level PlasmicQuoteCard2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicQuoteCard2
    internalVariantProps: PlasmicQuoteCard2__VariantProps,
    internalArgProps: PlasmicQuoteCard2__ArgProps
  }
);

export default PlasmicQuoteCard2;
/* prettier-ignore-end */
