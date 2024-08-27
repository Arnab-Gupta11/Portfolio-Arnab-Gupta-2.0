import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const TransitionLayout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionLayout;
