import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Ingredients({ shareIngredient }) {
  return (
    <>
      {shareIngredient.length > 0 &&
        shareIngredient.map((view) => (
          <>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active variant="primary" className="mt-4">
                {view.incredientTitle}
              </ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient1}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient2}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient3}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient4}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient5}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient6}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient7}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient8}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient9}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient10}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient11}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient12}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient13}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient14}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient15}</ListGroup.Item>
              <ListGroup.Item as="li">{view.incredient16}</ListGroup.Item>
            </ListGroup>
          </>
        ))}
    </>
  );
}

export default Ingredients;
