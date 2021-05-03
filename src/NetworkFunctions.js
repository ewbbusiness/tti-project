import React from 'react';

let apiURL = 'http://0.0.0.0:5000/api/';

export async function getFakeData() {
  try {
    const response = await fetch(apiURL + 'fakedata');
    const json = await response.json();
    let data = typeof json.data[0];
    return data;
  } catch (err) {
    console.log(err);
  }
}
