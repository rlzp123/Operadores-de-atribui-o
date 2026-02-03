// 7️⃣ Operadores Lógicos com Valores Não Booleanos

console.log(0 || "Hello"); // O  primeiro valor verdadeiro (true) 
// Resultado: Hello


console.log("" && "World"); // O primeiro valor falso (false)
// Resultado: string vazia


console.log(null ?? "Default Value"); // Só troca o valor se for null ou undefine
// Resultado: default value


console.log(undefined ?? 42); // O undefined também ativa o ??
// Resultado: 42