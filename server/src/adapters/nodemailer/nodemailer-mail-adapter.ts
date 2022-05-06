import { MailAdapter, SendMainData } from "../mail-adapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "330c945642b4cc",
    pass: "03d3b2ef71e535"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMainData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Andre Heringer <andrew.heringer1337@gmail.com>',
      subject,
      html: body
    })
  }
}
