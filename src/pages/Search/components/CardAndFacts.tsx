import Card from "../../../components/elements/Card";
import { useUserStore } from "../../../context/userProvider";
import { TCardData } from "../../../types/app.types";
import { useEffect, useState } from "react";

const CardAndFacts = ({
  loading,
  cardData,
  durationincard,
  totalIntraction,
}: {
  loading: boolean;
  totalIntraction: number;
  durationincard: number;
  cardData: TCardData;
}) => {
  const { company } = useUserStore();
  const [cardColor, setCardColor] = useState<string | null>(
    company?.background
  );
  const [cardForeColor, setCardForeColor] = useState<string>(
    company?.foreground
  );

  useEffect(() => {
    setCardColor(company?.background);
    setCardForeColor(company?.foreground);
  }, [company, durationincard, totalIntraction]);

  return (
    <div className="first_col flex-auto w-full md:w-[50%] 2xl:w-[100%]">
      <div className="w-full flex flex-col justify-between xl:flex-row gap-4 3xl:gap-10">
        <div className="">
          <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84] sm:pt-0">
            Your user card
          </h1>
          <div className="card mt-3">
            <Card
              loading={loading}
              boxColor={cardColor}
              foreColor={cardForeColor}
              logo={company?.photo}
              text={`Solve “${company.name}” Task, and then come back to claim your bonus.`}
              cardType="search"
              lineColor={cardForeColor}
              interaction_amount={
                totalIntraction
                  ? totalIntraction
                  : cardData
                  ? cardData?.interaction_amount
                  : 0
              }
              url={cardData ? cardData?.url : ""}
              duration={
                durationincard
                  ? durationincard
                  : cardData
                  ? cardData?.duration
                  : 0
              }
              task_code={cardData ? cardData?.task_code : ""}
              cardColors={company.card_colors?.accent_color ?? "#fa6e28"}
            />
          </div>
        </div>
        <div className="flex-1 max-w-full 2xl:max-w-[50%]">
          <h3 className=" text-blue_color text-xl font-medium mb-2">
            Cost of each function
          </h3>
          <table className="w-full bg-white max-w-[700px]">
            <thead className="bg-[#979797]j bg-blue p-2">
              <th className="px-2 py-1 w-[50%] text-yellow text-start">
                Function
              </th>
              <th className="px-2 py-1 w-[50%] text-yellow text-end">Cost</th>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Search
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  2
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Advanced search engine
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  1
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Restrict visitors to the website by country
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  1
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  This orders is for adults
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  0
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Website visitors via messenger
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  1
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Daily website visitors random setting
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  0
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Country-specific search engine
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  1
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                  Search engine geolocation parameters
                </td>
                <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <p className="font-bold text-[1rem] text-[#1B4C84]">
          Why is it important to be found by keywords?
        </p>
        <p className="text-justify font-light">
          It is important to be found through your keywords in search engines
          because it brings various advantages:
        </p>
        <p className="text-justify font-light">
          1. Relevance: When someone uses a search engine and enters specific
          keywords, it indicates an interest in a particular topic or
          information. By being found through these keywords, you can ensure
          that your content is relevant to users and meets their needs.
        </p>
        <p className="text-justify font-light">
          2. Targeted Traffic: When your website is well-ranked for relevant
          keywords, you attract qualified and targeted traffic. This means that
          those who visit your site already have an interest in what you offer,
          increasing the likelihood that they can become potential customers or
          users.
        </p>
        <p className="text-justify font-light">
          3. Visibility and Competitive Advantage: When you are well-ranked for
          relevant keywords, you are prominently displayed in the search
          results. This improves your visibility compared to your competitors
          and gives you a competitive advantage. Users tend to visit websites
          that appear at the top positions of the search result pages.
        </p>
        <p className="text-justify font-light">
          4. Traffic Growth: Through continuous optimization of your website for
          relevant keywords and achieving good rankings, you increase the
          likelihood of attracting more users to your website. This leads to
          organic growth in your traffic over time.
        </p>
        <p className="text-justify font-light">
          5. Authority and Trust: When you are well-ranked for relevant
          keywords, it signals to users and search engines that your website is
          considered trustworthy and knowledgeable in that particular field.
          This allows you to build authority and gain the trust of users.
        </p>
        <p className="text-justify font-light">
          However, it is important to note that keyword optimization is just one
          part of a comprehensive SEO strategy. Other factors such as
          high-quality content, user experience, backlinks, and technical
          aspects also play a role in achieving successful rankings in search
          engines.
        </p>
        <p className="text-justify font-light">
          If you have further questions about Google ranking, search engine
          optimization, online reputation management, social media management,
          or video content management, please feel free to reach out to us. We
          at Only are always here for you and look forward to answering any
          questions you may have.
        </p>
      </div>
    </div>
  );
};

export default CardAndFacts;
