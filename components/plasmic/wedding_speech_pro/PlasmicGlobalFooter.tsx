// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sj7u5T6A4j1Xdo61ZkYEWA
// Component: wRdBAJMlIHx

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

import Button from "../../Button"; // plasmic-import: Dy4L9PNlqEQ/component

import { useScreenVariants as useScreenVariantszbPet7MzObh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: zbPET7mzOBH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sj7u5T6A4j1Xdo61ZkYEWA/projectcss
import sty from "./PlasmicGlobalFooter.module.css"; // plasmic-import: wRdBAJMlIHx/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: mDNbn1ZLKrHu/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 5HAw4RHFxpJq/icon

createPlasmicElementProxy;

export type PlasmicGlobalFooter__VariantMembers = {};
export type PlasmicGlobalFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicGlobalFooter__VariantsArgs;
export const PlasmicGlobalFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicGlobalFooter__ArgsType = {};
type ArgPropType = keyof PlasmicGlobalFooter__ArgsType;
export const PlasmicGlobalFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicGlobalFooter__OverridesType = {
  footer?: Flex__<"div">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultGlobalFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGlobalFooter__RenderFunc(props: {
  variants: PlasmicGlobalFooter__VariantsArgs;
  args: PlasmicGlobalFooter__ArgsType;
  overrides: PlasmicGlobalFooter__OverridesType;
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
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
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
        sty.footer
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__lsLq)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4SjTo)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__j4Xzu
              )}
            >
              {"Wedding\nSpeech\nPro"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pObMf)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cpwsq
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {
                      "Quality wedding speeches for  bridal parties, generated with AI."
                    }
                  </span>
                </React.Fragment>
              </div>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__wyUu9)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jy5B0)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l3BAx
              )}
            >
              {"Maid of HONOR"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__vjVE)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__nS5B)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__oAvxn)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zxgZf
                )}
              >
                {"Speech Examples"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__zJe2Z)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__qgynR)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__fNQ7)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fvDci
                )}
              >
                {"Speech Examples for Sister"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___4SO8V)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__bsfVn)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-older-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg___83Id)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pv7Ek
                )}
              >
                {"Speech Examples for Older Sister"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__k7YMw)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__nCjh0)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-younger-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__zPDy8)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pr4Fl
                )}
              >
                {"Speech Examples for Younger Sister "}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___9NzfT)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__qnxQs)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-sister-in-law"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__zLFuQ)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d0XyD
                )}
              >
                {"Speech Examples for Sister in Law "}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__ySy6W)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__jl3Ae)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-best-friend"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__ui88)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fvcCz
                )}
              >
                {"Speech Examples for Best Friends"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__jEYE)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___00IGa)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-mom"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__uZzJj)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cDzB8
                )}
              >
                {"Speech Examples for Mom"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__e5GBd)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__gfYv6)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"ai-speech-generator"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__zzlS3)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tqghF
                )}
              >
                {"AI Speech Generator"}
              </div>
            </Button>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__bquf6)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nooR)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__q5Uny
              )}
            >
              {"Support"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__dQpqa)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__jdo2I)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__twLe4)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__e59Hh
                )}
              >
                {"Documentation"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__a5Qtl)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__pljRe)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__jflJc)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lvVx8
                )}
              >
                {"FAQs"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__pifGe)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___2BkMb)}
                  role={"img"}
                />
              }
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg___4EsBc)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2GNhY
                )}
              >
                {"Status"}
              </div>
            </Button>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7XFCa)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zFYfQ
              )}
            >
              {"Best Man"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button___5Bdoy)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__hWiDs)}
                  role={"img"}
                />
              }
              link={`/best-man-speech/${"ultimate-guide-for-your-best-man-speech"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__howF)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rvCiy
                )}
              >
                {"Ultimate Guide to Best Man Speeches"}
              </div>
            </Button>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__szTvb)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__lbm5N)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mzlmC
              )}
            >
              {"Tools"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__eLxGs)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__fxMgR)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__qikcL)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yLbAl
                )}
              >
                {"Quote Finder"}
              </div>
            </Button>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gqNfw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fQzvy
              )}
            >
              {"Links"}
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__iTkLs)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__cZrQq)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__xP9Lu)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5R3Go
                )}
              >
                {"Terms and Conditions"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__b9HlM)}
              color={"clear"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__cabhp)}
                  role={"img"}
                />
              }
              link={`/maid-of-honor-speech/${"examples-for-younger-sister"}`}
              size={"minimal"}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__s5Zm)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___042Ou
                )}
              >
                {"Privacy"}
              </div>
            </Button>
          </Stack__>
          <section className={classNames(projectcss.all, sty.section__t4SPy)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/wedding_speech_pro/images/stripeBadgeGreypng.png",
                fullWidth: 808,
                fullHeight: 264,
                aspectRatio: undefined
              }}
            />
          </section>
        </div>
      </Stack__>
      <section className={classNames(projectcss.all, sty.section__ru8Qh)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ktiJj
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#FFFFFF" }}
            >
              {"Copyright \u00a9 2024 Wedding Speech Pro. All rights reserved"}
            </span>
          </React.Fragment>
        </div>
      </section>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer: ["footer", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer: "div";
  columns: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGlobalFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGlobalFooter__VariantsArgs;
    args?: PlasmicGlobalFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGlobalFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGlobalFooter__ArgsType,
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
          internalArgPropNames: PlasmicGlobalFooter__ArgProps,
          internalVariantPropNames: PlasmicGlobalFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGlobalFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicGlobalFooter";
  } else {
    func.displayName = `PlasmicGlobalFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicGlobalFooter = Object.assign(
  // Top-level PlasmicGlobalFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicGlobalFooter
    internalVariantProps: PlasmicGlobalFooter__VariantProps,
    internalArgProps: PlasmicGlobalFooter__ArgProps
  }
);

export default PlasmicGlobalFooter;
/* prettier-ignore-end */
