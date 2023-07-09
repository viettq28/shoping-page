import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return <div className="fixed inset-0 backdrop-blur-lg flex align-middle justify-center">
    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-4xl m-auto"/>
  </div>
};
export default Spinner