import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
	name: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'noreply.chargedeclientele@gmail.com',
		pass: 'hlgmawxsvtqmwdoz'
	}
});
