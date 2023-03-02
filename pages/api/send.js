const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
// 	to: "khaansaad@outlook.com", // Change to your recipient
// 	from: "saad@pixelsbit.com", // Change to your verified sender
// 	subject: "Sending with SendGrid is Fun",
// 	text: "and easy to do anywhere, even with Node.js",
// 	html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };

// sgMail
// 	.send(msg)
// 	.then((response) => {
// 		console.log(response[0].statusCode);
// 		console.log(response[0].headers);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

module.exports = async (req, res) => {
	if (req.method === "POST") {
		const { name, email, message } = req.body;
		const msg = {
			to: "khaansaad@outlook.com",
			from: "saad@pixelsbit.com",
			subject: `${name.toUpperCase()} sent you a message`,
			text: `Email => ${email}`,
			html: `<strong>${message}</strong>`,
		};
		try {
			await sgMail.send(msg);
			res.status(200).json({ success: true });
		} catch (err) {
			res.status(500).json({ success: false });
		}
	}
};
