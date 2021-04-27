import { CustomDotProps } from "../types";

const CustomizedLabel = ({ cx, payload }: CustomDotProps) => {
  return (
    <g>
      {payload.view && (
        <text
          width="46"
          height="36"
          dominantBaseline="middle"
          textAnchor="middle"
          x={cx}
          y={284}
          fontFamily="sans-serif"
          fontSize="16"
          fontWeight={400}
          fill="#959496"
        >
          {payload.period}
        </text>
      )}
    </g>
  );
};

export default CustomizedLabel;
