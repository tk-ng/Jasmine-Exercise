it("should calculate the monthly rate correctly", function () {
	expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 4.5 })).toBe(
		"186.43"
	);
	expect(calculateMonthlyPayment({ amount: 2000, years: 2, rate: 6 })).toBe(
		"88.64"
	);
	expect(calculateMonthlyPayment({ amount: 100, years: 1, rate: 0.5 })).toBe(
		"8.36"
	);
});

it("should return a result with 2 decimal places", function () {
	expect(
		calculateMonthlyPayment({ amount: 9658.4253, years: 5, rate: 4 })
	).toBe("177.87");
	expect(
		calculateMonthlyPayment({ amount: 10000, years: 5.5, rate: 3.255 })
	).toBe("165.69");
});

/// etc
