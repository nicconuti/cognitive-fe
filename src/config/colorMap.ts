const colorMap: Record<string, string> = {
  A: "bg-red-600",       // 🔴 rosso intenso
  B: "bg-blue-500",      // 🔵 blu puro
  C: "bg-yellow-400",    // 🟡 giallo acceso
  D: "bg-green-600",     // 🟢 verde scuro
  E: "bg-gray-700",      // ⚫ grigio profondo (neutro)
  F: "bg-purple-500",    // 🟣 viola medio
  G: "bg-cyan-400",      // 🔷 azzurro brillante
  H: "bg-orange-500",    // 🟠 arancione vivo
  I: "bg-pink-300",      // 🌸 rosa chiaro, distaccato dal rosso
};

  
  export const SYMBOL_OPTIONS = Object.keys(colorMap);
  export default colorMap;
  