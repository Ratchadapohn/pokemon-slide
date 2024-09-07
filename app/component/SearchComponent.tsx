// import React from "react";
// // import { useSearchForm } from "";

// const SearchComponent = ({
//   handleSearch,
// }: {
//   handleSearch: (data: any) => void;
// }) => {
//   // const {
//   //   fieldKeyword,
//   //   fieldGeneration,
//   //   fieldType,
//   //   fieldSort,
//   //   keyword,
//   //   generation,
//   //   type,
//   //   sort,
//   //   loading,
//   //   error,
//   // } = useSearchForm();

//   React.useEffect(() => {
//     handleSearch({ keyword, generation, type, sort });
//   }, [keyword, generation, type, sort, handleSearch]);

//   return (
//     <div>
//       <form>
//         <input {...fieldKeyword} placeholder="Keyword" />

//         <input {...fieldGeneration} placeholder="Generation" />

//         <select {...fieldType}>
//           <option value="all types">All Types</option>
//           <option value="fire">Fire</option>
//           <option value="water">Water</option>
//         </select>

//         <select {...fieldSort}>
//           <option value="id">ID</option>
//           <option value="name">Name</option>
//           <option value="maxCP">Max CP</option>
//         </select>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// };

// export default SearchComponent;
