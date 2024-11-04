// import React from "react";
// import { cn } from "@/lib/utils";

// export const Spotlight = ({
//   className,
//   fill
// }) => {
//   return (
//     (<svg
//       className={cn(
//         "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
//         className
//       )}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 3787 2842"
//       fill="none">
//       <g filter="url(#filter)">
//         <ellipse
//           cx="1924.71"
//           cy="273.501"
//           rx="1924.71"
//           ry="273.501"
//           transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
//           fill={fill || "white"}
//           fillOpacity="0.21"></ellipse>
//       </g>
//       <defs>
//         <filter
//           id="filter"
//           x="0.860352"
//           y="0.838989"
//           width="3785.16"
//           height="2840.26"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB">
//           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//           <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
//           <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
//         </filter>
//       </defs>
//     </svg>)
//   );
// };

import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  fill
}) => {
  return (
    <svg
      className={cn(
        "yesanimate-spotlight yespointer-events-none yesabsolute yesz-[1] yesh-[169%] yesw-[138%] lg:yesw-[84%] yesopacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <defs>
        <linearGradient id="spotlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" /> {/* purple-500 */}
          <stop offset="50%" stopColor="#8B5CF6" /> {/* violet-500 */}
          <stop offset="100%" stopColor="#A855F7" /> {/* pink-500 */}
        </linearGradient>
      </defs>
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="url(#spotlightGradient)"
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};