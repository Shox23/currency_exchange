<template>
  <div
    class="rounded-2xl overflow-hidden duration-300 w-fit bg-glass backdrop-blur-xl"
    @click="isOpen = !isOpen"
  >
    <div class="px-3 py-2">{{ base_code }}</div>
    <Transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
    >
      <ul class="w-full max-h-40 overflow-auto" v-if="isOpen">
        <li
          class="flex items-center justify-center py-2"
          v-for="item in list"
          :key="item"
          @click.stop="setCurrentCode(item)"
        >
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { base_code, setCurrentBaseCode } from "../../utils/currency";

const isOpen: Ref<boolean> = ref<boolean>(false);
const list: string[] = [
  "USD",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];

const setCurrentCode = (code: string) => {
  setCurrentBaseCode(code);
};

const enter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
  const height = getComputedStyle(el).height;
  el.style.height = "0";
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "auto";
};

const leave = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = getComputedStyle(el).height;
  getComputedStyle(el);
  setTimeout(() => {
    el.style.height = "0";
  });
};
</script>
