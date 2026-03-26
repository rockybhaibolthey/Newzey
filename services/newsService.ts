type NewsItem = {
  category: string;
  heading: string;
  description: string;
  image: string;
  time: string;
  factId?: string;
};

export type FetchResponse = {
  news: NewsItem[];
  lastKey: string | null;
};
type DynamoField = {
  S?: string;
};

type DynamoNewsItem = {
  category?: DynamoField;
  heading?: DynamoField;
  description?: DynamoField;
  image?: DynamoField;
  time?: DynamoField;
  factId?: DynamoField;
};
export async function fetchNews(
  lastKey: string | null = null
): Promise<FetchResponse> {
  const lastSeenTime =
    typeof window !== "undefined"
      ? localStorage.getItem("lastSeenTime") || "novisit"
      : "novisit";

  const res = await fetch(
    "https://c6zmgm327l.execute-api.ap-south-1.amazonaws.com/news/news",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastSeenTime,
        limit: 10,
        lastKey,
      }),
    }
  );

  if (!res.ok) throw new Error("Failed to load news");

  const data = await res.json();

return {
news: data.items.map((item: DynamoNewsItem) => ({
  category: item.category?.S || "",
  heading: item.heading?.S || "",
  description: item.description?.S || "",
  image: item.image?.S || "",
  time: item.time?.S || "",
  factId: item.factId?.S,
})),
  lastKey: data.lastKey ? JSON.stringify(data.lastKey) : null,
};
}