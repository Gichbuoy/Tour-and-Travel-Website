import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover new destinations using google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Indonesia, officially the republic of Indonesia
          is a country in South Asia and Oceania between the
          Indian and the Pacific ocean. It has tropicat beaches
          and imposing volcanoes. It consists of over 17,000
          islands including Java, Bali, Flores, Komodo Sulawesi, Maluku and parts
          of New Guinea and Borneo."
        />
        <TripData
          image={Trip2}
          heading="Trip to Kenya"
          text="Kenya is an African Country located in East Africa.
          It's a popular tourist destination known for it's culture
          rich heritage, beatiful landscape and warm weather, coastal beaches and incredible wildlife,
          with a 50 epic national parks and reserves, home to the
          Big Five. Come and enjoy the best safari destination."
        />
        <TripData
          image={Trip3}
          heading="Trip to France"
          text="France, in Western Europe, encompasses medieval cities,
          alpine villages, full of cultural attractions, and Mediterranean
          beaches. Paris. it's capital, is famed for it's fashion houses,
          most aoustanding classic art museums including the Louvre and
          monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
