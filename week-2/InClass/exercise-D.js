function estadoDeAnimo(animo) {
    if (animo === "happy") {
      return `${animo} Good job, you're doing great!`;
    } else if (animo === "sad") {
      return `${animo} Every cloud has a silver lining"`;
    } else if (typeof animo === "Number") {
      return `${animo} Beep beep boop`;
    } else {
      return `${animo} I'm sorry, I'm still learning about feelings:(`;
    }
  }
  console.log(estadoDeAnimo(""));
  
