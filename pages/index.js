import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";
import FilterSVG from "../components/Icons/FilterSVG.js";

export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://brazilianswho.design/";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();

  let uniqueExpertise = new Set();
  designers.map((d) => uniqueExpertise.add(d.expertise));

  let uniqueLocation = new Set();
  designers.map((d) => uniqueLocation.add(d.location));

  let expertises = Array.from(uniqueExpertise).map((e) => {
    return { label: e, active: false, category: "expertise" };
  });

  let locations = Array.from(uniqueLocation)
    .sort()
    .map((e) => {
      return { label: e, active: false, category: "location" };
    });

  let filters = expertises.concat(locations);

  return {
    props: {
      designers,
      filters,
    },
  };
}

export default function Home({ designers, filters }) {
  const [isReady, setIsReady] = useState(false);
  const [designersList, setDesignersList] = useState(null);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterList, setFilterList] = useState(filters);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    setDesignersList(shuffle(designers).sort((a, b) => a.order - b.order));
  }, []);

  // Filter
  const handleCloseFilter = (e) => {
    setFilterIsOpen(false);

    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleOpenFilter = (category) => {
    setFilterCategory(category);
    setFilterIsOpen(true);
  };

  const clearFilter = () => {
    let newFilter = filters.map(({ label }) => {
      return { label: label, active: false };
    });

    setFilterList(newFilter);
    setDesignersList(
      shuffle(designers).sort((a, b) => a.featured - b.featured)
    );
  };

  const handleFilterClick = (item) => {
    let indexof = filterList.indexOf(item);
    filterList[indexof].active = filterList[indexof].active ? false : true;
    setFilterList(filterList);

    // Get Each column
    let filterExpert = filterList
      .filter((f) => f.category == "expertise")
      .map((d) => d.label);
    let filterLocation = filterList
      .filter((f) => f.category == "location")
      .map((d) => d.label);

    // Find active
    let activeFilters = filterList
      .filter((d) => d.active == true)
      .map((d) => d.label);

    // If none in that category check all
    if (filterExpert.filter((f) => activeFilters.includes(f)).length <= 0)
      activeFilters = activeFilters.concat(filterExpert);
    if (filterLocation.filter((f) => activeFilters.includes(f)).length <= 0)
      activeFilters = activeFilters.concat(filterLocation);

    // Filter render list
    if (activeFilters.length > 0)
      setDesignersList(
        designers.filter(
          (d) =>
            activeFilters.includes(d.expertise) &&
            activeFilters.includes(d.location)
        )
      );
    else clearFilter();
  };

  return (
    <div
      className="container"
      style={{
        overflow: isReady ? "hidden" : "visible",
      }}
    >
      <Head>
        <title>Brazilians Who Design</title>
        <link id="favicon" rel="alternate icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      {!isReady ? (
        <Content
          designers={designersList}
          handleOpenFilter={handleOpenFilter}
          onClick={filterIsOpen ? handleCloseFilter : undefined}
          className={filterIsOpen ? "filterIsOpen" : ""}
        />
      ) : null}

      <AnimatePresence>
        {filterIsOpen ? (
          <Filter
            items={filterList.filter((f) => f.category == filterCategory)}
            handleFilterClick={handleFilterClick}
            handleCloseFilter={handleCloseFilter}
            categoryName={filterCategory}
          />
        ) : null}
      </AnimatePresence>

      <style global jsx>{`
        html,
        body {
          overflow: ${filterIsOpen ? "hidden" : "auto"};
        }
      `}</style>
    </div>
  );
}

function Content({ designers, handleOpenFilter, className, onClick }) {
  const tableHeaderRef = useRef();

  useEffect(() => {
    const header = tableHeaderRef.current;
    const sticky = header.getBoundingClientRect().top + 40;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div className={className} onClick={onClick}>
      <Nav />

      <Title className="title m0 p0" text="Brazilians*who&nbsp;design" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <table className="large tableContent" cellSpacing="0">
          <thead id="tableHeader" ref={tableHeaderRef}>
            <tr>
              <td>Name</td>
              <td
                className="thsize-aux dn filterTable"
                onClick={(e) => {
                  handleOpenFilter("location");

                  e.preventDefault();
                }}
              >
                Location <FilterSVG />
              </td>
              <td
                className="thsize-aux filterTable"
                onClick={(e) => {
                  handleOpenFilter("expertise");

                  e.preventDefault();
                }}
              >
                Expertise <FilterSVG />
              </td>
              <td className="thsize-link"></td>
            </tr>
          </thead>
          {designers != null ? (
            <tbody>
              {designers.map((d, i) => (
                <tr key={`${d.name}-${i}`}>
                  <td><a href={d.link}>{d.name}</a></td>
                  <td className="thsize-aux dn"><a href={d.link}>{d.location}</a></td>
                  <td className="thsize-aux"><a href={d.link}>{d.expertise}</a></td>
                  <td className="thsize-link"><a href={d.link}>→</a></td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </motion.div>
      <style jsx>{`
        .tableContent {
          padding-top: 18vh;
        }

        .filterTable {
          cursor: pointer;
        }

        thead {
          height: 2.2rem;
        }

        .thsize-aux {
          width: 20%;
        }

        .thsize-link {
          width: 2rem;
          text-align: right;
        }

        @media (max-width: 480px) {
          .thsize-aux {
            width: 30%;
          }
        }

        tbody a {
          width: 100%;
          padding-bottom: 0.6em;
          padding-top: 0.6em;
          color: inherit;
          display: inline-block;
        }

        table tbody td {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>

      <Analytics />
    </div>
  );
}

function shuffle(array) {
  var m = array.length,
    temp,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }

  return array;
}
