import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from './api';

export const gethUserCard = async (page = 1) => {
  return await axios
    .get(`${BASE_URL}users`, {
      params: {
        page: page,
        count: 6,
      },
    })
    .then(response => response.data);
};

export const fetchToken = async () => {
  return await axios.get(`${BASE_URL}token`).then(response => response.data);
};

export const addUserCard = async (value, TOKEN) => {
  return await axios
    .post(`${BASE_URL}users `, value, {
      headers: {
        Token: `${TOKEN}`,
      },
    })
    .then(response => response.data);
};

export const fetchPositions = async () => {
  return await axios
    .get(`${BASE_URL}positions `)
    .then(response => response.data);
};

gethUserCard.propType = {
  parameters: PropTypes.string,
  page: PropTypes.number,
};
