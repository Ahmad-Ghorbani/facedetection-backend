import { json } from "express";
import fetch from "node-fetch";

const handleApiCall = (req, res) => {
  const { link } = req.body;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: "vbir8nchb8qr",
      app_id: "2ca36fd11fbf41fcbab13c2bd941bab1",
    },
    inputs: [
      {
        data: {
          image: {
            url: link,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key 7bdea81ca18649a586c51d983417c3fd",
    },
    body: raw,
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id

  fetch(
    "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs",
    requestOptions
  )
    .then((res) => res.text())
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("unable to work with API"));
};

export default handleApiCall;
