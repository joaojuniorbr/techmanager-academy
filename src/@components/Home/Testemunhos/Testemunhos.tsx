import { useState } from "react";

import { useDepoimentos } from "@hooks/useDepoimentos";

import "./Testemunhos.css";

export const Testemunhos = () => {
  const [current, setCurrent] = useState(0);

  const { data } = useDepoimentos();

  return (
    <section className="testemunho">
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 chamada-testemunho">
              <h3>O que falam sobre nós?</h3>
              <p className="text-secondary">Mais de 20.000 usuários</p>
            </div>
            <div className="col-lg-8">
              <p className="fala-testemunho">{data[current].depoimento}</p>

              <div className="row align-items-center">
                <div className="col-lg-auto">
                  <img
                    src={data[current].imagem}
                    className="rounded-circle foto-testemunho"
                    alt={data[current].nome}
                  />
                </div>
                <div className="col-lg align-self-center">
                  <span className="fw-bold">{data[current].nome}</span>
                  <p className="text-secondary mb-0">{data[current].cargo}</p>
                </div>
                <div className="col-lg-auto">
                  {data.map((item, index: number) => (
                    <div
                      key={item.id}
                      className={`rounded-circle lista-testemunho mx-1 ${
                        index == current ? "ativo" : ""
                      }`}
                      onClick={() => setCurrent(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
