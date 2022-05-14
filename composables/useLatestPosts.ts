import type { PostItem } from "~/types";

export const useLatestPosts = (limit: number = 4) => {
  const URL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dmrfurkan";

  const transformResponse = (response: any) => {
    const { items } = response;
    items.slice(0, limit);

    const result = items.map((item) => {
      const { title, link, pubDate, thumbnail, description } = item as PostItem;

      return {
        pubDate: new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(pubDate)),
        title,
        link,
        thumbnail,
        description,
      };
    });

    return result;
  };

  const result = useLazyFetch<PostItem[]>(URL, {
    transform: transformResponse,
  });

  return result;
};
