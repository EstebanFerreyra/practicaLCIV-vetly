import React from "react";

const ProfessionalsCard = ({
  professionalName,
  professionalDescription,
  animals,
  img,
}) => {
  return (
    <div className="flex justify-between">
      <div className="max-w-sm rounded overflow-hidden shadow-lg pr-4">
        <img className="w-full" src={img} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Nombre: {professionalName}
          </div>
          <p className="text-gray-700 text-base">
            Descripcion: {professionalDescription}
          </p>
          <p className="text-gray-700 text-base">Atiende: {animals}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsCard;
