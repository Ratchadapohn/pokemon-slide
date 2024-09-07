// import React from "react";
// import { usePokemon } from "../../context/PokemonContext";

// const ResultComponent = () => {
//   const { pokemonData, error } = usePokemon();

//   if (error) return <div>Error: {error.message}</div>;
//   if (!pokemonData) return <div>Loading...</div>;

//   return (
//     <div>
//       <h3>{pokemonData.name}</h3>
//       <p>Types: {pokemonData.types.join(", ")}</p>
//       <h4>Attacks:</h4>
//       <ul>
//         {pokemonData.attacks.special.map(
//           (attack: {
//             name:
//               | boolean
//               | React.ReactElement<
//                   any,
//                   string | React.JSXElementConstructor<any>
//                 >
//               | Iterable<React.ReactNode>
//               | Promise<React.AwaitedReactNode>
//               | React.Key
//               | null
//               | undefined;
//             damage:
//               | string
//               | number
//               | bigint
//               | boolean
//               | React.ReactElement<
//                   any,
//                   string | React.JSXElementConstructor<any>
//                 >
//               | Iterable<React.ReactNode>
//               | React.ReactPortal
//               | Promise<React.AwaitedReactNode>
//               | null
//               | undefined;
//           }) => (
//             <li key={attack.name}>
//               {attack.name} - Damage: {attack.damage}
//             </li>
//           )
//         )}
//       </ul>
//       <h4>Evolutions:</h4>
//       <ul>
//         {pokemonData.evolutions.map(
//           (evo: {
//             name:
//               | boolean
//               | React.ReactElement<
//                   any,
//                   string | React.JSXElementConstructor<any>
//                 >
//               | Iterable<React.ReactNode>
//               | Promise<React.AwaitedReactNode>
//               | React.Key
//               | null
//               | undefined;
//           }) => (
//             <li key={evo.name}>{evo.name}</li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ResultComponent;
