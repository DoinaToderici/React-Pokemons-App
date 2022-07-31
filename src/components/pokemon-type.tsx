import React from "react";
import { FunctionComponent } from "react";
import formatType from "../helpers/format-type";

const PokemonType: FunctionComponent<any> = ({type}) => {

  return <span  className={formatType(type)}>{type}</span>;
};

export default PokemonType;
