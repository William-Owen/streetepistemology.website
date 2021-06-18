describe("Homepage", () => {

	beforeEach(() => {

		cy.visit("/")

	})

	it("contains title 'Street Epistemology'", () => {

		cy.get("h1").contains("Street Epistemology")

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

	it("contains CTA button to 'Start learning' that links to '/learn'", () => {

		cy.get("main").contains("Start learning").click()
		cy.location("pathname").should("match", /\/learn$/)
		cy.contains("main h1", "Learn Street Epistemology").should("be.visible")

	})

	it("contains CTA button to 'Find out more' that links to '/faqs'", () => {

		cy.get("main").contains("Find out more").click()
		cy.location("pathname").should("match", /\/faqs$/)
		cy.contains("main h1", "Street Epistemology FAQs").should("be.visible")

	})

	describe("Primary navigation", () => {

		it("contains 'Learn Street Epistemology' link to Communities page", () => {

			cy.get("header > nav").contains("Learn Street Epistemology").click()
			cy.location("pathname").should("match", /\/learn$/)
			cy.contains("main h1", "Learn Street Epistemology").should("be.visible")

		})

		it("contains 'Resources' link to resources page", () => {

			cy.get("header > nav").contains("Resources").click()
			cy.location("pathname").should("match", /\/resources$/)
			cy.contains("main h1", "Street Epistemology Resources").should("be.visible")

		})

		it("Contains 'Communities' link to Communities page", () => {

			cy.get("header > nav").contains("Communities").click()
			cy.location("pathname").should("match", /\/communities$/)
			cy.contains("main h1", "Street Epistemology Communities").should("be.visible")

		})

		it("contains 'FAQ' link to Communities page", () => {

			cy.get("header > nav").contains("FAQs").click()
			cy.location("pathname").should("match", /\/faqs$/)
			cy.contains("main h1", "Street Epistemology FAQs").should("be.visible")

		})

	})

	describe("Primary footer", () => {

		it("contains 'Learn Street Epistemology' link to Learn page", () => {

			cy.get("footer").contains("Learn Street Epistemology").click()
			cy.location("pathname").should("match", /\/learn$/)
			cy.contains("main h1", "Learn Street Epistemology").should("be.visible")

		})

		it("contains 'Street Epistemology Resources' link to Resources page", () => {

			cy.get("footer").contains("Street Epistemology Resources").click()
			cy.location("pathname").should("match", /\/resources$/)
			cy.contains("main h1", "Street Epistemology Resources").should("be.visible")

		})

		it("contains 'Street Epistemology FAQs' link to FAQs page", () => {

			cy.get("footer").contains("Street Epistemology FAQs").click()
			cy.location("pathname").should("match", /\/faqs$/)
			cy.contains("main h1", "Street Epistemology FAQs").should("be.visible")

		})

		it("contains 'Street Epistemology Discord'", () => {

			cy.get("footer a").contains("Street Epistemology Discord").should("be.visible")

		})

		it("contains 'Street Epistemology Facebook'", () => {

			cy.get("footer a").contains("Street Epistemology Facebook").should("be.visible")

		})

		it("contains 'Street Epistemology Reddit'", () => {

			cy.get("footer a").contains("Street Epistemology Reddit").should("be.visible")

		})

		it("contains 'Terms of Service' link", () => {

			cy.get("footer a").contains("Terms of Service").click()
			cy.location("pathname").should("match", /\/terms$/)
			cy.contains("main h1", "Terms of service").should("be.visible")

		})

		it("contains 'Privacy' link", () => {

			cy.get("footer a").contains("Privacy").click()
			cy.location("pathname").should("match", /\/privacy$/)
			cy.contains("main h1", "Privacy").should("be.visible")

		})

		it("contains 'wo.dev' link", () => {

			cy.get(`footer a[href="https://wo.dev"]`).should("be.visible")

		})

	})

})
