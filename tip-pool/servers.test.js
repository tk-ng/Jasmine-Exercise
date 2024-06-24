describe("Servers test (with setup and tear-down)", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});

	it("should update the server table on updateServerTable()", function () {
		submitServerInfo();
		updateServerTable();

		const serverTbody = document.querySelector("#serverTable tbody");
		expect(serverTbody.firstElementChild.children.length).toBe(3);
		expect(serverTbody.firstElementChild.children[0].innerText).toBe("Alice");
		expect(serverTbody.firstElementChild.children[1].innerText).toBe("$0.00");
		expect(serverTbody.firstElementChild.children[2].innerText).toBe("X");
	});

	afterEach(function () {
		// teardown logic
		serverId = 0;
		allServers = {};
		serverTbody.innerHTML = "";
	});
});
