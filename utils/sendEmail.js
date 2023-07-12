const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_LOGIN } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_LOGIN,
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async ({ to, subject, html }) => {
  const emailOptions = { to, subject, html, from: META_LOGIN };
  await transporter
    .sendMail(emailOptions)
    .then((info) => console.log("info", info))
    .catch((err) => console.log("err", err));
};

module.exports = sendEmail;
