export const initialFill = {
  shellFront: "#BDBEC0",
  shellBack: "#BDBEC0",
  screen: "#CBB746",
  screenProtector: "#626A78",
  buttonA: "#BF1970",
  buttonB: "#BF1970",
  buttonSelect: "#626A78",
  buttonStart: "#626A78",
  dpad: "#33373B",
};

type GameboyOriginalProps = {
  fill?: Partial<typeof initialFill>;
};

export function GameboyOriginal({ ...props }: GameboyOriginalProps) {
  const fill = { ...initialFill, ...props.fill };

  return (
    <svg
      width="283"
      height="460"
      viewBox="0 0 283 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg id="shell-front">
        <path
          d="M0 8.00001C0 3.58173 3.58172 0 8 0H275C279.418 0 283 3.58172 283 8V396C283 431.346 254.346 460 219 460H8.00001C3.58173 460 0 456.418 0 452V8.00001Z"
          fill={fill.shellFront}
        />
      </svg>

      <svg id="screen-protector" x="20" y="41">
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H235C239.418 0 243 3.58172 243 8V150C243 167.673 228.673 182 211 182H8C3.58172 182 0 178.418 0 174V8Z"
          fill={fill.screenProtector}
        />
      </svg>

      <svg id="screen" x="65" y="63">
        <rect width="153" height="138" rx="2" fill={fill.screen} />
      </svg>

      <svg id="button-a" x="228" y="287">
        <circle cx="19" cy="19" r="19" fill={fill.buttonA} />
      </svg>

      <svg id="button-b" x="181" y="308">
        <circle cx="19" cy="19" r="19" fill={fill.buttonB} />
      </svg>

      <svg id="dpad" x="22.5" y="287">
        <path
          d="M49 4C49 1.79086 47.2091 0 45 0H27C24.7909 0 23 1.79086 23 4V22.5H4.5C2.29086 22.5 0.5 24.2909 0.5 26.5V44.5C0.5 46.7091 2.29086 48.5 4.5 48.5H23V67C23 69.2091 24.7909 71 27 71H45C47.2091 71 49 69.2091 49 67V48.5H67.5C69.7091 48.5 71.5 46.7091 71.5 44.5V26.5C71.5 24.2909 69.7091 22.5 67.5 22.5H49V4Z"
          fill={fill.dpad}
        />
      </svg>

      <svg id="button-select" x="85" y="395">
        <rect
          id="select-button"
          width="37"
          height="10"
          rx="5"
          transform="rotate(-30 -1.28955 16.9199)"
          fill={fill.buttonSelect}
          x="-1.28955"
          y="16.9199"
        />
      </svg>

      <svg id="button-start" x="134" y="395">
        <rect
          id="start-button"
          width="37"
          height="10"
          rx="5"
          transform="rotate(-30 -1.28955 16.9199)"
          fill={fill.buttonStart}
          x="-1.28955"
          y="16.9199"
        />
      </svg>
    </svg>
  );
}
