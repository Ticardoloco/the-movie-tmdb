const config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  subUrl: {
    trending: {
      movie: {
        day: "/trending/movie/day",
        week: "/trending/movie/week",
      },
      tv: {
        day: "/trending/tv/day",
        week: "/trending/tv/week",
      },
      all: {
        day: "/trending/all/day",
        week: "/trending/all/week",
      },
    },
  },
};

export default config;
