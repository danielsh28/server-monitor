import dotenv from 'dotenv';

dotenv.config();
export default {
  BASE_API: 'https://newsapi.org/v2/top-headlines',
  CATEGORY: 'category',
  categories: {
    BUSSINES: 'business',
    ENTERTAINMENT: 'entertainment',
    GENERAL: 'general',
    HEALTH: 'health',
    SCIENCE: 'science',
    SPORT: 'sport',
    TECHNOLOGY: 'technology',
  },
  ISR_HEADLINES: '?country=il',
  API_KEY: '&apikey=1a7891e99115493ba24913c07054c73e',
  DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@appcluster-ztphv.mongodb.net/headlines?retryWrites=true&w=majority`,
};
