import useSWR, { mutate } from 'swr';

const token = 'f573fa598f25ab099b3cfa24b57102b5';

const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcherWithToken = async (url, token) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer' + token,
        'Content-type': 'application/json',
      },
    });
    let text = await response.text();

    const data = text ? JSON.parse(text) : null;
    return data;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
};

export let getAllItems = () => {
  const { data, error } = useSWR(
    ['https://mybid-backend.herokuapp.com/api/asset', token],
    fetcherWithToken,
    { refreshInterval: 0 },
  );

  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export let getItemById = (id) => {
  const { data, error } = useSWR(
    [`https://mybid-backend.herokuapp.com/api/asset/${id}`, token],
    fetcherWithToken,
    { refreshInterval: 0 },
  );

  return {
    item: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export let getCategory = () => {
  const { data, error } = useSWR(
    [`https://mybid-backend.herokuapp.com/api/category`, token],
    fetcherWithToken,
    { refreshInterval: 0 },
  );

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export let filterCategory = (id) => {
  const { data, error } = useSWR(
    [`https://mybid-backend.herokuapp.com/api/asset?category=${id}`, token],
    fetcherWithToken,
    { refreshInterval: 0 },
  );

  return {
    categoryItem: data,
    filCatError: error,
  };
};

export let filterAllParam = (id, location, province, max, min, endedAt) => {
  const urlFilterAllParam = `https://mybid-backend.herokuapp.com/api/asset?category=${id}&location=${location}&province=${province}&max=${max}&min=${min}&end=${endedAt}`;

  const { data, error } = useSWR([urlFilterAllParam, token], fetcherWithToken, {
    refreshInterval: 0,
  });

  return {
    filAllData: data,
    filAllError: error,
  };
};
