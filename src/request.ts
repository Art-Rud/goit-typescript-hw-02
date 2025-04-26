import axios from "axios";

const fetchPhoto = async (text: string, page: number) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: text,
      per_page: 9,
      page: page,
      orientation: "portrait",
      client_id: "zkHtNa4SSTFHr2Ekxvf8QRvaqyQ6H_Bh09b-PX3rAeQ",
    },
  });

  return response.data.results;
};

export default fetchPhoto;
