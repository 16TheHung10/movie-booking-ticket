import { DOMAIN, TOKKEN_CYBERSOFT } from "../util/settings/config";

export const request = (url, data) => {
  const variables = {
    url: `${DOMAIN}${url}`,
    data,
    headers: {
      TokenCybersoft: TOKKEN_CYBERSOFT,
    },
  };
  if (localStorage.getItem("user")) {
    variables.headers = {
      ...variables.headers,
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
  }
  return variables;
};
