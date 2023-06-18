import React from "react";
import Icon from "../Icon";

const IconLegs = (props) => {
  const { size, inverse, onClick } = props;

  return (
    <Icon
      size={size}
      inverse={inverse}
      onClick={onClick}
      classNameIconType="c-icon-legs c-icon-muscle"
    >
      <svg viewBox="0 0 81 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.30367 38.2315C10.9101 37.2299 24.1269 34.9405 34.2269 31.3847C34.4629 31.2998 34.6789 31.1688 34.8617 30.9996C35.0445 30.8305 35.1903 30.6266 35.2902 30.4005C36.5645 27.5813 38.1426 25.9435 38.2491 25.8256C38.5704 25.5108 39.0048 25.332 39.4591 25.3276C39.9134 25.3231 40.3513 25.4934 40.6789 25.8019C41.0066 26.1104 41.1978 26.5325 41.2115 26.9776C41.2253 27.4227 41.0604 27.8553 40.7524 28.1826C40.3813 28.5929 40.043 29.0305 39.7405 29.4917C39.4519 29.9186 39.2782 30.4102 39.2355 30.9206C38.9041 34.7124 38.5904 44.2933 43.0171 50.1405C43.17 50.3382 43.3704 50.4958 43.6003 50.5994C43.8303 50.7031 44.0828 50.7495 44.3355 50.7346C44.5881 50.7196 44.8331 50.6439 45.0488 50.5139C45.2644 50.384 45.444 50.2039 45.5716 49.9897C46.4755 48.499 47.4757 47.0665 48.5661 45.701C51.3496 42.2051 52.3418 38.6666 51.5251 35.1784C51.4126 34.7426 51.4748 34.2811 51.6991 33.889C51.9233 33.4969 52.2924 33.204 52.7304 33.0708C52.9553 33.0088 53.1907 32.992 53.4224 33.0215C53.6541 33.0509 53.8774 33.1259 54.0788 33.2421C54.2801 33.3582 54.4555 33.513 54.5943 33.6972C54.7331 33.8814 54.8325 34.0912 54.8865 34.3141C55.6539 37.4561 55.6559 42.3462 51.314 47.7989C49.7573 49.7365 48.4106 51.8277 47.2957 54.0386C46.7559 55.1323 46.5191 56.346 46.6093 57.5578L47.9073 75.896C47.961 76.6522 47.7948 77.4078 47.4279 78.0751C46.0471 80.5888 44.8477 83.6072 45.7985 87.7644C45.9981 88.6228 46.4895 89.3891 47.1921 89.9376C47.8947 90.4861 48.7667 90.7841 49.6649 90.7827H77.5306C78.0268 90.7825 78.5166 90.6724 78.9634 90.4609C79.4102 90.2494 79.8025 89.9417 80.1112 89.5609C80.4199 89.1801 80.6369 88.736 80.7461 88.2615C80.8554 87.7871 80.854 87.2946 80.7421 86.8208C80.5866 86.2065 80.2548 85.6488 79.786 85.2136C79.3172 84.7784 78.731 84.4839 78.0968 84.3651C74.6368 83.6768 67.8883 81.7393 64.0909 76.7023C63.0297 75.2816 62.5243 73.5346 62.6667 71.7794L66.8093 17.6387C67.091 13.9833 65.8851 10.3672 63.4551 7.58067C61.0252 4.7941 57.5687 3.06365 53.841 2.76748C52.9101 2.69151 51.9898 2.52042 51.0951 2.25701L48.7851 1.58605C47.3571 1.17258 45.8788 0.9495 44.39 0.922827L2.76697 0.217065C2.42706 0.212195 2.08956 0.273617 1.77409 0.397759C1.45861 0.521901 1.17147 0.706284 0.929353 0.940187C0.687238 1.17409 0.494982 1.45284 0.363769 1.76023C0.232556 2.06763 0.165003 2.39752 0.165039 2.73074V11.8554C0.165039 12.2502 0.325071 12.6289 0.609928 12.9082C0.894786 13.1874 1.28114 13.3442 1.68398 13.3442H6.93914C12.2555 13.3442 17.4356 14.8254 22.0221 17.4609C23.7448 18.4483 25.5758 19.2416 27.4804 19.8256C27.8955 19.9483 28.2504 20.2157 28.4783 20.5772C28.7061 20.9387 28.7911 21.3695 28.7173 21.7882C28.671 22.0235 28.5745 22.2465 28.4341 22.4426C28.2937 22.6387 28.1126 22.8035 27.9027 22.9262C27.6928 23.0489 27.4588 23.1267 27.216 23.1545C26.9732 23.1823 26.7272 23.1595 26.4941 23.0876C24.2882 22.4141 22.1698 21.4914 20.1816 20.338C16.1185 17.986 11.4863 16.7447 6.76752 16.7435H1.6899C1.49043 16.7435 1.29291 16.782 1.10863 16.8568C0.924341 16.9316 0.756893 17.0413 0.615846 17.1796C0.474799 17.3178 0.362914 17.482 0.28658 17.6626C0.210246 17.8432 0.170958 18.0368 0.170958 18.2324V34.7588C0.170846 35.2657 0.282636 35.7666 0.498656 36.2271C0.714675 36.6877 1.02981 37.097 1.42242 37.4269C1.81503 37.7568 2.27582 37.9995 2.77317 38.1384C3.27051 38.2773 3.79263 38.3091 4.30367 38.2315Z"
          fill="black"
        />
      </svg>
    </Icon>
  );
};

export default IconLegs;