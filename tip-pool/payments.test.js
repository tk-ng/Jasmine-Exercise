describe("Payments function test", function () {
	beforeEach(function () {
		billAmtInput.value = "100";
		tipAmtInput.value = "10";
	});

	it("should add 1 to the paymentId and save the bill, tip, and tip percent amount to allPayments", function () {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(paymentId).toBe(1);
		expect(allPayments["payment" + paymentId]).toEqual({
			billAmt: "100",
			tipAmt: "10",
			tipPercent: 10,
		});
	});

	it("should not add a new payment on submitPaymentInfo() with empty bill amount input", function () {
		billAmtInput.value = "";
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(0);
	});

	it("should create an object with current payment amt, tip, and tip percent", function () {
		expect(createCurPayment()).toEqual({
			billAmt: "100",
			tipAmt: "10",
			tipPercent: 10,
		});
	});

	it("should not create an object with createCurPayment if amt is empty", function () {
		billAmtInput.value = "";
		tipAmtInput.value = "10";

		expect(createCurPayment()).toEqual(undefined);
	});

	it("should append the given info as a new tr to the payment table", function () {
		let curPayment = createCurPayment();

		appendPaymentTable(curPayment);

		expect(paymentTbody.firstChild.children[0].innerText).toBe("$100");
		expect(paymentTbody.firstChild.children[1].innerText).toBe("$10");
		expect(paymentTbody.firstChild.children[2].innerText).toBe("10%");
		expect(paymentTbody.firstChild.children[3].innerText).toBe("X");
	});

	it("should update the summary after each updateSummary() trigger by submit payment info", function () {
		submitPaymentInfo();

		expect(summaryTds[0].innerHTML).toBe("$100");
		expect(summaryTds[1].innerHTML).toBe("$10");
		expect(summaryTds[2].innerHTML).toBe("10%");

		billAmtInput.value = "200";
		tipAmtInput.value = "40";

		submitPaymentInfo();

		expect(summaryTds[0].innerHTML).toBe("$300");
		expect(summaryTds[1].innerHTML).toBe("$50");
		expect(summaryTds[2].innerHTML).toBe("15%");
	});

	afterEach(function () {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
		serverTbody.innerHTML = "";
		allPayments = {};
		paymentId = 0;
	});
});
