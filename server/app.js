const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message, table, order1 }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codetech1807@gmail.com",
        pass: "kuihgfgjnhzrrwff",
      },
    });

    const mail_configs = {
      from: "codetech18@gmail.com",
      to: email,
      subject: subject + "'s Order",
      html: `
      <h1>Order Summary </h1>
      <p>Table number: ${table} </p>
      <p>additional notes/allergies: ${order1} </p>
      <h2>Your order: </h2>
      <p>${message}</pl>
       `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error occured` });
      }

      return resolve({ message: "Email sent successfully" });
    });
  });
}
app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost${port}`);
});
