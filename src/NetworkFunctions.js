import React from 'react';
import axios from 'axios';

// let apiURL = 'https://ewb-tti.herokuapp.com/api/';
let apiURL = 'https://d7a7bfbd6c9b.ngrok.io/api/';
// let apiURL = 'http://0.0.0.0:5000/api/';

export async function getFakeData() {
  try {
    const response = await fetch(apiURL + 'fakedata');
    const json = await response.json();
    let data = json.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getImageURLs(text) {
  try {
    const response = await fetch(apiURL + 'geturls/' + text + '/', {
      mode: 'cors',
    });
    console.log(response);
    const json = await response.json();
    let data = json.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
