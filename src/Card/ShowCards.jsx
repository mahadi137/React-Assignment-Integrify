import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Cards } from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS
import "./card.css";

function ShowCards(props) {
  return (
    <div className="Container">
      <Row>
        {props.personData.map((entryItem) => (
          <Col>
            <div className="Cards">
              <Cards
                key={entryItem.id}
                firstChar={entryItem.name[0]}
                fullName={entryItem.name}
                userName={entryItem.username}
                webpage={entryItem.website}
              />

              <Button className="Button" variant="primary" size="lg">
                <Link className="ButtonLink" to={`/${entryItem.username}`}>
                  MORE DETAILS
                </Link>
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShowCards;
