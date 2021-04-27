import { CustomDotProps } from "../types";

const CustomizedDot = ({ cx, cy, payload }: CustomDotProps) => {
  if (payload.view)
    return (
      <g>
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#a3a3a3" />
          </filter>
        </defs>
        <line
          stroke="#000"
          strokeWidth="1"
          x1={cx}
          y1={cy + 18}
          x2={cx}
          y2={cy + 600}
        ></line>
        <circle
          filter="url(#shadow)"
          cx={cx}
          cy={cy}
          r={10}
          stroke="#FFF"
          strokeWidth={8}
          fill="black"
        />

        <rect
          x={cx - 20}
          y={264}
          rx="15"
          ry="15"
          width="40"
          height="36"
          fill="#151222"
        ></rect>

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
          fill="white"
        >
          {payload.period}
        </text>
      </g>
    );

  return (
    <g>
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#505050" />
        </filter>
      </defs>
      <circle
        filter="url(#shadow)"
        cx={cx}
        cy={cy}
        r={10}
        stroke="#FFF"
        strokeWidth={8}
        fill="black"
      />
    </g>
  );
};

export default CustomizedDot;
