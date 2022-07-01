import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFF8DD" : "#202205";
  return (
    <Svg viewBox="0 0 78 26" {...props}>
      <path
        d="M18.1244792,21.2493464 C18.1244792,22.5093053 17.6202832,23.7176493 16.7227895,24.6085457 C15.8252958,25.4995189 14.6080492,26 13.3388021,26 C12.0695549,26 10.8523083,25.4995189 9.95481466,24.6085457 C9.05732099,23.7176493 8.553125,22.5093053 8.553125,21.2493464 C8.553125,18.7125844 13.2512304,13.203125 13.3388021,13.203125 C13.4176166,13.203125 18.1244792,18.7039435 18.1244792,21.2493464 Z"
        fill={textColor}
      />
      <path
        d="M26.0666667,0 C22.6709568,0.000195311962 19.4137654,1.38999809 17.0089097,3.86485877 C14.6040487,6.33969741 13.247664,9.69779695 13.2369792,13.203125 C16.6327176,13.2029597 19.8898929,11.81316 22.2947486,9.33826623 C24.6996043,6.86342759 26.0559744,3.50537765 26.0666667,0 Z"
        fill="#41A65B"
      />
      <path
        d="M0.000191840278,0 C3.50373,0.000194727346 6.86430822,1.38999809 9.34550893,3.86485877 C11.8267096,6.33969741 13.2261944,9.69779695 13.237171,13.203125 C9.73366022,13.2029597 6.37306545,11.81316 3.89187577,9.33826623 C1.41067506,6.86342759 0.0112199978,3.50538316 0.000191840278,0 Z"
        fill="#41A65B"
      />
      <path
        d="M37.1533333,19.38 C36.3399959,19.38 35.6500028,19.280001 35.0833333,19.08 C34.5166638,18.879999 34.0533351,18.6433347 33.6933333,18.37 C33.3333315,18.0966653 33.0600009,17.8466678 32.8733333,17.62 C32.6866657,17.3933322 32.5733335,17.2533336 32.5333333,17.2 C32.2666653,16.866665 32.1033336,16.566668 32.0433333,16.3 C31.983333,16.033332 32.0233326,15.766668 32.1633333,15.5 C32.303334,15.233332 32.5399983,14.9400016 32.8733333,14.62 C33.1800015,14.3266652 33.4799985,14.1633335 33.7733333,14.13 C34.0666681,14.0966665 34.3566652,14.1599992 34.6433333,14.32 C34.9300014,14.4800008 35.2066653,14.7133318 35.4733333,15.02 C35.7933349,15.3800018 36.0666655,15.6233327 36.2933333,15.75 C36.5200011,15.8766673 36.7799985,15.94 37.0733333,15.94 C37.4333351,15.94 37.7266655,15.8966671 37.9533333,15.81 C38.1800011,15.7233329 38.3466661,15.5900009 38.4533333,15.41 C38.5600005,15.2299991 38.6133333,15.0000014 38.6133333,14.72 C38.6133333,14.4933322 38.5000011,14.3166673 38.2733333,14.19 C38.0466655,14.0633327 37.7500018,13.9533338 37.3833333,13.86 C37.0166648,13.7666662 36.6066689,13.6633339 36.1533333,13.55 C35.6999977,13.4366661 35.2533355,13.2866676 34.8133333,13.1 C34.5466653,12.9933328 34.2866679,12.8600008 34.0333333,12.7 C33.7799987,12.5399992 33.5433344,12.3566677 33.3233333,12.15 C33.1033322,11.9433323 32.9133341,11.6966681 32.7533333,11.41 C32.5933325,11.1233319 32.4700004,10.8000018 32.3833333,10.44 C32.2966662,10.0799982 32.2533333,9.6733356 32.2533333,9.22 C32.2533333,8.4066626 32.4566646,7.6800032 32.8633333,7.04 C33.270002,6.3999968 33.8299964,5.8933352 34.5433333,5.52 C35.2566702,5.1466648 36.0666621,4.96 36.9733333,4.96 C37.6266699,4.96 38.1866643,5.0133328 38.6533333,5.12 C39.1200023,5.2266672 39.5033318,5.3533326 39.8033333,5.5 C40.1033348,5.6466674 40.3333325,5.7833327 40.4933333,5.91 C40.6533341,6.0366673 40.7533331,6.1199998 40.7933333,6.16 C41.2333355,6.560002 41.4733331,6.9033319 41.5133333,7.19 C41.5533335,7.4766681 41.3933351,7.886664 41.0333333,8.42 C40.6333313,8.9933362 40.2400019,9.3166663 39.8533333,9.39 C39.4666647,9.4633337 39.0200025,9.3400016 38.5133333,9.02 C38.4066661,8.9399996 38.3000005,8.8500005 38.1933333,8.75 C38.0866661,8.6499995 37.9433342,8.5633337 37.7633333,8.49 C37.5833324,8.4166663 37.3133351,8.38 36.9533333,8.38 C36.8199993,8.38 36.6866673,8.4033331 36.5533333,8.45 C36.4199993,8.4966669 36.3066671,8.5566663 36.2133333,8.63 C36.1199995,8.7033337 36.0433336,8.7933328 35.9833333,8.9 C35.923333,9.0066672 35.8933333,9.1199994 35.8933333,9.24 C35.8933333,9.5200014 35.9999989,9.7366659 36.2133333,9.89 C36.4266677,10.0433341 36.7099982,10.1599996 37.0633333,10.24 C37.4166684,10.3200004 37.8066645,10.3999996 38.2333333,10.48 C38.6600021,10.5600004 39.0933311,10.666666 39.5333333,10.8 C39.8933351,10.9200006 40.2399983,11.0733324 40.5733333,11.26 C40.9066683,11.4466676 41.1999987,11.6866652 41.4533333,11.98 C41.7066679,12.2733348 41.9099992,12.6366645 42.0633333,13.07 C42.2166674,13.5033355 42.2933333,14.0333302 42.2933333,14.66 C42.2933333,15.526671 42.1266683,16.2633303 41.7933333,16.87 C41.4599983,17.4766697 41.0300026,17.9633315 40.5033333,18.33 C39.976664,18.6966685 39.4166696,18.9633325 38.8233333,19.13 C38.229997,19.2966675 37.6733359,19.38 37.1533333,19.38 Z M48.1933333,19.42 C47.4733297,19.42 46.7933365,19.3000012 46.1533333,19.06 C45.5133301,18.8199988 44.9433358,18.4900021 44.4433333,18.07 C43.9433308,17.6499979 43.5533347,17.1700027 43.2733333,16.63 C42.9933319,16.0899973 42.8533333,15.5266696 42.8533333,14.94 C42.8533333,14.0999958 43.5199933,13.68 44.8533333,13.68 C45.2266685,13.68 45.509999,13.713333 45.7033333,13.78 C45.8966676,13.846667 46.0533327,13.9633325 46.1733333,14.13 C46.2933339,14.2966675 46.4133327,14.5333318 46.5333333,14.84 L46.6633333,15.09 C46.7500004,15.2566675 46.9133321,15.4233325 47.1533333,15.59 C47.3933345,15.7566675 47.7466643,15.84 48.2133333,15.84 C48.5733351,15.84 48.8799987,15.7933338 49.1333333,15.7 C49.3866679,15.6066662 49.5833326,15.4733342 49.7233333,15.3 C49.863334,15.1266658 49.9333333,14.9266678 49.9333333,14.7 C49.9333333,14.433332 49.8666673,14.2133342 49.7333333,14.04 C49.5999993,13.8666658 49.4200011,13.7400004 49.1933333,13.66 C48.9666655,13.5799996 48.7000015,13.54 48.3933333,13.54 C48.0999985,13.54 47.8133347,13.5200002 47.5333333,13.48 C47.2533319,13.4399998 47.0233342,13.3000012 46.8433333,13.06 C46.6633324,12.8199988 46.5733333,12.400003 46.5733333,11.8 C46.5733333,11.1866636 46.6633324,10.7633345 46.8433333,10.53 C47.0233342,10.2966655 47.2566652,10.1633335 47.5433333,10.13 C47.8300014,10.0966665 48.1199985,10.08 48.4133333,10.08 C48.6800013,10.08 48.9033324,10.0633335 49.0833333,10.03 C49.2633342,9.9966665 49.3999995,9.9333338 49.4933333,9.84 C49.5866671,9.7466662 49.6333333,9.6133342 49.6333333,9.44 C49.6333333,9.239999 49.5833338,9.0700007 49.4833333,8.93 C49.3833328,8.7899993 49.2400009,8.6833337 49.0533333,8.61 C48.8666657,8.5366663 48.6466679,8.5 48.3933333,8.5 C48.0733317,8.5 47.8200009,8.5399996 47.6333333,8.62 C47.4466657,8.7000004 47.3033338,8.8033327 47.2033333,8.93 C47.1033328,9.0566673 47.0200003,9.1799994 46.9533333,9.3 C46.6999987,9.8600028 46.3633354,10.1966661 45.9433333,10.31 C45.5233312,10.4233339 45.0200029,10.3200016 44.4333333,10 C43.8599971,9.6533316 43.5333337,9.2866686 43.4533333,8.9 C43.3733329,8.5133314 43.4666653,8.053336 43.7333333,7.52 C43.7333333,7.5333334 43.7699996,7.4566675 43.8433333,7.29 C43.916667,7.1233325 44.0533323,6.9133346 44.2533333,6.66 C44.4533343,6.4066654 44.7199983,6.1500013 45.0533333,5.89 C45.3866683,5.6299987 45.8133307,5.4133342 46.3333333,5.24 C46.8533359,5.0666658 47.4733297,4.98 48.1933333,4.98 C49.0333375,4.98 49.7699968,5.113332 50.4033333,5.38 C51.0366698,5.646668 51.5699978,5.9933312 52.0033333,6.42 C52.4366688,6.8466688 52.7633322,7.3166641 52.9833333,7.83 C53.2033344,8.3433359 53.3133333,8.8533308 53.3133333,9.36 C53.3133333,9.8533358 53.2300008,10.2699983 53.0633333,10.61 C52.8966658,10.9500017 52.7033344,11.2166657 52.4833333,11.41 C52.2633322,11.6033343 52.0800007,11.7399996 51.9333333,11.82 C52.0533339,11.9000004 52.2066657,12.0166659 52.3933333,12.17 C52.5800009,12.3233341 52.7633324,12.5199988 52.9433333,12.76 C53.1233342,13.0000012 53.276666,13.2766651 53.4033333,13.59 C53.5300006,13.9033349 53.5933333,14.259998 53.5933333,14.66 C53.5933333,15.5800046 53.3600023,16.3966631 52.8933333,17.11 C52.4266643,17.8233369 51.7866707,18.3866646 50.9733333,18.8 C50.1599959,19.2133354 49.2333385,19.42 48.1933333,19.42 Z M59.4933333,19.42 C58.7733297,19.42 58.0933365,19.3000012 57.4533333,19.06 C56.8133301,18.8199988 56.2433358,18.4900021 55.7433333,18.07 C55.2433308,17.6499979 54.8533347,17.1700027 54.5733333,16.63 C54.2933319,16.0899973 54.1533333,15.5266696 54.1533333,14.94 C54.1533333,14.0999958 54.8199933,13.68 56.1533333,13.68 C56.5266685,13.68 56.809999,13.713333 57.0033333,13.78 C57.1966676,13.846667 57.3533327,13.9633325 57.4733333,14.13 C57.5933339,14.2966675 57.7133327,14.5333318 57.8333333,14.84 L57.9633333,15.09 C58.0500004,15.2566675 58.2133321,15.4233325 58.4533333,15.59 C58.6933345,15.7566675 59.0466643,15.84 59.5133333,15.84 C59.8733351,15.84 60.1799987,15.7933338 60.4333333,15.7 C60.6866679,15.6066662 60.8833326,15.4733342 61.0233333,15.3 C61.163334,15.1266658 61.2333333,14.9266678 61.2333333,14.7 C61.2333333,14.433332 61.1666673,14.2133342 61.0333333,14.04 C60.8999993,13.8666658 60.7200011,13.7400004 60.4933333,13.66 C60.2666655,13.5799996 60.0000015,13.54 59.6933333,13.54 C59.3999985,13.54 59.1133347,13.5200002 58.8333333,13.48 C58.5533319,13.4399998 58.3233342,13.3000012 58.1433333,13.06 C57.9633324,12.8199988 57.8733333,12.400003 57.8733333,11.8 C57.8733333,11.1866636 57.9633324,10.7633345 58.1433333,10.53 C58.3233342,10.2966655 58.5566652,10.1633335 58.8433333,10.13 C59.1300014,10.0966665 59.4199985,10.08 59.7133333,10.08 C59.9800013,10.08 60.2033324,10.0633335 60.3833333,10.03 C60.5633342,9.9966665 60.6999995,9.9333338 60.7933333,9.84 C60.8866671,9.7466662 60.9333333,9.6133342 60.9333333,9.44 C60.9333333,9.239999 60.8833338,9.0700007 60.7833333,8.93 C60.6833328,8.7899993 60.5400009,8.6833337 60.3533333,8.61 C60.1666657,8.5366663 59.9466679,8.5 59.6933333,8.5 C59.3733317,8.5 59.1200009,8.5399996 58.9333333,8.62 C58.7466657,8.7000004 58.6033338,8.8033327 58.5033333,8.93 C58.4033328,9.0566673 58.3200003,9.1799994 58.2533333,9.3 C57.9999987,9.8600028 57.6633354,10.1966661 57.2433333,10.31 C56.8233312,10.4233339 56.3200029,10.3200016 55.7333333,10 C55.1599971,9.6533316 54.8333337,9.2866686 54.7533333,8.9 C54.6733329,8.5133314 54.7666653,8.053336 55.0333333,7.52 C55.0333333,7.5333334 55.0699996,7.4566675 55.1433333,7.29 C55.216667,7.1233325 55.3533323,6.9133346 55.5533333,6.66 C55.7533343,6.4066654 56.0199983,6.1500013 56.3533333,5.89 C56.6866683,5.6299987 57.1133307,5.4133342 57.6333333,5.24 C58.1533359,5.0666658 58.7733297,4.98 59.4933333,4.98 C60.3333375,4.98 61.0699968,5.113332 61.7033333,5.38 C62.3366698,5.646668 62.8699978,5.9933312 63.3033333,6.42 C63.7366688,6.8466688 64.0633322,7.3166641 64.2833333,7.83 C64.5033344,8.3433359 64.6133333,8.8533308 64.6133333,9.36 C64.6133333,9.8533358 64.5300008,10.2699983 64.3633333,10.61 C64.1966658,10.9500017 64.0033344,11.2166657 63.7833333,11.41 C63.5633322,11.6033343 63.3800007,11.7399996 63.2333333,11.82 C63.3533339,11.9000004 63.5066657,12.0166659 63.6933333,12.17 C63.8800009,12.3233341 64.0633324,12.5199988 64.2433333,12.76 C64.4233342,13.0000012 64.576666,13.2766651 64.7033333,13.59 C64.8300006,13.9033349 64.8933333,14.259998 64.8933333,14.66 C64.8933333,15.5800046 64.6600023,16.3966631 64.1933333,17.11 C63.7266643,17.8233369 63.0866707,18.3866646 62.2733333,18.8 C61.4599959,19.2133354 60.5333385,19.42 59.4933333,19.42 Z M67.5533333,19.16 C66.9799971,19.16 66.5666679,19.0733342 66.3133333,18.9 C66.0599987,18.7266658 65.9000003,18.5000014 65.8333333,18.22 C65.7666663,17.9399986 65.7333333,17.6400016 65.7333333,17.32 L65.7333333,6.98 C65.7333333,6.6866652 65.7599997,6.4000014 65.8133333,6.12 C65.8666669,5.8399986 66.0199987,5.6100009 66.2733333,5.43 C66.5266679,5.2499991 66.9599969,5.1666666 67.5733333,5.18 L71.0133333,5.18 C71.9600047,5.18 72.8533291,5.3599982 73.6933333,5.72 C74.5333375,6.0800018 75.2766634,6.5766635 75.9233333,7.21 C76.5700032,7.8433365 77.0766648,8.5799958 77.4433333,9.42 C77.8100018,10.2600042 77.9933333,11.1533286 77.9933333,12.1 C77.9933333,13.0733382 77.8100018,13.9866624 77.4433333,14.84 C77.0766648,15.6933376 76.5700032,16.4433301 75.9233333,17.09 C75.2766634,17.7366699 74.5300042,18.2433315 73.6833333,18.61 C72.8366624,18.9766685 71.9266715,19.16 70.9533333,19.16 L67.5533333,19.16 Z M69.3933333,15.5 L71.0133333,15.5 C71.6133363,15.5 72.1666641,15.3500015 72.6733333,15.05 C73.1800025,14.7499985 73.5833318,14.3500025 73.8833333,13.85 C74.1833348,13.3499975 74.3333333,12.7933364 74.3333333,12.18 C74.3333333,11.5666636 74.1833348,11.0066692 73.8833333,10.5 C73.5833318,9.9933308 73.1800025,9.5900015 72.6733333,9.29 C72.1666641,8.9899985 71.6066697,8.84 70.9933333,8.84 L69.3933333,8.84 L69.3933333,15.5 Z"
        fill={textColor}
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
