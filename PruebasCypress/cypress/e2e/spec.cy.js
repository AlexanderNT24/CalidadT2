//Cada it me genera una coockie diferente
describe('Prueba', () => {
  it('Prueba general', () => {
    //Login
    cy.visit(Cypress.env('base_url')+"/Auth/Login?ReturnUrl=%2FBiblioteca")
    cy.get('input[name="Username"]').type('admin')
    cy.get('input[name="Password"]').type('admin')
    cy.get('button[class="btn btn-primary"]').click()  

    //Agregar a biblioteca
    for(let i=2; i<10;i++){
      if(i!=3){
        cy.visit(Cypress.env('base_url')+"/biblioteca/add?libro="+i)
    
    }}
    //Agregar a terminado
    for(let i=2; i<10;i++){
      if(i!=3){
        cy.visit(Cypress.env('base_url')+"/biblioteca/MarcarComoTerminado?libroId="+i)
    }}
    
    //Comentar libros
    for(let i=2; i<10;i++){
      if(i!=3){
        cy.visit(Cypress.env('base_url')+"/Libro/Details?id="+i)
        cy.get('textarea[name="Texto"]').type('Libro Gooood')
        let puntaje=parseInt(getNumero(1,5));
        cy.get('input[name="Puntaje"]').type(puntaje)
        cy.get('button[class="btn btn-primary"]').click()
      }
    }
    
    
  })

})
//Tomar 
function getNumero(min, max) {
  return Math.random() * (max - min) + min;
}
