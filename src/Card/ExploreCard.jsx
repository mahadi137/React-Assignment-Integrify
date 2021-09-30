import React from "react";
import { useParams } from "react-router-dom";

//Custom CSS
import "./card.css";

function ExploreCard(props) {
  let { id } = useParams();

  return (
    <div>
      {props.Data.filter((user) => user.username === id).map(
        (singleUserData, index) => (
          <div className="ExploreCard" key={index}>
            <p>{`-name: ${singleUserData.name}`}</p>
            <p>{`-username: ${singleUserData.username}`}</p>
            <p>{`-email: ${singleUserData.email}`}</p>
            <p>{`-phone: ${singleUserData.phone}`}</p>
            <p>{`-company: ${singleUserData.company.name}`}</p>
            <p>{`-website: ${singleUserData.website}`}</p>
            <p>{`-address: `}</p>
            <ul>
              <li>
                <p>{`street: ${singleUserData.address.street}`}</p>
              </li>
              <li>
                <p>{`suite: ${singleUserData.address.suite}`}</p>
              </li>
              <li>
                <p>{`city: ${singleUserData.address.city}`}</p>
              </li>
              <li>
                <p>{`zipcode: ${singleUserData.address.zipcode}`}</p>
              </li>
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default ExploreCard;
