function createUser() {
	var form = document.getElementById("authForm");

	var fac = form.elements.namedItem("inputFacName").value;
	var pass = form.elements.namedItem("inputFacPass").value;
	var name = form.elements.namedItem("inputUserName").value;
	var surname = form.elements.namedItem("inputUserLastname").value;

	db.collection("admins")
		.where("name", "==", fac).where("pass", "==", pass)
		.get()
		.then((data) => {
			if (!data.empty) { //* If the user got the right permissions
				db.collection("users").doc(userUniqueId)
					.set({ name: name, surname: surname, factory: data.docs[0].id })
					.then(() => {
						authenticated();
						startApp();
					})
			} else { //* If the user DID NOT get the right permissions
				alert("Wrong admin credentials");
			}
		})
}

function addBleDev() {
	var form = document.getElementById("bleForm");

	var fac = form.elements.namedItem("inputBleFacName").value;
	var pass = form.elements.namedItem("inputBleFacPass").value;
	var bleId = form.elements.namedItem("inputBleId").value;
	var bleName = form.elements.namedItem("inputRoomName").value;

	db.collection("admins")
		.where("name", "==", fac).where("pass", "==", pass)
		.get()
		.then((data) => {
			if (!data.empty) { //* If the user got the right permissions
				db.collection("devices").doc()
					.set({ name: bleName, id: bleId, factory: data.docs[0].id })
					.then(() => {
						bleForm.reset();
						alert("Ble correctly registered");
						getPermittedDevices();
					})
			} else { //* If the user DID NOT get the right permissions
				alert("Wrong admin credentials");
			}
		})
}
