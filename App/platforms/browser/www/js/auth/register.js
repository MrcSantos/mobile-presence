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
					.set({ name: name, surname: surname })
					.then(() => {
						alert("User correctly registered");
						window.reload(true);
					})
			} else { //* If the user DID NOT get the right permissions
				alert("Wrong admin credentials");
			}
		})
}
