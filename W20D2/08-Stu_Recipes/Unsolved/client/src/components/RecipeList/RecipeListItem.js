import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.item.thumbnail} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.item.title}</h3>
          <p>
            {props.item.ingredients}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.item.href}
          >
            Go to recipe!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);
