export function FrontShell({ children }: { children?: React.ReactNode }) {
  return (
    <svg
      width="283"
      height="460"
      viewBox="0 0 283 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.00001C0 3.58173 3.58172 0 8 0H275C279.418 0 283 3.58172 283 8V396C283 431.346 254.346 460 219 460H8.00001C3.58173 460 0 456.418 0 452V8.00001Z"
        fill="#BDBEC0"
      />
      {children}
    </svg>
  );
}

export function Button(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="19" cy="19" r="19" fill="#BF1970" />
    </svg>
  );
}

export function DPad(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="72"
      height="71"
      viewBox="0 0 72 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M49 4C49 1.79086 47.2091 0 45 0H27C24.7909 0 23 1.79086 23 4V22.5H4.5C2.29086 22.5 0.5 24.2909 0.5 26.5V44.5C0.5 46.7091 2.29086 48.5 4.5 48.5H23V67C23 69.2091 24.7909 71 27 71H45C47.2091 71 49 69.2091 49 67V48.5H67.5C69.7091 48.5 71.5 46.7091 71.5 44.5V26.5C71.5 24.2909 69.7091 22.5 67.5 22.5H49V4Z"
        fill="#33373B"
      />
    </svg>
  );
}

export function SpeakerVent(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="99"
      height="82"
      viewBox="0 0 99 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M77.6537 1.79649C76.6872 0.122448 74.5467 -0.451099 72.8726 0.515393C71.1986 1.48188 70.6251 3.62245 71.5916 5.29649L91.5916 39.9375C92.5581 41.6115 94.6986 42.1851 96.3726 41.2186C98.0467 40.2521 98.6202 38.1115 97.6537 36.4375L77.6537 1.79649Z"
        fill="#8F939C"
      />
      <path
        d="M59.4122 8.57405C61.0862 7.60756 63.2268 8.1811 64.1933 9.85514L84.1933 44.4962C85.1598 46.1702 84.5862 48.3107 82.9122 49.2772C81.2382 50.2437 79.0976 49.6702 78.1311 47.9962L58.1311 13.3551C57.1646 11.6811 57.7382 9.54054 59.4122 8.57405Z"
        fill="#8F939C"
      />
      <path
        d="M49.7328 17.9138C48.7663 16.2398 46.6258 15.6662 44.9518 16.6327C43.2777 17.5992 42.7042 19.7398 43.6707 21.4138L63.6707 56.0548C64.6372 57.7288 66.7777 58.3024 68.4517 57.3359C70.1258 56.3694 70.6993 54.2288 69.7328 52.5548L49.7328 17.9138Z"
        fill="#8F939C"
      />
      <path
        d="M30.4913 24.6914C32.1653 23.7249 34.3059 24.2984 35.2724 25.9725L55.2724 60.6135C56.2389 62.2875 55.6653 64.4281 53.9913 65.3945C52.3173 66.361 50.1767 65.7875 49.2102 64.1135L29.2102 29.4725C28.2437 27.7984 28.8173 25.6578 30.4913 24.6914Z"
        fill="#8F939C"
      />
      <path
        d="M21.8119 34.0311C20.8455 32.3571 18.7049 31.7835 17.0309 32.75C15.3568 33.7165 14.7833 35.8571 15.7498 37.5311L35.7498 72.1721C36.7163 73.8461 38.8568 74.4197 40.5308 73.4532C42.2049 72.4867 42.7784 70.3461 41.8119 68.6721L21.8119 34.0311Z"
        fill="#8F939C"
      />
      <path
        d="M7.35149 42.0898C6.385 40.4157 4.24442 39.8422 2.57041 40.8087C0.896386 41.7752 0.322823 43.9157 1.28932 45.5898L21.2893 80.2308C22.2558 81.9048 24.3964 82.4783 26.0704 81.5119C27.7444 80.5454 28.318 78.4048 27.3515 76.7308L7.35149 42.0898Z"
        fill="#8F939C"
      />
    </svg>
  );
}

export function MenuButton(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="34"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-1.28955"
        y="16.9199"
        width="37"
        height="10"
        rx="5"
        transform="rotate(-30 -1.28955 16.9199)"
        fill="#626A78"
      />
    </svg>
  );
}

export function Screen({
  children,
  ...props
}: React.ComponentProps<"svg"> & { children?: React.ReactNode }) {
  return (
    <svg
      width="153"
      height="138"
      viewBox="0 0 153 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="153" height="138" rx="2" fill="#CBB746" />
      {children}
    </svg>
  );
}

export function ScreenProtector(
  { children, ...props }: React.ComponentProps<"svg"> & { children?: React.ReactNode },
) {
  return (
    <svg
      width="243"
      height="182"
      viewBox="0 0 243 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H235C239.418 0 243 3.58172 243 8V150C243 167.673 228.673 182 211 182H8C3.58172 182 0 178.418 0 174V8Z"
        fill="#626A78"
      />
      {children}
    </svg>
  );
}
