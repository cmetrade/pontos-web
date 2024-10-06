/// <reference types="cypress" />
describe('CME', function (){
//Cypress.config('defaultCommandTimeout', 700);

    it('capturar dados cme yahoo', function(){
       
        
        //cy.visit('https://www.cmegroup.com/markets/fx/emerging-market/brazilian-real.quotes.html#venue=globex', {   headers: {     "Accept-Encoding": "gzip, deflate"   } }, { timeout: 80000 })
          cy.visit('https://br.financas.yahoo.com/quote/F*6L.CME/history/')

            // open
            cy.get('.BdT > :nth-child(2) > span').then(function(text1){
            cy.log(text1.text())
            cy.writeFile('arquivos/cme-open.txt', text1.text())
            })
            
            //high
            cy.get('.BdT > :nth-child(3) > span').then(function(text2){
            cy.log(text2.text())
            cy.writeFile('arquivos/cme-high.txt', text2.text())
            })

            //low
            cy.get('.BdT > :nth-child(4) > span').then(function(text3){
            cy.log(text3.text())
            cy.writeFile('arquivos/cme-low.txt', text3.text())
            })

        })
        })

   