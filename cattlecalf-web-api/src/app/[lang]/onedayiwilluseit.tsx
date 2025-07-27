import { ImageResponse } from "next/og";
import { CSSProperties, useEffect, useState } from "react";

// Image metadata
export const size = {
  width: 250,
  height: 250,
};

export const contentType = "image/png";

export default function Icon() {
  const env = process.env.NODE_ENV;

  let background: CSSProperties = {
    // backgroundColor: "black",
    // padding: "10px",
  };

  let pilars: CSSProperties = {
    display: "block",
    fill: "none",
    strokeWidth: "1.00008",
    strokeDasharray: "none",
  };

  let lines: CSSProperties = {
    // fill: prefersDarkMode ? "#ffffff" : "#000000",
    fill: "white",
    fillOpacity: 1,
    strokeWidth: 1.30218,
    strokeLinecap: "round",
  };

  let spikes: CSSProperties = {
    fill: "none",
    fillOpacity: 1,
    // stroke: prefersDarkMode ? "#ffffff" : "#000000",
    stroke: "white",
    strokeWidth: 1.30218,
    strokeLinecap: "round",
    strokeDasharray: "none",
    strokeOpacity: 1,
  };

  if (env == "development") {
    // do something
    // background = {
    //   // borderBottom: "20px solid red",
    // };
  }

  return new ImageResponse(
    (
      <svg
        width="250"
        height="250.00002"
        viewBox="0 0 66.145835 66.145838"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        style={background}
      >
        <defs id="defs1" />
        <g
          id="layer3"
          transform="matrix(0.37846447,0,0,0.37846447,-548.62258,-142.77314)"
        >
          <g
            id="g39"
            transform="matrix(3.5429675,0,0,2.9495658,-2195.454,236.95113)"
            style={pilars}
          >
            <path
              id="path2"
              style={lines}
              d="m 1074.5268,56.096212 c 2.004,0 3.6173,1.937907 3.6173,4.345082 v 36.096621 h -7.2346 V 60.441294 c 0,-2.407175 1.6133,-4.345082 3.6173,-4.345082 z"
            />
            <path
              id="path3"
              style={lines}
              d="m 1032.4316,56.096212 c 2.004,0 3.6173,1.937907 3.6173,4.345082 v 36.096621 h -7.2347 V 60.441294 c 0,-2.407175 1.6134,-4.345082 3.6174,-4.345082 z"
            />
            <path
              style={spikes}
              d="m 1036.3605,61.484757 34.3329,-0.08329"
              id="path17"
            />
            <path
              style={spikes}
              d="m 1036.3605,77.387553 34.3329,-0.08329"
              id="path18"
            />
            <path
              style={spikes}
              d="m 1036.3605,93.698113 34.3329,-0.08329"
              id="path22"
            />
            <path
              id="path23"
              style={spikes}
              d="m 1041.7021,63.12867 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              id="path24"
              style={spikes}
              d="m 1052.6677,63.12867 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              id="path25"
              style={spikes}
              d="m 1055.9731,79.021977 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              id="path26"
              style={spikes}
              d="m 1042.2916,79.021977 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              id="path27"
              style={spikes}
              d="m 1048.4536,95.027256 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              id="path28"
              style={spikes}
              d="m 1068.8245,95.027256 -1.073,-1.682012 0.6777,-1.259288 m -2.5728,-0.871662 1.8951,2.13095 -2.0778,2.20715"
            />
            <path
              style={spikes}
              d="m 1045.3124,60.090502 0.8396,1.394256 -1.0333,1.673244"
              id="path29"
            />
            <path
              style={spikes}
              d="m 1061.3858,75.844315 0.8396,1.394256 -1.0333,1.673244"
              id="path30"
            />
            <path
              id="path31"
              style={spikes}
              d="m 1056.8833,61.252923 -0.5548,1.16242 m 0,-2.705841 0.5548,1.543421 1.4149,1.743631"
            />
            <path
              id="path32"
              style={spikes}
              d="m 1046.4479,77.27796 -0.5548,1.16242 m 0,-2.705841 0.5548,1.543421 1.4149,1.743631"
            />
            <path style={spikes} d="M 1061.5469,59.328502 Z" id="path33" />
            <path
              id="path34"
              style={spikes}
              d="m 1062.4115,61.353028 1.8083,-1.197946 m -1.6145,-0.82658 -0.1938,2.024526 0.4844,2.185974"
            />
            <path
              id="path35"
              style={spikes}
              d="m 1054.092,93.30262 1.8083,-1.197946 m -1.6145,-0.82658 -0.1938,2.024526 0.4844,2.185974"
            />
            <path
              id="path36"
              style={spikes}
              d="m 1039.2793,93.30262 1.8083,-1.197946 m -1.6145,-0.82658 -0.1938,2.024526 0.4844,2.185974"
            />
            <path
              id="path37"
              style={spikes}
              d="m 1068.4622,61.433752 0.5813,0.884722 m -0.5813,-2.544392 v 1.65967 l -0.904,1.595092"
            />
            <path
              id="path38"
              style={spikes}
              d="m 1066.8746,77.410354 0.5813,0.884722 m -0.5813,-2.544392 v 1.65967 l -0.904,1.595092"
            />
            <path
              id="path39"
              style={spikes}
              d="m 1061.2047,93.415633 0.5813,0.884722 m -0.5813,-2.544392 v 1.65967 l -0.904,1.595092"
            />
          </g>
        </g>
      </svg>
    ),
    { ...size },
  );
}
