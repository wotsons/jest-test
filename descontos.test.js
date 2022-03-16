const freteGratis = require('descontos').freteGratis()

describe("Gerenciamento de filmes", () =>{
  
})

test('freteGratis é verdadeiro para 200', () => {
  expect(freteGratis(200)).toBeTruthy()
})
