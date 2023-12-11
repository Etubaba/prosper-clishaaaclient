import { Collapse, Form, Input } from "antd";
import { faq } from "./Faqs";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Faq = () => {
  const [queryParameters] = useSearchParams();
  const paramKey = queryParameters.get("task_type") ?? "default";
  const [search, setSearch] = useState("");

  const items = [
    {
      key: "1",
      label: "Why is a website visit so important?",
      children: <p>{faq.first}</p>,
    },
    {
      key: "2",
      label: "Why is it important to be found by keywords?",
      children: <p>{faq.second}</p>,
    },
    {
      key: "3",
      label: "Why is user behavior on my website important?",
      children: <p>{faq.third}</p>,
    },
    {
      key: "4",
      label: "Why is it important to receive traffic through backlinks?",
      children: <p>{faq.forth}</p>,
    },
    {
      key: "5",
      label:
        "Why is it important to drive traffic through social media channels?",
      children: <p>{faq.fifth}</p>,
    },
    {
      key: "6",
      label: "Why is it important to drive traffic through messenger systems?",
      children: <p>{faq.sixth}</p>,
    },
    {
      key: "7",
      label: "What is SEO?",
      children: <p>{faq.seventh}</p>,
    },
    {
      key: "8",
      label: "Why is SEO important?",
      children: <p>{faq.eight}</p>,
    },
    {
      key: "9",
      label: "What factors affect SEO ranking?",
      children: <p>{faq.nine}</p>,
    },
    {
      key: "10",
      label: "What is on-page optimization?",
      children: <p>{faq.ten}</p>,
    },
    {
      key: "11",
      label: "What is off-page optimization?",
      children: <p>{faq.eleven}</p>,
    },
    {
      key: "12",
      label: "How long does it take to see SEO results?",
      children: <p>{faq.twelve}</p>,
    },
    {
      key: "13",
      label: "What tools help with SEO analysis?",
      children: <p>{faq.thirteen}</p>,
    },
    {
      key: "14",
      label: "What role does quality content play in SEO?",
      children: <p>{faq.fourteen}</p>,
    },
    {
      key: "15",
      label: "What is technical SEO and why is it important?",
      children: <p>{faq.fifteen}</p>,
    },
    {
      key: "16",
      label: "What is Local SEO and why is it important?",
      children: <p>{faq.sixteen}</p>,
    },
    {
      key: "17",
      label: "What is an SEO strategy and how to develop it?",
      children: <p>{faq.seventeen}</p>,
    },
    {
      key: "18",
      label: "What role do backlinks play in SEO?",
      children: <p>{faq.eighteen}</p>,
    },
    {
      key: "19",
      label: "What does SERP mean?",
      children: <p>{faq.nineteen}</p>,
    },
    {
      key: "20",
      label: "What are organic search results?",
      children: <p>{faq.twenty}</p>,
    },
    {
      key: "21",
      label: "What are paid search results?",
      children: <p>{faq.twenty_one}</p>,
    },
    {
      key: "22",
      label: "What elements can appear on a SERP?",
      children: <p>{faq.twenty_two}</p>,
    },
    {
      key: "23",
      label: "How can I improve my ranking in organic search results?",
      children: <p>{faq.twenty_three}</p>,
    },
    {
      key: "24",
      label:
        "Is there a way to make my ads more effective in paid search results?",
      children: <p>{faq.twenty_four}</p>,
    },
    {
      key: "25",
      label: "What role do local search results play in the SERPs?",
      children: <p>{faq.twenty_five}</p>,
    },
    {
      key: "26",
      label: "How can featured snippets affect my ranking?",
      children: <p>{faq.twenty_six}</p>,
    },
    {
      key: "27",
      label: "How do SERPs change over time?",
      children: <p>{faq.twenty_seven}</p>,
    },
    {
      key: "28",
      label: "Are there tools to analyze SERPs?",
      children: <p>{faq.twenty_eight}</p>,
    },
    {
      key: "29",
      label: "Why is dwell time so important?",
      children: <p>{faq.twenty_nine}</p>,
    },
  ];

  const [data, setData] = useState(items);

  const acctivePage = {
    visit: ["1"],
    search: ["2"],
    default: [],
  }[paramKey];

  const filterFAQ = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const filteredData: any = items.filter((item) => {
        return item.label.toLowerCase().includes(search.toLowerCase());
      });
      setData(filteredData);
    } else {
      setData(items);
    }
  }, [search]);

  return (
    <div className="faq relative bg-[#F3F4F5] w-screen pt-[130px] px-4 md:px-10 pb-10">
      <h1 className="orders_title font-bold text-[1.4rem]">
        Questions and answers
      </h1>
      <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
      <div className="w-full  flex flex-col md:flex-row">
        <div className="flex-1 w-[100%] md:w-[50%] h-fit">
          <h1 className="font-bold text-[1.4rem] text-blue mt-4 mb-2">FAQ</h1>
          <div className="h-full flex flex-col gap-2">
            <Collapse defaultActiveKey={acctivePage} accordion items={data} />
          </div>
        </div>
        <div className="flex-1 w-[100%] md:w-[50%] h-full flex flex-row justify-end mt-4">
          <div className="inputField min-w-[250px] max-w-[400px] mb-1">
            <p className="text-[#1B4C84] mb-2 text-[1rem] font-bold ">Search</p>
            <Form.Item
              name="search"
              className="w-full"
              rules={[
                {
                  required: false,
                  message: "",
                },
              ]}
            >
              <Input
                onChange={filterFAQ}
                className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
