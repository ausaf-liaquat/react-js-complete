import { useState } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import { CORE_CONCEPTS, Listings } from "../data";

export default function ExpenseItem(props) {
  const [tabContent, settabContent] = useState("");
  let tabData = (
    <p className="text-sm text-violet-400 dark:text-violet-400">
      Please Select Any Tab
    </p>
  );
  if (tabContent) {
    tabData = (
      <div>
        <h2 className="text-violet-400">{CORE_CONCEPTS[tabContent].title}</h2>
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={CORE_CONCEPTS[tabContent].image}
          alt="Modern building architecture"
        />
        <p className="text-sm text-violet-400 dark:text-violet-400">
          {CORE_CONCEPTS[tabContent].description}
        </p>
      </div>
    );
  }

  // let tabContent = "Please select";
  function handleClick(tab) {
    settabContent(tab);
  }
  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header />
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Listings.map((item, k) => (
              <div key={k}>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={item.image}
                        alt="Modern building architecture"
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {item.title}
                      </div>

                      <p className="mt-2 text-slate-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <Tabs
                label="Components"
                isSelected={tabContent == "components"}
                onSelect={() => handleClick("components")}
              />
              <Tabs
                label="JSX"
                isSelected={tabContent == "jsx"}
                onSelect={() => handleClick("jsx")}
              />
              <Tabs
                label="Props"
                isSelected={tabContent == "props"}
                onSelect={() => handleClick("props")}
              />
              <Tabs
                label="State"
                isSelected={tabContent == "state"}
                onSelect={() => handleClick("state")}
              />
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className=" p-4 bg-gray-50 bg-purple-900"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {tabData}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
