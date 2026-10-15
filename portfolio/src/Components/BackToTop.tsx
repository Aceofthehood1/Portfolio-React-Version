import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BackToTopProps {
  isVisible: boolean;
}

const BackToTop = ({ isVisible }: BackToTopProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <a
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border-2 border-black bg-red-600 px-3 text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      href="#home"
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
      <span className="hidden sm:inline">Back to top</span>
    </a>
  );
};

export default BackToTop;
