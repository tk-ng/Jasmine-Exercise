describe("Helper function test", function () {
	beforeEach(function () {
		// initialization logic
		billAmtInput.value = 300;
		tipAmtInput.value = 60;
		submitPaymentInfo();
	});

	it("should sum the total tip amount and bill amount on sumPaymentTotal()", function () {
		expect(sumPaymentTotal("tipAmt")).toBe(60);
		expect(sumPaymentTotal("billAmt")).toBe(300);

		billAmtInput.value = 200;
		tipAmtInput.value = 20;
		submitPaymentInfo();

		expect(sumPaymentTotal("tipAmt")).toBe(80);
		expect(sumPaymentTotal("billAmt")).toBe(500);
	});

	it("should sum the total tip percent on sumPaymentTotal()", function () {
		expect(sumPaymentTotal("tipPercent")).toBe(20);

		billAmtInput.value = 200;
		tipAmtInput.value = 20;
		submitPaymentInfo();

		expect(sumPaymentTotal("tipPercent")).toBe(30);
	});

	it("should return the tip percentage on calculateTipPercent()", function () {
		expect(calculateTipPercent(300, 60)).toBe(20);
		expect(calculateTipPercent(200, 20)).toBe(10);
	});

	it("should append a td element to the given table row", function () {
		let newTr = document.createElement("tr");

		appendTd(newTr, "testName");
		console.log(newTr.children[1]);

		expect(newTr.children.length).toBe(1);
		expect(newTr.children[0].innerText).toBe("testName");

		appendTd(newTr, "secondTestName");
		expect(newTr.children.length).toBe(2);
		expect(newTr.children[1].innerText).toBe("secondTestName");
	});

	it("should generate delete td and append to tr on appendDeleteBtn(tr)", function () {
		let newTr = document.createElement("tr");

		appendDeleteBtn(newTr);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual("X");
	});

	afterEach(function () {
		// teardown logic
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
