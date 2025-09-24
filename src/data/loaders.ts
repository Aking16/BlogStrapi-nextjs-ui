import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const BASE_URL = getStrapiURL();

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: true
          }
        },
        links: true,
      },
    },
    // footer: {
    //   populate: {
    //     logo: {
    //       populate: {
    //         image: {
    //           fields: ["url", "alternativeText"],
    //         },
    //       },
    //     },
    //     navigation: true,
    //     policies: true,
    //   },
    // },
  },
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}