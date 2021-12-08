function changePassword(getUser) {
	const { email, newPassword, password, isAdmin } = user;

	if (user === null) {
		throw new EmailPasswordMissMatchException();
	}

	const checkPasswordAlreadyInUse = () => {
		var newPasswordDecrypted = decrypt(newPassword);
		var existingPasswordDecrypted = decrypt(password);

		if (oldPasswordDecrypted === newPasswordDecrypted) {
			throw new PasswordAlreadyInUseException();
		}
	};

	const isUserAdmin = () => {
		if (isAdmin) {
			var isError = false;
			try {
				password = newPassword;
				save(user);
				// clear the session when the user changes the password
				// so that he/she has to log in again
				clearSession(user);
			} catch (e) {
				isError = true;
				throw new SomethingWentWrongException();
			} finally {
				if (!isError) {
					var emails = user.getEmails();
					var token = generatePasswordRevertToken(password, newPassword);
					for (i = 0; i < emails.length; i++) {
						// Confirm with admin that he as in fact changed the password,
						// if he has not, give him option to reset the password using token
						sendConfirmationEmail(email[i], token);
					}
				}
			}
		}
	};

	if (user.isEnabled) {
		try {
			user.password = newPassword;
			save(user);
			// clear the session when the user changes the password
			// so that he/she has to log in again
			clearSession(user);
		} catch (e) {
			throw new SomethingWentWrongException();
		}
	} else {
		throw new UnsupporedOperationException();
	}
}
