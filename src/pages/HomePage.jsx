import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCategories } from "../hooks/useCategories";
import { CategoriesSideBar } from "../components/CategoriesSideBar";
import CategoryPage from "./CategoryPage";
import PaymentCard from "../components/PaymentCard";
import ProfessionalsCard from "../components/ProfessionalsCard";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth0();
  const { categories } = useCategories();
  const [currentCategory, setCurrentCategory] = useState(null);
  const welcomeText = isAuthenticated
    ? `¡Bienvenido ${user?.name}! 👋`
    : "¡Bienvenido a Vetly! 👋";

  const selectCategory = (newCategory) => {
    setCurrentCategory((prevCategory) => {
      if (prevCategory === newCategory) {
        setCurrentCategory(null);
        return;
      }

      setCurrentCategory(newCategory);
    });
  };
  console.log(currentCategory);
  const professionals = [
    {
      id: 1,
      professionalName: "Juan",
      professionalDescription: "Veterianrio de perritos",
      animals: "Perros",
      img: "https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/87096751_1116931488641452_4240587671388291072_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gKVkIIfBkH8AX--rmce&_nc_ht=scontent.fros2-1.fna&oh=00_AfA13HNN8z9iVFnlUppkAKpFvxIxVCxrIXKsz59gx_BFgg&oe=6519E3AE",
    },

    {
      id: 2,
      professionalName: "Andres",
      professionalDescription: "Veterianrio de gatitos",
      animals: "Gatos",
      img: "https://media.licdn.com/dms/image/C5603AQGLy8AvoU856g/profile-displayphoto-shrink_800_800/0/1634869553672?e=2147483647&v=beta&t=djIBVlPR12wOexUfwOkg5A-ZrjBXhGNnqLwVQlQSkUs",
    },

    {
      id: 3,
      professionalName: "Pedro",
      professionalDescription: "Veterianrio de tortugas",
      animals: "Tortugas",
      img: "https://media.licdn.com/dms/image/C4D03AQHE20GRiKicvA/profile-displayphoto-shrink_800_800/0/1594543729355?e=2147483647&v=beta&t=Pe2o4M-m0pMkjK0XV4L3SM9cm9vjaeVDD3q8poVOLUM",
    },
  ];
  return (
    <>
      <section className="flex flex-col gap-5 h-full md:flex-row">
        <CategoriesSideBar
          categories={categories}
          selectCategory={selectCategory}
        />

        {currentCategory && <CategoryPage category={currentCategory} />}
        {!currentCategory && (
          <h2 className="w-full text-center text-xl font-bold py-10 md:text-3xl">
            {welcomeText}
          </h2>
        )}
      </section>
      <div className="flex justify-center m-130">
        {currentCategory != null && currentCategory.name === "Cobros" && (
          <PaymentCard clickCard={true} />
        )}
        {currentCategory != null && currentCategory.name === "Pagos" && (
          <PaymentCard clickCard={false} />
        )}
        {currentCategory != null &&
          currentCategory.name === "Profesionales" &&
          professionals.map((professional) => (
            <ProfessionalsCard
              key={professional.id}
              professionalName={professional.professionalName}
              professionalDescription={professional.professionalDescription}
              animals={professional.animals}
              img={professional.img}
            />
          ))}
      </div>
    </>
  );
}
