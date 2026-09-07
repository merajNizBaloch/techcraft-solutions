"use client";

export default function GlobalNeuralBackground() {
  return (
    <div className="global-neural-background" aria-hidden="true">
      <svg className="global-neural-svg" viewBox="0 0 1440 900" preserveAspectRatio="none" focusable="false">
        <g className="neural-network neural-network-a">
          <path d="M80 150L240 95L390 175L545 112L700 205L860 125L1010 188L1170 108L1360 165" />
          <path d="M40 430L190 350L335 470L500 385L650 455L805 335L955 430L1115 350L1390 425" />
          <path d="M120 735L275 650L430 760L585 670L745 750L905 645L1060 735L1225 650L1375 720" />
          <path d="M240 95L190 350L275 650" />
          <path d="M390 175L335 470L430 760" />
          <path d="M545 112L500 385L585 670" />
          <path d="M700 205L650 455L745 750" />
          <path d="M860 125L805 335L905 645" />
          <path d="M1010 188L955 430L1060 735" />
          <path d="M1170 108L1115 350L1225 650" />
        </g>

        <g className="neural-network neural-network-b">
          <path d="M20 260L160 205L315 290L470 220L620 310L780 235L930 300L1085 215L1240 300L1420 235" />
          <path d="M110 555L255 495L405 580L560 505L715 590L875 500L1025 570L1180 490L1345 575" />
          <path d="M160 205L255 495L315 290L405 580L470 220L560 505L620 310L715 590L780 235L875 500L930 300L1025 570L1085 215L1180 490L1240 300L1345 575" />
        </g>

        <g className="neural-nodes">
          <circle cx="240" cy="95" r="3" /><circle cx="390" cy="175" r="2.4" /><circle cx="545" cy="112" r="2.8" />
          <circle cx="700" cy="205" r="3.2" /><circle cx="860" cy="125" r="2.6" /><circle cx="1010" cy="188" r="2.8" />
          <circle cx="1170" cy="108" r="3" /><circle cx="190" cy="350" r="2.6" /><circle cx="335" cy="470" r="3.1" />
          <circle cx="500" cy="385" r="2.4" /><circle cx="650" cy="455" r="2.8" /><circle cx="805" cy="335" r="3.2" />
          <circle cx="955" cy="430" r="2.6" /><circle cx="1115" cy="350" r="3" /><circle cx="275" cy="650" r="2.8" />
          <circle cx="430" cy="760" r="3" /><circle cx="585" cy="670" r="2.4" /><circle cx="745" cy="750" r="3.1" />
          <circle cx="905" cy="645" r="2.6" /><circle cx="1060" cy="735" r="3" /><circle cx="1225" cy="650" r="2.7" />
        </g>

        <g className="neural-pulses">
          <circle cx="545" cy="112" r="9" /><circle cx="805" cy="335" r="10" /><circle cx="1115" cy="350" r="9" />
          <circle cx="430" cy="760" r="10" /><circle cx="1060" cy="735" r="9" />
        </g>
      </svg>
      <div className="global-neural-vignette" />
    </div>
  );
}
