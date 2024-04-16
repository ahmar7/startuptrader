import done from "../../../assets/img/done.svg";
import bnb_referral from "../../../assets/img/bnb-referral.png";
import copy from "../../../assets/img/copy.svg";
import star from "../../../assets/img/star.svg";
import Eth from "../../../assets/img/eth-icon.png";
import EthDiamond from "../../../assets/img/ethereum-nirzYqqu.webp";
import Plg from "../../../assets/img/plg-icon.png";
import Avax from "../../../assets/img/avax-icon.png";
import Bnb from "../../../assets/img/bnb-icon.png";
import Arbi from "../../../assets/img/arbitrum-icon.png";
import Opt from "../../../assets/img/optimism-icon.png";
import Base from "../../../assets/img/base-icon.png";
import UsdC from "../../../assets/img/usdc-symbol.webp";
import Dai from "../../../assets/img/Badge_Dai-Bg2iSjNO (1).webp";

import EthSymbol from "../../../assets/img/eth-symbol.webp";
import Tether from "../../../assets/img/tether-icon.webp";
import Matic from "../../../assets/img/matic-symbol.png";
import React, { useEffect, useRef, useState } from "react";
import "./Rank.css";
const Rank = () => {
  const [copied, setCopied] = useState(false);
  const [drop, setdrop] = useState(false);
  const [isTab, setisTab] = useState(false);
  const [selectedCoin, setselectedCoin] = useState("");
  const [selectedCoinImg, setselectedCoinImg] = useState("");
  const [selectedCoinTabName, setselectedCoinTabName] = useState("");
  let toggleDrop = () => {
    setdrop(!drop);
  };
  const dropdownRef = useRef(null);
  const handleCopy = (text) => {
    navigator.clipboard

      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error("Error copying text: ", error));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setdrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  let selectTab = (e) => {
    setdrop(false);

    setisTab(true);
    setselectedCoin(e);
    switch (e) {
      case "eth":
        setselectedCoinTabName("Ethereum");
        setselectedCoinImg(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcWx7bP///+zv8Ovu7+vu7////////+vu7////+zv8L+/v+vu7+rt7urt7uzv8Ozv7/L19u3v8Ovt7u3w8eru7uvu7+zw8e3w8aFk/+7y9Ozv8Ozu8O/y8uzv8PL19sCqquns7PD09e7u7uvv7+ft7fDy9O7y8uvu7uzu7+ru78zMzOvr7+/z8+rs7u7x8+zv8evu8O3w8e7w8uzu7+jo6+Xn5/L19vH19vL19uvu7/Dz9e7y9Ovu7+/y8/Hz9e/z9PH19vDz9Ozs7Ovw8Ovy8u3w8n////D09fH09e7x8e3w8e3w8evv7+vv8Ozv8O3x8evv7+vw8PL19e7x9Ovt7uzw8evv8O7x8u7y8+3w8uzv8C8wMIKDhBMTEzQ1NTU2Nuvu7+rt7oSFhjEyMu/y8/X4+RERES0uLoOEhfb5+jIzM/Dz9O7x8nx9fens7TAxMfP29/L19v3//+3w8fL19/z//xUVFXt8fYGCg/j8/Dc4OPT4+CQlJRQUFP7//4WGh3x9ficoKP////r9/3+AgYeJifr9/i4vLzM0NCssLPf6++nr7PT3+Hp7fCkqKiIjI35/gH1+fyorKzY3N9bY2dfa2xcXF+Xo6fn8/fv//4mKi4CBgsfJyufp6vj7/fT4+QwNDAQEBPDz9LO1tT0+PtHT1CEhIR8fH6utriMkJF1eXiYnJ0NEREVGRvX5+ra4uY+QkcHDxN7h4oyPj6WnqFNVVQcHB/Dz9WxtbpWWl8zOz77AwaGjpEtMTBsbG3d4eZyen3R2duPm53h5eujq6+Hk5ZiZmsTHyNve3rCys6msrdPV1oKEhWRlZert7xgZGZucnfj7/N3g4VpcXJKUlWZoaKChosjLzLq9vqyur/H19s3Q0TU1Nvb6+25wcGlra8rNzkFCQicnJ9nb3ODi4/L291FSU2BiYkdJSbu+vz9BQSMjI8HExezw8VdZWe/y9Kiqq7CysqSmp0xNTjo7O5aYmc3P0E5OTvT29/H09VZXWHFzc56goGJjY7i6u4a+3GEAAABbdFJOUwABAvz9+wQB/gP4BPr8/v269Nb7+hiOKe0BjuteqGLnA2H8FocVd46Q+NgFKEE/ralr74/qLiy/wv3EbW3H/oaG6+oceCh3AtPSXffQkNHOrahr9V3Pztb+/oaqvdwxAAAHE0lEQVRYw41Xd1wTZxj+wAt3AVEcQKm0bhFXW0W7696r2z8uMckll5DkIlmFpGkgCWUTCCNSFFw/91bcow7c1Vaptq6qHXbv3XR+dwG9+y5gvz8gv7t7n3vXPe/zAiA6KTHwT/TkGfcndM+IJeyxGd0T0l5MxuHFGBzc++BSAKTDR82K1bYYLLSdJO20xdCinfly2vA4eOeeENB84qDpWpvBhGFYV4KEh+gKf5oMNu20QYncAx2caBwkjh1v83eRYJwtPCoV94/AJF202RPG9gd4dEevj3qyt42WYOSdo6JpVdtvTMJk934qCsS1H/2YR7MZCUHy7EPB4LU7CCQBIR4b3U4mcBw82K1FYE6SlHbbLS3Fu0BI6rs9yD4bwR4f9TodTwrtrR8eK11Xn8W/Fk8XpaWIEaLwuAfyMeHrYQmXbKvQbFpiUvEvEp3yH4jDo5D3p/R5KK8zYk5S/jPeatcaj9AFkuyc95BU6AMuxR/OixfZhxY2qL21xZmNyyjhnfi8h3FBJmNAUr7o/bCEF7yeBUrzxg0hFXKrc/5gEMOvf99FPUX2lGW7Q69eoMw0fn0QDYLsuajv3absA5Jf6NdF/P7mxQ1yFsBcuupdBvGhS79uw0B0WwKkT78aL3bg07ccag5AZgwcbkFdiK9/Iro1DVLwfLZEnADr6iq9PAwgM1ceMCB5JCXZj4SDwPGBvR7vSorPvuo7ABrfZ3b0NsH06s/VUgoGRHCA8l+pUMvbAGAQ++rLkUd62AawLuBg4H0MIc5gk8cpvwtgzlQGrUgQxDMjE8FUWM1JtggZCB10qHkAMuP6veIs2KawzTB0iB8Tt8CHbAJ4ADLNxpVoJTr5hwyFSRihFdmT9vJtBShA5RfHTchjmHYETGJSnkScwZVcBvkAspLAYrQfJbYkWISXDJgoAZ/I247e0QYAz36/MA3YljkxIDnWhNZAxRzxhgNwygsLatvMje7PLe8I62BKHwZSt2CiDJ7iKuB06gvlezev/disaUVYvxMJAtOmgsFLEQCV6Y3FDXpori4seHuTJjNXd95drDGzzVDz1W1a8FFhS2eDBDQFlOWqQ+10egorLq6SaWqNOTqdrm5NKYQoNgYWCEuJGRJAdwuBZPBslVPu8Rzd5So2KpVKTY5u/nydLndtDRtJzTdCjrbOAxmiPt5XtVi9902FrESpVCjCAPDo5h/yyUp8uwS9QNAZINaODIIDDXIYukwBrRU8ANaN826j+8IifhD2dIB+RKcLNsDQlWFzAQALURdQXLfy80gAAu3BErfC1WaOAMzPydm9/P0yQTeBdGEIqu8vv1dTfBeBD5Bbt3z376eu8R2wx4IMWuiD3W/98Xef0SUGqNOt0Oy0GmgBK2WAeVYBgOkExRiOX/rFp6wVAuTkrjikX3JjWdZCXh0IS3e0keimH4Ihuix4tLiUi6MVgA3+n7NLQ2WNfwV5DM820mxhK1P+xuozzcw17faLlWYIwQHA4Fd89G+Z1dB0buMPRRS/lQeDVIRPKO2Zozu2k7Tf9NNmX4mLBcjRrfCdpLUW8u+Pcs5lZwm+51QwLF30OZ90eH9dzdBlJwo/qHSV1OXuzj18uyXkv7LLHfiTtKv4n3NsMoiZg3zPKua0Wl9VtbMpxJRdv1Vaunz3rsstIcPZmz6fpuQ3v8ABw1zI60koKbND1aN3eLYeZ6x/bP259uoyy7LmHYr1ZkXgoHA4SPIgpUUgVVVop0Otd1ZsazTRZc3NZa8wb20OZBpL1t9EmJ0jVRzSeieUUpbsgKSsLvAeCYYYq/bUBneN0ayp3NyM0AmkdVZbTBENFsq6uoAlVL23YV3z6YpSt9HM8tGBG1kIKU+C5lNB4shnCBGvb+V4XS93FG5aw3Gicc2OonJkut43EE5GdrjaeohGi+mCl5sMnmPs21lK3rCHVCHznRuucLz378WImb2p0MlSu7q6lhuupS50uHZ9vNfAsFSTgkfE852yNHKzoXUyadzrWsrbERhQ4kQ/US/WeNZ17HQIAxgDx9DJGl//tLRN6UWDyd3EIsuedQlqnLBG8v1cLlSrrMhKhuqsI5lHhYLOsAfm4uJGbVYHMo9thsH5EYTul606MXASqSAUmkl8odmO1FUx7zugUtW43/OrUKn7nFDqwlpKxWKblZpOr6ty1buI1O2c92yfKDyC3O9EoLXcX1Dt2rhVWAECiyD3WR9S0opEC4dl5eHKc0WihSMq8soCV556ZOUhmcLvvhWQULsrD7d0jX4MWbooa3C1heKZ78l+dEz762ccu/ZBCP7axzDU3bWPtnW09oUXz/7jJmRrIy+er9nGj0vscPEMr76Jg6ZFXn2nD5p4r9W3dfmOGz577kzh8h07a9Rw6f9ZvlkItkfx5BlpCfMy0kkiPWNeQlrqMNbxmBTx0/8BsP8D5OWd4s8AAAAASUVORK5CYII="
        );
        break;
      case "bnb":
        setselectedCoinTabName("BNB");
        setselectedCoinImg(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFMklEQVR4XtVbvW4TQRhMSWwipYYngCeACsp0pEsJFZTp8gapaXgD6F0gETsIWaRIARIopAAJJAcJCgq4s5M4/zE3l6y1nv253fXe2R5plOR2787f7PfN7u05c3MVIGksLiYbNx92W/XnaavWSFv1TrpZT7Kfg5xXv3fQhj7oi3P4OjOD7ub8ahZUexjguGzW271W/THfZ+qAkYsauMJaI3mzsMz3nThG0rky1jr8OSpHPuJ57fKHq4q1zkRKI9moP5nMqJtYoRBwZ/UDTAdLnzmma9RNLMkb8rRXbjadjF4OfINZIccRhFkaeebYmZCWNMV1390enOy9GAgc7j5T+kRkwnE5oUy3vzxLh8ELXPR/Kv1i0Xt2KCPte1t3OWYtyhLCqxzSyKl//GNdO+omQIQSysKtFGKO/tm/LY5tBEff1wenf17z4REcZ17B1w0llu4cr4I0wuizyelw9ndr2P+iv8fNI4iXDQWLpDRC8KApoMuzZND/uqb0Fzz59ZJPGSJiJphLQdM5mP3dpxxDlhm3lH7M3vs7fNpg/8OS0m8cctw5ktbCMnd0YT9LT8Dk3giIj4EHH5eGAeqEwXm64ygvAcws3O5CrRdc79UpnW1kkzvv7Th9KPYHV9c/+ramzCZBpdGst0eC93V+Dpyxv31POQfEqNrq3OYPmDFsOMxKjs+xsducXx0K4LuPZxKgyOQEdSbpMpI28XwFGMkCpbGALMB5d0c76vAHpCwWQrp6xqgeflpRju9v38/vgTWCrqRgsFwK3gK0JDPkhiKyAEdZgNxHNjnAZJJM2eQEdCJwFgULkLT9H3psAmCki6ALiAXTQe4fQ4D8Iel6Z1dptPEoq3MZsgAuDz3IBlxDnMOCmiB/BlkA/G6abm3Mp8Or11VqowsPPq/kN/cVIBTyvXFfmKLOW1yJ2IPmfyZMSfxelQCnWfD8ObzZrDWC1v+oVz4mWJUAMmGcOl8pZvZwFLLVjZrFqo+Pgy4mGAq+lyCmxBATTPFgpDlYSNm0TNOb7qEmBFhc8bVBni4DBRiMLQCgWweAwiRDgdWhyeSQgTLCBQgsARkmAQSLngEYLsGwsC7naJiXQEfTYKVNAJiR6ckOu0BFwPKYzxM7TPKxOALABAOmwSIBBE5+vxpxZ90mCUO+D2Yb+V5yWxQBMA2GLIRcBQBkk/QVgCG3xRAgXwiFLIV9BABE27QJsL9540H0h6FZEmD4xogbimgTAMTUJe/giOOhAug2RWMIEG0/AGbHfUAx9Ym/fQXAIkg3KyDL4m6IRNoSY9dn+grAxKwAU9XBWwB5Syz/YiN3sNAkgIBp9TaOANgms8FXAOVlqW8WgEUwZQPXLyC/KpOJrXAbcC0+p5CY/xkh06HLEtfkD7JJ6kwOPO9+ka6kQucPLuy9rT3i+HNwRx/a0pv7utIEk2Cu5LiHCHkwkmnKBtGOOjaVBcgbLQyku2+tq6zgDTGyQa5z+fhVIKOvwuQvUMjXEYA/hGx6qiwIHgjxAhMFxN9cJsgG8XJVgM8PMjkDFec3YdxSMJEF0IHPiUeH0RfwfVnqykkK4Dz6AiEPSS607RWaFlDj0vtrcgJlloJskjA53cvVOPRIfR3KKgfQ9C2QWPROexP4wrNCjmMslJkJsRlt5BlphEVS6dy0fA0uBsqaHWIw2O19cV0OHf4AE2M26qWlvQ2TF6LWyXd2J410EiKUXeshwEZDyJsmZzbr7akY8SJc/2NlWwkglFng2Lfk+8wM4M4YuW7T4d/nsz7oW5Wj/wdXGukMTSgLegAAAABJRU5ErkJggg=="
        );
        break;
      case "plg":
        setselectedCoinTabName("Matic");
        setselectedCoinImg(Plg);
        break;
      case "arbi":
        setselectedCoinTabName("Ethereum");
        setselectedCoinImg(Arbi);
        break;
      case "avax":
        setselectedCoinTabName("Avax");
        setselectedCoinImg(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
        );
        break;
      case "base":
        setselectedCoinTabName("Ethereum");
        setselectedCoinImg(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAEfklEQVR4Ae2cW1LTYBTHz/nCoEidqSswqO/gCgwroFXflRWoK6CsQFyB9dkZqCugrID67AjZAXUEyiB8x3PytbE1vaVJSnP5zZSQXqf/ntt3OUGYE3aFypZ16RDBBp8+7h7LAMQ3LP97JrX5XG4uIvBRHylltW5u7rfchtyfPAgJ8ux1x9Gatoiowqc2RKeFiE3LWvry4+tyCxIidlHEIpS6ekd0+37QAmLHVUi7t9pquo0VF2IkNlHsSsdWSu+wW7yFOcNuVtda7cYlTmRRjGV0WAx6D3cMoqqd7K/sQkQiifLk1eU70rqWsJuExXOrn/ulOszITKIY67j8zK5SgQWFA/Leyf6DDzADoUWxK+cb/IEHEE82SRqXSG2GjTUqzJOfvuq84aB2COkQRLAR9aH8kGFeNLUoEj+01vUFix/TwMIgC3MxtatPJcqTlxc7pGkP0kuZLfxALH2aJ0+MKfJGxkIyQZtLB44xpbHV8FhRukH1GLIFC6Oejwu+I91HKtRulskaZRN8z0bGxpGiINJnSE+WCQsPSe7tjHpwqCiSaXgI70CGkWEJe4Mz7LFATDFuc3ucwtQ7C1zcXXN8eTQwTxOwFBnp5kQQgd1oOTCQHbAUYyX6FPIFZ6PrtX5rGbAUYyW5o/y/tfiWklMr6TFgLb6l5NRKegxYiy/KIs+NzAP+/lu9/z1RuJx/C95yQ67Z6NUtnihKqS0okBDieEf5w9WdAwW+C2FGR8Izw1noEXsOOFDgY1nLDrsPrkOBDxHaiuOJDQV94PoSr6pxNaebkCqUzb+pDQnAWmwkuusgKXgivcaZIqkK3A217pMTyoUoQQpRhlGIMoRClCDtpacvvRFyqiCAJAvO9pImlNRmQ0EX9FLyXLZhpgf6xaLQdyjwQYSWkj9Q4KO1aiqtoQkFfVy1vLHPWvXiDIo5WqF1erD6vFun0Dco4EUwOpJjd462cCFB03Jdjl1L+dOA3KdmdN2GaYLwRJHlQjadL5BjFGp/+7o/9tFEDcgx0g3S+98XxW085DupCTlEukD6NwYOjJJ5EjtyB0QakbaY/vMBUcRaWLVcuRFn3kCfUGA+hVWTzoecZCJ0AR4EdpIHRBHV8uJGknGGNWuOXOJYq54f8sMOZBT+4T+5jdLQbjY1+kXWtjGvLCLfa7U26tGRohg30lXIXHxB/l64Oa7HeezEtXQ7sJnN1HK2oMgScXVSp9jE2XwWps5vlInAy+l3e1JbizDVEgfXL7WUCyN9PizI6lQ1WKgFdtkwiIgfIVUTUugal5lsIf4rICRmEzIdJrUVIl6QYyJWE+02FUxWwk1Y8KkGqUOIVjZnafWPtD/FuJPaWSyrEXe53Taj/hnfASLS7Q+q8VtN1cmZIJJuPwGU9qJeZyXWq2LckTixidEjgeundGyAG3Yr603CbsVBVH+LU4weie55syu/HV6CrBDgCz4N1Vo/HGxyvJBliGaUmDHxU2BOyJU0AFgkZYk465wd5FpMNpiap7/uaZsbuVwTubLWrTVxjVGa2zWZ/gL9AOlbpiY+hwAAAABJRU5ErkJggg=="
        );
        break;
      case "opt":
        setselectedCoinTabName("Ethereum");
        setselectedCoinImg(Opt);
        break;
      default:
        setselectedCoinImg("");
        break;
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[48px] tablet:gap-[80px] mt-[20px] laptop:mt-[64px] text-white pb-[48px] laptop:pb-[180px]">
        <div>
          <div className="relative">
            <h1 className="text-[32px] laptop:text-[42px] mb-[12px] laptop:mb-[16px] leading-[120%] font-[500] relative z-[2]">
              Claim Your Rewards
            </h1>
            {/*
            <img
              className="absolute top-[-10px] right-[0]"
              src={bnb_referral}
              alt="referral"
            />
            */}
          </div>
          <p className="text-[14px] laptop:text-[16px] text-[#D6D6D6] mb-[20px] laptop:mb-[32px] leading-[150%]">
            Receive 15% in deposited tokens plus an extra 5% in $SNOVA for each
            referral. Maximize your earnings effortlessly.
          </p>
          <div
            className="laptop:p-[24px] tablet:backdrop-blur-[12px] mt-[20px] laptop:mt-[32px]"
            style={{ background: "rgb(21 22 26/ 0.7)" }}
          >
            <div className="grid grid-cols-1 gap-[8px] laptop:gap-[12px] mb-[12px]">
              <div
                className="flex flex-col py-[12px] laptop:pb-[16px] px-[16px] overflow-hidden"
                style={{ background: "rgba(17, 15, 22, 0.42)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#9AA4B2] tablet:text-white text-[16px] laptop:text-[14px] leading-[145%] font-weight-bold">
                    Total Earnings:
                  </span>
                </div>
                <div className="flex items-center gap-[8px] laptop:gap-[10px] mt-[8px] laptop:mt-[16px]">
                  <span className="text-defaultOrange">$0</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-[1fr_1fr] gap-[8px] laptop:gap-[12px] mb-[20px] laptop:mb-[24px]">
              <div
                className="flex flex-col py-[12px] px-[16px] laptop:pb-[16px] overflow-hidden"
                style={{ background: "rgba(17, 15, 22, 0.42)" }}
              >
                <span className="text-[#9AA4B2] tablet:text-white text-[16px] laptop:text-[14px] leading-[145%] font-weight-bold">
                  Pending Rewards:
                </span>
                <span className="text-defaultOrange mt-[8px] laptop:mt-[16px]">
                  $0
                </span>
              </div>
              <div
                className="flex flex-col py-[12px] laptop:pb-[16px] px-[16px] overflow-hidden"
                style={{ background: "rgba(17, 15, 22, 0.42)" }}
              >
                <span className="text-[#9AA4B2] tablet:text-white text-[16px] laptop:text-[14px] leading-[145%] font-weight-bold">
                  $SNOVA Earned:
                </span>
                <div className="flex items-center gap-[8px] laptop:gap-[10px] mt-[8px] laptop:mt-[16px]">
                  <span className="text-defaultOrange">0 $SNOVA</span>
                </div>
              </div>
            </div>

            <div className="confo gap-[8px] laptop:gap-[0px] flex-col mobile:flex-row flex mb-[20px] tablet:mb-[42px]">
              <div
                className="flex-[0_1_50%] py-[11px] px-[17px] relative"
                style={{ background: "rgba(68, 64, 60, 0.64)" }}
              >
                {/* Your Referral Link */}
                <div className="inline-flex items-center mb-[4px]">
                  <span className="mr-[6px] text-[#79716B] text-[14px] font-[500] leading-[170%]">
                    Your Referral Link
                  </span>
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.98577 1.33337C4.31237 1.33337 1.33105 4.32004 1.33105 8.00004C1.33105 11.68 4.31237 14.6667 7.98577 14.6667C11.6592 14.6667 14.6405 11.68 14.6405 8.00004C14.6405 4.32004 11.6592 1.33337 7.98577 1.33337ZM7.98577 11.3334C7.61976 11.3334 7.3203 11.0334 7.3203 10.6667V8.00004C7.3203 7.63337 7.61976 7.33337 7.98577 7.33337C8.35178 7.33337 8.65125 7.63337 8.65125 8.00004V10.6667C8.65125 11.0334 8.35178 11.3334 7.98577 11.3334ZM8.65125 6.00004H7.3203V4.66671H8.65125V6.00004Z"
                        fill="#79716B"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="_copyWrapper_1fjrj_1"
                  aria-label="Copied to clipboard"
                >
                  <span className="_copyText_1fjrj_12">
                    stacknova.ai...UmtG1QJT
                  </span>
                  {copied ? (
                    <div
                      className="_copyBtn_1fjrj_20"
                      onClick={() =>
                        handleCopy("satoshidex.ai/?ref=stxnova-UmtG1QJT")
                      }
                    >
                      <img src={done} alt />
                    </div>
                  ) : (
                    <div
                      className="_copyBtn_1fjrj_20"
                      onClick={() =>
                        handleCopy("satoshidex.ai/?ref=stdex-UmtG1QJT")
                      }
                    >
                      <img src={copy} alt />
                    </div>
                  )}
                </div>
                <div className="w-[1px] h-[75%] border border-solid border-[#110f1652] absolute right-[0] top-[12px] bottom-[12px]" />
              </div>
              <div
                className="flex flex-[1_0_40%] items-center justify-center flex-col gap-[4px] p-[4px]"
                style={{ background: "rgba(68, 64, 60, 0.64)" }}
              >
                {/* Your Referrals */}
                <span className="text-[#79716B] text-[14px] font-[500] leading-[170%]">
                  Your Referees
                </span>
                <span className="text-white text-[20px] font-[500] leading-[140%]">
                  0
                </span>
              </div>
            </div>
            <div className="">
              <div
                ref={dropdownRef}
                className="relative MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth stswap-select css-xa1gac"
              >
                <div
                  tabIndex={0}
                  role="combobox"
                  onClick={toggleDrop}
                  aria-controls=":r2:"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-label="Without label"
                  className="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-qiwgdb"
                >
                  {isTab ? (
                    <div className="flex items-center">
                      <div className="w-[28px] h-[28px] relative mr-[28px]">
                        <img src={selectedCoinImg} alt="eth" />
                      </div>
                      <div className="text-[#EEF2F6] mr-[40px] capitalize">
                        {selectedCoinTabName}
                      </div>
                      <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                        $0
                      </div>
                    </div>
                  ) : (
                    <em>Select Network</em>
                  )}
                  {/*  */}

                  {/*  */}
                </div>
                <input
                  aria-invalid="false"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="MuiSelect-nativeInput css-1k3x8v3"
                />
                <svg
                  style={
                    drop
                      ? {
                          transform: "rotate(180deg)",
                          transition: "all 0.3s ease",
                        }
                      : {
                          transform: "rotate(0deg)",
                          transition: "all 0.3s ease",
                        }
                  }
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDropDownIcon"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                <fieldset
                  aria-hidden="true"
                  className="MuiOutlinedInput-notchedOutline css-igs3ac"
                >
                  <legend className="css-ihdtdm">
                    <span className="notranslate">​</span>
                  </legend>
                </fieldset>
                {/* mew */}
                {drop && (
                  <div
                    className="MuiPaper-root absas MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper css-pwxzbm"
                    tabIndex={-1}
                  >
                    <ul
                      className="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"
                      role="listbox"
                      tabIndex={-1}
                      id=":r2:"
                    >
                      <li
                        className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected stswap-select_placeholder css-1km1ehz"
                        tabIndex={0}
                        role="option"
                        aria-selected="true"
                        data-value
                      >
                        <em>Select Chain</em>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "eth" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        data-value={1}
                        onClick={() => selectTab("eth")}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Eth} alt="eth" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">
                            Ethereum
                          </div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "bnb" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        onClick={() => selectTab("bnb")}
                        aria-selected="false"
                        data-value={56}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Bnb} alt="bnb" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">BNB</div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "plg" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        onClick={() => selectTab("plg")}
                        aria-selected="false"
                        data-value={137}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Plg} alt="plg" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">Matic</div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "arbi" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        onClick={() => selectTab("arbi")}
                        data-value={42161}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Arbi} alt="arbi" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">
                            Ethereum
                          </div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "avax" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        onClick={() => selectTab("avax")}
                        aria-selected="false"
                        data-value={43114}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Avax} alt="avax" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">Avax</div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "base" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        onClick={() => selectTab("base")}
                        role="option"
                        aria-selected="false"
                        data-value={8453}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAEfklEQVR4Ae2cW1LTYBTHz/nCoEidqSswqO/gCgwroFXflRWoK6CsQFyB9dkZqCugrID67AjZAXUEyiB8x3PytbE1vaVJSnP5zZSQXqf/ntt3OUGYE3aFypZ16RDBBp8+7h7LAMQ3LP97JrX5XG4uIvBRHylltW5u7rfchtyfPAgJ8ux1x9Gatoiowqc2RKeFiE3LWvry4+tyCxIidlHEIpS6ekd0+37QAmLHVUi7t9pquo0VF2IkNlHsSsdWSu+wW7yFOcNuVtda7cYlTmRRjGV0WAx6D3cMoqqd7K/sQkQiifLk1eU70rqWsJuExXOrn/ulOszITKIY67j8zK5SgQWFA/Leyf6DDzADoUWxK+cb/IEHEE82SRqXSG2GjTUqzJOfvuq84aB2COkQRLAR9aH8kGFeNLUoEj+01vUFix/TwMIgC3MxtatPJcqTlxc7pGkP0kuZLfxALH2aJ0+MKfJGxkIyQZtLB44xpbHV8FhRukH1GLIFC6Oejwu+I91HKtRulskaZRN8z0bGxpGiINJnSE+WCQsPSe7tjHpwqCiSaXgI70CGkWEJe4Mz7LFATDFuc3ucwtQ7C1zcXXN8eTQwTxOwFBnp5kQQgd1oOTCQHbAUYyX6FPIFZ6PrtX5rGbAUYyW5o/y/tfiWklMr6TFgLb6l5NRKegxYiy/KIs+NzAP+/lu9/z1RuJx/C95yQ67Z6NUtnihKqS0okBDieEf5w9WdAwW+C2FGR8Izw1noEXsOOFDgY1nLDrsPrkOBDxHaiuOJDQV94PoSr6pxNaebkCqUzb+pDQnAWmwkuusgKXgivcaZIqkK3A217pMTyoUoQQpRhlGIMoRClCDtpacvvRFyqiCAJAvO9pImlNRmQ0EX9FLyXLZhpgf6xaLQdyjwQYSWkj9Q4KO1aiqtoQkFfVy1vLHPWvXiDIo5WqF1erD6vFun0Dco4EUwOpJjd462cCFB03Jdjl1L+dOA3KdmdN2GaYLwRJHlQjadL5BjFGp/+7o/9tFEDcgx0g3S+98XxW085DupCTlEukD6NwYOjJJ5EjtyB0QakbaY/vMBUcRaWLVcuRFn3kCfUGA+hVWTzoecZCJ0AR4EdpIHRBHV8uJGknGGNWuOXOJYq54f8sMOZBT+4T+5jdLQbjY1+kXWtjGvLCLfa7U26tGRohg30lXIXHxB/l64Oa7HeezEtXQ7sJnN1HK2oMgScXVSp9jE2XwWps5vlInAy+l3e1JbizDVEgfXL7WUCyN9PizI6lQ1WKgFdtkwiIgfIVUTUugal5lsIf4rICRmEzIdJrUVIl6QYyJWE+02FUxWwk1Y8KkGqUOIVjZnafWPtD/FuJPaWSyrEXe53Taj/hnfASLS7Q+q8VtN1cmZIJJuPwGU9qJeZyXWq2LckTixidEjgeundGyAG3Yr603CbsVBVH+LU4weie55syu/HV6CrBDgCz4N1Vo/HGxyvJBliGaUmDHxU2BOyJU0AFgkZYk465wd5FpMNpiap7/uaZsbuVwTubLWrTVxjVGa2zWZ/gL9AOlbpiY+hwAAAABJRU5ErkJggg=="
                              alt="base"
                            />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">
                            Ethereum
                          </div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                      <li
                        className={`hover-tab MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz ${
                          selectedCoin === "opt" ? "selectedli" : ""
                        }`}
                        tabIndex={-1}
                        role="option"
                        onClick={() => selectTab("opt")}
                        aria-selected="false"
                        data-value={10}
                      >
                        <div className="flex items-center">
                          <div className="w-[28px] h-[28px] relative mr-[28px]">
                            <img src={Opt} alt="opt" />
                          </div>
                          <div className="text-[#EEF2F6] mr-[40px]">
                            Ethereum
                          </div>
                          <div className="mr-[40px] text-[#D7D3D0] font-DM_Mono">
                            $0
                          </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f" />
                      </li>
                    </ul>
                  </div>
                )}

                {/* mew */}
              </div>
              {/* Coin tab */}
              {isTab && selectedCoin === "eth" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={EthDiamond} alt="Eth" />
                        </div>
                        <div className="text-[16px]">
                          <p>ETH</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "bnb" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFMklEQVR4XtVbvW4TQRhMSWwipYYngCeACsp0pEsJFZTp8gapaXgD6F0gETsIWaRIARIopAAJJAcJCgq4s5M4/zE3l6y1nv253fXe2R5plOR2787f7PfN7u05c3MVIGksLiYbNx92W/XnaavWSFv1TrpZT7Kfg5xXv3fQhj7oi3P4OjOD7ub8ahZUexjguGzW271W/THfZ+qAkYsauMJaI3mzsMz3nThG0rky1jr8OSpHPuJ57fKHq4q1zkRKI9moP5nMqJtYoRBwZ/UDTAdLnzmma9RNLMkb8rRXbjadjF4OfINZIccRhFkaeebYmZCWNMV1390enOy9GAgc7j5T+kRkwnE5oUy3vzxLh8ELXPR/Kv1i0Xt2KCPte1t3OWYtyhLCqxzSyKl//GNdO+omQIQSysKtFGKO/tm/LY5tBEff1wenf17z4REcZ17B1w0llu4cr4I0wuizyelw9ndr2P+iv8fNI4iXDQWLpDRC8KApoMuzZND/uqb0Fzz59ZJPGSJiJphLQdM5mP3dpxxDlhm3lH7M3vs7fNpg/8OS0m8cctw5ktbCMnd0YT9LT8Dk3giIj4EHH5eGAeqEwXm64ygvAcws3O5CrRdc79UpnW1kkzvv7Th9KPYHV9c/+ramzCZBpdGst0eC93V+Dpyxv31POQfEqNrq3OYPmDFsOMxKjs+xsducXx0K4LuPZxKgyOQEdSbpMpI28XwFGMkCpbGALMB5d0c76vAHpCwWQrp6xqgeflpRju9v38/vgTWCrqRgsFwK3gK0JDPkhiKyAEdZgNxHNjnAZJJM2eQEdCJwFgULkLT9H3psAmCki6ALiAXTQe4fQ4D8Iel6Z1dptPEoq3MZsgAuDz3IBlxDnMOCmiB/BlkA/G6abm3Mp8Or11VqowsPPq/kN/cVIBTyvXFfmKLOW1yJ2IPmfyZMSfxelQCnWfD8ObzZrDWC1v+oVz4mWJUAMmGcOl8pZvZwFLLVjZrFqo+Pgy4mGAq+lyCmxBATTPFgpDlYSNm0TNOb7qEmBFhc8bVBni4DBRiMLQCgWweAwiRDgdWhyeSQgTLCBQgsARkmAQSLngEYLsGwsC7naJiXQEfTYKVNAJiR6ckOu0BFwPKYzxM7TPKxOALABAOmwSIBBE5+vxpxZ90mCUO+D2Yb+V5yWxQBMA2GLIRcBQBkk/QVgCG3xRAgXwiFLIV9BABE27QJsL9540H0h6FZEmD4xogbimgTAMTUJe/giOOhAug2RWMIEG0/AGbHfUAx9Ym/fQXAIkg3KyDL4m6IRNoSY9dn+grAxKwAU9XBWwB5Syz/YiN3sNAkgIBp9TaOANgms8FXAOVlqW8WgEUwZQPXLyC/KpOJrXAbcC0+p5CY/xkh06HLEtfkD7JJ6kwOPO9+ka6kQucPLuy9rT3i+HNwRx/a0pv7utIEk2Cu5LiHCHkwkmnKBtGOOjaVBcgbLQyku2+tq6zgDTGyQa5z+fhVIKOvwuQvUMjXEYA/hGx6qiwIHgjxAhMFxN9cJsgG8XJVgM8PMjkDFec3YdxSMJEF0IHPiUeH0RfwfVnqykkK4Dz6AiEPSS607RWaFlDj0vtrcgJlloJskjA53cvVOPRIfR3KKgfQ9C2QWPROexP4wrNCjmMslJkJsRlt5BlphEVS6dy0fA0uBsqaHWIw2O19cV0OHf4AE2M26qWlvQ2TF6LWyXd2J410EiKUXeshwEZDyJsmZzbr7akY8SJc/2NlWwkglFng2Lfk+8wM4M4YuW7T4d/nsz7oW5Wj/wdXGukMTSgLegAAAABJRU5ErkJggg=="
                            alt="Bnb"
                          />
                        </div>
                        <div className="text-[16px]">
                          <p>BNB</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={selectedCoinImg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">{selectedCoin}</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "plg" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Plg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">PLG</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Plg} alt="matic" />
                        </div>
                        <div className="text-[16px]">
                          <p>MATIC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Plg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">PLG</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Plg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">PLG</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC.e</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Plg} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">PLG</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "arbi" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Arbi} alt="arbi" />
                      </div>
                      <p className="text-[14px] uppercase">ARBI</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={EthDiamond} alt="matic" />
                        </div>
                        <div className="text-[16px]">
                          <p>ETH</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Arbi} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">ARBI</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Arbi} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">ARBI</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC.e</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Arbi} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">ARBI</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "avax" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
                          alt="arbi"
                        />
                      </div>
                      <p className="text-[14px] uppercase">AVAX</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
                            alt="matic"
                          />
                        </div>
                        <div className="text-[16px]">
                          <p>AVAX</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
                          alt="plg"
                        />
                      </div>
                      <p className="text-[14px] uppercase">AVAX</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
                          alt="plg"
                        />
                      </div>
                      <p className="text-[14px] uppercase">AVAX</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC.e</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdElEQVR4Xu2bPU7DQBBGuRlrcwTugejgLCBElxZBAQeABiREDzX5awEJIpSAI2Elz9jZ3Zm1dw1Peo298+3MVImibG21xNTkB+MsX9hYnGV9cnAoqcyPFjauLe+LgonJT9locE1+xj46odJYy7Kf1mAjXcv+gsLLY5F9qsMLY5V9q8BLYpf9i2B4KnIOLxiampzHCYalKueyhkHa/sDn2nIuKxiiLeF7bTlfIywOIeH7EHLOWliobR08py3n/BUWhbAJntWW864xzrIHFmi7CZ7XdmTMJecu4WFtbWGdtpy7hAe1tYV12nLuJTykrSus15bz/+0F8KW2vjBH2/8FtLEAX6a7u5UsbYMvYPb0xLmsYVYIl8MPTb7PF1r6Mnt8rGSFcFT8AsWHWkpgVkijWwBzQhtkARKYFdqoFsCcNlRfgARmrfp+e7eYf3xUnktVXcDrYMCZrGHWqi9Hx9ZnXVVdgARmNeXyvUS1BUhglk0uz/na+QKYQ+vgOV9VFiCBWS65PO9j8VH4kA9d9YU5dBOfz8NKjZvZnvjLkARm+eSyzkXxt8G38wv2Yw2zVnWF9baKFyCBWZJc1tsqWoAEZmnkMsfGcgE+S/CFOdQX5mxybfg+LKCAWU1y/iU81OT79Q3vb4T1dfrCnCY5dwkP9lXOXTIx2RUP983Rdn7PuddgQd/kvL/Cor7IOWthYV/knI2wOHU5nxUMSVXOZQ2DUpVzOcGw1OQ8XjA0FTmHCIbHLvtXgZfEKvtWhxfGIvsMCi/vWvbXGmykbdlPJxR/YmRjwd3eOWEfUVBpVFneFy3fzc7ZvMA585NjZIz13+eLs6wPxRfcM7S6mfjOrgAAAABJRU5ErkJggg=="
                          alt="plg"
                        />
                      </div>
                      <p className="text-[14px] uppercase">AVAX</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "base" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAEfklEQVR4Ae2cW1LTYBTHz/nCoEidqSswqO/gCgwroFXflRWoK6CsQFyB9dkZqCugrID67AjZAXUEyiB8x3PytbE1vaVJSnP5zZSQXqf/ntt3OUGYE3aFypZ16RDBBp8+7h7LAMQ3LP97JrX5XG4uIvBRHylltW5u7rfchtyfPAgJ8ux1x9Gatoiowqc2RKeFiE3LWvry4+tyCxIidlHEIpS6ekd0+37QAmLHVUi7t9pquo0VF2IkNlHsSsdWSu+wW7yFOcNuVtda7cYlTmRRjGV0WAx6D3cMoqqd7K/sQkQiifLk1eU70rqWsJuExXOrn/ulOszITKIY67j8zK5SgQWFA/Leyf6DDzADoUWxK+cb/IEHEE82SRqXSG2GjTUqzJOfvuq84aB2COkQRLAR9aH8kGFeNLUoEj+01vUFix/TwMIgC3MxtatPJcqTlxc7pGkP0kuZLfxALH2aJ0+MKfJGxkIyQZtLB44xpbHV8FhRukH1GLIFC6Oejwu+I91HKtRulskaZRN8z0bGxpGiINJnSE+WCQsPSe7tjHpwqCiSaXgI70CGkWEJe4Mz7LFATDFuc3ucwtQ7C1zcXXN8eTQwTxOwFBnp5kQQgd1oOTCQHbAUYyX6FPIFZ6PrtX5rGbAUYyW5o/y/tfiWklMr6TFgLb6l5NRKegxYiy/KIs+NzAP+/lu9/z1RuJx/C95yQ67Z6NUtnihKqS0okBDieEf5w9WdAwW+C2FGR8Izw1noEXsOOFDgY1nLDrsPrkOBDxHaiuOJDQV94PoSr6pxNaebkCqUzb+pDQnAWmwkuusgKXgivcaZIqkK3A217pMTyoUoQQpRhlGIMoRClCDtpacvvRFyqiCAJAvO9pImlNRmQ0EX9FLyXLZhpgf6xaLQdyjwQYSWkj9Q4KO1aiqtoQkFfVy1vLHPWvXiDIo5WqF1erD6vFun0Dco4EUwOpJjd462cCFB03Jdjl1L+dOA3KdmdN2GaYLwRJHlQjadL5BjFGp/+7o/9tFEDcgx0g3S+98XxW085DupCTlEukD6NwYOjJJ5EjtyB0QakbaY/vMBUcRaWLVcuRFn3kCfUGA+hVWTzoecZCJ0AR4EdpIHRBHV8uJGknGGNWuOXOJYq54f8sMOZBT+4T+5jdLQbjY1+kXWtjGvLCLfa7U26tGRohg30lXIXHxB/l64Oa7HeezEtXQ7sJnN1HK2oMgScXVSp9jE2XwWps5vlInAy+l3e1JbizDVEgfXL7WUCyN9PizI6lQ1WKgFdtkwiIgfIVUTUugal5lsIf4rICRmEzIdJrUVIl6QYyJWE+02FUxWwk1Y8KkGqUOIVjZnafWPtD/FuJPaWSyrEXe53Taj/hnfASLS7Q+q8VtN1cmZIJJuPwGU9qJeZyXWq2LckTixidEjgeundGyAG3Yr603CbsVBVH+LU4weie55syu/HV6CrBDgCz4N1Vo/HGxyvJBliGaUmDHxU2BOyJU0AFgkZYk465wd5FpMNpiap7/uaZsbuVwTubLWrTVxjVGa2zWZ/gL9AOlbpiY+hwAAAABJRU5ErkJggg=="
                          alt="arbi"
                        />
                      </div>
                      <p className="text-[14px] uppercase">BASE</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={EthDiamond} alt="matic" />
                        </div>
                        <div className="text-[16px]">
                          <p>ETH</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAEfklEQVR4Ae2cW1LTYBTHz/nCoEidqSswqO/gCgwroFXflRWoK6CsQFyB9dkZqCugrID67AjZAXUEyiB8x3PytbE1vaVJSnP5zZSQXqf/ntt3OUGYE3aFypZ16RDBBp8+7h7LAMQ3LP97JrX5XG4uIvBRHylltW5u7rfchtyfPAgJ8ux1x9Gatoiowqc2RKeFiE3LWvry4+tyCxIidlHEIpS6ekd0+37QAmLHVUi7t9pquo0VF2IkNlHsSsdWSu+wW7yFOcNuVtda7cYlTmRRjGV0WAx6D3cMoqqd7K/sQkQiifLk1eU70rqWsJuExXOrn/ulOszITKIY67j8zK5SgQWFA/Leyf6DDzADoUWxK+cb/IEHEE82SRqXSG2GjTUqzJOfvuq84aB2COkQRLAR9aH8kGFeNLUoEj+01vUFix/TwMIgC3MxtatPJcqTlxc7pGkP0kuZLfxALH2aJ0+MKfJGxkIyQZtLB44xpbHV8FhRukH1GLIFC6Oejwu+I91HKtRulskaZRN8z0bGxpGiINJnSE+WCQsPSe7tjHpwqCiSaXgI70CGkWEJe4Mz7LFATDFuc3ucwtQ7C1zcXXN8eTQwTxOwFBnp5kQQgd1oOTCQHbAUYyX6FPIFZ6PrtX5rGbAUYyW5o/y/tfiWklMr6TFgLb6l5NRKegxYiy/KIs+NzAP+/lu9/z1RuJx/C95yQ67Z6NUtnihKqS0okBDieEf5w9WdAwW+C2FGR8Izw1noEXsOOFDgY1nLDrsPrkOBDxHaiuOJDQV94PoSr6pxNaebkCqUzb+pDQnAWmwkuusgKXgivcaZIqkK3A217pMTyoUoQQpRhlGIMoRClCDtpacvvRFyqiCAJAvO9pImlNRmQ0EX9FLyXLZhpgf6xaLQdyjwQYSWkj9Q4KO1aiqtoQkFfVy1vLHPWvXiDIo5WqF1erD6vFun0Dco4EUwOpJjd462cCFB03Jdjl1L+dOA3KdmdN2GaYLwRJHlQjadL5BjFGp/+7o/9tFEDcgx0g3S+98XxW085DupCTlEukD6NwYOjJJ5EjtyB0QakbaY/vMBUcRaWLVcuRFn3kCfUGA+hVWTzoecZCJ0AR4EdpIHRBHV8uJGknGGNWuOXOJYq54f8sMOZBT+4T+5jdLQbjY1+kXWtjGvLCLfa7U26tGRohg30lXIXHxB/l64Oa7HeezEtXQ7sJnN1HK2oMgScXVSp9jE2XwWps5vlInAy+l3e1JbizDVEgfXL7WUCyN9PizI6lQ1WKgFdtkwiIgfIVUTUugal5lsIf4rICRmEzIdJrUVIl6QYyJWE+02FUxWwk1Y8KkGqUOIVjZnafWPtD/FuJPaWSyrEXe53Taj/hnfASLS7Q+q8VtN1cmZIJJuPwGU9qJeZyXWq2LckTixidEjgeundGyAG3Yr603CbsVBVH+LU4weie55syu/HV6CrBDgCz4N1Vo/HGxyvJBliGaUmDHxU2BOyJU0AFgkZYk465wd5FpMNpiap7/uaZsbuVwTubLWrTVxjVGa2zWZ/gL9AOlbpiY+hwAAAABJRU5ErkJggg=="
                          alt="plg"
                        />
                      </div>
                      <p className="text-[14px] uppercase">BASE</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAEfklEQVR4Ae2cW1LTYBTHz/nCoEidqSswqO/gCgwroFXflRWoK6CsQFyB9dkZqCugrID67AjZAXUEyiB8x3PytbE1vaVJSnP5zZSQXqf/ntt3OUGYE3aFypZ16RDBBp8+7h7LAMQ3LP97JrX5XG4uIvBRHylltW5u7rfchtyfPAgJ8ux1x9Gatoiowqc2RKeFiE3LWvry4+tyCxIidlHEIpS6ekd0+37QAmLHVUi7t9pquo0VF2IkNlHsSsdWSu+wW7yFOcNuVtda7cYlTmRRjGV0WAx6D3cMoqqd7K/sQkQiifLk1eU70rqWsJuExXOrn/ulOszITKIY67j8zK5SgQWFA/Leyf6DDzADoUWxK+cb/IEHEE82SRqXSG2GjTUqzJOfvuq84aB2COkQRLAR9aH8kGFeNLUoEj+01vUFix/TwMIgC3MxtatPJcqTlxc7pGkP0kuZLfxALH2aJ0+MKfJGxkIyQZtLB44xpbHV8FhRukH1GLIFC6Oejwu+I91HKtRulskaZRN8z0bGxpGiINJnSE+WCQsPSe7tjHpwqCiSaXgI70CGkWEJe4Mz7LFATDFuc3ucwtQ7C1zcXXN8eTQwTxOwFBnp5kQQgd1oOTCQHbAUYyX6FPIFZ6PrtX5rGbAUYyW5o/y/tfiWklMr6TFgLb6l5NRKegxYiy/KIs+NzAP+/lu9/z1RuJx/C95yQ67Z6NUtnihKqS0okBDieEf5w9WdAwW+C2FGR8Izw1noEXsOOFDgY1nLDrsPrkOBDxHaiuOJDQV94PoSr6pxNaebkCqUzb+pDQnAWmwkuusgKXgivcaZIqkK3A217pMTyoUoQQpRhlGIMoRClCDtpacvvRFyqiCAJAvO9pImlNRmQ0EX9FLyXLZhpgf6xaLQdyjwQYSWkj9Q4KO1aiqtoQkFfVy1vLHPWvXiDIo5WqF1erD6vFun0Dco4EUwOpJjd462cCFB03Jdjl1L+dOA3KdmdN2GaYLwRJHlQjadL5BjFGp/+7o/9tFEDcgx0g3S+98XxW085DupCTlEukD6NwYOjJJ5EjtyB0QakbaY/vMBUcRaWLVcuRFn3kCfUGA+hVWTzoecZCJ0AR4EdpIHRBHV8uJGknGGNWuOXOJYq54f8sMOZBT+4T+5jdLQbjY1+kXWtjGvLCLfa7U26tGRohg30lXIXHxB/l64Oa7HeezEtXQ7sJnN1HK2oMgScXVSp9jE2XwWps5vlInAy+l3e1JbizDVEgfXL7WUCyN9PizI6lQ1WKgFdtkwiIgfIVUTUugal5lsIf4rICRmEzIdJrUVIl6QYyJWE+02FUxWwk1Y8KkGqUOIVjZnafWPtD/FuJPaWSyrEXe53Taj/hnfASLS7Q+q8VtN1cmZIJJuPwGU9qJeZyXWq2LckTixidEjgeundGyAG3Yr603CbsVBVH+LU4weie55syu/HV6CrBDgCz4N1Vo/HGxyvJBliGaUmDHxU2BOyJU0AFgkZYk465wd5FpMNpiap7/uaZsbuVwTubLWrTVxjVGa2zWZ/gL9AOlbpiY+hwAAAABJRU5ErkJggg=="
                          alt="plg"
                        />
                      </div>
                      <p className="text-[14px] uppercase">BASE</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Dai} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>DAI</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedCoin === "opt" ? (
                <div
                  className="grid mt-[12px] laptop:mt-[24px]"
                  style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
                >
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Opt} alt="arbi" />
                      </div>
                      <p className="text-[14px] uppercase">OPT</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={EthDiamond} alt="matic" />
                        </div>
                        <div className="text-[16px]">
                          <p>ETH</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Opt} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">OPT</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={Tether} alt="USDT" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDT</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Opt} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">OPT</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC.e</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col py-[8px] px-[16px] w-full"
                    style={{ background: "rgba(87, 83, 78, 0.24)" }}
                  >
                    <div
                      className="flex gap-[16px] items-center mb-[12px] py-[6px] px-[8px] self-baseline hidden tablet:flex tabIndex referral-heading"
                      style={{ background: "rgba(17, 15, 22, 0.42)" }}
                    >
                      <div className="w-[20px] h-[20px]">
                        <img src={Opt} alt="plg" />
                      </div>
                      <p className="text-[14px] uppercase">OPT</p>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex items-center gap-[16px]">
                        <div className="w-[28px] h-[28px]">
                          <img src={UsdC} alt="USDC.e" />
                        </div>
                        <div className="text-[16px]">
                          <p>USDC</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-right text-[14px]">0</p>
                        <p className="text-right text-[#79716B] text-[12px]">
                          $0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* Coin tab */}

              {/*  */}

              <div
                className="grid mt-[12px] laptop:mt-[24px]"
                style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}
              />
              <button
                className="px-[16px] py-[11px] bg-defaultOrange _base_rhd5v_1 _orange_rhd5v_17 font-DM_Mono font-medium flex justify-center items-center text-typographyBlack whitespace-break-spaces text-[16px] laptop:text-[20px] mt-[20px]"
                disabled
                style={{ width: "100%" }}
              >
                {/*<span className="_decorLeft_rhd5v_4">[</span>*/}
                <span className="mx-[12px] text-[16px] laptop:text-[20px] text-[#110F16] _text_rhd5v_20 undefined">
                  <span className="text-[18px] leading-[160%]">
                    No Rewards Available
                  </span>
                </span>
                {/*<span className="_decorRight_rhd5v_5">]</span>*/}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex-col tablet:flex-column mt-[42px] tablet:mt-[0] flex justify-center gap-[20px] items-center px-[12px] py-[6px]	 border border-solid border-[#57534E]"
            style={{ color: "rgb(21 22 26/ 0.7)" }}
          >
            <div className="flex items-center gap-[10px] justify-between w-full tablet:w-auto">
              <span className="uppercase text-[#CDD5DF] text-[14px] laptop:text-[14px] leading-[120%] font-[500]">
                Your Rank:
              </span>
              <div className="flex items-center gap-[8px]">
                {/*<img className="hidden laptop:block" src={star} alt="[]" />*/}
                <span className="text-defaultOrange text-[32px] leading-[120%] font-[500]">
                  #
                </span>
                {/*<img className="hidden laptop:block" src={star} alt="[]" />*/}
              </div>
            </div>
          </div>
          <h2 className="text-[28px] laptop:text-[32px] mt-[28px] mb-[16px] laptop:mb-[24px] leading-[120%] font-[500]">
            Top Earners
          </h2>
          {/*
          <ul className="border border-solid border-[#57534E] bg-[#171412]">
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                1
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xbb90...5549
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $5,697
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                2
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0x2692...d648
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $5,425
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                3
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0x1ce7...e556
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $5,311
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                4
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xd0d0...9c09
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $5,306
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                5
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0x738c...9d35
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,950
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                6
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0x20f5...7053
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,900
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                7
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xe23b...65a1
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,829
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                8
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xe23b...65a1
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,829
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                9
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xe23b...65a1
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,829
              </span>
            </li>
            <li className="flex flex-wrap gap-[24px] items-center p-[20px] border-solid border-b border-[#57534E]">
              <span
                className="flex flex-[0_0_34px] text-[#D6D6D6] text-[18px] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                10
              </span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-defaultOrange overflow-hidden">
                  <canvas
                    className="identicon"
                    width={30}
                    height={30}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <span
                  className="text-[16px] font-[500] leading-[120%] uppercase text-[#A9A29D]"
                  style={{ color: "rgb(214, 214, 214)" }}
                >
                  0xe23b...65a1
                </span>
              </div>
              <span
                className="ml-auto text-[#A9A29D] font-[500] leading-[120%]"
                style={{ color: "rgb(214, 214, 214)" }}
              >
                $4,829
              </span>
            </li>
          </ul>
          */}
        </div>
      </div>
    </>
  );
};

export default Rank;
