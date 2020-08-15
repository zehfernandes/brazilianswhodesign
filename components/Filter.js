import { motion } from "framer-motion";
import CheckSVG from "../components/Icons/CheckSVG.js";
import CloseSVG from "../components/Icons/CloseSVG.js";

const sidebarAnimation = {
  hidden: { x: "120%" },
  show: {
    x: "0%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function Filter({
  items,
  handleFilterClick,
  handleCloseFilter,
  categoryName,
}) {
  return (
    <motion.div
      variants={sidebarAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        maxWidth: "420px",
        overflowY: "scroll",
      }}
    >
      <div className="sidebar">
        <a
          aria-label="Close"
          href="#"
          className="close"
          onClick={handleCloseFilter}
        >
          <CloseSVG />
        </a>
        <h3>
          {categoryName.charAt(0).charAt(0).toUpperCase() +
            categoryName.slice(1)}
        </h3>

        {items.map((item, i) => (
          <FilterItem
            key={`${item.label}-${i}`}
            label={item.label}
            active={item.active}
            onClick={() => {
              handleFilterClick(item);
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .sidebar {
          width: 100%;
          max-width: 420px;
          background: #fff;
          color: #000;
          padding: 2.5rem;
          min-height: 100vh;
        }

        .close {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
        }

        h3 {
          margin-top: 4rem;
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  );
}

function FilterItem({ label, active, onClick }) {
  return (
    <div className="filterItem" onClick={onClick}>
      {label}
      <div className={`check ${active ? "active" : ""}`}>
        <CheckSVG />
      </div>
      <style jsx>{`
        .filterItem {
          cursor: pointer;
          font-size: 1.7rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.1rem 0;
        }

        .check {
          width: 1.7rem;
          height: 1.7rem;
          /*background: #fff;
          border-radius: 6px; */
        }
      `}</style>
    </div>
  );
}
