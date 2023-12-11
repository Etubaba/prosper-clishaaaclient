import { continents, countriesObject } from "../../../../constants/data";
import SelectElement from "./SelectElement";

const GeoGraphicTargetForm = ({ continent }: { continent: string }) => {
  const key = continent as keyof typeof countriesObject;
  const allCountries: any = Object.values(countriesObject).reduce(
    (acc, country) => [...acc, ...country]
  );
  const countries = key ? countriesObject[key] : allCountries;
  return (
    <div className="">
      <p className="text-sm font-medium mt-5 text-blue_color">
        Geographic targeting of the target group
      </p>
      <div className="grid grid-cols-5 space-x-2 mt-4 w-full">
        <SelectElement
          name="continent"
          label="Continent "
          placeholder="All"
          options={continents}
        />
        <SelectElement
          name="countries"
          label="Countriess "
          placeholder="All"
          options={countries}
        />
        <SelectElement
          name="regions"
          label="Regions "
          placeholder="All"
          options={["All"]}
        />
        <SelectElement
          name="cities"
          label="Cities "
          placeholder="All"
          options={["All"]}
        />
        <SelectElement
          name="marketing_territory"
          label="draw your marketing territory"
          placeholder="Draw"
          options={["Draw"]}
        />
      </div>
      <p className="text-sm font-medium mt-5 mb-3 text-blue_color">
        Product or service related audience
      </p>
      <div className="grid grid-cols-5 space-x-2 mt-4 w-full">
        <SelectElement
          name="product"
          label="Product"
          placeholder="All"
          options={["Male", "Female", "Netural"]}
        />
        <SelectElement
          name="services"
          label="Services"
          placeholder="All"
          options={["All"]}
        />
      </div>
    </div>
  );
};

export default GeoGraphicTargetForm;
