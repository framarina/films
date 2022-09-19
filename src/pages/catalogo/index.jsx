import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";

const Catalogo = () => {
  const [catalog, setCatalog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://series-films.netlify.app/datas/${id}.json`)
      .then((res) => res.json())
      .then((data) => setCatalog(data));
  }, []);

  return (
    <div className="pb-20">
      <Navbar />
      <div
        className="h-64 sm:h-80 lg:h-128 bg-cover bg-bottom"
        style={{
          backgroundImage: `url("/images/main-image.jpg")`,
        }}
      ></div>

      {catalog.seasons !== undefined ? (
        <div className="m-4">
          <h1 className="mt-4 text-xl mb-4">
            CATÁLOGO - <span>{catalog.title}</span>
          </h1>
          {catalog.seasons?.chapters.map((chapter, index) => {
            return (
              <>
                <ul>
                  <li className="m-3">
                    1x{index+1 < 10 ? <>0{index + 1}</> : index + 1}{" - "}
                    {chapter.title}{" "}
                    {chapter.link !== "" ? (
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href={chapter.link}
                        className="text-blue-600 italic"
                      >
                        Ver Capítulo
                      </a>
                    ) : (
                      <span className="text-red-600 italic">No Disponible</span>
                    )}
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      ) : (
        <div className="m-5 flex items-center justify-center">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {/* {
        catalog !== {} && (
          Object.keys(catalog.seasons.chapters).foreach((season) => {
            <>
              <p>{season.season}</p>
              <ul>
                {season.map((chapter) => {
                  <li>
                    <a target={"_blank"} rel="noreferrer" href={chapter.link}>
                      {chapter.title}
                    </a>
                  </li>;
                })}
              </ul>
            </>;
          })
        )
      } */}
      {/* <a
        target={"_blank"}
        rel="noreferrer"
        href="https://drive.google.com/file/d/1hKsKrIRukcfdwW0wFKrFDaRvcKi3foFi/view?usp=sharing"
      >
        Capitulo 1
      </a> */}
    </div>
  );
};

export default Catalogo;
