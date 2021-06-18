describe("Resources", () => {

	beforeEach(() => {

		cy.visit("/resources")

	})

	it("contains title 'Street Epistemology Resources'", () => {

		cy.get("h1").contains("Street Epistemology Resources")

	})

	it("contains no broken links", () => {

		cy.get("a").each(($a) => {

			const message = $a.text()
			expect($a, message).to.have.attr("href").not.contain("undefined")

		})

		cy.request("a[href]").should((response) => {

			expect(response.status).to.eq(200)

		})

	})

})
