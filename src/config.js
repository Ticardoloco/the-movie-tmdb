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

    trailer: {
      popular: "/movie/popular",
      streaming: "/tv/top_rated",
      on_tv: "/tv/on_the_air",
      for_rent: "/tv/airing_today",
      theater: "/movie/now_playing"
    },

    popular: {
      streaming: "/movie/now_playing",
      on_tv: "/tv/top_rated",
      for_rent: "/movie/top_rated",
      theater: "/movie/upcoming"
    },

    watch: {
      movie: "/discover/movie",
      tv: "/discover/tv"
    }

    
  },
};

export default config;
