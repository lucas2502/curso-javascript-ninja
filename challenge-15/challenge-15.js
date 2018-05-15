(function(){

  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
   function Person(name, lastName, age){
     this.name = name;
     this.lastName = lastName;
     this.age = age; 
     this.getFullName = function getFullName(){
        return this.name + ' ' + this.lastName;
     };
     this.getAge = function getAge(){
        return this.age;
     };
     this.addAge = function addAge(){
        this.age += arguments[0];
        return this;
     };
  };
  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  var abel = new Person('Abel', 'Sá', 1);
  var donny = new Person('Donny', 'Sá', 8);
  var ravena = new Person('Ravena', 'Gonçalves', 3);

  console.log('New Person 1:', abel );
  console.log('New Person 2:', donny);
  console.log('New Person 3:', ravena);

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log(abel.getFullName());
  console.log(donny.getFullName());
  console.log(ravena.getFullName());

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  console.log(abel.getFullName() + ' tem ' + abel.getAge());
  console.log(donny.getFullName() + ' tem ' + donny.getAge());
  console.log(ravena.getFullName() + ' tem ' + ravena.getAge());

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  console.log(abel.getFullName() + ' agora tem ' + abel.addAge(5).getAge() + ' anos.');
  console.log(donny.getFullName() + ' agora tem ' + donny.addAge(1).getAge() + ' anos.');
  console.log(ravena.getFullName() + ' agora tem ' + ravena.addAge(2).getAge() + ' anos.');

})();