// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartIcon(props: HeartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -960 960 960"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M480-121l-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158zm0-297z"
        }
      ></path>
    </svg>
  );
}

export default HeartIcon;
/* prettier-ignore-end */
