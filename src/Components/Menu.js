import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactLoading from "react-loading";

const Menu = () => {
  const [meal, setMeal] = useState([]);
  const [mealDetail, setMealDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMeal = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    console.log(res.data.meals);
    setMeal(res.data.meals.slice(0, 4));
  };

  const getMealDetail = async (idMeal) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    console.log(res.data.meals[0]);
    // setMealDetail(res.data.meals[0]);
    setTimeout(() => {
      console.log(res.data.meals[0]);
      setMealDetail(res.data.meals[0]);
      setLoading(false)
    }, 2000);
    setLoading(true)
  };

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <section id="Menu" className="">
      <div className="bg-menu h-full flex flex-col items-center py-32 px-28 max-lg:px-10">
        <h2 className="title -mb-8 max-lg:text-5xl max-lg:-mb-6" data-aos="fade-down" data-aos-once="false">
          Discover
        </h2>
        <h4
          className="subtitle z-10 text-white max-lg:text-3xl"
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="300"
        >
          Our Menu
        </h4>

        <div className=" m-10 p-5 bg-opacity-10 bg-white w-fit h-full rounded-md flex flex-wrap gap-5 justify-center max-lg:p-2  max-lg:w-full">
          {meal.map((m) => (
            <div
              className="card bg-white w-64 h-96 rounded-md"
              data-aos="fade-left"
              data-aos-once="false"
            >
              <img
                src={m.strMealThumb}
                alt="menu"
                className="object-cover rounded-t-md max-lg:w-full"
              />
              <div className="content-menu py-5 px-4">
                <h2 className="text-md font-semibold truncate">{m.strMeal}</h2>
                <h4 className="text-xs ">{m.strArea}</h4>

                <div className="btn-more mt-4 flex">
                  <button
                    className="uppercase ml-auto text-xs relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                  before:bottom-0 before:left-0 before:bg-yellow-400
                  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                  before:transition before:ease-in-out before:duration-300"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalXl"
                    value={mealDetail}
                    onClick={(e) => getMealDetail(m.idMeal)}
                  >
                    read more
                  </button>

                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModalXl"
                    tabindex="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-modal="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        {loading ? (
                          <div className="flex justify-center item-center h-screen ">
                            <ReactLoading
                              type="bars"
                              color="blue"
                            ></ReactLoading>
                          </div>
                        ) : (
                          <>
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                              <h5
                                class="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalXlLabel"
                              >
                                {mealDetail.strMeal}
                              </h5>
                              <button
                                type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body relative p-4 mx-10 flex max-lg:flex-col max-lg:p-1">
                              <div className="container-modal max-lg:flex-col max-lg:w-full max-lg:mx-3">
                                <div className="container-image max-lg:w-full">
                                  <img
                                    className="max-lg:w-full"
                                    src={mealDetail.strMealThumb}
                                    alt="image-poster"
                                  />
                                </div>

                                <div className="container-detail max-lg:w-full max-lg:flex">
                                  <div className="food-name">
                                    <h4 className="text-xl font-medium max-lg:text-md">
                                      Food Name
                                    </h4>
                                    <h5 className="max-lg:text-sm">{mealDetail.strMeal}</h5>
                                  </div>

                                  <div className="food-tags">
                                    <h4 className="text-xl font-medium">
                                      Food Category
                                    </h4>
                                    <h5>
                                      {mealDetail.strTags}{" "}
                                      {mealDetail.strCategory}
                                    </h5>
                                  </div>

                                  <div className="food-area">
                                    <h4 className="text-xl font-medium">
                                      Food Area
                                    </h4>
                                    <h5>{mealDetail.strArea}</h5>
                                  </div>

                                  <div className="food-ingredients">
                                    <h4 className="text-xl font-medium">
                                      Food Ingredients
                                    </h4>
                                    <h5>
                                      {mealDetail.strIngredient1},{" "}
                                      {mealDetail.strIngredient2},{" "}
                                      {mealDetail.strIngredient3},{" "}
                                      {mealDetail.strIngredient4},{" "}
                                      {mealDetail.strIngredient5},{" "}
                                      {mealDetail.strIngredient6},{" "}
                                      {mealDetail.strIngredient7},{" "}
                                      {mealDetail.strIngredient8}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
