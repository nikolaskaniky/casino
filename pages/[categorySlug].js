import React from "react";
import { useRouter } from "next/router";
import { categoriesData } from "../data/categories-data";
import classes from "./category-details.module.scss";
import { productsData } from "../data/products-data";
import Title from "../components/category-details-page/title/title";
import Content from "../components/category-details-page/content/content";

const CategoryDetailsPage = (props) => {
  const { filteredCategory, filteredProducts } = props;
  const router = useRouter();

  return (
    <main className={classes["category-details-page"]}>
      <Title filteredCategory={filteredCategory} />
      <Content
        filteredCategory={filteredCategory}
        filteredProducts={filteredProducts}
      />
    </main>
  );
};

export default CategoryDetailsPage;

export async function getStaticProps(context) {
  const filteredCategory = categoriesData.find(
    (category) => category.name === context.params.categorySlug
  );
  const filteredProducts = productsData.filter(
    (product) => product.category === filteredCategory.name
  );

  return {
    props: {
      filteredCategory: filteredCategory,
      filteredProducts: filteredProducts,
    },
  };
}

export async function getStaticPaths() {
  const categoriesPathWithParams = categoriesData.map((category) => ({
    params: { categorySlug: category.name },
  }));

  return {
    paths: categoriesPathWithParams,
    fallback: false,
  };
}
