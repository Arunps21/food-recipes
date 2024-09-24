import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AboutUs() {
  return (
    <>
      <h1 className="text-center my-4 text-primary">About Us</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>
              <strong>Welcome to Crave & Cook</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            At <strong>Crave & Cook</strong>, we bring you a world of flavors,
            right to your kitchen! Whether you’re a passionate home cook or just
            beginning your culinary journey, our mission is to inspire
            creativity and make cooking enjoyable and accessible for everyone.
            Our website is a haven for food lovers, offering a diverse
            collection of mouthwatering recipes from around the globe, designed
            to delight every palate.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>
              <strong>Our Mission</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            At <strong>Crave & Cook</strong>, we aim to celebrate the joy of
            cooking by sharing delicious, easy-to-follow recipes that cater to
            different tastes, preferences, and dietary needs. We are committed
            to promoting healthy, wholesome meals while also offering indulgent
            treats that satisfy your cravings. From hearty meals to delightful
            desserts, our goal is to make cooking a fun, rewarding experience
            for everyone.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>
              <strong>Why Choose Us?</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Curated Recipes: Our recipes are thoughtfully curated and tested
              to ensure you get the best results every time you cook.
            </p>
            <p>
              • Variety of Cuisines: Whether you’re in the mood for comforting
              classics or looking to explore new and exotic flavors, we offer a
              diverse range of recipes from various cuisines.
            </p>
            <p>
              • Step-by-Step Guidance: Each recipe comes with detailed
              instructions, photos, and tips to guide you through the cooking
              process, making it easy to follow along.
            </p>
            <p>
              • Healthy & Indulgent Options: From healthy meals and
              diet-friendly recipes to decadent treats, we offer something for
              everyone’s taste and lifestyle.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4>
              <strong>What We Offer</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Global Recipes: Discover a wide variety of dishes from around
              the world, ranging from traditional favorites to contemporary
              culinary creations.
            </p>
            <p>
              • Diet-Specific Choices: Find recipes tailored to different
              dietary preferences, including vegetarian, vegan, gluten-free, and
              keto options.
            </p>
            <p>
              • Quick & Easy Meals: Short on time? Check out our collection of
              quick and easy recipes that don’t compromise on taste.
            </p>
            <p>
              • Baking & Desserts: From classic cakes and cookies to decadent
              desserts, we have a variety of sweet treats for every occasion.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4>
              <strong>Our Values</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              • Passion for Cooking: We believe that cooking is not just a
              necessity but a form of art and expression, bringing joy and
              creativity to everyday life.
            </p>
            <p>
              • Quality Ingredients: We emphasize the use of fresh, high-quality
              ingredients to ensure the best flavor and nutrition in every
              recipe.
            </p>
            <p>
              • Community Focused: We love hearing from our community of home
              cooks and welcome feedback, tips, and recipe ideas that we can
              share with others.
            </p>
            <p>
              • Sustainability: We support mindful eating and sustainable
              cooking practices, encouraging the use of local, seasonal
              ingredients wherever possible.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4>
              <strong>Get in Touch</strong>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            We’d love to hear from you! Whether you’re looking for recipe
            inspiration, have a question, or want to share your cooking
            experiences, feel free to connect with us. Join our community and
            embark on a flavorful journey with <strong>Crave & Cook</strong>{" "}
            today!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default AboutUs;
