describe("Communities", () => {

	beforeEach(() => {

		cy.visit("/communities")

	})

	it("contains title 'Street Epistemology Communities'", () => {

		cy.get("h1").contains("Street Epistemology Communities")

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
