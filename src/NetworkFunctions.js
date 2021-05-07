import React from 'react';
import axios from 'axios';

// let apiURL = 'https://ewb-tti.herokuapp.com/api/';
let apiURL = 'https://e6b6fd53cff2.ngrok.io';

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
    const response = await fetch(apiURL + 'geturls/' + text + '/');
    console.log(response);
    const json = await response.json();
    let data = json.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
