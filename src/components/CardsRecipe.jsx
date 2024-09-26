import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PumpkinBread from "./images/Pumpkin Bread.jpeg";
import VeggieSoup from "./images/Veggie Soup.jpeg";
import BakedPorkChops from "./images/Baked Pork Chops.jpeg";
import AirFryerAcornSquash from "./images/Air Fryer Acorn Squash.jpeg";
import WarmGoatCheeseDip from "./images/Warm Goat Cheese Dip.jpeg";
import SalmonCakes from "./images/Salmon Cakes.jpeg";
import Form from "react-bootstrap/Form";
import "./CardsRecipe.css";
import { Link } from "react-router-dom";
import context from "./ComponentProvider";

function CardsRecipe() {
  //useContext
  const {component}=useContext(context)


  const recipe = [
    {
      id: 1,
      title: "Pumpkin Bread Loaf",
      text: "To bake a pumpkin bread loaf, mix pumpkin puree, flour, sugar, eggs, cinnamon, and spices. Pour into a pan, bake at 350°F for 60 minutes, and cool before serving.",
      image: PumpkinBread,
    },
    {
      id: 2,
      title: "Meatless Veggie Soup",
      text: "A hearty, flavorful soup packed with fresh vegetables like carrots, celery, onions, and tomatoes. Perfectly seasoned with herbs and spices, it's a nutritious and satisfying meatless.",
      image: VeggieSoup,
    },
    {
      id: 3,
      title: "Baked Pork Chops",
      text: "Baked pork chops are seasoned with garlic, herbs, and olive oil, then baked until tender and juicy. Serve with vegetables or mashed potatoes for a simple, delicious, and satisfying meal.",
      image: BakedPorkChops,
    },
    {
      id: 4,
      title: "Air Fryer Acorn Squash",
      text: "Air Fryer Acorn Squash is a quick, healthy side dish. Halve the squash, season with oil, salt, and spices, then air fry until tender. Perfect for a nutritious, flavorful meal.",
      image: AirFryerAcornSquash,
    },
    {
      id: 5,
      title: "Warm Goat Cheese Dip",
      text: "A warm goat cheese dip, creamy and tangy, blended with herbs, olive oil, and garlic. Perfect for spreading on crackers or bread, it's an irresistible appetizer for any gathering.",
      image: WarmGoatCheeseDip,
    },
    {
      id: 6,
      title: "Salmon Cakes",
      text: "Salmon cakes are a delicious dish made from fresh or canned salmon, mixed breadcrumbs, eggs,  seasonings, then pan-fried golden . They're perfect light meals.",
      image: SalmonCakes,
    },
  ];
  return (
    <>
      <Container>
        <h1 className="fw-bold text-center mt-4 text-light">
          Savor the Magic of Every Bite
        </h1>
        <Row className="mt-5" align="center">
          {recipe.length > 0 &&
            recipe
              .filter((sear) => {
                return sear.title
                  .toLocaleLowerCase()
                  .match(component.toLocaleLowerCase());
              })
              .map((view) => {
                return (
                  <Col lg={4} md={6} key={view.id}>
                    <Link to={`/RecipeView/${view.id}`} className="text-decoration-none">
                      <Card
                        style={{ width: "18rem", height: "480px" }}
                        className="mb-5 border-1 border-primary text-white"
                        id="card"
                      >
                        <Card.Img variant="top" src={view.image} />
                        <Card.Body>
                          <Card.Title className="text-light">
                            {view.title}
                          </Card.Title>
                          <Card.Text>{view.text}</Card.Text>
                          <Button variant="primary">Recipe Here</Button>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </>
  );
}

export default CardsRecipe;
