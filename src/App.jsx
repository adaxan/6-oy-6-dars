//* Shaklni tekshirish
// import React, { useState } from "react";

// function App(){
//   const [number, setNumber] = useState("");
//   const [shape, setShape] = useState("");

//   function handleCheckShape(){
//     switch (parseInt(number)) {
//       case 3:
//         setShape("Uchburchak");
//         break;
//       case 4:
//         setShape("To'rtburchak");
//         break;
//       case 5:
//         setShape("Beshburchak");
//         break;
//       default:
//         setShape("Bunday shakl mavjud emas");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Shakl aniqlash</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         placeholder="Raqam kiriting"
//         className="border p-2 mb-4"
//       />
//       <button
//         onClick={handleCheckShape}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Tekshirish
//       </button>
//       {shape && <p className="mt-4 text-lg font-semibold">{shape}</p>}
//     </div>
//   );
// };

// export default App;


//! Parolni tekshirish
// import React, { useState } from "react";

// function App() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setMessage("Parol mos keldi");
//     } else {
//       setMessage("Parol mos kelmadi");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
//       >
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
//           Ro'yxatdan o'tish
//         </h1>
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2" htmlFor="password">
//             Parolni kiriting
//           </label>
//           <input
//             type="text"
//             id="password"
//             placeholder="Parolni kiriting"
//             className="input input-bordered w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-600 mb-2" htmlFor="confirmPassword">
//             Parolni qayta kiriting
//           </label>
//           <input
//             type="text"
//             id="confirmPassword"
//             placeholder="Parolni qayta kiriting"
//             className="input input-bordered w-full"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-accent w-full text-white font-semibold"
//         >
//           Tasdiqlash
//         </button>
//         {message && (
//           <p
//             className={`text-center mt-4 font-semibold ${
//               message === "Parol mos keldi" ? "text-green-500" : "text-red-500"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }

// export default App;



//? Mevalar
// import React, { useState } from "react";

// function App() {
//   const [selectedItems, setSelectedItems] = useState([]); 
//   function handleCheckboxChange(e) {
//     const value = e.target.value;
//     if (e.target.checked) {
//       setSelectedItems((prev) => [...prev, value]);
//     } else {
//       setSelectedItems((prev) => prev.filter((item) => item !== value));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
//           Mevalarni tanlang
//         </h1>
//         <div className="mb-4">
//           <label className="block">
//             <input
//               type="checkbox"
//               value="Olma"
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             Olma
//           </label>
//           <label className="block">
//             <input
//               type="checkbox"
//               value="Banan"
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             Banan
//           </label>
//           <label className="block">
//             <input
//               type="checkbox"
//               value="Apelsin"
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             Apelsin
//           </label>
//         </div>
//         <h2 className="text-lg font-semibold mt-6 text-gray-600">
//           Tanlangan mevalar:
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 mt-2">
//           {selectedItems.length > 0 && (
//             selectedItems.map((item, index) => <li key={index}>{item}</li>)
//           )}
//         </ul>
//       </form>
//     </div>
//   );
// }

// export default App;



//* rankglar
// import React, { useState } from "react";

// function App() {
//   const [selectedColor, setSelectedColor] = useState("");
//   function handleChangeColor(e){
//     setSelectedColor(e.target.value);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
//         <h1 className="text-2xl font-bold text-gray-700 mb-6">
//           Rangni tanlang
//         </h1>
//         <div className="mb-4">
//           <label className="inline-flex items-center mr-4">
//             <input
//               type="radio"
//               name="color"
//               value="red"
//               onChange={handleChangeColor}
//               className="mr-2"
//             />
//             Qizil
//           </label>
//           <label className="inline-flex items-center mr-4">
//             <input
//               type="radio"
//               name="color"
//               value="green"
//               onChange={handleChangeColor}
//               className="mr-2"
//             />
//             Yashil
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="color"
//               value="blue"
//               onChange={handleChangeColor}
//               className="mr-2"
//             />
//             Ko'k
//           </label>
//         </div>
//       </form>

//       <div
//         className="w-64 h-64 mt-6 rounded-lg shadow-md"
//         style={{ backgroundColor: selectedColor || "transparent" }}
//       ></div>
//     </div>
//   );
// }

// export default App;


//! Emailni tekshirish
// import React, { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState(""); 
//   function validateEmail(e) {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     if (emailValue.includes("@") && emailValue.includes(".com")) {
//       setMessage("Email to'g'ri!");
//     } else {
//       setMessage("Email noto'g'ri!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
//           Emailni kiriting
//         </h1>
//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="Emailingizni kiriting"
//             className="input input-bordered w-full"
//             value={email}
//             onChange={validateEmail}
//           />
//         </div>
//         <p
//           className={`mt-4 text-center font-semibold ${
//             message == "Email to'g'ri!" ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {message}
//         </p>
//       </form>
//     </div>
//   );
// }

// export default App;



//? Vazifalar ro'yxati
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 

  function addTask(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]); 
      setTask(""); 
    }
  }
  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <form onSubmit={addTask} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Vazifalar ro'yxati
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Vazifani kiriting"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button
          type="submit"
          className="btn btn-accent w-full text-white font-semibold"
        >
          Qo'shish
        </button>
      </form>

      <ul className="w-full max-w-md mt-6">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-300 p-3 rounded-lg mb-2 shadow-md"
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-error btn-sm text-white"
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;