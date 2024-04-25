const newRequest = async (url, method, headers, body) => {
  try {
    const options = {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body
    };

    const response = await fetch(url, options);
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (e) {
    console.error(e.message);
  }
};

class Http {
  async get(url, options = {}) {
    return await newRequest(url, "GET", options.headers || {});
  }
}


export default new Http();
