import Spinner from "../../../components/elements/Spiner";

const SiteList = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
  const getDataCount = (array: any, name: string, type: string) => {
    let filtered = array.filter((datum: any) => {
      if (name === "website_click" && type === "published") {
        return datum?.website_click && datum?.published;
      } else if (name === "website_click" && type === "draft") {
        return datum?.website_click && !datum?.published;
      } else if (name === "google_search" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_search" &&
          !datum?.published
        );
      } else if (name === "google_search" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_search" &&
          datum?.published
        );
      } else if (name === "bing_search" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "bing_search" &&
          !datum?.published
        );
      } else if (name === "bing_search" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "bing_search" &&
          datum?.published
        );
      } else if (name === "duckduck_search" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "duckduck_search" &&
          !datum?.published
        );
      } else if (name === "duckduck_search" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "duckduck_search" &&
          datum?.published
        );
      } else if (name === "yandex_search" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "yandex_search" &&
          !datum?.published
        );
      } else if (name === "yandex_search" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "yandex_search" &&
          datum?.published
        );
      } else if (name === "baidu_search" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "baidu_search" &&
          !datum?.published
        );
      } else if (name === "baidu_search" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "baidu_search" &&
          datum?.published
        );
      } else if (name === "google_news" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_news" &&
          !datum?.published
        );
      } else if (name === "google_news" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_news" &&
          datum?.published
        );
      } else if (name === "google_video" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_video" &&
          !datum?.published
        );
      } else if (name === "google_video" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_video" &&
          datum?.published
        );
      } else if (name === "google_images" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_images" &&
          !datum?.published
        );
      } else if (name === "google_images" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "google_images" &&
          datum?.published
        );
      } else if (name === "youtube" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "youtube" &&
          !datum?.published
        );
      } else if (name === "youtube" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "youtube" &&
          datum?.published
        );
      } else if (name === "TikTok" && type === "draft") {
        return (
          datum?.google_search &&
          datum.advance_type === "tiktok" &&
          !datum?.published
        );
      } else if (name === "TikTok" && type === "published") {
        return (
          datum?.google_search &&
          datum.advance_type === "tiktok" &&
          datum?.published
        );
      }
    });
    return filtered.length || 0;
  };

  const siteListData = [
    {
      siteType: "visit website",
      d_value: getDataCount(data, "website_click", "draft"),
      p_value: getDataCount(data, "website_click", "published"),
      id: 1,
    },
    {
      siteType: "Google search",
      d_value: getDataCount(data, "google_search", "draft"),
      p_value: getDataCount(data, "google_search", "published"),
      id: 2,
    },
    {
      siteType: "Bing search",
      d_value: getDataCount(data, "bing_search", "draft"),
      p_value: getDataCount(data, "bing_search", "published"),
      id: 3,
    },
    {
      siteType: "DuckDuck search",
      d_value: getDataCount(data, "duckduck_search", "draft"),
      p_value: getDataCount(data, "duckduck_search", "published"),
      id: 4,
    },
    {
      siteType: "Yandex search",
      d_value: getDataCount(data, "yandex_search", "draft"),
      p_value: getDataCount(data, "yandex_search", "published"),
      id: 5,
    },
    {
      siteType: "Baidu search",
      d_value: getDataCount(data, "baidu_search", "draft"),
      p_value: getDataCount(data, "baidu_search", "published"),
      id: 6,
    },
    {
      siteType: "Google News ",
      d_value: getDataCount(data, "google_news", "draft"),
      p_value: getDataCount(data, "google_news", "published"),
      id: 7,
    },
    {
      siteType: "Google Video",
      d_value: getDataCount(data, "google_video", "draft"),
      p_value: getDataCount(data, "google_video", "published"),
      id: 8,
    },
    {
      siteType: "Google Images",
      d_value: getDataCount(data, "google_images", "draft"),
      p_value: getDataCount(data, "google_images", "published"),
      id: 9,
    },
    {
      siteType: "YouTube",
      d_value: getDataCount(data, "youtube", "draft"),
      p_value: getDataCount(data, "youtube", "published"),
      id: 10,
    },
    {
      siteType: "TikTok",
      d_value: getDataCount(data, "TikTok", "draft"),
      p_value: getDataCount(data, "TikTok", "published"),
      id: 11,
    },
  ];

  return (
    <div className="px-2 text-blue">
      <div className="flex items-center space-x-2">
        <span className="py-2 px-3 flex-1">Name</span>
        <span className="py-2 rounded  px-4 font-light">D</span>
        <span className="py-2 rounded  px-4 font-light">P</span>
      </div>
      {isLoading ? (
        <div className="w-full flex flex-row justify-center items-center">
          <Spinner />
        </div>
      ) : (
        siteListData.map(({ siteType, id, d_value, p_value }) => (
          <div key={id} className="flex items-center space-x-2 mb-3">
            <span className="py-2 px-3 flex-1 bg-slate-300">{siteType}</span>
            <span className="w-[40px] flex justify-center items-center h-[40px] rounded bg-yellow_color  ">
              {d_value}{" "}
            </span>
            <span className="w-[40px]  flex justify-center items-center h-[40px] rounded bg-green_color ">
              {p_value}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default SiteList;
