import News from "../model/newSchema.js";

export const getNews = async (request, response) => {
  try {
    let data = await News.find({});
    return response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: data.message });
  }
};
