import React from "react"
import { Icon } from "./Icon"

interface OpenEyeIconProps {
  fill?: string
  onClick?: (e: any) => void
}

/** Icon */
export const OpenEyeIcon: React.SFC<OpenEyeIconProps> = ({
  fill = "#000",
  onClick = (_e: any) => {
    /* */
  },
  ...props
}) => {
  return (
    <Icon
      width="18"
      onClick={e => onClick(e)}
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Action/View/Md</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(1.000000, 3.000000)"
          fill={fill}
          fillRule="nonzero"
        >
          <path d="M1.24869667,5.4620914 C1.1373218,5.64932065 1.14382667,5.88199751 1.26548624,6.06299904 C3.17245723,8.89988278 5.40646346,10.2857143 7.99932611,10.2857143 C10.5928102,10.2857143 12.8272789,8.89921208 14.7345474,6.06094369 C14.8558101,5.88048859 14.8626517,5.6486384 14.752249,5.46166626 C13.0384933,2.5598384 10.8078954,1.14285714 8.01017583,1.14285714 C5.2122393,1.14285714 2.97495646,2.56012332 1.24869667,5.4620914 Z M0.237631667,4.88772843 C2.1625973,1.65172138 4.7699889,0 8.01017583,0 C11.2513166,0 13.8530677,1.65275534 15.7651716,4.89043749 C16.0964091,5.45140384 16.0758859,6.14690631 15.7120998,6.68826823 C13.6031161,9.8267157 11.0215865,11.4285714 7.99932611,11.4285714 C4.97777755,11.4285714 2.39673899,9.82746374 0.288018499,6.69044965 C-0.0769779696,6.14741861 -0.0964918559,5.44941434 0.237631667,4.88772843 Z" />
          <path d="M8,8.57142857 C6.42204357,8.57142857 5.14285714,7.29224214 5.14285714,5.71428571 C5.14285714,4.13632929 6.42204357,2.85714286 8,2.85714286 C9.57795643,2.85714286 10.8571429,4.13632929 10.8571429,5.71428571 C10.8571429,7.29224214 9.57795643,8.57142857 8,8.57142857 Z M8,7.42857143 C8.94677386,7.42857143 9.71428571,6.66105957 9.71428571,5.71428571 C9.71428571,4.76751186 8.94677386,4 8,4 C7.05322614,4 6.28571429,4.76751186 6.28571429,5.71428571 C6.28571429,6.66105957 7.05322614,7.42857143 8,7.42857143 Z" />
        </g>
      </g>
    </Icon>
  )
}

OpenEyeIcon.displayName = "OpenEye"
